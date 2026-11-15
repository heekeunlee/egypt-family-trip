import { useEffect, useState } from 'react'
import './Splash.css'

// 낙타 한 마리 (발 기준 원점, 오른쪽을 봄)
function Camel({ x, rider = false, delay = 0 }: { x: number; rider?: boolean; delay?: number }) {
  const legs = [6, 11, 27, 32]
  return (
    <g transform={`translate(${x} 0)`}>
      <g className="camel" style={{ animationDelay: `${delay}s` }}>
        {legs.map((lx, i) => (
          <line
            key={lx}
            className={`leg ${i % 2 ? 'b' : 'a'}`}
            x1={lx} y1={-17} x2={lx} y2={0}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
        <path
          className="camel-body"
          d="M0 -23 Q3 -34 11 -31 Q17 -44 25 -31 Q31 -29 33 -23 L35 -25 Q37 -38 42 -42 L48 -42 Q51 -40 48 -37 L44 -35 Q42 -26 37 -18 Q30 -14 5 -16 Q-2 -17 0 -23 Z"
        />
        <path className="camel-tail" d="M0 -22 Q-4 -18 -3 -12" />
        <circle cx="45.5" cy="-40" r="0.9" fill="#fff6dc" />
        {rider && (
          <g className="rider">
            <path d="M14 -38 L24 -38 L21 -50 L17 -50 Z" fill="#2f6fb5" />
            <circle cx="19" cy="-53" r="3.4" fill="#f1c9a0" />
            <path d="M15 -55 Q19 -61 23 -55 Z" fill="#fff" />
          </g>
        )}
      </g>
    </g>
  )
}

export default function Splash({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setLeaving(true), reduce ? 1000 : 3800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!leaving) return
    const t = setTimeout(onDone, 500)
    return () => clearTimeout(t)
  }, [leaving, onDone])

  const stars = [[30, 22], [78, 48], [120, 18], [168, 40], [210, 14], [350, 30], [380, 62], [330, 10], [250, 36], [56, 80]]

  return (
    <div className={`splash ${leaving ? 'leave' : ''}`} onClick={() => setLeaving(true)} role="presentation">
      <div className="splash-text">
        <p className="sp-eyebrow">FAMILY TRIP · 2026.11</p>
        <h1>𓂀 이집트 가족여행</h1>
        <p className="sp-sub">피라미드를 향해 출발! 🐪💨</p>
      </div>
      <svg className="splash-art" viewBox="0 0 400 280" aria-hidden>
        <defs>
          <linearGradient id="sp-sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff1b8" />
            <stop offset="1" stopColor="#f0a53a" />
          </linearGradient>
          <linearGradient id="sp-lit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6cf74" />
            <stop offset="1" stopColor="#cf8f32" />
          </linearGradient>
          <linearGradient id="sp-shade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a56a28" />
            <stop offset="1" stopColor="#6e4217" />
          </linearGradient>
        </defs>

        {/* 별 */}
        {stars.map(([cx, cy], i) => (
          <circle key={i} className="star" cx={cx} cy={cy} r={i % 3 ? 1.2 : 1.8} style={{ animationDelay: `${(i % 5) * 0.3}s` }} />
        ))}

        {/* 해 */}
        <circle className="sun" cx="300" cy="96" r="36" fill="url(#sp-sun)" />

        {/* 새 */}
        <g className="birds">
          <path d="M0 0 q4 -4 8 0 q4 -4 8 0" />
          <path d="M22 -10 q3 -3 6 0 q3 -3 6 0" />
        </g>

        {/* 피라미드 3형제 */}
        <g className="pyr p3">
          <polygon points="318,150 288,212 318,212" fill="url(#sp-lit)" />
          <polygon points="318,150 318,212 350,212" fill="url(#sp-shade)" />
        </g>
        <g className="pyr p1">
          <polygon points="196,58 108,212 196,212" fill="url(#sp-lit)" />
          <polygon points="196,58 196,212 286,212" fill="url(#sp-shade)" />
          <polyline className="outline" points="108,212 196,58 286,212" />
          <polygon className="cap" points="196,58 188,72 204,72" />
        </g>
        <g className="pyr p2">
          <polygon points="262,102 212,212 262,212" fill="url(#sp-lit)" />
          <polygon points="262,102 262,212 316,212" fill="url(#sp-shade)" />
          <polyline className="outline" points="212,212 262,102 316,212" />
        </g>

        {/* 사막 */}
        <path className="dune back" d="M-600 210 Q -300 196 0 212 Q 100 200 210 210 T 400 206 T 1000 208 V700 H-600 Z" />

        {/* 스핑크스 */}
        <g className="sphinx">
          <path
            className="sphinx-body"
            d="M12 214 V200 Q14 186 30 184 H84 Q88 184 90 180 L92 166 Q94 152 106 150 Q118 152 120 166 L122 184 L118 190 V202 H140 Q146 206 142 214 Z"
          />
          {/* 네메스 두건 줄무늬 */}
          <path className="nemes" d="M94 164 L118 164 M93 172 L119 172 M92 180 L121 180" />
          <path className="face" d="M108 156 Q118 158 118 170 L116 182 H104 Z" />
          <ellipse className="eye" cx="113" cy="166" rx="1.6" ry="1.6" />
          <rect x="110" y="182" width="4" height="8" rx="1" className="beard" />
          <path className="paw-line" d="M118 208 H140" />
        </g>

        {/* 말풍선 */}
        <g className="bubble">
          <rect x="44" y="112" width="118" height="28" rx="14" />
          <path d="M98 140 L106 150 L110 140 Z" />
          <text x="103" y="130" textAnchor="middle">이집트는 처음이지? 😎</text>
        </g>

        {/* 앞 모래 언덕 + 낙타 행렬 */}
        <path className="dune front" d="M-600 244 Q -300 230 0 246 Q 120 232 240 244 T 400 240 T 1000 242 V700 H-600 Z" />
        <g className="caravan">
          <animateTransform attributeName="transform" type="translate" from="-80 0" to="520 0" dur="4s" fill="freeze" />
          <g transform="translate(0 246)">
            <Camel x={0} rider />
            <Camel x={-58} delay={0.15} />
            <Camel x={-112} delay={0.3} />
          </g>
        </g>
      </svg>
      <span className="sp-skip">화면을 누르면 건너뛰기</span>
    </div>
  )
}
