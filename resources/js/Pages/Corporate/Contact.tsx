import React from 'react';
import { Head } from '@inertiajs/react';
import { withMainLayout } from '@/Layouts/MainLayout';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
    title: string;
}

function Contact({ title }: ContactProps) {
    return (
        <>
            <Head title={title} />

            <div className="contact-page">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="display-3 fw-bold text-white mb-4">Contáctanos</h1>
                                <p className="lead text-white-75">
                                    Estamos aquí para servirte. Envíanos tus mensajes y solicitudes especiales.
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
                                            Parque Infantil 2c y media al oeste.<br />
                                            Bo. El Calvario, Estelí, Nicaragua.
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Teléfonos</h4>
                                        <p className="text-muted small mb-0">
                                            <strong>Oficina:</strong> +505 2713 6001 / +505 8151 3977<br />
                                            <strong>Cabina:</strong> +505 2713 3043 / +505 2714 2000<br />
                                            <strong>WhatsApp:</strong> +505 8845 0415 / +505 8113 2643
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
                                            <a href="mailto:radioabcstereo@gmail.com" className="text-decoration-none text-muted">radioabcstereo@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Horario de atención</h4>
                                        <p className="text-muted small mb-0">
                                            Lunes a viernes:<br />
                                            08:00 AM a 01:00 PM<br />
                                            02:00 PM a 05:30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8">
                            <div className="contact-form-card d-flex flex-column justify-content-center align-items-center text-center h-100">
                                <h3 className="h3 fw-bold mb-4 text-abc-blue">Envíanos un Mensaje</h3>
                                <p className="text-muted mb-5 fs-5" style={{ maxWidth: '500px' }}>
                                    Si tienes alguna duda, reporte noticioso o solicitud especial, haz clic en el botón de abajo para escribirnos directamente.
                                </p>
                                <a href="mailto:radioabcstereo@gmail.com" className="btn btn-abc-primary btn-lg px-5">
                                    <Send size={20} className="me-2" />
                                    Enviar Mensaje
                                </a>
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
        </>
    );
}

Contact.layout = withMainLayout;

export default Contact;
