import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Radio, Mic2, Music, Clock, Newspaper, Trophy } from 'lucide-react';

import { ScheduleItem, SCHEDULE, getTodayKey, getCurrentProgram, toMinutes } from '../utils/scheduleUtils';

const TYPE_ICON: Record<string, React.ReactNode> = {
    news:   <Newspaper size={13} />,
    sports: <Trophy size={13} />,
    show:   <Mic2 size={13} />,
    music:  <Music size={13} />,
};

export default function RadioSchedule() {
    const todayKey = getTodayKey();
    const todayItems = SCHEDULE[todayKey] ?? SCHEDULE['Lunes'];
    const [currentProgram, setCurrentProgram] = useState<ScheduleItem | null>(() => getCurrentProgram(todayItems));

    useEffect(() => {
        const tick = () => setCurrentProgram(getCurrentProgram(todayItems));
        tick();
        const id = setInterval(tick, 30_000);
        return () => clearInterval(id);
    }, []);

    const displayTitle  = currentProgram?.title  ?? 'La radio que nunca duerme';
    const displaySlogan = currentProgram?.slogan ?? 'Música continua';

    // Show next 5 upcoming programs (or all if fewer)
    const now = new Date();
    const nowMins = toMinutes(now.getHours(), now.getMinutes());
    const upcoming = todayItems.filter(p => {
        const end = p.endH === 24 ? 1440 : toMinutes(p.endH, p.endM);
        return end > nowMins;
    }).slice(0, 5);

    return (
        <div className="card border-0 shadow-sm h-100 overflow-hidden bg-white">
            <div className="card-header bg-abc-blue text-white p-3 border-0 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <Radio size={20} className="text-abc-red" />
                    <h3 className="h5 mb-0 fw-bold font-serif">Programación</h3>
                </div>
                <span className="badge bg-abc-red rs-pulse">EN VIVO</span>
            </div>

            {/* Now Playing */}
            <div className="p-3 bg-light border-bottom">
                <p className="text-uppercase text-muted small fw-bold mb-1">Sonando ahora · {todayKey}</p>
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-abc-blue">
                        {TYPE_ICON[currentProgram?.type ?? 'music']}
                    </div>
                    <div>
                        <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.95rem' }}>{displayTitle}</h5>
                        <small className="text-secondary" style={{ fontSize: '0.75rem' }}>{displaySlogan}</small>
                    </div>
                </div>
                <div className="progress mt-3" style={{ height: '3px' }}>
                    <div className="progress-bar bg-abc-red w-100 progress-bar-striped progress-bar-animated" role="progressbar" />
                </div>
            </div>

            {/* Upcoming */}
            <div className="card-body p-0 overflow-auto" style={{ maxHeight: '360px' }}>
                <div className="list-group list-group-flush">
                    {upcoming.map((program, index) => {
                        const isActive = currentProgram?.title === program.title &&
                                         currentProgram?.timeLabel === program.timeLabel;
                        return (
                            <div
                                key={index}
                                className={`list-group-item border-0 border-bottom p-3 ${isActive ? 'rs-active-row' : ''}`}
                            >
                                <div className="d-flex gap-3 align-items-start">
                                    <div className="text-center pt-1 flex-shrink-0" style={{ minWidth: '52px' }}>
                                        <Clock size={11} className={isActive ? 'text-abc-red' : 'text-muted'} />
                                        <span className={`d-block fw-bold`} style={{ fontSize: '0.68rem', color: isActive ? 'var(--abc-red)' : 'var(--abc-blue)' }}>
                                            {program.timeLabel.split('–')[0].trim()}
                                        </span>
                                    </div>
                                    <div className="border-start ps-3 flex-grow-1" style={{ borderColor: '#e5e7eb' }}>
                                        <div className="d-flex align-items-center gap-1 mb-1">
                                            {isActive && <span className="badge bg-abc-red" style={{ fontSize: '0.55rem' }}>AL AIRE</span>}
                                            <span className="opacity-50">{TYPE_ICON[program.type]}</span>
                                        </div>
                                        <h6 className={`fw-bold mb-0`} style={{ fontSize: '0.8rem', color: isActive ? 'var(--abc-blue)' : '#1f2937' }}>
                                            {program.title}
                                        </h6>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.7rem' }}>{program.slogan}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="card-footer bg-white p-3 text-center border-0">
                <Link
                    href={route('corporate.programming')}
                    className="btn btn-outline-secondary btn-sm rounded-pill px-4 fw-bold w-100"
                >
                    Ver Parrilla Completa
                </Link>
            </div>

            <style>{`
                .rs-pulse { animation: rs-pulse-anim 2s infinite; }
                @keyframes rs-pulse-anim {
                    0%,100% { opacity: 1; }
                    50%      { opacity: 0.5; }
                }
                .rs-active-row { background-color: #f0f9ff !important; }
                .list-group-item { transition: background-color 0.2s; }
                .list-group-item:hover { background-color: #fafafa; }
            `}</style>
        </div>
    );
}
