import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { TrendingUp, Users, Radio, Target, BarChart3, Megaphone, CheckCircle2 } from 'lucide-react';

interface AdvertiseProps {
    title: string;
}

export default function Advertise({ title }: AdvertiseProps) {
    return (
        <MainLayout>
            <Head title={title} />

            <div className="advertise-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="display-3 fw-bold text-white mb-4">
                                    Haz Crecer tu Negocio
                                </h1>
                                <p className="lead text-white-75 mb-4">
                                    Llega a miles de oyentes en todo Nicaragua con ABC Stereo.
                                    Publicidad efectiva que genera resultados reales para tu marca.
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#contact" className="btn btn-light btn-lg px-4 fw-bold text-abc-blue">
                                        Cotizar Ahora
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="stats-grid">
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <Users size={32} />
                                        </div>
                                        <div className="stat-number">500K+</div>
                                        <div className="stat-label">Oyentes Diarios</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <TrendingUp size={32} />
                                        </div>
                                        <div className="stat-number">85%</div>
                                        <div className="stat-label">Tasa de Recordación</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <Radio size={32} />
                                        </div>
                                        <div className="stat-number">24/7</div>
                                        <div className="stat-label">Cobertura Nacional</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <BarChart3 size={32} />
                                        </div>
                                        <div className="stat-number">95%</div>
                                        <div className="stat-label">Satisfacción</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3 text-abc-blue">¿Por Qué Anunciarte con Nosotros?</h2>
                        <p className="text-muted lead">Beneficios que hacen la diferencia</p>
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <Target size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-abc-blue">Audiencia Segmentada</h3>
                                <p className="text-muted small mb-0">
                                    Llega exactamente a tu público objetivo con horarios estratégicos
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <Megaphone size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-abc-blue">Alto Impacto</h3>
                                <p className="text-muted small mb-0">
                                    Mensajes que se quedan en la mente de tus clientes potenciales
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <BarChart3 size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-abc-blue">Resultados Medibles</h3>
                                <p className="text-muted small mb-0">
                                    Reportes detallados del rendimiento de tu campaña
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-2 text-abc-blue">Producción Incluida</h3>
                                <p className="text-muted small mb-0">
                                    Creamos tu anuncio profesional sin costo adicional
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div id="contact" className="contact-section py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-card">
                                    <div className="text-center mb-4">
                                        <h2 className="h3 fw-bold mb-3 text-abc-blue">Solicita tu Propuesta</h2>
                                        <p className="text-muted">
                                            Contáctanos y un asesor diseñará una estrategia a la medida de tu marca
                                        </p>
                                    </div>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold text-abc-blue">Nombre Completo</label>
                                                <input type="text" className="form-control" placeholder="Tu nombre" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold text-abc-blue">Empresa</label>
                                                <input type="text" className="form-control" placeholder="Nombre de tu empresa" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold text-abc-blue">Email</label>
                                                <input type="email" className="form-control" placeholder="tu@email.com" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold text-abc-blue">Teléfono</label>
                                                <input type="tel" className="form-control" placeholder="+505 0000 0000" />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label fw-semibold text-abc-blue">Mensaje</label>
                                                <textarea className="form-control" rows={4} placeholder="Cuéntanos sobre tus objetivos..."></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-abc-primary btn-lg w-100">
                                                    Solicitar Cotización
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .advertise-page {
                        min-height: 100vh;
                        background: #f8f9fa;
                    }

                    .hero-section {
                        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #dc2626 100%);
                        padding: 120px 0 80px;
                        position: relative;
                        overflow: hidden;
                    }

                    .text-white-75 {
                        color: rgba(255, 255, 255, 0.75);
                    }

                    .text-abc-blue {
                        color: #1e3a8a;
                    }

                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }

                    .stat-card {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 16px;
                        padding: 24px;
                        text-align: center;
                        color: white;
                        transition: all 0.3s ease;
                    }

                    .stat-card:hover {
                        background: rgba(255, 255, 255, 0.15);
                        transform: translateY(-4px);
                    }

                    .stat-icon {
                        margin-bottom: 12px;
                        opacity: 0.8;
                    }

                    .stat-number {
                        font-size: 2rem;
                        font-weight: 700;
                        margin-bottom: 4px;
                    }

                    .stat-label {
                        font-size: 0.9rem;
                        opacity: 0.9;
                    }

                    .benefit-card {
                        background: white;
                        padding: 32px;
                        border-radius: 12px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
                        height: 100%;
                        transition: all 0.3s ease;
                    }

                    .benefit-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
                    }

                    .benefit-icon {
                        width: 64px;
                        height: 64px;
                        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #1e3a8a;
                        margin-bottom: 16px;
                    }

                    .contact-card {
                        background: white;
                        padding: 48px;
                        border-radius: 16px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    }

                    .form-control {
                        border: 2px solid #e5e7eb;
                        padding: 12px 16px;
                        border-radius: 8px;
                    }

                    .form-control:focus {
                        border-color: #1e3a8a;
                        box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
                    }

                    .btn-abc-primary {
                        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
                        color: white;
                        border: none;
                        font-weight: 600;
                    }

                    .btn-abc-primary:hover {
                        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
                        color: white;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
                    }

                    @media (max-width: 768px) {
                        .stats-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
            </div>
        </MainLayout>
    );
}
