import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Clock, Radio, Calendar, Mic } from 'lucide-react';

interface ProgrammingProps {
    title: string;
}

export default function Programming({ title }: ProgrammingProps) {
    const [selectedDay, setSelectedDay] = useState('Lunes');

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const schedule = [
        { time: '06:00 - 09:00', program: 'Buenos Días Nicaragua', host: 'María González', description: 'Noticias y entretenimiento matutino' },
        { time: '09:00 - 12:00', program: 'La Mañana en ABC', host: 'Carlos Martínez', description: 'Música y actualidad nacional' },
        { time: '12:00 - 14:00', program: 'Mediodía Informativo', host: 'Ana Rodríguez', description: 'Noticias al mediodía' },
        { time: '14:00 - 17:00', program: 'Tarde Musical', host: 'Roberto López', description: 'Los mejores éxitos musicales' },
        { time: '17:00 - 19:00', program: 'Deportivas ABC', host: 'Luis Hernández', description: 'Todo el deporte nacional e internacional' },
        { time: '19:00 - 21:00', program: 'Noche de Noticias', host: 'Patricia Sánchez', description: 'Análisis y noticias del día' },
        { time: '21:00 - 00:00', program: 'Música sin Fronteras', host: 'DJ Alex', description: 'La mejor música para la noche' },
        { time: '00:00 - 06:00', program: 'Trasnoche ABC', host: 'Programación Musical', description: 'Música continua' },
    ];

    return (
        <MainLayout>
            <Head title={title} />

            <div className="programming-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="display-3 fw-bold text-white mb-4">Programación</h1>
                                <p className="lead text-white-75">
                                    Descubre nuestra parrilla de programas. Música, noticias y entretenimiento las 24 horas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    {/* Day Selector */}
                    <div className="day-selector mb-5">
                        <div className="d-flex gap-2 flex-wrap justify-content-center">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="schedule-container">
                        <div className="schedule-header mb-4">
                            <Calendar size={24} className="text-abc-red me-2" />
                            <h2 className="h4 fw-bold mb-0">Programación del {selectedDay}</h2>
                        </div>

                        <div className="row g-4">
                            {schedule.map((item, index) => (
                                <div key={index} className="col-lg-6">
                                    <div className="program-card">
                                        <div className="program-time">
                                            <Clock size={20} />
                                            <span>{item.time}</span>
                                        </div>
                                        <div className="program-content">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="program-icon">
                                                    <Radio size={24} />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h3 className="h5 fw-bold mb-1">{item.program}</h3>
                                                    <div className="program-host mb-2">
                                                        <Mic size={16} className="me-1" />
                                                        {item.host}
                                                    </div>
                                                    <p className="text-muted small mb-0">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Programs */}
                    <div className="featured-programs mt-5 py-5">
                        <div className="text-center mb-5">
                            <h2 className="display-6 fw-bold mb-3">Programas Destacados</h2>
                            <p className="text-muted lead">Los favoritos de nuestra audiencia</p>
                        </div>
                        <div className="row g-4">
                            {[
                                { name: 'Buenos Días Nicaragua', time: '06:00 - 09:00', image: 'photo-1478737270239-2f02b77fc618' },
                                { name: 'Deportivas ABC', time: '17:00 - 19:00', image: 'photo-1461896836934-ffe607ba8211' },
                                { name: 'Noche de Noticias', time: '19:00 - 21:00', image: 'photo-1504711434969-e33886168f5c' },
                            ].map((program, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="featured-card">
                                        <div className="featured-image">
                                            <img
                                                src={`https://images.unsplash.com/${program.image}?w=600&h=400&fit=crop`}
                                                alt={program.name}
                                                className="img-fluid"
                                            />
                                            <div className="featured-overlay">
                                                <div className="featured-time">
                                                    <Clock size={16} className="me-1" />
                                                    {program.time}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <h4 className="h5 fw-bold mb-0">{program.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                    .programming-page {
                        min-height: 100vh;
                        background: #f8f9fa;
                    }

                    .hero-section {
                        background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
                        padding: 120px 0 80px;
                    }

                    .text-white-75 {
                        color: rgba(255, 255, 255, 0.75);
                    }

                    .day-selector {
                        background: white;
                        padding: 24px;
                        border-radius: 16px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
                    }

                    .day-btn {
                        padding: 12px 24px;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 50px;
                        font-weight: 600;
                        color: #6b7280;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }

                    .day-btn:hover {
                        border-color: #dc2626;
                        color: #dc2626;
                    }

                    .day-btn.active {
                        background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
                        border-color: #dc2626;
                        color: white;
                    }

                    .schedule-container {
                        background: white;
                        padding: 40px;
                        border-radius: 16px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    }

                    .schedule-header {
                        display: flex;
                        align-items: center;
                    }

                    .text-abc-red {
                        color: #dc2626;
                    }

                    .program-card {
                        background: #f8f9fa;
                        border-radius: 12px;
                        overflow: hidden;
                        border: 2px solid #e5e7eb;
                        transition: all 0.3s ease;
                    }

                    .program-card:hover {
                        border-color: #dc2626;
                        transform: translateY(-4px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    }

                    .program-time {
                        background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
                        color: white;
                        padding: 12px 20px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-weight: 600;
                        font-size: 0.9rem;
                    }

                    .program-content {
                        padding: 20px;
                    }

                    .program-icon {
                        width: 48px;
                        height: 48px;
                        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #dc2626;
                        flex-shrink: 0;
                    }

                    .program-host {
                        color: #6b7280;
                        font-size: 0.9rem;
                        display: flex;
                        align-items: center;
                    }

                    .featured-card {
                        background: white;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                        transition: all 0.3s ease;
                    }

                    .featured-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
                    }

                    .featured-image {
                        position: relative;
                        overflow: hidden;
                        height: 200px;
                    }

                    .featured-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }

                    .featured-card:hover .featured-image img {
                        transform: scale(1.1);
                    }

                    .featured-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                        padding: 20px;
                    }

                    .featured-time {
                        color: white;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                    }

                    .featured-content {
                        padding: 20px;
                    }
                `}</style>
            </div>
        </MainLayout>
    );
}
