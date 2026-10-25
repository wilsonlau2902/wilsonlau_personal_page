import { useState } from 'react';
import {
  Award, BookOpen, Briefcase, CheckCircle2, ChevronLeft, ChevronRight,
  Code, Compass, GraduationCap, Globe, Instagram, Layers, Linkedin, Mail,
  MapPin, Phone, Sparkles,
} from 'lucide-react';

const notebookEntries = [
  ['前往柏林火車上的教授', '德國・柏林列車', '英文留言', '人生哲學', '提醒在人生旅途中永遠保持好奇與想像力，並為自己的人生全權負責、持之以恆地追求目標。'],
  ['在波蘭工作的中國廚師', '波蘭', '中文留言', '生活體悟', '分享人在不同階段會有不同的追求，最重要的是順應本心，過好當下的每一天。'],
  ['旅途中相遇的各國旅人', '歐洲與亞洲各地', '多國語言', '跨文化交流', '每一頁都承載著截然不同的文化背景與人生視角，記錄了旅途中純粹的交流與祝福。'],
].map(([person, location, language, tag, summary]) => ({ person, location, language, tag, summary }));

const experiences = [
  {
    company: '渣打銀行 (香港) Standard Chartered Bank',
    role: '私人銀行暑期分析師 (Global Private Bank Summer Analyst)',
    period: '2026年6月 – 2026年8月', location: '香港', category: 'finance',
    highlights: [
      '重新梳理橫跨 28 個主題、超過 1,050 頁的簡報，透過與客戶經理、主管及新進員工訪談，重組為結構清晰的新人培訓學習旅程。',
      '重構私人銀行銷售與合適性評估 (Suitability and Selling Process) 框架，繪製從交易前資格審查到交易後執行的端到端流程。',
      '建立中央 SharePoint 資料庫與自動化工作流觸發機制，設計具標準化規範與版本控制的新人培訓教材。',
      '重新撰寫外匯 (FX) 與固定收益 (FI) 下單作業文檔，分析產品特性、合適性檢查與特定產品風險揭露。',
      '驗證並更新股票與外匯 AQDQ 計算機，為前台作業提供精準的量化分析支援。',
    ],
  },
  {
    company: '香港特區政府 運輸及物流局', role: '政務主任實習生 (Administrative Officer Intern)',
    period: '2025年6月 – 2025年8月', location: '香港', category: 'policy',
    highlights: [
      '綜合 20 多份立法會簡報，並針對電子牌照、網約車規管等數位轉型計畫起草 30 多份官方政策回應。',
      '與律政司及警務處合作制定 4 項雙語法規，針對第 374 章《道路交通條例》修訂進行分析研究，支援跨境通行證與電動車政策發展。',
    ],
  },
  {
    company: '中國銀行 (香港) 胡志明市分行', role: '風險管理實習生 (Risk Management Intern - Corporate Finance)',
    period: '2024年6月 – 2024年7月', location: '越南・胡志明市', category: 'finance',
    highlights: [
      '透過財務盡職調查、反洗錢 (AML) 審查與關鍵績效指標 (KPI) 建模，完成中國紡織企業百隆東方及其越南子公司的信用風險分析。',
      '提供風險緩解策略以降低潛在違約曝險及下游供應鏈風險，協助促成 5 億美元銀團貸款決策。',
      '根據壓力測試結果，針對高風險企業客戶提出縮減 25% 貸款本金及縮短還款期限的方案，優化資本配置。',
    ],
  },
];

function Card({ children, className = '' }) {
  return <div className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 ${className}`}>{children}</div>;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [notebookPage, setNotebookPage] = useState(0);
  const [isSimplified, setIsSimplified] = useState(false);
  const filteredExperiences = activeTab === 'all' ? experiences : experiences.filter(({ category }) => category === activeTab);
  const entry = notebookEntries[notebookPage];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500 selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />LAU Wilson Wai Ming</div>
          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#philosophy" className="transition hover:text-emerald-400">核心理念</a>
            <a href="#video" className="transition hover:text-emerald-400">介紹影片</a>
            <a href="#experience" className="transition hover:text-emerald-400">工作經歷</a>
            <a href="#education" className="transition hover:text-emerald-400">學歷與榮譽</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/wilsonlau2902/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/wilsondo_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-400 transition hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="mailto:wmlauad@connect.ust.hk" className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-600">聯絡我</a>
          </div>
        </div>
      </nav>

      <header className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"><Sparkles className="h-3.5 w-3.5" />香港科技大學 科技及管理雙學位 (金融學 &amp; 計算機科學)</div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">對人，主動走近。<br />在生活裡，保持探索。<br /><span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">在工作中，化繁為簡。</span></h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">我是劉偉明 (Wilson Lau)。即使面對未知的環境或龐雜的問題，我總能拆解資訊、找出核心關鍵、深入鑽研，並將所學建構為清晰的解決方案。</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="mailto:wmlauad@connect.ust.hk" className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2"><Mail className="h-4 w-4 text-emerald-400" />wmlauad@connect.ust.hk</a>
          <a href="tel:+85269986497" className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2"><Phone className="h-4 w-4 text-emerald-400" />(+852) 69986497</a>
        </div>
      </header>

      <section id="video" className="mx-auto max-w-6xl border-t border-slate-900 px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.35fr]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-400">Introduction · Video</div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">用一段影片認識 Wilson</h2>
            <p className="mb-6 leading-relaxed text-slate-400">
              影片分享我如何與人建立連結、在生活中保持探索，以及把複雜問題轉化為清晰方案。
            </p>
            <a
              href="https://youtu.be/7XLUQhU1hRw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/10"
            >
              在 YouTube 開啟影片
            </a>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-emerald-950/20">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/7XLUQhU1hRw"
              title="Wilson Lau 個人介紹影片"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl border-t border-slate-900 px-6 py-16">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">關於 Wilson 的三個篇章</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col justify-between"><div><BookOpen className="mb-4 h-10 w-10 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400" /><div className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">Chapter 01 · With People</div><h3 className="mb-3 text-xl font-bold">主動走近，傾聽故事</h3><p className="mb-6 text-sm leading-relaxed text-slate-400">我隨身帶著一本 J.P. Morgan 筆記本，但裡面不是我自己寫的日記，而是每次旅行時請路上遇到的人留下的文字與觀點。因為沒有兩頁內容是相同的，我熱愛傾聽每個人獨特的故事。</p></div><div className="rounded-xl border border-slate-800 bg-slate-950 p-4"><div className="mb-2 flex justify-between text-xs"><span className="font-medium text-emerald-400">{entry.tag}</span><span className="text-slate-500">{notebookPage + 1} / {notebookEntries.length}</span></div><div className="mb-1 text-sm font-semibold">{entry.person}</div><div className="mb-2 flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" />{entry.location} ({entry.language})</div><p className="mb-3 text-xs leading-relaxed text-slate-300">{entry.summary}</p><div className="flex justify-end gap-2"><button aria-label="上一頁" onClick={() => setNotebookPage((p) => (p - 1 + notebookEntries.length) % notebookEntries.length)} className="rounded-lg bg-slate-900 p-1.5 text-slate-300 transition hover:bg-slate-800"><ChevronLeft className="h-4 w-4" /></button><button aria-label="下一頁" onClick={() => setNotebookPage((p) => (p + 1) % notebookEntries.length)} className="rounded-lg bg-slate-900 p-1.5 text-slate-300 transition hover:bg-slate-800"><ChevronRight className="h-4 w-4" /></button></div></div></Card>
          <Card><Compass className="mb-4 h-10 w-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2 text-cyan-400" /><div className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">Chapter 02 · In Life</div><h3 className="mb-3 text-xl font-bold">保持好奇，親身探索</h3><p className="mb-6 text-sm leading-relaxed text-slate-400">探索有時始於一個問題：「為什麼同樣的龍井茶味道會如此不同？」為此我親自前往杭州茶園體驗採茶、學習泡茶並研究炒茶工藝。有時則是不設限地擁抱新事物。</p><div className="grid grid-cols-2 gap-2 text-xs">{[['杭州龍井茶園', '採茶與製茶工藝實地考察'], ['傳統文化與極限運動', '舞獅、帆船、滑翔傘、獨木舟'], ['視覺記錄', '攝影、電影攝影、美食評論'], ['耐力挑戰', '長途單車騎行']].map(([title, text]) => <div key={title} className="rounded-xl border border-slate-800 bg-slate-950 p-3"><div className="mb-0.5 font-semibold text-slate-200">{title}</div><div className="text-slate-500">{text}</div></div>)}</div></Card>
          <Card id="simplify"><Layers className="mb-4 h-10 w-10 rounded-xl border border-purple-500/20 bg-purple-500/10 p-2 text-purple-400" /><div className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-400">Chapter 03 · At Work</div><h3 className="mb-3 text-xl font-bold">拆解複雜，化繁為簡</h3><p className="mb-6 text-sm leading-relaxed text-slate-400">在渣打銀行實習時，面對橫跨 28 個主題、超過 1,050 頁的龐雜簡報，我主動與不同角色對談，找出資訊缺口，重組為結構化的新人學習旅程。</p><div className="rounded-xl border border-slate-800 bg-slate-950 p-4"><div className="mb-3 flex items-center justify-between gap-2 text-xs font-semibold text-slate-300"><span>{isSimplified ? '重構後：結構化培訓體系' : '重構前：龐雜的原始簡報'}</span><button onClick={() => setIsSimplified((value) => !value)} className="rounded-md border border-purple-500/30 bg-purple-500/20 px-2.5 py-1 text-purple-300 transition hover:bg-purple-500/30">{isSimplified ? '查看原始狀態' : '點擊化繁為簡'}</button></div><div className="space-y-2 text-xs">{(isSimplified ? ['端到端銷售與合適性評估標準流程', '中央 SharePoint 自動化工作流與版本控制', '清晰易懂的新人結構化學習旅程'] : ['1,050+ 頁分散的 PowerPoint 簡報', '橫跨 28 個獨立主題、缺乏統一標準', '不同部門對培訓計畫的理解各異']).map((text) => <div key={text} className={`rounded border p-2 ${isSimplified ? 'flex items-center gap-2 border-emerald-800/40 bg-emerald-950/30 text-emerald-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>{isSimplified && <CheckCircle2 className="h-4 w-4 shrink-0" />}{text}</div>)}</div></div></Card>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl border-t border-slate-900 px-6 py-16"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center"><h2 className="flex items-center gap-3 text-2xl font-bold md:text-3xl"><Briefcase className="h-7 w-7 text-emerald-400" />實習與工作經歷</h2><div className="flex gap-2">{[['all', '全部經歷'], ['finance', '銀行與金融'], ['policy', '公共政策與法規']].map(([id, label]) => <button key={id} onClick={() => setActiveTab(id)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${activeTab === id ? 'bg-emerald-500 font-semibold text-slate-950' : 'border border-slate-800 bg-slate-900 text-slate-400 hover:text-white'}`}>{label}</button>)}</div></div><div className="space-y-6">{filteredExperiences.map((exp) => <Card key={exp.company} className="p-6 md:p-8"><div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center"><div><h3 className="text-xl font-bold text-white">{exp.role}</h3><div className="text-sm font-medium text-emerald-400">{exp.company}</div></div><div className="text-xs text-slate-400 md:text-right"><div>{exp.period}</div><div>{exp.location}</div></div></div><ul className="space-y-2.5 text-sm text-slate-300">{exp.highlights.map((item) => <li key={item} className="flex items-start gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" /><span className="leading-relaxed">{item}</span></li>)}</ul></Card>)}</div></section>

      <section id="education" className="mx-auto max-w-6xl border-t border-slate-900 px-6 py-16"><div className="grid gap-8 md:grid-cols-2"><InfoColumn icon={<GraduationCap />} title="教育背景" items={[['香港科技大學 (HKUST)', '科技及管理雙學位 (BBA in Finance & BEng in Computer Science)', '2023年9月 – 2028年5月 (預計)'], ['韓國科學技術院 (KAIST)', '交換生計畫', '2026年3月 – 2026年6月'], ['香港李寶椿聯合世界書院 (LPCUWC)', '榮譽：2021年 LPCUWC 入學獎學金', '2021年8月 – 2023年5月']]} /><InfoColumn icon={<Award />} title="獎項與領導經歷" items={[['IBM x JUCC watsonx GenAI Hackathon — 冠軍 (1/48)', '運用 IBM watsonx 開發自動化投資組合管理與資產配置的 AI 財務顧問。', '2025年9月 – 10月'], ['第 7 屆 Chartwell 價值投資挑戰賽 — 季軍 (3/40)', '透過 DCF、相對估值法與市場共識分析發表台積電投資分析報告。', '2024年4月 – 5月'], ['校園領導與商業案例分析', 'HKUST 學生大使計畫副總學生大使；HKUST 商業案例分析隊隊員。', '2023年至今']]} /></div><div className="mt-8 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:grid-cols-2"><div className="flex items-start gap-3"><Code className="h-5 w-5 shrink-0 text-emerald-400" /><div><h4 className="mb-1 text-sm font-semibold">專業技能與工具</h4><p className="text-xs text-slate-400">Python, C++, Microsoft PowerPoint, Excel, Word, Bloomberg Terminal</p></div></div><div className="flex items-start gap-3"><Globe className="h-5 w-5 shrink-0 text-emerald-400" /><div><h4 className="mb-1 text-sm font-semibold">語言能力</h4><p className="text-xs text-slate-400">母語精通粵語、普通話及福建話；具專業英語溝通能力</p></div></div></div></section>
      <footer className="border-t border-slate-900 py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} LAU Wilson Wai Ming. Built with React &amp; Tailwind CSS.</footer>
    </div>
  );
}

function InfoColumn({ icon, title, items }) {
  return <div><h2 className="mb-6 flex items-center gap-3 text-2xl font-bold"><span className="h-6 w-6 text-emerald-400">{icon}</span>{title}</h2><div className="space-y-4">{items.map(([heading, detail, date]) => <Card key={heading} className="p-5"><div className="mb-1 flex items-start justify-between gap-3"><h3 className="text-base font-bold">{heading}</h3><span className="whitespace-nowrap text-xs text-slate-400">{date}</span></div><div className="text-sm text-emerald-400">{detail}</div></Card>)}</div></div>;
}
