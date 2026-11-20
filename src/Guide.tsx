import { useEffect, useState } from 'react'
import type { Photo, Spot } from './guides'
import { GUIDES, type DayGuide } from './guideIndex'
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

function SpotPage({ s, onZoom, idx, total, pool }: { s: Spot; onZoom: (p: Photo) => void; idx: number; total: number; pool: Photo[] }) {
  const find = (key?: string) => (key ? pool.find((p) => p.src.includes(key) || p.caption.includes(key)) : undefined)
  return (
    <article className="g-spot">
      <Figure p={s.hero} onZoom={onZoom} hero />
      <header className="g-spot-head">
        <span className="g-step">관광지 {idx + 1} / {total}</span>
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
        {s.look.map((l) => {
          const p = find(l.pic)
          return (
            <li key={l.title} className={p ? 'has-pic' : ''}>
              {p && (
                <button className="g-thumb" onClick={() => onZoom(p)} aria-label={`${l.title} 사진 크게 보기`}>
                  <img src={p.src} alt={p.caption} loading="lazy" decoding="async" />
                </button>
              )}
              <div>
                <b>{l.title}</b>
                <span>{l.desc}</span>
                {l.note && <small className="g-note">※ {l.note}</small>}
              </div>
            </li>
          )
        })}
      </ol>

      <h3 className="g-h">🖼 사진으로 미리 보기 <small className="g-count">{s.photos.length}장 · 탭하면 크게</small></h3>
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

function Intro({ g, onZoom, go }: { g: DayGuide; onZoom: (p: Photo) => void; go: (i: number) => void }) {
  return (
    <article className="g-spot">
      <Figure p={g.intro.hero} onZoom={onZoom} hero />
      <header className="g-spot-head">
        <span className="g-step">{g.step}</span>
        <h2>{g.intro.title}</h2>
        <p className="g-tagline">{g.intro.lead}</p>
      </header>

      <div className="g-points">
        {g.intro.points.map((p) => (
          <div className="g-card" key={p.title}><b>{p.icon} {p.title}</b><p>{p.text}</p></div>
        ))}
      </div>

      <h3 className="g-h">📍 오늘 갈 곳</h3>
      <div className="g-spotlist">
        {g.spots.map((s, i) => (
          <button key={s.id} className="g-spotbtn" onClick={() => go(i + 1)}>
            <img src={s.hero.src} alt="" loading="lazy" />
            <span><small>{i + 1}</small><b>{s.name}</b><em>{s.tagline}</em></span>
          </button>
        ))}
      </div>

      {g.extra && (
        <>
          <h3 className="g-h">{g.extra.title}</h3>
          <p className="g-lead">{g.extra.lead}</p>
          <div className="g-two">
            {g.extra.items.map((it) => (
              <section className="g-card" key={it.name}>
                <h4>{it.name} <small className="g-count">{it.meta}</small></h4>
                <ul>{it.points.map((t) => <li key={t}>{t}</li>)}</ul>
              </section>
            ))}
          </div>
          <div className="g-gallery" style={{ marginTop: 12 }}>
            {g.extra.photos.map((p) => <Figure key={p.src} p={p} onZoom={onZoom} />)}
          </div>
        </>
      )}

      <h3 className="g-h">⏳ {g.timelineTitle}</h3>
      <ol className="g-timeline">
        {g.intro.timeline.map((t) => (
          <li key={t.y}><b>{t.y}</b><span>{t.t}</span></li>
        ))}
      </ol>

      <h3 className="g-h">✅ 오늘의 체크포인트</h3>
      <div className="g-points">
        {g.dayTips.map((t) => (
          <div className="g-card" key={t.title}><b>{t.icon} {t.title}</b><p>{t.text}</p></div>
        ))}
      </div>
    </article>
  )
}

export default function Guide({ id, onClose }: { id: string; onClose: () => void }) {
  const g = GUIDES[id] ?? GUIDES.alexandria
  const [tab, setTab] = useState(() => Math.min(g.spots.length, Math.max(0, Number(window.location.hash.split('/')[1]) || 0)))
  const [zoom, setZoom] = useState<Photo | null>(null)
  const tabs = ['개요', ...g.spots.map((s) => s.short ?? s.name)]

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
    <div className="g-overlay" role="dialog" aria-modal="true" aria-label={`${g.label} 상세 가이드`}>
      <div className="g-top">
        <button className="g-close" onClick={onClose} aria-label="닫기">←</button>
        <b>{g.label} 상세 가이드</b>
      </div>
      <nav className="g-tabs">
        {tabs.map((t, i) => (
          <button key={t} className={tab === i ? 'on' : ''} onClick={() => go(i)}>{t}</button>
        ))}
      </nav>
      <div className="g-scroll">
        {tab === 0 ? <Intro g={g} onZoom={setZoom} go={go} /> : <SpotPage s={g.spots[tab - 1]} idx={tab - 1} total={g.spots.length} onZoom={setZoom} pool={[g.intro.hero, ...g.spots.flatMap((x) => [x.hero, ...x.photos]), ...(g.extra?.photos ?? [])]} />}
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
