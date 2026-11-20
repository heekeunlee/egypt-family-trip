import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  CAUTIONS, DAISO, DAYS, FLIGHTS, HONEY_TIPS, MEDS, MONEY, OPTIONS, PACKING, PHRASES, SOURCES, TRIP,
} from './data'
import Splash from './Splash'
import Guide from './Guide'
import { guideFromHash } from './guideIndex'

const TABS = [
  { id: 'home', label: '한눈에', icon: '🏠' },
  { id: 'days', label: '일정', icon: '🗺️' },
  { id: 'pack', label: '준비물', icon: '🧳' },
  { id: 'daiso', label: '다이소', icon: '🛒' },
  { id: 'meds', label: '상비약', icon: '💊' },
  { id: 'money', label: '경비·팁', icon: '💵' },
  { id: 'caution', label: '유의사항', icon: '⚠️' },
  { id: 'tips', label: '꿀팁', icon: '🍯' },
] as const
type TabId = (typeof TABS)[number]['id']

function useStored<T>(key: string, init: T) {
  const [v, setV] = useState<T>(() => {
    try {
      const s = localStorage.getItem(key)
      return s ? (JSON.parse(s) as T) : init
    } catch {
      return init
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(v))
    } catch {
      /* storage unavailable */
    }
  }, [key, v])
  return [v, setV] as const
}

function dday() {
  const diff = Math.ceil((new Date(TRIP.meetAt).getTime() - Date.now()) / 86400000)
  if (diff > 0) return `D-${diff}`
  if (Date.now() < new Date('2026-11-29T23:59:59+09:00').getTime()) return '여행 중 ✈️'
  return '다녀왔어요 🎉'
}

const won = (n: number) => `${Math.round(n).toLocaleString('ko-KR')}원`

export default function App() {
  const [tab, setTab] = useStored<TabId>('eg-tab', 'home')
  const [checked, setChecked] = useStored<Record<string, boolean>>('eg-check', {})
  const toggle = (k: string) => setChecked({ ...checked, [k]: !checked[k] })
  const [splash, setSplash] = useState(true)
  const hideSplash = useCallback(() => setSplash(false), [])
  const [guide, setGuide] = useState(() => guideFromHash(window.location.hash))
  useEffect(() => {
    const onHash = () => setGuide(guideFromHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const openGuide = (target: string) => { window.location.hash = target }
  const closeGuide = useCallback(() => {
    if (guideFromHash(window.location.hash)) window.history.back()
    else setGuide(null)
  }, [])

  useEffect(() => window.scrollTo({ top: 0 }), [tab])

  return (
    <div className="app">
      {splash && <Splash onDone={hideSplash} />}
      {guide && <Guide key={guide} id={guide} onClose={closeGuide} />}
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">2026 가족여행 · 7박 9일</p>
          <h1>𓂀 이집트 완벽 가이드</h1>
          <p className="sub">{TRIP.subtitle}</p>
          <div className="hero-badges">
            <span className="badge gold">{dday()}</span>
            <span className="badge">11/21(토) – 11/29(일)</span>
            <span className="badge">시차 −7시간</span>
          </div>
        </div>
      </header>

      <nav className="tabs" aria-label="섹션">
        {TABS.map((t) => (
          <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>
            <span className="ti">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>

      <main>
        {tab === 'home' && <Home go={setTab} checked={checked} />}
        {tab === 'days' && <Days openGuide={openGuide} />}
        {tab === 'pack' && <Packing checked={checked} toggle={toggle} reset={() => setChecked({})} />}
        {tab === 'daiso' && <Daiso checked={checked} toggle={toggle} />}
        {tab === 'meds' && <Meds checked={checked} toggle={toggle} />}
        {tab === 'money' && <Money />}
        {tab === 'caution' && <Caution />}
        {tab === 'tips' && <Tips />}
      </main>

      <footer>
        <p>일정·비용은 노랑풍선 일정표(2026-11-15 조회) 기준이며 현지 사정으로 바뀔 수 있습니다. 최종 일정은 출발 1일 전 확정 일정표를 확인하세요.</p>
        <details>
          <summary>참고 자료</summary>
          <ul>
            {SOURCES.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
              </li>
            ))}
          </ul>
        </details>
      </footer>
    </div>
  )
}

function Section({ title, lead, children }: { title: string; lead?: string; children: ReactNode }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  )
}

function Home({ go, checked }: { go: (t: TabId) => void; checked: Record<string, boolean> }) {
  const total = PACKING.reduce((n, g) => n + g.items.length, 0)
  const done = PACKING.reduce((n, g) => n + g.items.filter((_, i) => checked[`pack-${g.id}-${i}`]).length, 0)
  return (
    <>
      <Section title="미팅 & 항공" lead="출발 전날 밤 인천공항 집합입니다.">
        <div className="card accent">
          <div className="kv"><b>📍 미팅</b><span>{TRIP.meeting}</span></div>
          <p className="note">{TRIP.meetingNote}</p>
          <div className="kv"><b>✈️ 항공</b><span>{TRIP.airline}</span></div>
          <div className="kv"><b>☎️ 여행사</b><span>{TRIP.agency}</span></div>
        </div>
        <div className="grid2">
          {FLIGHTS.map((f) => (
            <div className="card" key={f.label}>
              <h3>{f.label}</h3>
              {f.legs.map((l) => (
                <div className="leg" key={l.no}>
                  <span className="fno">{l.no}</span>
                  <div>
                    <div><b>{l.dep}</b> {l.from} → <b>{l.arr}</b> {l.to}</div>
                    <small>{l.dur} · 현지시각</small>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title="루트 한 줄 요약">
        <div className="route">
          {['알렉산드리아', '카이로·기자', '✈ 아스완', '아부심벨', '🚢 콤옴보', '에드푸', '룩소르', '🏖 후르가다', '카이로'].map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </Section>

      <Section title="11월 날씨" lead="한국의 늦여름~초가을. 낮엔 덥고 새벽·밤엔 쌀쌀 — 겹쳐 입기가 정답.">
        <div className="weather">
          {[
            ['카이로', 12, 23], ['아스완', 11, 26], ['룩소르', 10, 24], ['후르가다', 15, 26],
          ].map(([c, lo, hi]) => (
            <div className="wcard" key={c as string}>
              <b>{c}</b>
              <span className="hi">{hi}℃</span>
              <span className="lo">{lo}℃</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="꼭 기억할 5가지">
        <ol className="top5">
          <li><b>현금 3종</b> — 유로(가이드비·옵션), 달러(비자·팁, $1 다수), 소액 파운드</li>
          <li><b>물은 생수만</b> — 양치까지. 지사제·수분보충염 필수</li>
          <li><b>필터 샤워기 + 여분 필터</b> — 후기 1위 꿀템</li>
          <li><b>국내선 수하물 23kg</b> — 국제선보다 2kg 적음</li>
          <li><b>호객엔 "라 슈크란"</b> — 공짜는 없다</li>
        </ol>
      </Section>

      <div className="grid2">
        <button className="cta" onClick={() => go('pack')}>
          🧳 준비물 체크 <b>{done}/{total}</b>
          <div className="bar"><i style={{ width: `${(done / total) * 100}%` }} /></div>
        </button>
        <button className="cta" onClick={() => go('daiso')}>🛒 다이소 쇼핑리스트 보기 →</button>
      </div>
    </>
  )
}

function Days({ openGuide }: { openGuide: (target: string) => void }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <Section title="일자별 일정" lead="일정표 기준 예상 일정 · 호텔/순서는 현지 사정으로 변경될 수 있어요.">
      <div className="days">
        {DAYS.map((d) => {
          const isOpen = open === null ? true : open === d.day
          return (
            <article className={`day ${isOpen ? 'open' : ''}`} key={d.day}>
              <button className="day-head" onClick={() => setOpen(open === d.day ? null : d.day)}>
                <span className="dnum">DAY {d.day}</span>
                <span className="ddate">{d.date}</span>
                <span className="droute">{d.route}</span>
              </button>
              {isOpen && (
                <div className="day-body">
                  <ul className="timeline">
                    {d.items.map((it, i) => (
                      <li key={i} className={it.title.startsWith('[선택]') ? 'opt' : it.title.startsWith('쇼핑') ? 'shop' : ''}>
                        {it.time && <span className="time">{it.time}</span>}
                        <span>{it.title}</span>
                        {it.detail && (
                          <ul>{it.detail.map((x) => <li key={x}>{x}</li>)}</ul>
                        )}
                        {it.guide && (
                          <div><button className="guide-btn" onClick={() => openGuide(it.guide!)}>📖 상세 가이드 보기</button></div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="day-meta">
                    <span>🛏 {d.stay}</span>
                    {d.weather && <span>🌡 {d.weather}</span>}
                  </div>
                  <p className="daytip">💡 {d.tip}</p>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}

function Check({ id, checked, toggle, children }: { id: string; checked: Record<string, boolean>; toggle: (k: string) => void; children: ReactNode }) {
  return (
    <label className={`check ${checked[id] ? 'done' : ''}`}>
      <input type="checkbox" checked={!!checked[id]} onChange={() => toggle(id)} />
      <span className="box" aria-hidden />
      <span className="ctext">{children}</span>
    </label>
  )
}

function Packing({ checked, toggle, reset }: { checked: Record<string, boolean>; toggle: (k: string) => void; reset: () => void }) {
  return (
    <Section title="준비물 체크리스트" lead="체크 상태는 이 기기에 저장됩니다. ★ 표시는 꼭 챙길 것.">
      {PACKING.map((g) => {
        const n = g.items.filter((_, i) => checked[`pack-${g.id}-${i}`]).length
        return (
          <div className="card" key={g.id}>
            <h3>{g.icon} {g.title} <small className="count">{n}/{g.items.length}</small></h3>
            {g.items.map((it, i) => (
              <Check key={i} id={`pack-${g.id}-${i}`} checked={checked} toggle={toggle}>
                {it.must && <span className="star">★</span>} {it.t}
                {it.note && <small>{it.note}</small>}
              </Check>
            ))}
          </div>
        )
      })}
      <button className="ghost" onClick={() => { if (window.confirm('모든 체크를 해제할까요?')) reset() }}>체크 전체 초기화</button>
    </Section>
  )
}

function Daiso({ checked, toggle }: { checked: Record<string, boolean>; toggle: (k: string) => void }) {
  return (
    <Section title="다이소 미리 사갈 것" lead="현지에선 구하기 어렵거나 비싼 것들. 대부분 1,000~5,000원 — 가족 수만큼 넉넉히! (가격은 대략치)">
      {DAISO.map((c, ci) => (
        <div className="card" key={c.cat}>
          <h3>{c.cat}</h3>
          {c.items.map((it, i) => (
            <Check key={i} id={`daiso-${ci}-${i}`} checked={checked} toggle={toggle}>
              <b>{it.name}</b> <span className="price">{it.price}</span>
              <small>{it.why}</small>
            </Check>
          ))}
        </div>
      ))}
      <p className="note">💡 보조배터리·필터샤워기 본체는 품질 차이가 크니 후기 좋은 제품으로. 보조배터리는 반드시 기내 휴대.</p>
    </Section>
  )
}

function Meds({ checked, toggle }: { checked: Record<string, boolean>; toggle: (k: string) => void }) {
  return (
    <Section title="가족 상비약" lead="이집트 여행자 질환 1위는 물갈이(여행자 설사). 약은 약사와 상담해 가족 연령에 맞게 준비하세요.">
      <div className="grid2">
        {MEDS.map((m, mi) => (
          <div className="card" key={m.cat}>
            <h3>{m.icon} {m.cat}</h3>
            {m.items.map((it, i) => (
              <Check key={i} id={`med-${mi}-${i}`} checked={checked} toggle={toggle}>
                <b>{it.name}</b>
                <small>{it.ex}{it.note ? ` · ⚠ ${it.note}` : ''}</small>
              </Check>
            ))}
          </div>
        ))}
      </div>
      <div className="card warn">
        <h3>🏥 이럴 땐 바로 인솔자에게</h3>
        <p>38.5℃ 이상 고열 · 혈변 · 하루 6회 이상 설사 · 소변이 거의 안 나올 때(탈수). 여행자보험(KB손보) 연락처를 미리 저장해 두세요.</p>
      </div>
    </Section>
  )
}

function Money() {
  const [people, setPeople] = useStored('eg-people', 4)
  const [picked, setPicked] = useStored<Record<string, boolean>>('eg-opts', {})
  const [tipUsd, setTipUsd] = useStored('eg-tipusd', 30)
  const { rates } = MONEY

  const calc = useMemo(() => {
    const eurFixed = 100 * people
    const eurOpt = OPTIONS.filter((o) => picked[o.title]).reduce((s, o) => s + o.eur, 0) * people
    const usd = (36 + 15) * people + tipUsd
    const krw = (eurFixed + eurOpt) * rates.EUR + usd * rates.USD
    return { eurFixed, eurOpt, usd, krw }
  }, [people, picked, tipUsd, rates])

  return (
    <>
      <Section title="현지 경비 계산기" lead="상품가 외에 현지에서 내는 돈. 인원과 선택관광을 고르면 환전 금액이 계산됩니다.">
        <div className="card calc">
          <label className="row">
            <span>인원</span>
            <span className="stepper">
              <button onClick={() => setPeople(Math.max(1, people - 1))}>−</button>
              <b>{people}명</b>
              <button onClick={() => setPeople(people + 1)}>+</button>
            </span>
          </label>
          <label className="row">
            <span>개인 팁·화장실 예비 (가족 합계)</span>
            <span className="stepper">
              <button onClick={() => setTipUsd(Math.max(0, tipUsd - 10))}>−</button>
              <b>${tipUsd}</b>
              <button onClick={() => setTipUsd(tipUsd + 10)}>+</button>
            </span>
          </label>
          <div className="optpick">
            {OPTIONS.map((o) => (
              <label key={o.title} className={`chip ${picked[o.title] ? 'on' : ''}`}>
                <input type="checkbox" checked={!!picked[o.title]} onChange={() => setPicked({ ...picked, [o.title]: !picked[o.title] })} />
                {o.title} <b>€{o.eur}</b>
              </label>
            ))}
          </div>
          <div className="result">
            <div><span>유로 준비</span><b>€{(calc.eurFixed + calc.eurOpt).toLocaleString()}</b><small>가이드비 €{calc.eurFixed} + 옵션 €{calc.eurOpt}</small></div>
            <div><span>달러 준비</span><b>${calc.usd.toLocaleString()}</b><small>비자 $36·크루즈팁 $15 ×{people} + 예비</small></div>
            <div className="total"><span>원화 환산 약</span><b>{won(calc.krw)}</b><small>USD {rates.USD.toLocaleString()}원 · EUR {rates.EUR.toLocaleString()}원(참고)</small></div>
          </div>
        </div>
      </Section>

      <Section title="필수 현지 지불">
        <div className="grid3">
          {MONEY.fixed.map((f) => (
            <div className="card stat" key={f.label}>
              <small>{f.label}</small>
              <b>{f.cur === 'EUR' ? '€' : '$'}{f.amount}</b>
              <span>{f.per} · {f.note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="환전 전략">
        <ul className="bullets card">{MONEY.cash.map((c) => <li key={c}>{c}</li>)}</ul>
      </Section>

      <Section title="박시시(팁) 가이드" lead="박시시 = 이집트식 팁 문화. 작은 서비스에도 기대하는 경우가 많아요.">
        <div className="table">
          {MONEY.tips.map((t) => (
            <div className="trow" key={t.who}>
              <b>{t.who}</b><span className="amt">{t.how}</span><small>{t.note}</small>
            </div>
          ))}
        </div>
      </Section>

      <Section title="선택관광 한눈에" lead="모두 선택 사항. 미참여 시 지정 장소 자유시간(인솔자 미동행).">
        <div className="grid2">
          {OPTIONS.map((o) => (
            <div className="card opt" key={o.title}>
              <div className="opt-head"><h3>{o.title}</h3><span className="price big">€{o.eur}</span></div>
              <small className="muted">{o.where} · {o.time}</small>
              <p>{o.desc}</p>
              <p className="rec">👉 {o.rec}</p>
            </div>
          ))}
        </div>
        <p className="note">🛍 쇼핑센터 2회 포함: 카이로(기념품·잡화), 룩소르(파피루스) 각 약 1시간 · 환불 불가</p>
      </Section>
    </>
  )
}

function Caution() {
  return (
    <Section title="유의사항" lead="이것만 지키면 이집트는 생각보다 안전하고 즐거운 곳이에요.">
      <div className="grid2">
        {CAUTIONS.map((c) => (
          <div className={`card ${c.level === 'high' ? 'warn' : ''}`} key={c.title}>
            <h3>{c.icon} {c.title}</h3>
            <ul className="bullets">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>🛂 여권 · 비자</h3>
        <ul className="bullets">
          <li>대한민국 국적: 도착비자 (알렉산드리아 공항 스티커 비자, US$ 현금)</li>
          <li>여권 유효기간 출발일 기준 6개월 이상, 훼손 여권 출국 불가</li>
          <li>병역 미필자: 국외여행허가증명서 지참 · 출국 시 신고</li>
          <li>한국 외 국적 가족은 해당 국가 대사관에 비자 확인</li>
        </ul>
      </div>
    </Section>
  )
}

function Tips() {
  return (
    <>
      <Section title="후기에서 찾은 꿀팁" lead="이 상품 실제 이용 후기 116건(평점 4.7)과 블로그·해외 가이드를 분석했어요.">
        <div className="tips">
          {HONEY_TIPS.map((t, i) => (
            <div className="tip" key={i}>
              <span className={`src s${['실제 상품 후기', '블로그·해외 가이드', '가족여행 팁'].indexOf(t.from)}`}>{t.from}</span>
              <p>{t.tip}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="후기 요약: 좋았던 점 vs 힘들었던 점">
        <div className="grid2">
          <div className="card good">
            <h3>👍 좋았다</h3>
            <ul className="bullets">
              <li>GEM·피라미드·아부심벨의 압도적 스케일</li>
              <li>후르가다 올인클루시브 2박 = 피로 회복</li>
              <li>국내선 이동이라 야간열차보다 편함</li>
              <li>인솔자 동행으로 아이 동반도 안심</li>
              <li>사막 사파리·반잠수함 옵션 만족도 높음</li>
            </ul>
          </div>
          <div className="card bad">
            <h3>😮‍💨 힘들었다</h3>
            <ul className="bullets">
              <li>새벽 기상 + 장거리 버스 (3~5시간)</li>
              <li>현지 음식이 입에 안 맞음</li>
              <li>크루즈 객실 냄새·수질</li>
              <li>계속되는 "1달러" 요구와 호객</li>
              <li>신전이 많아 후반엔 지침</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="생존 아랍어" lead="이집트 방언 기준 발음이에요. '슈크란'만 알아도 반은 성공!">
        <div className="phrases">
          {PHRASES.map((p) => (
            <div className="phrase" key={p.ko}>
              <small>{p.ko}</small>
              <b>{p.read}</b>
              <span dir="rtl">{p.ar}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
