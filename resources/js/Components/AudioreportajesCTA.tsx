import React, { useEffect, useRef, useState } from 'react';
import { Headphones, ArrowRight, Mic, Radio, Play } from 'lucide-react';

interface AudioreportajesCTAProps {
  onNavigate?: () => void;
}

export default function AudioreportajesCTA({ onNavigate }: AudioreportajesCTAProps) {
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  /* Intersection observer — fade-in on scroll */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* Waveform animation */
  useEffect(() => {
    const loop = () => { setTick(t => t + 1); rafRef.current = requestAnimationFrame(loop); };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleClick = () => {
    if (onNavigate) { onNavigate(); return; }
    window.history.pushState(null, '', '#audioreportajes');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  /* SVG waveform bars */
  const TOTAL = 40;
  const t = tick * 0.05;
  const bars = Array.from({ length: TOTAL }, (_, i) => {
    const h = 18 + Math.abs(Math.sin(t + i * 0.25)) * 32
      + Math.abs(Math.sin(t * 0.7 + i * 0.5)) * 16;
    return Math.min(68, Math.max(8, h));
  });

  return (
    <section
      ref={sectionRef}
      className={`arc2-section ${visible ? 'arc2-visible' : ''}`}
    >
      {/* ── BACKGROUND ── */}
      <div className="arc2-bg" />

      {/* Subtle diagonal stripe accent */}
      <div className="arc2-stripe" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="arc2-inner">

          {/* ══ LEFT PANEL ══ */}
          <div className="arc2-left">

            {/* Section eyebrow */}
            <div className="arc2-eyebrow">
              <span className="arc2-eyebrow-icon">
                <Radio size={14} />
              </span>
              <span>PodcastABC: Historias, reportajes y temas de interés</span>
            </div>

            {/* Headline */}
            <h2 className="arc2-headline font-serif">
              Escucha nuestros<br />
              <span className="arc2-headline-accent">Audioreportajes</span>
            </h2>

            {/* Divider */}
            <div className="arc2-divider" />

            {/* Description */}
            <p className="arc2-desc">
              Vive la magia de la radio con nuestros reportajes especiales, historias que inspiran, contenidos de actualidad y nuestro original radiodrama: "Una historia, una canción".
            </p>

            {/* Feature list */}
            <ul className="arc2-features">
              {[
                { icon: <Mic size={15} />, label: 'Producción de estudio profesional' },
                { icon: <Headphones size={15} />, label: 'Siempre disponible y al alcance' },
                { icon: <Play size={15} />, label: 'Nuevos episodios cada semana' },
              ].map(f => (
                <li key={f.label} className="arc2-feature-item">
                  <span className="arc2-feature-icon">{f.icon}</span>
                  <span className="arc2-feature-label">{f.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button
              id="cta-audioreportajes-btn"
              className="arc2-btn"
              onClick={handleClick}
              aria-label="Explorar Audioreportajes"
            >
              <span className="arc2-btn-inner">
                <Headphones size={18} strokeWidth={2.2} />
                <span>Explorar Audioreportajes</span>
                <ArrowRight size={18} strokeWidth={2.2} className="arc2-btn-arrow" />
              </span>
            </button>

          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="arc2-right">

            {/* Decorative "mic" circle */}
            <div className="arc2-mic-wrap">
              <div className="arc2-mic-halo arc2-halo-3" />
              <div className="arc2-mic-halo arc2-halo-2" />
              <div className="arc2-mic-halo arc2-halo-1" />
              <div className="arc2-mic-core">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="9" y="2" width="6" height="12" rx="3" fill="white" />
                  <path d="M5 10a7 7 0 0 0 14 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Live indicator */}
            <div className="arc2-live">
              <span className="arc2-live-dot" />
              <span className="arc2-live-text">NUESTRAS PRODUCCIONES</span>
            </div>

            {/* Waveform */}
            <div className="arc2-wave" aria-hidden="true">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="arc2-wave-bar"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Stats strip */}
            <div className="arc2-stats">
              {[
                { value: '100+', label: 'Episodios' },
                { value: 'HD', label: 'Audio' },
                { value: '24/7', label: 'Acceso' },
              ].map(s => (
                <div key={s.label} className="arc2-stat">
                  <strong className="arc2-stat-value">{s.value}</strong>
                  <span className="arc2-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* ─ Container ─ */
        .arc2-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .75s ease, transform .75s ease;
        }
        .arc2-section.arc2-visible {
          opacity: 1;
          transform: none;
        }

        /* ─ Background: same dark navy as FeaturedSection ─ */
        .arc2-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f172a 0%, #1a2744 55%, #0f172a 100%);
          z-index: 0;
        }

        /* Diagonal accent stripe using abc-red */
        .arc2-stripe {
          position: absolute;
          top: 0; right: 0;
          width: 340px;
          height: 100%;
          background: linear-gradient(135deg, transparent 40%, rgba(217, 4, 41, 0.07) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* ─ Inner grid ─ */
        .arc2-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .arc2-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .arc2-right { order: -1; }
        }

        /* ─ Left panel ─ */
        .arc2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 4px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d4af37;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .arc2-eyebrow-icon {
          display: flex;
          align-items: center;
        }

        .arc2-headline {
          color: #f1f5f9;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.4rem;
          letter-spacing: -.5px;
        }
        .arc2-headline-accent {
          /* abc-gold underlining */
          background: linear-gradient(90deg, #d4af37 0%, #c49b2e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .arc2-divider {
          width: 56px;
          height: 4px;
          background: linear-gradient(90deg, #d90429, #d4af37);
          border-radius: 2px;
          margin-bottom: 1.4rem;
        }

        .arc2-desc {
          color: rgba(226, 232, 240, 0.7);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 440px;
          margin-bottom: 1.8rem;
        }

        /* Feature list */
        .arc2-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.4rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .arc2-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(226, 232, 240, 0.75);
          font-size: .92rem;
        }
        .arc2-feature-icon {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: rgba(217, 4, 41, 0.15);
          border: 1px solid rgba(217, 4, 41, 0.3);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .arc2-feature-label { font-weight: 500; }

        /* CTA Button */
        .arc2-btn {
          background: #d90429;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          padding: 0;
          overflow: hidden;
          position: relative;
          transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 6px 24px rgba(217, 4, 41, 0.35);
        }
        .arc2-btn:hover {
          background: #b8021f;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(217, 4, 41, 0.45);
        }
        .arc2-btn:active { transform: translateY(0); }
        .arc2-btn-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          color: #fff;
          font-size: .98rem;
          font-weight: 700;
          letter-spacing: .3px;
        }
        .arc2-btn-arrow {
          transition: transform .25s ease;
        }
        .arc2-btn:hover .arc2-btn-arrow { transform: translateX(5px); }

        /* ─ Right panel ─ */
        .arc2-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.8rem;
        }

        /* Mic circle */
        .arc2-mic-wrap {
          position: relative;
          width: 148px;
          height: 148px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arc2-mic-halo {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(212, 175, 55, 0.25);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: arc2-halo 3s ease-in-out infinite;
        }
        .arc2-halo-1 { width: 72px;  height: 72px;  animation-delay: 0s;    border-color: rgba(212, 175, 55, 0.5); }
        .arc2-halo-2 { width: 106px; height: 106px; animation-delay: .5s;   border-color: rgba(212, 175, 55, 0.25); }
        .arc2-halo-3 { width: 148px; height: 148px; animation-delay: 1s;    border-color: rgba(212, 175, 55, 0.12); }
        @keyframes arc2-halo {
          0%,100% { transform: translate(-50%, -50%) scale(1);    opacity: .7; }
          50%      { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
        }
        .arc2-mic-core {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #002060 0%, #003090 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 32px rgba(0, 48, 144, 0.55), 0 0 60px rgba(212, 175, 55, 0.12);
          position: relative;
          z-index: 2;
        }

        /* Live badge */
        .arc2-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border: 1px solid rgba(217, 4, 41, 0.35);
          border-radius: 4px;
          background: rgba(217, 4, 41, 0.1);
        }
        .arc2-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d90429;
          box-shadow: 0 0 8px #d90429;
          animation: arc2-blink 1.3s ease-in-out infinite;
        }
        @keyframes arc2-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: .2; }
        }
        .arc2-live-text {
          color: #ef4444;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* Waveform */
        .arc2-wave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 72px;
          width: 100%;
          max-width: 340px;
        }
        .arc2-wave-bar {
          flex: 1;
          border-radius: 3px;
          background: linear-gradient(to top, #d90429 0%, #d4af37 100%);
          transition: height .08s ease;
          opacity: .85;
          align-self: center;
        }

        /* Stats */
        .arc2-stats {
          display: flex;
          gap: 2.5rem;
          padding: 18px 28px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          width: 100%;
          max-width: 340px;
          justify-content: space-around;
        }
        .arc2-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .arc2-stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          color: #d4af37;
          line-height: 1;
          font-family: Georgia, serif;
        }
        .arc2-stat-label {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(226, 232, 240, 0.45);
        }
      `}</style>
    </section>
  );
}
