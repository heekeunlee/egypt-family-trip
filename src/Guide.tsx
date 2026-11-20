import { useEffect, useState } from 'react'
import { ALEX_DAY_TIPS, ALEX_INTRO, SPOTS, type Photo, type Spot } from './guides'
import './Guide.css'

function Figure({ p, onZoom, hero = false }: { p: Photo; onZoom: (p: Photo) => void; hero?: boolean }) {
  return (
    <figure className={`g-fig ${hero ? 'g-hero' : ''}`}>
      <button className="g-imgbtn" onClick={() => onZoom(p)} aria-label="사진 크게 보기">
        <img src={p.src} alt={p.caption} loading="lazy" decoding="async" />
      </button>
      <figcaption>
        {p.caption}
        <a href={p.page} target="_blank" rel="noreferrer" className="g-credit">📷 {p.credit}</a>
      </figcaption>
    </figure>
  )
}

function Quiz({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="g-quiz">
      <b>🧩 가족 퀴즈</b>
      <p>{q}</p>
      <button onClick={() => setOpen(!open)}>{open ? '정답 숨기기' : '정답 보기'}</button>
      {open && <p className="g-answer">{a}</p>}
    </div>
  )
}

function SpotPage({ s, onZoom, idx }: { s: Spot; onZoom: (p: Photo) => void; idx: number }) {
  return (
    <article className="g-spot">
      <Figure p={s.hero} onZoom={onZoom} hero />
      <header className="g-spot-head">
        <span className="g-step">관광지 {idx + 1} / 3</span>
        <h2>{s.name}</h2>
        <p className="g-names">{s.en} · <span dir="rtl">{s.ar}</span></p>
        <p className="g-tagline">{s.tagline}</p>
      </header>

      <div className="g-facts">
        {s.facts.map((f) => (
          <div key={f.k}><small>{f.k}</small><b>{f.v}</b></div>
        ))}
      </div>

      <h3 className="g-h">📜 역사와 이야기</h3>
      <div className="g-stories">
        {s.story.map((st) => (
          <section className="g-card" key={st.title}>
            <h4>{st.title}</h4>
            {st.body.map((b, i) => <p key={i}>{b}</p>)}
          </section>
        ))}
      </div>

      <h3 className="g-h">👀 현장에서 꼭 볼 것</h3>
      <ol className="g-look">
        {s.look.map((l) => (
          <li key={l.title}><b>{l.title}</b><span>{l.desc}</span></li>
        ))}
      </ol>

      <h3 className="g-h">🖼 사진으로 미리 보기</h3>
      <div className="g-gallery">
        {s.photos.map((p) => <Figure key={p.src} p={p} onZoom={onZoom} />)}
      </div>

      <div className="g-two">
        <section className="g-card tip">
          <h4>🍯 꿀팁</h4>
          <ul>{s.tips.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
        <section className="g-card kids">
          <h4>👨‍👩‍👧 아이와 함께</h4>
          <ul>{s.kids.map((t) => <li key={t}>{t}</li>)}</ul>
          {s.quiz && <Quiz {...s.quiz} />}
        </section>
      </div>
    </article>
  )
}

function Intro({ onZoom, go }: { onZoom: (p: Photo) => void; go: (i: number) => void }) {
  return (
    <article className="g-spot">
      <Figure p={ALEX_INTRO.hero} onZoom={onZoom} hero />
      <header className="g-spot-head">
        <span className="g-step">DAY 1 · 11/21(토)</span>
        <h2>{ALEX_INTRO.title}</h2>
        <p className="g-tagline">{ALEX_INTRO.lead}</p>
      </header>

      <div className="g-points">
        {ALEX_INTRO.points.map((p) => (
          <div className="g-card" key={p.title}><b>{p.icon} {p.title}</b><p>{p.text}</p></div>
        ))}
      </div>

      <h3 className="g-h">📍 오늘 갈 곳</h3>
      <div className="g-spotlist">
        {SPOTS.map((s, i) => (
          <button key={s.id} className="g-spotbtn" onClick={() => go(i + 1)}>
            <img src={s.hero.src} alt="" loading="lazy" />
            <span><small>{i + 1}</small><b>{s.name}</b><em>{s.tagline}</em></span>
          </button>
        ))}
      </div>

      <h3 className="g-h">⏳ 알렉산드리아 2,300년 연표</h3>
      <ol className="g-timeline">
        {ALEX_INTRO.timeline.map((t) => (
          <li key={t.y}><b>{t.y}</b><span>{t.t}</span></li>
        ))}
      </ol>

      <h3 className="g-h">✅ 첫날 체크포인트</h3>
      <div className="g-points">
        {ALEX_DAY_TIPS.map((t) => (
          <div className="g-card" key={t.title}><b>{t.icon} {t.title}</b><p>{t.text}</p></div>
        ))}
      </div>
    </article>
  )
}

export default function Guide({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState(() => Math.min(3, Math.max(0, Number(window.location.hash.split('/')[1]) || 0)))
  const [zoom, setZoom] = useState<Photo | null>(null)
  const tabs = ['개요', ...SPOTS.map((s) => s.name.replace('콤 엘 쇼카파 ', ''))]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') (zoom ? setZoom(null) : onClose())
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, zoom])

  const go = (i: number) => {
    setTab(i)
    document.querySelector('.g-scroll')?.scrollTo({ top: 0 })
  }

  return (
    <div className="g-overlay" role="dialog" aria-modal="true" aria-label="알렉산드리아 상세 가이드">
      <div className="g-top">
        <button className="g-close" onClick={onClose} aria-label="닫기">←</button>
        <b>알렉산드리아 상세 가이드</b>
      </div>
      <nav className="g-tabs">
        {tabs.map((t, i) => (
          <button key={t} className={tab === i ? 'on' : ''} onClick={() => go(i)}>{t}</button>
        ))}
      </nav>
      <div className="g-scroll">
        {tab === 0 ? <Intro onZoom={setZoom} go={go} /> : <SpotPage s={SPOTS[tab - 1]} idx={tab - 1} onZoom={setZoom} />}
        <div className="g-pager">
          {tab > 0 && <button onClick={() => go(tab - 1)}>← {tabs[tab - 1]}</button>}
          <span />
          {tab < tabs.length - 1 && <button className="next" onClick={() => go(tab + 1)}>{tabs[tab + 1]} →</button>}
        </div>
        <p className="g-src">사진: Wikimedia Commons (각 사진의 저작자·라이선스 표기, 사진 클릭 시 확대). 역사 정보: Wikipedia 및 노랑풍선 일정표.</p>
      </div>

      {zoom && (
        <div className="g-zoom" onClick={() => setZoom(null)} role="presentation">
          <img src={zoom.src} alt={zoom.caption} />
          <p>{zoom.caption}<br /><small>{zoom.credit} · 탭하여 닫기</small></p>
        </div>
      )}
    </div>
  )
}
