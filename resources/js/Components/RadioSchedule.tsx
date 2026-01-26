import React, { useState, useEffect } from 'react';
import { Radio, Mic2, Music, Clock, Users } from 'lucide-react';

const SCHEDULE_ITEMS = [
    { start: 6, end: 7, time: '06:00', title: 'El Espacio Ranchero', host: 'ABC Stereo', type: 'music' },
    { start: 7, end: 8, time: '07:00', title: 'Noticias ABC Matutino', host: 'Equipo de Noticias', type: 'news' },
    { start: 8, end: 11, time: '08:00', title: 'Cumpleañeros', host: 'ABC Stereo', type: 'social' },
    { start: 11, end: 12, time: '11:00', title: 'El Club de la Amistad', host: 'ABC Stereo', type: 'social' },
    { start: 12, end: 14, time: '12:00', title: 'Noticias ABC Meridiano', host: 'Equipo de Noticias', type: 'news' },
    { start: 14, end: 16, time: '14:00', title: 'Tardes Musicales', host: 'ABC Stereo', type: 'music' },
    { start: 20, end: 22, time: '20:00', title: 'Clásicos de Siempre', host: 'ABC Stereo', type: 'music' },
];

export default function RadioSchedule() {
    const [currentProgram, setCurrentProgram] = useState(SCHEDULE_ITEMS[0]);

    useEffect(() => {
        const updateCurrent = () => {
            const hour = new Date().getHours();
            const current = SCHEDULE_ITEMS.find(p => hour >= p.start && hour < p.end);
            setCurrentProgram(current || { 
                start: 0, end: 24, time: 'Ahora', 
                title: 'Música Continua', 
                host: 'ABC Stereo', 
                type: 'music' 
            });
        };
        updateCurrent();
        const interval = setInterval(updateCurrent, 60000);
        return () => clearInterval(interval);
    }, []);

    const getIcon = (type: string) => {
        switch(type) {
            case 'news': return <Mic2 size={14} />;
            case 'social': return <Users size={14} />;
            default: return <Music size={14} />;
        }
    };

    return (
        <div className="card border-0 shadow-sm h-100 overflow-hidden bg-white">
            <div className="card-header bg-abc-blue text-white p-3 border-0 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <Radio size={20} className="text-abc-red" />
                    <h3 className="h5 mb-0 fw-bold font-serif">Programación</h3>
                </div>
                <span className="badge bg-abc-red animate-pulse">EN VIVO</span>
            </div>
            
            {/* Now Playing Section */}
            <div className="p-3 bg-light border-bottom">
                <p className="text-uppercase text-muted small fw-bold mb-1">Sonando ahora:</p>
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm text-abc-blue">
                        {getIcon(currentProgram.type)}
                    </div>
                    <div>
                        <h5 className="fw-bold mb-0 text-dark">{currentProgram.title}</h5>
                        <small className="text-secondary">Con {currentProgram.host}</small>
                    </div>
                </div>
                <div className="progress mt-3" style={{height: '4px'}}>
                    <div className="progress-bar bg-abc-red w-100 progress-bar-striped progress-bar-animated" role="progressbar"></div>
                </div>
            </div>

            <div className="card-body p-0 overflow-auto" style={{maxHeight: '400px'}}>
                <div className="list-group list-group-flush">
                    {SCHEDULE_ITEMS.map((program, index) => {
                        const isActive = currentProgram.title === program.title;
                        return (
                            <div key={index} className={`list-group-item border-0 border-bottom p-3 transition-colors ${isActive ? 'bg-blue-50' : 'hover-bg-light'}`}>
                                <div className="d-flex gap-3">
                                    <div className="text-center pt-1" style={{minWidth: '50px'}}>
                                        <span className={`d-block fw-bold small ${isActive ? 'text-abc-red' : 'text-abc-blue'}`}>
                                            {program.time}
                                        </span>
                                    </div>
                                    <div className="border-start ps-3 border-2 border-light">
                                        <h6 className={`fw-bold mb-1 small ${isActive ? 'text-abc-blue' : 'text-dark'}`}>
                                            {program.title}
                                            {isActive && <span className="badge bg-abc-red ms-2" style={{fontSize: '0.6rem'}}>AL AIRE</span>}
                                        </h6>
                                        <p className="small text-muted mb-0" style={{fontSize: '0.75rem'}}>{program.host}</p>
                                    </div>
                                    <div className="ms-auto text-muted opacity-50">
                                        {getIcon(program.type)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="card-footer bg-white p-3 text-center border-0">
                <button className="btn btn-outline-secondary btn-sm rounded-pill px-4 fw-bold w-100">
                    Ver Parrilla Completa
                </button>
            </div>
            
            <style>{`
                .animate-pulse { animation: pulse 2s infinite; }
                .bg-blue-50 { background-color: #f0f9ff; }
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
