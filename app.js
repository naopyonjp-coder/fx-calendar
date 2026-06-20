const STORAGE_KEY = 'fx-income-calendar-v1';
const QUOTE_STATE_KEY = 'fx-income-calendar-quote-state-v2';
const PIVOT_VISIBILITY_KEY = 'fx-income-calendar-pivot-visible-v1';
const MONTH_NOTES_KEY = 'fx-income-calendar-month-notes-v1';
const MONTH_CAPITALS_KEY = 'fx-income-calendar-month-capitals-v1';
const CAPITAL_FLOWS_KEY = 'fx-income-calendar-capital-flows-v1';
const BACKUP_META_KEY = 'fx-income-calendar-backup-meta-v1';
const MAX_ENTRY_AMOUNT = 999999;

const TRADING_QUOTES = [
  {
    "text": "みんなが強気すぎる時ほど、まず守りを固める。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "恐怖で安くなった良い機会を、冷静に見極める。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "一番大事なのは、資金を失わない姿勢を崩さないこと。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "分からない勝負は、見送ることも立派な判断。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "価格は支払うもの、価値は受け取るもの。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "急いで稼ごうとすると、待てる人にお金が移る。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "リスクは、自分が何をしているか分からない時に大きくなる。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "良いチャンスは、毎日ではなく準備した人に来る。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "相場の騒ぎより、自分のルールを信じる。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "短期の熱狂に流されず、長く残る価値を見る。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "派手な利益より、退場しない安定を選ぶ。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "難しい球を振らず、得意な球だけを待つ。",
    "author": "ウォーレン・バフェット"
  },
  {
    "text": "大きなお金は、売買の回数ではなく待つ力から生まれる。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "賢い人ほど、避けるべきミスを先に考える。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "欲しい利益より、避けたい損失を明確にする。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "複雑にするほど、判断は鈍くなる。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "凡ミスを減らすだけで、成績は大きく変わる。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "忍耐は、相場で最も地味で強い武器。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "分からないものには、手を出さない勇気を持つ。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "良い判断は、良い習慣から生まれる。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "大失敗を避ければ、勝つ確率は自然に上がる。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "相場では、知性よりも気質が試される。",
    "author": "チャーリー・マンガー"
  },
  {
    "text": "投資家の最大の敵は、相場ではなく自分の感情。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "安全域を持てば、予想外の動きにも耐えやすい。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "価格の上下に振り回されず、基準を持つ。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "短期の市場は人気投票、長期では実力が問われる。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "安く見えるだけで飛びつかず、理由を確認する。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "守りの余白が、長く続ける力になる。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "興奮している時ほど、数字に戻る。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "相場の機嫌ではなく、自分の基準で動く。",
    "author": "ベンジャミン・グレアム"
  },
  {
    "text": "正しさより、正しい時に大きく取り、間違った時に小さく負けること。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "間違いに気づいたら、素早く修正する。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "相場観は仮説。外れたら守ることを優先する。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "市場は常に不完全。だから過信しない。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "負けを認める速さが、次の勝負を残す。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "大事なのは的中率だけではなく、損益の大きさ。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "疑いながら持ち、崩れたら逃げる。",
    "author": "ジョージ・ソロス"
  },
  {
    "text": "何を持っているのか、なぜ持っているのかを説明できるようにする。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "知らないものに賭けるより、理解できるものを選ぶ。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "銘柄の裏には会社がある。チャートの裏には理由がある。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "焦って探すより、身近にある優位性を見つける。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "短期の値動きだけで、長期の価値を決めない。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "買う理由が消えたら、持つ理由も見直す。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "チャンスは、理解できる範囲の中にある。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "流行より、自分で納得できる根拠を持つ。",
    "author": "ピーター・リンチ"
  },
  {
    "text": "相場に強気も弱気もない。あるのは正しい側だけ。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "市場が悪いのではない。間違った時に動けない自分が危ない。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "利益は、動き出す前ではなく動きに乗ってから伸びる。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "損を小さく切れない人は、大きなチャンスまで残れない。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "待つ時間も、トレードの一部。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "予想ではなく、相場の動きに従う。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "自分の意見より、価格の事実を優先する。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "大きく負ける前に、小さく間違える。",
    "author": "ジェシー・リバモア"
  },
  {
    "text": "強気相場は悲観から生まれ、陶酔で終わる。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "最大の悲観には、最大のチャンスが隠れている。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "みんなと同じ安心感は、しばしば高値づかみにつながる。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "群衆が諦めた場所に、冷静な人の好機がある。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "今回だけは違う、という言葉ほど危ない。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "楽観が広がり切った時ほど、出口を意識する。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "安い理由を恐れず、理由を調べる。",
    "author": "ジョン・テンプルトン"
  },
  {
    "text": "痛みは、振り返れば成長の材料になる。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "ミスを隠すより、仕組みに変える。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "現実を直視するほど、次の一手は強くなる。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "感情ではなく、原則で判断する。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "失敗を記録すれば、同じ失敗は減らせる。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "分散は、分からない未来への保険になる。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "うまくいかない時こそ、ルールを点検する。",
    "author": "レイ・ダリオ"
  },
  {
    "text": "勝つことより先に、まず大きく負けないこと。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "トレードで一番大切なのは、攻めより守り。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "負けポジションに希望で足すな。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "毎日、自分のポジションは間違っているかもしれないと考える。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "損失を考える人ほど、長く相場に残れる。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "ヒーローになろうとせず、エゴを捨てる。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "不利なら降りる。入り直す機会はまた来る。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "リスクリワードが歪んだ好機だけを狙う。",
    "author": "ポール・チューダー・ジョーンズ"
  },
  {
    "text": "長く勝つには、資金を守り、好機で大きく打つ。",
    "author": "スタンレー・ドラッケンミラー"
  },
  {
    "text": "確信が高い場面では、迷いを小さくする。",
    "author": "スタンレー・ドラッケンミラー"
  },
  {
    "text": "良い成績は、守りと大きな一撃の組み合わせ。",
    "author": "スタンレー・ドラッケンミラー"
  },
  {
    "text": "市場の流れが変わったら、意見も変える。",
    "author": "スタンレー・ドラッケンミラー"
  },
  {
    "text": "チャンスがない時は、資金を温存する。",
    "author": "スタンレー・ドラッケンミラー"
  },
  {
    "text": "感情で計画を変えず、コースを守る。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "余計な売買を減らすほど、成績は安定しやすい。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "市場を追い回すより、規律を守る。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "コストと感情は、静かに利益を削る。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "長く続ける人ほど、時間を味方にできる。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "何もしない勇気が、時に最善の行動になる。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "投資計画は、気分ではなく方針で動かす。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "シンプルな仕組みほど、続けやすい。",
    "author": "ジョン・ボーグル"
  },
  {
    "text": "大きな利益は、長い準備と観察から生まれる。",
    "author": "フィリップ・フィッシャー"
  },
  {
    "text": "優れた対象を見つけたら、短期の揺れで手放さない。",
    "author": "フィリップ・フィッシャー"
  },
  {
    "text": "数字だけでなく、質を見よ。",
    "author": "フィリップ・フィッシャー"
  },
  {
    "text": "良い判断には、深い調査が必要。",
    "author": "フィリップ・フィッシャー"
  },
  {
    "text": "焦らず観察し、確信が育つのを待つ。",
    "author": "フィリップ・フィッシャー"
  },
  {
    "text": "何もしないことが、最も賢い判断になる時がある。",
    "author": "ジム・ロジャーズ"
  },
  {
    "text": "チャンスが来るまで、資金と集中力を温存する。",
    "author": "ジム・ロジャーズ"
  },
  {
    "text": "自分で調べたものだけが、本当の根拠になる。",
    "author": "ジム・ロジャーズ"
  },
  {
    "text": "大衆と違う場所を見ることで、別の景色が見える。",
    "author": "ジム・ロジャーズ"
  },
  {
    "text": "相場では、想像力と忍耐の両方が必要。",
    "author": "アンドレ・コステラニー"
  },
  {
    "text": "短期の揺れに耐える人だけが、長期の果実を得る。",
    "author": "アンドレ・コステラニー"
  },
  {
    "text": "ニュースの音より、市場心理の温度を見る。",
    "author": "アンドレ・コステラニー"
  }
];
const moneyNumber = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 8 });
const rateNumber = new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
const USDJPY_DAILY_URL = 'https://api.twelvedata.com/time_series?symbol=USD/JPY&interval=1day&outputsize=5&apikey=demo';
const ECONOMIC_EVENTS_URL = 'economic-events.json';
const FALLBACK_US_ECONOMIC_EVENTS = [
  { date: '2026-06-05', time: '21:30', title: '雇用統計' },
  { date: '2026-06-10', time: '21:30', title: 'CPI' },
  { date: '2026-06-11', time: '21:30', title: 'PPI / 新規失業保険申請件数' },
  { date: '2026-06-12', time: '23:00', title: 'ミシガン大学消費者信頼感' },
  { date: '2026-06-16', time: '21:30', title: '小売売上高' },
  { date: '2026-06-18', time: '03:00', title: 'FOMC政策金利' },
  { date: '2026-06-18', time: '03:30', title: 'FOMC記者会見' },
  { date: '2026-06-18', time: '21:30', title: '新規失業保険申請件数' },
  { date: '2026-06-23', time: '22:45', title: 'PMI速報値' },
  { date: '2026-06-25', time: '21:30', title: 'GDP / 新規失業保険申請件数' },
  { date: '2026-06-26', time: '21:30', title: 'PCEデフレーター' },
];
let economicEvents = [...FALLBACK_US_ECONOMIC_EVENTS];
const state = {
  shown: new Date(),
  selected: toKey(new Date()),
  records: loadRecords(),
  monthNotes: loadMonthNotes(),
  monthCapitals: loadMonthCapitals(),
  capitalFlows: loadCapitalFlows(),
  lastBackupAt: loadLastBackupAt(),
};

const els = {
  monthTitle: document.getElementById('monthTitle'),
  calendar: document.getElementById('calendar'),
  monthNet: document.getElementById('monthNet'),
  monthBreakdown: document.getElementById('monthBreakdown'),
  monthDayStats: document.getElementById('monthDayStats'),
  dayComparison: document.getElementById('dayComparison'),
  monthFundingStats: document.getElementById('monthFundingStats'),
  monthCapitalInput: document.getElementById('monthCapitalInput'),
  monthMemoInput: document.getElementById('monthMemoInput'),
  currentMonthBtn: document.getElementById('currentMonthBtn'),
  yearNet: document.getElementById('yearNet'),
  yearBreakdown: document.getElementById('yearBreakdown'),
  yearFundingStats: document.getElementById('yearFundingStats'),
  monthlyTrend: document.getElementById('monthlyTrend'),
  yearlyTrend: document.getElementById('yearlyTrend'),
  selectedDateTitle: document.getElementById('selectedDateTitle'),
  selectedEvents: document.getElementById('selectedEvents'),
  typeProfit: document.getElementById('typeProfit'),
  typeLoss: document.getElementById('typeLoss'),
  amountInput: document.getElementById('amountInput'),
  depositInput: document.getElementById('depositInput'),
  withdrawalInput: document.getElementById('withdrawalInput'),
  dayNet: document.getElementById('dayNet'),
  quoteText: document.getElementById('quoteText'),
  quoteAuthor: document.getElementById('quoteAuthor'),
  pivotCard: document.getElementById('pivotCard'),
  pivotToggle: document.getElementById('pivotToggle'),
  pivotDate: document.getElementById('pivotDate'),
  pivotR1: document.getElementById('pivotR1'),
  pivotR2: document.getElementById('pivotR2'),
  pivotS1: document.getElementById('pivotS1'),
  pivotS2: document.getElementById('pivotS2'),
  lastBackupAt: document.getElementById('lastBackupAt'),
  saveToast: document.getElementById('saveToast'),
};

document.getElementById('prevMonth').addEventListener('click', () => {
  state.shown = new Date(state.shown.getFullYear(), state.shown.getMonth() - 1, 1);
  render();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  state.shown = new Date(state.shown.getFullYear(), state.shown.getMonth() + 1, 1);
  render();
});

document.getElementById('todayBtn').addEventListener('click', () => {
  goToToday();
});

els.currentMonthBtn.addEventListener('click', () => {
  goToToday();
});

function goToToday() {
  const today = new Date();
  state.shown = new Date(today.getFullYear(), today.getMonth(), 1);
  state.selected = toKey(today);
  render();
}

document.getElementById('saveEntry').addEventListener('click', () => {
  const amount = normalizeEntryAmount(els.amountInput.value);
  const deposit = normalizeCapitalAmount(els.depositInput.value);
  const withdrawal = normalizeCapitalAmount(els.withdrawalInput.value);
  if (amount === 0) {
    delete state.records[state.selected];
  } else {
    const win = els.typeProfit.checked ? amount : 0;
    const loss = els.typeLoss.checked ? amount : 0;
    state.records[state.selected] = { win, loss };
  }
  if (deposit > 0 || withdrawal > 0) {
    state.capitalFlows[state.selected] = { deposit, withdrawal };
  } else {
    delete state.capitalFlows[state.selected];
  }
  saveRecords();
  saveCapitalFlows();
  render();
  showToast('保存しました');
});

document.getElementById('clearEntry').addEventListener('click', () => {
  delete state.records[state.selected];
  delete state.capitalFlows[state.selected];
  saveRecords();
  saveCapitalFlows();
  render();
  showToast('クリアしました');
});

els.typeProfit.addEventListener('change', updateDayPreview);
els.typeLoss.addEventListener('change', updateDayPreview);
els.amountInput.addEventListener('input', () => {
  els.amountInput.value = formatInputAmount(els.amountInput.value);
  updateDayPreview();
});
els.depositInput.addEventListener('input', () => {
  els.depositInput.value = formatCapitalInput(els.depositInput.value);
});
els.withdrawalInput.addEventListener('input', () => {
  els.withdrawalInput.value = formatCapitalInput(els.withdrawalInput.value);
});
els.monthCapitalInput.addEventListener('input', () => {
  els.monthCapitalInput.value = formatCapitalInput(els.monthCapitalInput.value);
  const key = toMonthKey(state.shown);
  const amount = normalizeCapitalAmount(els.monthCapitalInput.value);
  if (amount > 0) {
    state.monthCapitals[key] = amount;
  } else {
    delete state.monthCapitals[key];
  }
  saveMonthCapitals();
  renderSummary();
});
els.monthMemoInput.addEventListener('input', () => {
  const key = toMonthKey(state.shown);
  const note = els.monthMemoInput.value.trim();
  if (note) {
    state.monthNotes[key] = note;
  } else {
    delete state.monthNotes[key];
  }
  saveMonthNotes();
});

document.getElementById('quoteShuffle').addEventListener('click', renderQuote);
els.pivotToggle.addEventListener('click', togglePivotVisibility);

document.getElementById('exportData').addEventListener('click', () => {
  const payload = {
    version: 4,
    exportedAt: new Date().toISOString(),
    records: state.records,
    monthNotes: state.monthNotes,
    monthCapitals: state.monthCapitals,
    capitalFlows: state.capitalFlows,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `fx-income-calendar-backup-${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
  state.lastBackupAt = payload.exportedAt;
  saveLastBackupAt();
  renderBackupStatus();
  showToast('バックアップしました');
});

document.getElementById('importData').addEventListener('change', async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const restored = normalizeBackupData(parsed);
    if (!restored) throw new Error('invalid format');
    state.records = restored.records;
    state.monthNotes = restored.monthNotes;
    state.monthCapitals = restored.monthCapitals;
    state.capitalFlows = restored.capitalFlows;
    saveRecords();
    saveMonthNotes();
    saveMonthCapitals();
    saveCapitalFlows();
    render();
    alert('復元しました。');
  } catch (error) {
    alert('復元できませんでした。バックアップファイルを確認してください。');
  } finally {
    event.target.value = '';
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

const quoteShuffleState = loadQuoteShuffleState();
let quoteQueue = quoteShuffleState.queue;
let lastQuoteIndex = quoteShuffleState.last;
let isPivotVisible = localStorage.getItem(PIVOT_VISIBILITY_KEY) !== 'hidden';

render();
renderQuote();
applyPivotVisibility();
if (isPivotVisible) renderUsdJpyPivot();
loadEconomicEvents();

function renderQuote() {
  const index = nextQuoteIndex();
  const quote = TRADING_QUOTES[index];
  els.quoteText.textContent = `「${quote.text}」`;
  els.quoteAuthor.textContent = `by ${quote.author}（意訳）`;
}

async function renderUsdJpyPivot() {
  if (!isPivotVisible) return;
  try {
    const response = await fetch(withCacheBuster(USDJPY_DAILY_URL), { cache: 'no-store' });
    if (!response.ok) throw new Error('pivot request failed');
    const data = await response.json();
    const latestCompletedDate = getLatestCompletedPivotDateKey();
    const candle = data.values?.find(item => {
      return Number.isFinite(Number(item.high))
        && Number.isFinite(Number(item.low))
        && Number.isFinite(Number(item.close))
        && item.datetime <= latestCompletedDate;
    });
    if (!candle) throw new Error('pivot data missing');

    const high = Number(candle.high);
    const low = Number(candle.low);
    const close = Number(candle.close);
    const pivot = (high + low + close) / 3;
    const r1 = 2 * pivot - low;
    const r2 = pivot + (high - low);
    const s1 = 2 * pivot - high;
    const s2 = pivot - (high - low);
    els.pivotDate.textContent = `${formatPivotDate(candle.datetime)} NY引け`;
    els.pivotR1.textContent = rateNumber.format(r1);
    els.pivotR2.textContent = rateNumber.format(r2);
    els.pivotS1.textContent = rateNumber.format(s1);
    els.pivotS2.textContent = rateNumber.format(s2);
  } catch (error) {
    els.pivotDate.textContent = '取得できませんでした';
    els.pivotR1.textContent = '---';
    els.pivotR2.textContent = '---';
    els.pivotS1.textContent = '---';
    els.pivotS2.textContent = '---';
  }
}

function withCacheBuster(url) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}_=${Date.now()}`;
}

function togglePivotVisibility() {
  isPivotVisible = !isPivotVisible;
  localStorage.setItem(PIVOT_VISIBILITY_KEY, isPivotVisible ? 'visible' : 'hidden');
  applyPivotVisibility();
  if (isPivotVisible && els.pivotR1.textContent === '---') renderUsdJpyPivot();
}

function applyPivotVisibility() {
  els.pivotCard.classList.toggle('collapsed', !isPivotVisible);
  els.pivotToggle.textContent = isPivotVisible ? '非表示' : 'ピボット表示';
  els.pivotToggle.setAttribute('aria-pressed', String(!isPivotVisible));
}

async function loadEconomicEvents() {
  try {
    const response = await fetch(ECONOMIC_EVENTS_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('economic events request failed');
    const data = await response.json();
    if (!Array.isArray(data.events)) throw new Error('economic events missing');
    economicEvents = data.events.filter(isValidEconomicEvent);
    render();
  } catch (error) {
    economicEvents = [...FALLBACK_US_ECONOMIC_EVENTS];
  }
}

function formatPivotDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return value;
  return `${month}/${day}`;
}

function getLatestCompletedPivotDateKey() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const nyDate = new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)));
  const latest = Number(values.hour) >= 17 ? nyDate : addUtcDays(nyDate, -1);
  while (latest.getUTCDay() === 0 || latest.getUTCDay() === 6) {
    latest.setUTCDate(latest.getUTCDate() - 1);
  }
  return toUtcDateKey(latest);
}

function addUtcDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function toUtcDateKey(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function nextQuoteIndex() {
  quoteQueue = quoteQueue.filter((index) => Number.isInteger(index) && index >= 0 && index < TRADING_QUOTES.length);
  if (quoteQueue.length === 0) {
    quoteQueue = shuffleIndices(TRADING_QUOTES.length);
    if (quoteQueue.length > 1 && quoteQueue[0] === lastQuoteIndex) {
      [quoteQueue[0], quoteQueue[1]] = [quoteQueue[1], quoteQueue[0]];
    }
  }
  const index = quoteQueue.shift();
  lastQuoteIndex = index;
  saveQuoteShuffleState();
  return index;
}

function shuffleIndices(count) {
  const indices = Array.from({ length: count }, (_, index) => index);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

function loadQuoteShuffleState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(QUOTE_STATE_KEY) || '{}');
    return {
      queue: Array.isArray(parsed.queue) ? parsed.queue : [],
      last: Number.isInteger(parsed.last) ? parsed.last : null,
    };
  } catch (error) {
    return { queue: [], last: null };
  }
}

function saveQuoteShuffleState() {
  localStorage.setItem(QUOTE_STATE_KEY, JSON.stringify({ queue: quoteQueue, last: lastQuoteIndex }));
}

function render() {
  renderCalendar();
  renderEntryPanel();
  renderSummary();
  renderMonthCapital();
  renderMonthNote();
  renderBackupStatus();
}

function renderCalendar() {
  const year = state.shown.getFullYear();
  const month = state.shown.getMonth();
  els.monthTitle.textContent = `${year}年 ${month + 1}月`;
  els.calendar.innerHTML = '';

  const firstDay = new Date(year, month, 1);
  const start = new Date(year, month, 1 - firstDay.getDay());
  const todayKey = toKey(new Date());

  for (let i = 0; i < 42; i++) {
    const day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const key = toKey(day);
    const record = state.records[key] || { win: 0, loss: 0 };
    const net = getRecordNet(record);
    const events = getEventsForDate(key);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'day-cell';
    if (day.getMonth() !== month) button.classList.add('outside');
    if (key === todayKey) button.classList.add('today');
    if (key === state.selected) button.classList.add('selected');
    if (net > 0) button.classList.add('profit');
    if (net < 0) button.classList.add('loss');
    button.setAttribute('aria-label', `${day.getMonth() + 1}月${day.getDate()}日`);
    button.addEventListener('click', () => {
      state.selected = key;
      if (day.getMonth() !== month) state.shown = new Date(day.getFullYear(), day.getMonth(), 1);
      render();
    });

    const num = document.createElement('span');
    num.className = 'day-number';
    num.textContent = day.getDate();
    const amount = document.createElement('span');
    amount.className = 'day-amount';
    if (net > 0) amount.classList.add('profit-text');
    if (net < 0) amount.classList.add('loss-text');
    amount.textContent = net === 0 ? '' : shortYen(net);
    const eventList = document.createElement('span');
    eventList.className = 'day-events';
    if (events.length > 0) {
      button.classList.add('has-events');
      const eventSummary = document.createElement('span');
      eventSummary.className = 'day-event-summary';
      eventSummary.textContent = `指標${events.length}`;
      eventList.appendChild(eventSummary);
    }
    events.slice(0, 2).forEach(event => {
      const eventItem = document.createElement('span');
      eventItem.className = 'day-event';
      eventItem.textContent = `${event.time} ${event.title}`;
      eventList.appendChild(eventItem);
    });
    if (events.length > 2) {
      const more = document.createElement('span');
      more.className = 'day-event more';
      more.textContent = `+${events.length - 2}`;
      eventList.appendChild(more);
    }
    button.append(num, amount, eventList);
    els.calendar.appendChild(button);
  }
}

function renderEntryPanel() {
  const date = parseKey(state.selected);
  const record = state.records[state.selected] || { win: 0, loss: 0 };
  const capitalFlow = state.capitalFlows[state.selected] || { deposit: 0, withdrawal: 0 };
  const net = getRecordNet(record);
  const day = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
  els.selectedDateTitle.textContent = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${day}）`;
  els.typeProfit.checked = net >= 0;
  els.typeLoss.checked = net < 0;
  els.amountInput.value = net === 0 ? '' : formatInputAmount(Math.abs(net));
  els.depositInput.value = normalizeCapitalAmount(capitalFlow.deposit) > 0 ? formatCapitalInput(capitalFlow.deposit) : '';
  els.withdrawalInput.value = normalizeCapitalAmount(capitalFlow.withdrawal) > 0 ? formatCapitalInput(capitalFlow.withdrawal) : '';
  renderSelectedEvents();
  updateDayPreview();
}

function renderSelectedEvents() {
  const events = getEventsForDate(state.selected);
  els.selectedEvents.innerHTML = '';
  els.selectedEvents.hidden = events.length === 0;
  if (events.length === 0) return;

  const heading = document.createElement('p');
  heading.textContent = '米国重要指標';
  els.selectedEvents.appendChild(heading);
  events.forEach(event => {
    const item = document.createElement('div');
    item.className = 'selected-event';
    const time = document.createElement('span');
    time.textContent = event.time;
    const title = document.createElement('strong');
    title.textContent = event.title;
    item.append(time, title);
    els.selectedEvents.appendChild(item);
  });
}

function getEventsForDate(key) {
  return economicEvents.filter(event => event.date === key);
}

function isValidEconomicEvent(event) {
  return typeof event?.date === 'string'
    && /^\d{4}-\d{2}-\d{2}$/.test(event.date)
    && typeof event.time === 'string'
    && /^\d{2}:\d{2}$/.test(event.time)
    && typeof event.title === 'string'
    && event.title.trim() !== '';
}

function renderSummary() {
  const year = state.shown.getFullYear();
  const month = state.shown.getMonth() + 1;
  const monthSummary = summarize(({ y, m }) => y === year && m === month);
  const yearSummary = summarize(({ y }) => y === year);
  const monthFunding = getFundingStats({ year, month });
  const yearFunding = getFundingStats({ year });
  const dayStats = getMonthDayStats(year, month);
  const dayGrowth = getSelectedDayGrowth();

  setMoney(els.monthNet, monthSummary.net);
  els.monthBreakdown.textContent = `プラス ${formatMoney(monthSummary.win)} / マイナス ${formatMoney(monthSummary.loss)}`;
  els.monthDayStats.textContent = `勝ち ${dayStats.win}日 / 負け ${dayStats.loss}日 / 未入力 ${dayStats.empty}日`;
  els.dayComparison.textContent = `選択日まで ${formatPercentChange(dayGrowth.growthRate)} / 前日比 ${formatPointChange(dayGrowth.pointChange)}`;
  els.dayComparison.classList.toggle('positive', dayGrowth.growthRate > 0);
  els.dayComparison.classList.toggle('negative', dayGrowth.growthRate < 0);
  renderCapitalStats(els.monthFundingStats, monthFunding);
  setMoney(els.yearNet, yearSummary.net);
  els.yearBreakdown.textContent = `プラス ${formatMoney(yearSummary.win)} / マイナス ${formatMoney(yearSummary.loss)}`;
  renderCapitalStats(els.yearFundingStats, yearFunding);
  renderTrends(year);
}

function renderMonthCapital() {
  const key = toMonthKey(state.shown);
  const value = state.monthCapitals[key] || 0;
  const formatted = value > 0 ? formatCapitalInput(value) : '';
  if (els.monthCapitalInput.value !== formatted) {
    els.monthCapitalInput.value = formatted;
  }
}

function renderMonthNote() {
  const key = toMonthKey(state.shown);
  if (els.monthMemoInput.value !== (state.monthNotes[key] || '')) {
    els.monthMemoInput.value = state.monthNotes[key] || '';
  }
}

function renderBackupStatus() {
  els.lastBackupAt.textContent = state.lastBackupAt
    ? `最終バックアップ: ${formatDateTime(state.lastBackupAt)}`
    : '最終バックアップ: まだありません';
}

function summarize(filter) {
  return Object.entries(state.records).reduce((sum, [key, record]) => {
    const [y, m] = key.split('-').map(Number);
    if (!filter({ y, m })) return sum;
    sum.win += normalizeAmount(record.win);
    sum.loss += normalizeAmount(record.loss);
    sum.net = sum.win - sum.loss;
    return sum;
  }, { win: 0, loss: 0, net: 0 });
}

function getMonthDayStats(year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();
  let win = 0;
  let loss = 0;
  for (let day = 1; day <= daysInMonth; day++) {
    const net = getRecordNet(state.records[toKey(new Date(year, month - 1, day))] || { win: 0, loss: 0 });
    if (net > 0) win++;
    if (net < 0) loss++;
  }
  return { win, loss, empty: daysInMonth - win - loss };
}

function getFundingStats({ year, month = null }) {
  const summary = summarize(({ y, m }) => y === year && (month === null || m === month));
  let startingCapital = 0;
  let deposits = 0;
  let withdrawals = 0;

  Object.entries(state.monthCapitals).forEach(([key, amount]) => {
    const [capitalYear, capitalMonth] = key.split('-').map(Number);
    if (capitalYear !== year || (month !== null && capitalMonth !== month)) return;
    startingCapital += normalizeCapitalAmount(amount);
  });

  Object.entries(state.capitalFlows).forEach(([key, flow]) => {
    const [flowYear, flowMonth] = key.split('-').map(Number);
    if (flowYear !== year || (month !== null && flowMonth !== month)) return;
    const totals = getCapitalFlowTotals(flow);
    deposits += totals.deposit;
    withdrawals += totals.withdrawal;
  });

  const investment = startingCapital + deposits;
  const recovered = withdrawals;
  const effectiveCapital = investment - recovered;
  return {
    investment,
    recovered,
    effectiveCapital,
    growthRate: effectiveCapital > 0 ? (summary.net / effectiveCapital) * 100 : null,
  };
}

function getSelectedDayGrowth() {
  const selectedDate = parseKey(state.selected);
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();
  const monthKey = toMonthKey(selectedDate);
  const capital = normalizeCapitalAmount(state.monthCapitals[monthKey] || 0);
  let selectedMonthNet = 0;
  let previousMonthNet = 0;
  let deposits = 0;
  let withdrawals = 0;
  let previousDeposits = 0;
  let previousWithdrawals = 0;

  for (let day = 1; day <= selectedDay; day++) {
    const key = toKey(new Date(year, month, day));
    const net = getRecordNet(state.records[key] || { win: 0, loss: 0 });
    const flow = getCapitalFlowTotals(state.capitalFlows[key] || { deposit: 0, withdrawal: 0 });
    selectedMonthNet += net;
    deposits += flow.deposit;
    withdrawals += flow.withdrawal;
    if (day < selectedDay) {
      previousMonthNet += net;
      previousDeposits += flow.deposit;
      previousWithdrawals += flow.withdrawal;
    }
  }

  const investedCapital = capital + deposits - withdrawals;
  const previousInvestedCapital = capital + previousDeposits - previousWithdrawals;
  const growthRate = investedCapital > 0 ? (selectedMonthNet / investedCapital) * 100 : null;
  const previousGrowthRate = previousInvestedCapital > 0 ? (previousMonthNet / previousInvestedCapital) * 100 : null;

  return {
    selectedMonthNet,
    previousMonthNet,
    investedCapital,
    deposits,
    withdrawals,
    growthRate,
    pointChange: growthRate === null || previousGrowthRate === null ? null : growthRate - previousGrowthRate,
  };
}

function updateDayPreview() {
  const amount = normalizeEntryAmount(els.amountInput.value);
  const net = els.typeLoss.checked ? -amount : amount;
  setMoney(els.dayNet, net);
}

function renderTrends(year) {
  renderBarChart(els.monthlyTrend, getMonthlyTrend(year), 'まだ月別データがありません');
  renderBarChart(els.yearlyTrend, getYearlyTrend(), 'まだ年別データがありません');
}

function renderCapitalStats(container, stats) {
  const items = [
    { label: '投資', value: formatMoney(stats.investment), tone: '' },
    { label: '回収', value: formatMoney(stats.recovered), tone: '' },
    { label: '実質', value: formatFundingBase(stats.effectiveCapital), tone: '' },
    { label: '増加率', value: formatPercentChange(stats.growthRate), tone: getToneClass(stats.growthRate) },
  ];

  container.innerHTML = '';
  items.forEach(item => {
    const box = document.createElement('span');
    box.className = `capital-stat ${item.tone}`.trim();
    const label = document.createElement('small');
    label.textContent = item.label;
    const value = document.createElement('strong');
    value.textContent = item.value;
    box.append(label, value);
    container.appendChild(box);
  });
}

function getMonthlyTrend(year) {
  return Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const summary = summarize(({ y, m }) => y === year && m === month);
    const funding = getFundingStats({ year, month });
    return {
      label: `${month}月`,
      value: summary.net,
      detail: `増加率 ${formatPercentChange(funding.growthRate)} / 投資 ${formatMoney(funding.investment)} / 回収 ${formatMoney(funding.recovered)}`,
    };
  });
}

function getYearlyTrend() {
  const years = new Set(Object.keys(state.records).map(key => Number(key.slice(0, 4))).filter(Number.isFinite));
  Object.keys(state.monthCapitals).forEach(key => years.add(Number(key.slice(0, 4))));
  Object.keys(state.capitalFlows).forEach(key => years.add(Number(key.slice(0, 4))));
  years.add(state.shown.getFullYear());
  return Array.from(years).sort((a, b) => a - b).map(year => {
    const summary = summarize(({ y }) => y === year);
    const funding = getFundingStats({ year });
    return {
      label: `${year}年`,
      value: summary.net,
      detail: `増加率 ${formatPercentChange(funding.growthRate)} / 投資 ${formatMoney(funding.investment)} / 回収 ${formatMoney(funding.recovered)}`,
    };
  });
}

function renderBarChart(container, items, emptyText) {
  container.innerHTML = '';
  const max = Math.max(...items.map(item => Math.abs(item.value)), 0);
  if (max === 0) {
    const empty = document.createElement('p');
    empty.className = 'chart-empty';
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  items.forEach(item => {
    const tone = item.value < 0 ? 'loss' : item.value > 0 ? 'profit' : 'zero';
    const row = document.createElement('div');
    row.className = 'bar-row';
    const label = document.createElement('span');
    label.className = 'bar-label';
    label.textContent = item.label;
    const track = document.createElement('div');
    track.className = 'bar-track';
    const fill = document.createElement('span');
    fill.className = `bar-fill ${tone}`;
    fill.style.width = `${Math.max(Math.abs(item.value) / max * 100, 3)}%`;
    track.appendChild(fill);
    const amount = document.createElement('span');
    amount.className = `bar-value ${tone === 'loss' ? 'negative' : tone === 'profit' ? 'positive' : ''}`;
    amount.textContent = formatMoney(item.value);
    amount.title = item.detail;
    row.append(label, track, amount);
    container.appendChild(row);
  });
}

function getRecordNet(record) {
  return normalizeAmount(record.win) - normalizeAmount(record.loss);
}

function getCapitalFlowTotals(flow) {
  return {
    deposit: normalizeCapitalAmount(flow.deposit),
    withdrawal: normalizeCapitalAmount(flow.withdrawal),
  };
}

function setMoney(element, value) {
  element.textContent = formatMoney(value);
  element.classList.toggle('positive', value > 0);
  element.classList.toggle('negative', value < 0);
}

function getToneClass(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number === 0) return '';
  return number > 0 ? 'positive' : 'negative';
}

function formatMoney(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return '¥0';
  const sign = number < 0 ? '-' : '';
  return `${sign}¥${moneyNumber.format(Math.abs(number))}`;
}

function formatFundingBase(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return '--';
  return formatMoney(number);
}

function formatPercentChange(value) {
  if (value === null || value === undefined) return '--%';
  const number = Number(value);
  if (!Number.isFinite(number)) return '--%';
  const sign = number > 0 ? '+' : '';
  return `${sign}${number.toFixed(1)}%`;
}

function formatPointChange(value) {
  if (value === null || value === undefined) return '--pt';
  const number = Number(value);
  if (!Number.isFinite(number)) return '--pt';
  const sign = number > 0 ? '+' : '';
  return `${sign}${number.toFixed(1)}pt`;
}

function normalizeAmount(value) {
  const number = Number(String(value).replace(/,/g, ''));
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function normalizeCapitalAmount(value) {
  const number = normalizeAmount(value);
  return Math.trunc(number);
}

function normalizeEntryAmount(value) {
  const number = normalizeAmount(value);
  if (number === 0) return 0;
  return Math.min(Math.trunc(number), MAX_ENTRY_AMOUNT);
}

function formatInputAmount(value) {
  const digits = String(value).replace(/\D/g, '');
  if (!digits) return '';
  return moneyNumber.format(Math.min(Number(digits), MAX_ENTRY_AMOUNT));
}

function formatCapitalInput(value) {
  const digits = String(value).replace(/\D/g, '');
  if (!digits) return '';
  return moneyNumber.format(Number(digits));
}

function toKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function toMonthKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function parseKey(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function shortYen(value) {
  const abs = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (abs <= MAX_ENTRY_AMOUNT) return moneyNumber.format(abs).replace(/,/g, '');
  if (abs >= 100000000) return `${sign}${formatCompactUnit(abs / 100000000)}億`;
  if (abs >= 10000) return `${sign}${formatCompactUnit(abs / 10000)}万`;
  return `${sign}${moneyNumber.format(abs)}`;
}

function formatCompactUnit(value) {
  if (value >= 9.5) return String(Math.round(value));
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return isValidRecords(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

function loadMonthNotes() {
  try {
    const raw = localStorage.getItem(MONTH_NOTES_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return isValidMonthNotes(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveMonthNotes() {
  localStorage.setItem(MONTH_NOTES_KEY, JSON.stringify(state.monthNotes));
}

function loadMonthCapitals() {
  try {
    const raw = localStorage.getItem(MONTH_CAPITALS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return isValidMonthCapitals(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveMonthCapitals() {
  localStorage.setItem(MONTH_CAPITALS_KEY, JSON.stringify(state.monthCapitals));
}

function loadCapitalFlows() {
  try {
    const raw = localStorage.getItem(CAPITAL_FLOWS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return isValidCapitalFlows(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveCapitalFlows() {
  localStorage.setItem(CAPITAL_FLOWS_KEY, JSON.stringify(state.capitalFlows));
}

function loadLastBackupAt() {
  try {
    const raw = localStorage.getItem(BACKUP_META_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return typeof parsed.lastBackupAt === 'string' ? parsed.lastBackupAt : '';
  } catch {
    return '';
  }
}

function saveLastBackupAt() {
  localStorage.setItem(BACKUP_META_KEY, JSON.stringify({ lastBackupAt: state.lastBackupAt }));
}

function normalizeBackupData(value) {
  if (isValidRecords(value)) return { records: value, monthNotes: {}, monthCapitals: {}, capitalFlows: {} };
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const records = value.records;
  const monthNotes = value.monthNotes || {};
  const monthCapitals = value.monthCapitals || {};
  const capitalFlows = value.capitalFlows || {};
  if (
    !isValidRecords(records)
    || !isValidMonthNotes(monthNotes)
    || !isValidMonthCapitals(monthCapitals)
    || !isValidCapitalFlows(capitalFlows)
  ) return null;
  return { records, monthNotes, monthCapitals, capitalFlows };
}

function isValidRecords(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.entries(value).every(([key, record]) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(key)
      && record && typeof record === 'object'
      && Number.isFinite(Number(record.win))
      && Number.isFinite(Number(record.loss));
  });
}

function isValidMonthNotes(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.entries(value).every(([key, note]) => {
    return /^\d{4}-\d{2}$/.test(key) && typeof note === 'string' && note.length <= 240;
  });
}

function isValidMonthCapitals(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.entries(value).every(([key, amount]) => {
    return /^\d{4}-\d{2}$/.test(key)
      && Number.isFinite(Number(amount))
      && Number(amount) > 0;
  });
}

function isValidCapitalFlows(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.entries(value).every(([key, flow]) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(key)
      && flow && typeof flow === 'object' && !Array.isArray(flow)
      && Number.isFinite(Number(flow.deposit))
      && Number.isFinite(Number(flow.withdrawal))
      && Number(flow.deposit) >= 0
      && Number(flow.withdrawal) >= 0;
  });
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '不明';
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function showToast(message) {
  els.saveToast.textContent = message;
  els.saveToast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.saveToast.hidden = true;
  }, 1800);
}
