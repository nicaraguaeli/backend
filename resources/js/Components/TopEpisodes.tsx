import React, { useRef, useCallback } from 'react';
import { Play, Headphones } from 'lucide-react';
import { PodcastEpisode } from '../services/podcastService';
import { url } from '@/url';

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

const colorForIndex = (i: number) => {
  const hue = (i * 47) % 360;
  return `hsl(${hue} 70% 48%)`;
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
    cont.style.background = `linear-gradient(180deg, rgba(${r},${g},${b},0.08), rgba(${r},${g},${b},0.03))`;
    cont.style.border = `1px solid rgba(${r},${g},${b},0.06)`;
    cont.style.color = '#0b1220';
  }, []);

  const handleCardClick = (ep: PodcastEpisode) => {
    window.location.href = url(`audioreportaje/${ep.slug}`);
  };

  return (
    <section className="top-episodes-section container py-4">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <h3 className="h4 fw-bold mb-0">Lo más escuchado</h3>
        <small className="text-muted d-flex align-items-center gap-1">
          <Headphones size={14} /> Audioreportajes populares
        </small>
      </div>

      <div className="te-grid-columns">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="te-column">
            {col.map((ep, idx) => {
              const globalIndex = colIdx + idx * 3;
              const rank = globalIndex + 1;
              const accent = colorForIndex(rank);
              return (
                <div
                  key={ep.id}
                  className="te-episode"
                  ref={(el) => { containerRefs.current[String(ep.id)] = el; }}
                  onClick={() => handleCardClick(ep)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Thumbnail with rank overlay — play button is SEPARATE from image */}
                  <div className="te-thumb-area" style={{ flex: '0 0 80px' }}>
                    <div className="te-thumb-wrapper">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="te-thumb"
                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200?text=Audio')}
                        onLoad={(e) => applyBgFromImage(String(ep.id), e.currentTarget as HTMLImageElement)}
                      />
                      {/* Rank badge top-left */}
                      <span className="te-rank-badge" style={{ background: accent }}>{rank}</span>
                    </div>
                    {/* Play button BELOW the image, not overlapping */}
                    <button
                      type="button"
                      className="te-play-btn"
                      aria-label={`Escuchar ${ep.title}`}
                      style={{ background: accent }}
                      onClick={(e) => { e.stopPropagation(); window.location.href = url(`audioreportaje/${ep.slug}`); }}
                    >
                      <Play size={14} className="text-white" fill="white" />
                    </button>
                  </div>

                  <div className="te-meta flex-grow-1">
                    <h4 className="te-title mb-1">{ep.title}</h4>
                    <p className="te-desc mb-1 text-muted" title={ep.excerpt}>{ep.excerpt}</p>
                    <div className="te-meta-row text-muted small d-flex justify-content-between">
                      <span>{ep.date}</span>
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
        .top-episodes-section { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }

        .te-grid-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          width: 100%;
          box-sizing: border-box;
        }

        .te-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 0;
        }

        .te-episode {
          padding: 0.65rem;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(12,18,26,0.04);
          transition: transform .18s ease, box-shadow .18s ease;
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .te-episode:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(12,18,26,0.10);
        }

        /* Thumb area: image + play button stacked */
        .te-thumb-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 0 0 80px;
        }

        .te-thumb-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .te-thumb {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          transition: transform .28s cubic-bezier(.2,.9,.2,1);
        }

        .te-episode:hover .te-thumb {
          transform: scale(1.05);
        }

        /* Small rank badge on top-left corner of the image */
        .te-rank-badge {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
          z-index: 2;
        }

        /* Play button placed BELOW the image */
        .te-play-btn {
          width: 100%;
          height: 28px;
          border-radius: 6px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform .2s ease, filter .2s ease;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .te-play-btn:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .te-play-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.35);
        }

        /* Meta text */
        .te-meta { min-width: 0; }

        .te-title {
          font-size: .95rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #0b1220;
          transition: color .2s ease;
        }

        .te-episode:hover .te-title { color: #667eea; }

        .te-desc {
          font-size: .82rem;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #5b6671;
        }

        .te-meta-row { opacity: .8; }

        /* Responsive */
        @media (max-width: 991px) { .te-grid-columns { grid-template-columns: repeat(2, 1fr); } }

        /* ── MOBILE: una sola fila horizontal, 2 cards visibles + 3ª asomada ── */
        @media (max-width: 575px) {
          .te-grid-columns {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: visible;
            gap: 0.65rem;
            padding-bottom: 10px;
            padding-right: 16px;   /* espacio para que la 3ª se asome */
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .te-grid-columns::-webkit-scrollbar { display: none; }
          .te-grid-columns { -ms-overflow-style: none; scrollbar-width: none; }

          /* "Desenvuelve" las columnas: todos los episodes quedan en la misma fila */
          .te-column {
            display: contents;
          }

          /* Cada card ocupa 46vw → caben 2 completas + ~8vw de la 3ª asomada */
          .te-episode {
            flex: 0 0 46vw;
            min-width: 0;
            scroll-snap-align: start;
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }

          .te-thumb-area {
            flex: none;
            width: 100%;
          }

          .te-thumb-wrapper {
            width: 100%;
            height: 100px;
            border-radius: 8px;
          }

          .te-thumb {
            width: 100%;
            height: 100px;
            border-radius: 8px;
          }

          .te-title {
            font-size: 0.8rem;
            -webkit-line-clamp: 2;
          }

          .te-desc { display: none; }

          .te-meta-row { font-size: 0.72rem; }
        }

        .top-episodes-section h3 { letter-spacing: -0.02em; }
      `}</style>
    </section>
  );
}
