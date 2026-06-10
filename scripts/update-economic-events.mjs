import fs from 'node:fs/promises';

const OUTPUT_FILE = new URL('../economic-events.json', import.meta.url);
const SOURCES = [
  'https://www.bls.gov/schedule/news_release/bls.ics',
  'https://apps.bea.gov/API/signup/release_dates.json',
  'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm',
];

const BLS_TITLES = new Map([
  ['Employment Situation', '雇用統計'],
  ['Consumer Price Index', 'CPI'],
  ['Producer Price Index', 'PPI'],
  ['Job Openings and Labor Turnover Survey', 'JOLTS求人件数'],
  ['U.S. Import and Export Price Indexes', '輸入・輸出物価'],
]);

const BEA_TITLES = new Map([
  ['Gross Domestic Product', 'GDP'],
  ['Personal Income and Outlays', 'PCE'],
  ['U.S.\nInternational Trade in Goods and Services', '貿易収支'],
  ['U.S. International Trade in Goods and Services', '貿易収支'],
]);

const MONTH_NAMES = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const now = new Date();
const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 2, 1));

const events = [];

await addBlsEvents(events);
await addBeaEvents(events);
await addFomcEvents(events);

const merged = mergeEvents(events)
  .filter(event => isInRange(event.date))
  .sort((a, b) => `${a.date} ${a.time} ${a.title}`.localeCompare(`${b.date} ${b.time} ${b.title}`));

const nextData = {
  updatedAt: new Date().toISOString(),
  sources: SOURCES,
  events: merged,
};

if (await hasSameEvents(nextData)) {
  console.log('Economic events are already up to date.');
} else {
  await fs.writeFile(OUTPUT_FILE, `${JSON.stringify(nextData, null, 2)}\n`);
}

async function addBlsEvents(target) {
  const ics = await fetchText(SOURCES[0]);
  const unfolded = ics.replace(/\r?\n[ \t]/g, '');
  const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];
  blocks.forEach(block => {
    const summary = readIcsValue(block, 'SUMMARY');
    const title = BLS_TITLES.get(summary);
    if (!title) return;

    const dtstart = readIcsValue(block, 'DTSTART');
    const event = parseIcsDate(dtstart);
    if (!event) return;
    target.push({ ...event, title });
  });
}

async function addBeaEvents(target) {
  const data = JSON.parse(await fetchText(SOURCES[1]));
  BEA_TITLES.forEach((title, sourceTitle) => {
    const dates = data[sourceTitle]?.release_dates;
    if (!Array.isArray(dates)) return;
    dates.forEach(value => {
      const event = toJstEvent(new Date(value));
      if (event) target.push({ ...event, title });
    });
  });
}

async function addFomcEvents(target) {
  const html = await fetchText(SOURCES[2]);
  const year = now.getUTCFullYear();
  const section = html.match(new RegExp(`${year} FOMC Meetings([\\s\\S]*?)${year - 1} FOMC Meetings`))?.[1] || '';
  const pattern = /fomc-meeting__month[\s\S]*?<strong>([^<]+)<\/strong>[\s\S]*?fomc-meeting__date[^>]*>([^<]+)</g;
  let match;
  while ((match = pattern.exec(section))) {
    const month = MONTH_NAMES[match[1].split('/').at(-1)];
    const day = Number(match[2].match(/-(\d{1,2})/)?.[1]);
    if (!month || !day) continue;
    const event = toJstEvent(fromTimeZone(year, month, day, 14, 0, 'America/New_York'));
    if (event) target.push({ ...event, title: 'FOMC政策金利' });
  }
}

function mergeEvents(items) {
  const byDateTime = new Map();
  items.forEach(item => {
    if (!item.date || !item.time || !item.title) return;
    const key = `${item.date} ${item.time}`;
    const existing = byDateTime.get(key);
    if (!existing) {
      byDateTime.set(key, { ...item });
      return;
    }
    if (!existing.title.includes(item.title)) existing.title += ` / ${item.title}`;
  });
  return [...byDateTime.values()];
}

function readIcsValue(block, key) {
  return block.match(new RegExp(`^${key}(?:;[^:]*)?:(.*)$`, 'm'))?.[1]?.trim() || '';
}

function parseIcsDate(value) {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/);
  if (!match) return null;
  const [, year, month, day, hour, minute, second, utc] = match;
  if (utc) return toJstEvent(new Date(Date.UTC(year, month - 1, day, hour, minute, second)));
  return toJstEvent(fromTimeZone(Number(year), Number(month), Number(day), Number(hour), Number(minute), 'America/New_York'));
}

function fromTimeZone(year, month, day, hour, minute, timeZone) {
  const utc = Date.UTC(year, month - 1, day, hour, minute);
  const offset = getTimeZoneOffset(new Date(utc), timeZone);
  return new Date(utc - offset);
}

function getTimeZoneOffset(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const asUtc = Date.UTC(values.year, values.month - 1, values.day, values.hour, values.minute, values.second);
  return asUtc - date.getTime();
}

function toJstEvent(date) {
  if (Number.isNaN(date.getTime())) return null;
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}`,
  };
}

function isInRange(dateKey) {
  const date = new Date(`${dateKey}T00:00:00Z`);
  return date >= start && date < end;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'fx-calendar-event-updater' } });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

async function hasSameEvents(nextData) {
  try {
    const current = JSON.parse(await fs.readFile(OUTPUT_FILE, 'utf8'));
    return JSON.stringify({ sources: current.sources, events: current.events })
      === JSON.stringify({ sources: nextData.sources, events: nextData.events });
  } catch (error) {
    return false;
  }
}
