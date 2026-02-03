import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
    title: string;
}

export default function Contact({ title }: ContactProps) {
    return (
        <MainLayout>
            <Head title={title} />

            <div className="contact-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="display-3 fw-bold text-white mb-4">Contáctanos</h1>
                                <p className="lead text-white-75">
                                    Estamos aquí para escucharte. Envíanos tu mensaje y te responderemos pronto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row g-4">
                        {/* Contact Info */}
                        <div className="col-lg-4">
                            <div className="contact-info-card">
                                <h3 className="h4 fw-bold mb-4">Información de Contacto</h3>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Dirección</h4>
                                        <p className="text-muted small mb-0">
                                            Estelí, Nicaragua<br />
                                            C. 8 SO
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Teléfono</h4>
                                        <p className="text-muted small mb-0">
                                            +505 2713 2322<br />
                                            +505 8900 0000
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Email</h4>
                                        <p className="text-muted small mb-0">
                                            info@radioabcstereo.com<br />
                                            ventas@radioabcstereo.com
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Horario</h4>
                                        <p className="text-muted small mb-0">
                                            Lunes - Viernes: 8:00 AM - 5:00 PM<br />
                                            Sábados: 8:00 AM - 12:00 MD
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8">
                            <div className="contact-form-card">
                                <h3 className="h4 fw-bold mb-4">Envíanos un Mensaje</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Nombre Completo *</label>
                                            <input type="text" className="form-control" placeholder="Tu nombre" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Email *</label>
                                            <input type="email" className="form-control" placeholder="tu@email.com" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Teléfono</label>
                                            <input type="tel" className="form-control" placeholder="+505 0000 0000" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Asunto *</label>
                                            <select className="form-select" required>
                                                <option value="">Selecciona un asunto</option>
                                                <option value="general">Consulta General</option>
                                                <option value="publicidad">Publicidad</option>
                                                <option value="programacion">Programación</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">Mensaje *</label>
                                            <textarea className="form-control" rows={6} placeholder="Escribe tu mensaje aquí..." required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-abc-primary btn-lg px-5 w-100 w-md-auto">
                                                <Send size={20} className="me-2" />
                                                Enviar Mensaje
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section mt-5">
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=13.084880,-86.358590&hl=es&z=16&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '16px' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <style>{`
                    .contact-page {
                        min-height: 100vh;
                        background: #f8f9fa;
                    }

                    .hero-section {
                        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #dc2626 100%);
                        padding: 120px 0 80px;
                    }

                    .text-white-75 {
                        color: rgba(255, 255, 255, 0.75);
                    }

                    .contact-info-card, .contact-form-card {
                        background: white;
                        padding: 40px;
                        border-radius: 16px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                        height: 100%;
                    }

                    .info-item {
                        display: flex;
                        gap: 16px;
                        padding: 20px 0;
                        border-bottom: 1px solid #f3f4f6;
                    }

                    .info-item:last-child {
                        border-bottom: none;
                    }

                    .info-icon {
                        width: 48px;
                        height: 48px;
                        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #1e3a8a;
                        flex-shrink: 0;
                    }

                    .form-control, .form-select {
                        border: 2px solid #e5e7eb;
                        padding: 12px 16px;
                        border-radius: 8px;
                    }

                    .form-control:focus, .form-select:focus {
                        border-color: #1e3a8a;
                        box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
                    }

                    .btn-abc-primary {
                        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
                        color: white;
                        border: none;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .btn-abc-primary:hover {
                        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
                        color: white;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
                    }

                    .map-container {
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                        border-radius: 16px;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        </MainLayout>
    );
}
