import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { withMainLayout } from '@/Layouts/MainLayout';
import { Clock, Radio, Calendar, Music, Mic2, Newspaper, Trophy } from 'lucide-react';
import { SCHEDULE, ScheduleItem, DAY_NAMES, getCurrentProgram } from '@/utils/scheduleUtils';

interface ProgrammingProps {
    title: string;
}

const SCHEDULE_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const;

const TYPE_ICON: Record<string, React.ReactNode> = {
    news:   <Newspaper size={15} />,
    sports: <Trophy size={15} />,
    show:   <Mic2 size={15} />,
    music:  <Music size={15} />,
};

const TYPE_COLOR: Record<string, string> = {
    news:   '#1d4ed8',
    sports: '#15803d',
    show:   '#7c3aed',
    music:  '#dc2626',
};

const TYPE_LABEL: Record<string, string> = {
    news:   'Noticias',
    sports: 'Deportes',
    show:   'Programa',
    music:  'Música',
};

function Programming({ title }: ProgrammingProps) {
    const todayName = DAY_NAMES[new Date().getDay()];
    const [selectedDay, setSelectedDay] = useState<string>(todayName);
    const [nowProgram, setNowProgram] = useState<ScheduleItem | null>(null);

    useEffect(() => {
        const update = () => {
            const todayItems = SCHEDULE[todayName] ?? SCHEDULE['Lunes'];
            setNowProgram(getCurrentProgram(todayItems));
        };
        update();
        const id = setInterval(update, 30_000);
        return () => clearInterval(id);
    }, [todayName]);

    const items = SCHEDULE[selectedDay] ?? SCHEDULE['Lunes'];
    const isToday = selectedDay === todayName;

    // Companion note
    const sameAs: Record<string, string> = {
        Miércoles: 'Lunes',
        Jueves: 'Martes',
    };

    return (
        <>
            <Head title={title} />

            <div className="prog-page">
                {/* Hero */}
                <div className="prog-hero">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-7">
                                <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                                    <Radio size={36} color="rgba(255,255,255,0.8)" />
                                </div>
                                <h1 className="display-4 fw-bold text-white mb-3">Programación</h1>
                                <p className="lead prog-hero-sub">
                                    Música, noticias, deportes y entretenimiento — toda la semana en Radio ABC Stereo 99.7 FM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">



                    {/* Day Selector */}
                    <div className="prog-day-bar mb-4">
                        <div className="d-flex gap-2 flex-wrap justify-content-center p-3">
                            {SCHEDULE_DAYS.map((day) => (
                                <button
                                    key={day}
                                    className={`prog-day-btn ${selectedDay === day ? 'active' : ''} ${day === todayName ? 'today' : ''}`}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    {day}
                                    {day === todayName && <span className="prog-today-dot" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Current program banner (only when viewing today) */}
                    {isToday && nowProgram && (
                        <div className="prog-now-banner mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <span className="badge bg-abc-red prog-live-badge">AL AIRE</span>
                                <div>
                                    <div className="fw-bold text-white">{nowProgram.title}</div>
                                    <div className="prog-now-slogan">{nowProgram.slogan}</div>
                                </div>
                                <div className="ms-auto prog-now-time">
                                    <Clock size={14} className="me-1" />
                                    {nowProgram.timeLabel}
                                </div>
                            </div>
                        </div>
                    )}



                    {/* Schedule Header */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Calendar size={22} className="text-abc-red" />
                        <h2 className="h4 fw-bold mb-0">Parrilla del {selectedDay}</h2>
                    </div>

                    {/* Schedule Table */}
                    <div className="prog-table-wrap">
                        <table className="prog-table w-100">
                            <thead>
                                <tr>
                                    <th style={{ width: '180px' }}>Horario</th>
                                    <th style={{ width: '120px' }}>Tipo</th>
                                    <th>Programa</th>
                                    <th className="prog-slogan-col">Eslogan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, i) => {
                                    const isActive = isToday &&
                                        nowProgram?.title     === item.title &&
                                        nowProgram?.timeLabel === item.timeLabel;
                                    return (
                                        <tr key={i} className={isActive ? 'prog-row-active' : ''}>
                                            <td className="prog-time-cell">
                                                <Clock size={13} className="me-1 opacity-50" />
                                                {item.timeLabel}
                                                {isActive && (
                                                    <span className="badge bg-abc-red ms-2" style={{ fontSize: '0.55rem', verticalAlign: 'middle' }}>
                                                        AHORA
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                <span className="prog-type-pill" style={{ '--tc': TYPE_COLOR[item.type] } as React.CSSProperties}>
                                                    {TYPE_ICON[item.type]}
                                                    <span>{TYPE_LABEL[item.type]}</span>
                                                </span>
                                            </td>
                                            <td className="prog-name-cell fw-bold">{item.title}</td>
                                            <td className="prog-slogan-col text-muted" style={{ fontSize: '0.85rem' }}>{item.slogan}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style>{`
                .prog-page { min-height: 100vh; background: #f3f4f6; }

                /* Hero */
                .prog-hero {
                    background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #1e3a5f 100%);
                    padding: 110px 0 70px;
                }
                .prog-hero-sub { color: rgba(255,255,255,0.78); }

                /* Note */
                .prog-note {
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    border-radius: 10px;
                    padding: 14px 18px;
                    color: #1e40af;
                }

                /* Day bar */
                .prog-day-bar {
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
                }
                .prog-day-btn {
                    position: relative;
                    padding: 10px 22px;
                    border: 2px solid #e5e7eb;
                    background: white;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #6b7280;
                    cursor: pointer;
                    transition: all 0.25s;
                }
                .prog-day-btn:hover { border-color: #dc2626; color: #dc2626; }
                .prog-day-btn.active {
                    background: linear-gradient(135deg, #dc2626, #991b1b);
                    border-color: #dc2626;
                    color: white;
                    box-shadow: 0 4px 12px rgba(220,38,38,0.3);
                }
                .prog-today-dot {
                    position: absolute;
                    top: 4px; right: 6px;
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #22c55e;
                    border: 1px solid white;
                }
                .prog-day-btn.active .prog-today-dot { border-color: rgba(255,255,255,0.6); }

                /* Now banner */
                .prog-now-banner {
                    background: linear-gradient(135deg, #1e3a5f, #0f2847);
                    border-radius: 12px;
                    padding: 18px 24px;
                    color: white;
                }
                .prog-live-badge { font-size: 0.7rem; animation: pulse-anim 2s infinite; }
                @keyframes pulse-anim { 0%,100%{opacity:1} 50%{opacity:.5} }
                .prog-now-slogan { font-size: 0.78rem; color: rgba(255,255,255,0.65); }
                .prog-now-time { font-size: 0.78rem; color: rgba(255,255,255,0.6); display:flex; align-items:center; }

                /* Alias note */
                .prog-alias-note {
                    background: #fefce8;
                    border: 1px solid #fde68a;
                    border-radius: 8px;
                    padding: 10px 16px;
                    font-size: 0.85rem;
                    color: #92400e;
                    display: flex;
                    align-items: center;
                }

                /* Table */
                .prog-table-wrap {
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.07);
                    overflow: hidden;
                }
                .prog-table { border-collapse: collapse; }
                .prog-table thead tr {
                    background: linear-gradient(135deg, #1e3a5f, #0f2847);
                    color: white;
                }
                .prog-table thead th {
                    padding: 14px 18px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .prog-table tbody tr {
                    border-bottom: 1px solid #f3f4f6;
                    transition: background 0.15s;
                }
                .prog-table tbody tr:last-child { border-bottom: none; }
                .prog-table tbody tr:hover { background: #f9fafb; }
                .prog-table tbody td { padding: 14px 18px; vertical-align: middle; }

                .prog-row-active { background: #eff6ff !important; }
                .prog-row-active .prog-name-cell { color: #1d4ed8 !important; }

                .prog-time-cell {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #374151;
                    white-space: nowrap;
                    font-family: 'Courier New', monospace;
                }

                .prog-type-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 20px;
                    color: var(--tc);
                    background: color-mix(in srgb, var(--tc) 12%, white);
                    border: 1px solid color-mix(in srgb, var(--tc) 25%, transparent);
                }

                .prog-slogan-col { font-style: italic; }

                @media (max-width: 768px) {
                    .prog-slogan-col { display: none; }
                    .prog-time-cell { font-size: 0.72rem; }
                    .prog-table thead th, .prog-table tbody td { padding: 10px 12px; }
                }
            `}</style>
        </>
    );
}

Programming.layout = withMainLayout;

export default Programming;
