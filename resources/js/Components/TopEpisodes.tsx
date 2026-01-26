import React, { useRef, useCallback } from 'react';
import { Play } from 'lucide-react';
import { PodcastEpisode } from '../services/podcastService';

interface TopEpisodesProps {
  episodes: PodcastEpisode[];
  onPlay?: (ep: PodcastEpisode) => void;
}

const splitIntoColumns = (items: PodcastEpisode[], cols: number) => {
  const columns: PodcastEpisode[][] = Array.from({ length: cols }, () => []);
  items.forEach((it, idx) => {
    columns[idx % cols].push(it);
  });
  return columns;
};

const relativeDate = (iso?: string) => {
  if (!iso) return '';
  const then = new Date(iso);
  if (isNaN(then.getTime())) return '';
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  if (diffSeconds < 60) return 'HACE UNOS SEG';
  if (diffSeconds < 3600) return `HACE ${Math.floor(diffSeconds / 60)} MIN`;
  if (diffSeconds < 86400) return `HACE ${Math.floor(diffSeconds / 3600)} HRS`;
  const days = Math.floor(diffSeconds / 86400);
  return days === 1 ? 'HACE 1 DÍA' : `HACE ${days} DÍAS`;
};

const colorForIndex = (i: number) => {
  const hue = (i * 47) % 360; // deterministic hue per index
  return `hsl(${hue} 70% 48%)`;
};

const formatPublishedDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  try {
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch (e) {
    return d.toISOString().split('T')[0];
  }
};
export default function TopEpisodes({ episodes, onPlay }: TopEpisodesProps) {
  const columns = splitIntoColumns(episodes, 3);
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const getAverageColor = (img: HTMLImageElement) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      const w = 20;
      const h = 20;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha < 128) continue;
        const rr = data[i], gg = data[i + 1], bb = data[i + 2];
        // ignore pure white/very bright pixels to avoid washed backgrounds
        if (rr > 240 && gg > 240 && bb > 240) continue;
        r += rr; g += gg; b += bb; count++;
      }
      if (count === 0) return null;
      r = Math.round(r / count); g = Math.round(g / count); b = Math.round(b / count);
      return { r, g, b };
    } catch (e) {
      return null;
    }
  };

  const applyBgFromImage = useCallback((id: string, img: HTMLImageElement) => {
    let col = getAverageColor(img);
    const cont = containerRefs.current[id];
    if (!cont) return;
    // fallback: deterministic color from image path when canvas sampling fails (CORS)
    if (!col) {
      const src = img.currentSrc || img.src || id;
      const hash = Array.from(src).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 0);
      const hue = Math.abs(hash) % 360;
      const r = Math.round(200 + (Math.sin(hue) * 30));
      const g = Math.round(180 + (Math.cos(hue) * 30));
      const b = Math.round(170 + (Math.sin(hue * 0.7) * 30));
      col = { r, g, b };
    }
    const { r, g, b } = col;
    // subtle pastel background using low alpha
    cont.style.background = `linear-gradient(180deg, rgba(${r},${g},${b},0.08), rgba(${r},${g},${b},0.03))`;
    // ensure subtle border tint
    cont.style.border = `1px solid rgba(${r},${g},${b},0.06)`;
    // decide text color for contrast (keep dark text)
    cont.style.color = '#0b1220';
  }, []);

  return (
    <section className="top-episodes container py-4">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <h3 className="h4 fw-bold mb-0">Top episodios</h3>
        <small className="text-muted">Lo más escuchado</small>
      </div>

      <div className="grid-columns">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="column">
            {col.map((ep, idx) => {
              const globalIndex = colIdx + idx * 3; // approximate rank index
              const rank = globalIndex + 1;
              const accent = colorForIndex(rank);
              return (
                <div
                  key={ep.id}
                  className="episode d-flex gap-3 align-items-start"
                  ref={(el) => { containerRefs.current[String(ep.id)] = el; }}
                >
                  <div className="thumb-wrapper position-relative card-thumb" style={{ flex: '0 0 72px' }}>
                    <img
                      src={ep.image}
                      alt={ep.title}
                      className="thumb"
                      onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200?text=Audio')}
                      onLoad={(e) => applyBgFromImage(String(ep.id), e.currentTarget as HTMLImageElement)}
                    />

                    <button
                      type="button"
                      className="play-overlay"
                      aria-label={`Reproducir ${ep.title}`}
                      style={{ ['--accent' as any]: accent }}
                      onClick={(e) => { e.stopPropagation(); onPlay?.(ep); }}
                    >
                      <div className="circle" style={{ backgroundColor: accent }}>
                        <Play size={18} className="text-white" />
                      </div>
                    </button>
                  </div>

                  <div className="rank text-muted">{rank}</div>

                  <div className="meta flex-grow-1">
                    <h4 className="title mb-1">{ep.title}</h4>
                    <p className="desc mb-1 text-muted" title={ep.excerpt}>{ep.excerpt}</p>
                    <div className="meta-row text-muted small d-flex justify-content-between">
                      <span>
                        {formatPublishedDate(ep.date)}{relativeDate(ep.date) ? ` · ${relativeDate(ep.date)}` : ''}
                      </span>
                      <span>{ep.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style>{`
        .top-episodes { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .grid-columns { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; width:100%; box-sizing:border-box; }
        .column { display:flex; flex-direction: column; gap: 0.75rem; min-width:0; }
        .episode { padding: 0.65rem; border-radius: 10px; background: #ffffff; box-shadow: 0 6px 18px rgba(12,18,26,0.04); transition: transform .18s ease, box-shadow .18s ease; display:flex; align-items:flex-start; gap: 0.8rem; width:100%; box-sizing:border-box; overflow:hidden; }
        .episode:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(12,18,26,0.08); }
        .rank { width: 36px; text-align: right; font-weight:700; color: rgba(0,0,0,0.45); margin-top:4px; flex:0 0 36px; font-size:.95rem }
        .thumb-wrapper { position: relative; overflow: hidden; border-radius:8px; min-width:72px; }
        .thumb { width:72px; height:72px; object-fit:cover; border-radius:8px; display:block; transition: transform .28s cubic-bezier(.2,.9,.2,1), filter .28s cubic-bezier(.2,.9,.2,1); max-width:100%; }
        .play-overlay { position: absolute; inset:0; display:flex; align-items:center; justify-content:center; border:0; background:transparent; cursor:pointer; z-index:3; }
        .play-overlay:focus { outline: none; }
        .play-overlay .circle { width:48px; height:48px; border-radius:50%; display:flex; align-items:center; justify-content:center; transform: scale(.85); opacity:0; transition: opacity .26s ease, transform .26s ease, filter .26s ease; box-shadow: 0 8px 24px rgba(2,6,23,0.12); }
        .thumb-wrapper:hover .thumb, .thumb-wrapper:focus-within .thumb { transform: scale(1.06); filter: brightness(.62) saturate(.9) blur(.3px); }
        .thumb-wrapper:hover .circle, .thumb-wrapper:focus-within .circle { opacity:1; transform: scale(1); }
        .thumb-wrapper::after { content: ''; position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.06)); pointer-events:none; transition: background .2s ease; }

        .meta { min-width:0; }
        .meta .title { font-size: .98rem; font-weight:700; margin:0; line-height:1.18; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; color: #0b1220 }
        .meta .desc { font-size: .86rem; margin:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color: #5b6671 }
        .meta-row { opacity: .85; }
        .meta-row { opacity: .8; }

        /* Responsive: tablet 2 columns, mobile 1 column */
        @media (max-width: 991px) { .grid-columns { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 575px) { 
          .grid-columns { grid-template-columns: 1fr; } 
          .thumb { width:64px; height:64px; }
          .episode { padding:0.5rem }
          /* On touch devices remove play button to avoid overlapping touch targets */
          .play-overlay { display: none !important; }
          .thumb-wrapper { min-width:64px; }
          .thumb { filter: brightness(.88); }
          .thumb-wrapper { z-index:3; }
          /* Intensify background tint on mobile */
          .episode { background: linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0.01)); }
          .episode[style] { /* if dynamic bg present, increase opacity */ }
          .episode { border: 1px solid rgba(0,0,0,0.04); }
        }

        /* Visual polish */
        .top-episodes h3 { letter-spacing: -0.02em; }
      `}</style>
    </section>
  );
}
