import { Head, Link } from '@inertiajs/react';
import { withMainLayout } from '@/Layouts/MainLayout';
import { ArrowLeft, Target, Eye, Radio, MapPin, Users, Award, Mic2, CheckCircle, PlayCircle } from 'lucide-react';

interface AboutProps {
    title: string;
}

function About({ title }: AboutProps) {
    return (
        <>
            <Head title={title} />

            <div className="animate-fade-in pb-5">
                {/* Hero Header */}
                <div
                    className="position-relative py-5 mb-5 d-flex align-items-center justify-content-center text-center text-white"
                    style={{
                        minHeight: '400px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-abc-blue opacity-90"></div>

                    <div className="container position-relative z-2">
                        <Link
                            href="/"
                            className="btn btn-link text-white-50 ps-0 text-decoration-none d-flex align-items-center justify-content-center gap-2 mb-4 mx-auto hover-white"
                        >
                            <ArrowLeft size={18} /> Volver al Inicio
                        </Link>
                        <h1 className="display-3 fw-bold font-serif mb-3">Quiénes Somos</h1>
                        <p className="lead fs-4 text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                            Radio ABC Stereo es la emisora de referencia en la zona norte de Nicaragua, caracterizada por nuestra objetividad, pluralidad y cercanía con la comunidad.
                            <br /><span className="fw-bold text-white mt-2 d-inline-block">¡99.7FM…en las mejores calificaciones!</span>
                        </p>
                        <div className="mt-4">
                            <span className="badge bg-abc-red px-3 py-2 fs-6 text-uppercase fw-bold shadow">ABC Stereo 99.7 FM</span>
                        </div>
                    </div>
                </div>

                <div className="container">

                    {/* Intro / History Section */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-sm p-4 p-lg-5 text-center bg-white" style={{ marginTop: '-100px', zIndex: 3 }}>
                                <h2 className="h2 fw-bold text-abc-blue font-serif mb-4">Nuestra Historia</h2>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="bg-abc-gold" style={{ height: '4px', width: '80px' }}></div>
                                </div>
                                <p className="lead text-secondary mb-4">
                                    Fundada en la ciudad de Estelí, en 1996 por el señor Javier Rodríguez Castillo, nos hemos convertido en una marca seria y de confianza, llegando a miles de personas de diferentes sectores que nos posicionan en los primeros lugares de preferencia y credibilidad.
                                </p>
                                <p className="text-secondary text-start mx-auto" style={{ maxWidth: '800px' }}>
                                    En Radio ABC Stereo ofrecemos una programación completa que combina: noticias, radio-revistas, radio-novelas, programas musicales y de entretenimiento-
                                    <br /><br />
                                    Transmitiendo las 24 horas, los 7 días de la semana, somos la radio que te quiere más.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="row g-4 mb-5 pb-5">
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm hover-card bg-light">
                                <div className="card-body p-5 text-center">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white text-abc-blue rounded-circle p-4 shadow-sm mb-4">
                                        <Target size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="h3 fw-bold font-serif text-abc-blue mb-3">Misión</h3>
                                    <p className="text-secondary fs-5 text-start mx-auto" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                                        <span className="d-block mb-2">• Informar veraz y objetivamente sobre asuntos de interés de la población.</span>
                                        <span className="d-block mb-2">• Educar por medio de programas de orientación con especialistas.</span>
                                        <span className="d-block">• Entretener a través de una programación musical variada con diferentes formatos.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm hover-card bg-light">
                                <div className="card-body p-5 text-center">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white text-abc-red rounded-circle p-4 shadow-sm mb-4">
                                        <Eye size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="h3 fw-bold font-serif text-abc-blue mb-3">Visión</h3>
                                    <p className="text-secondary fs-5">
                                        Ser la emisora líder en sintonía y credibilidad del norte de Nicaragua, innovando en formatos multiplataforma para acompañar a nuestra audiencia siempre.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coverage Section (Updated) */}
                    <div className="row mb-5 pb-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="position-relative ps-4 border-start border-4 border-abc-gold h-100">
                                <h4 className="text-uppercase text-secondary fw-bold small mb-2">Nuestra Cobertura</h4>
                                <h2 className="display-5 fw-bold font-serif text-abc-blue mb-4">Llegando a donde tú estás</h2>
                                <p className="lead text-secondary mb-4">
                                    Te acompañamos en cada tiempo y lugar.<br /><br />
                                    Radio ABC Stereo transmite en dos frecuencias, <span className="fw-bold text-abc-red">99.7 FM</span> y <span className="fw-bold text-abc-blue">102.1 FM</span>, cubriendo estratégicamente la zona norte, centro y occidente de Nicaragua.
                                    <br /><br />
                                    Con transmisión simultánea en línea desde nuestro sitio web oficial.
                                </p>

                                <h5 className="fw-bold text-dark mb-3">Departamentos de cobertura:</h5>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {['Estelí', 'Madriz', 'Nueva Segovia', 'Jinotega', 'Matagalpa', 'León (norte)', 'Chinandega (norte)'].map(dept => (
                                        <div key={dept} className="badge bg-light text-secondary border px-3 py-2 fs-6 d-flex align-items-center gap-2">
                                            <MapPin size={14} className="text-abc-gold" /> {dept}
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100 bg-light">
                                <div className="card-header bg-abc-blue text-white py-3">
                                    <h5 className="m-0 fw-bold font-serif text-center">Mapa de Cobertura</h5>
                                </div>
                                <div className="card-body p-0 d-flex align-items-center justify-content-center bg-white">
                                    <img
                                        src="https://radioabcstereo.com/img/map.jpg"
                                        alt="Mapa de Nicaragua - Cobertura Norte y Occidente"
                                        className="img-fluid"
                                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="card-footer bg-white border-top text-center p-3">
                                    <small className="text-muted d-block mb-1">Frecuencias: 99.7 FM y 102.1 FM</small>
                                    <div className="d-flex justify-content-center gap-3">
                                        <span className="badge bg-abc-red">Norte</span>
                                        <span className="badge bg-abc-blue">Occidente</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="bg-abc-blue text-white rounded-4 p-5 mb-5 position-relative overflow-hidden">
                        {/* Only show decorative icon on EXTRA large screens (d-none d-xl-block) */}
                        <div className="position-absolute top-0 end-0 opacity-10 d-none d-xl-block">
                            <Mic2 size={300} strokeWidth={0.5} />
                        </div>
                        <div className="position-relative z-2">
                            <h2 className="text-center font-serif fw-bold mb-5">Nuestros Valores</h2>
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-4 text-center">
                                    <div className="mb-3 d-inline-block bg-white bg-opacity-10 p-3 rounded-circle text-abc-gold">
                                        <Award size={32} />
                                    </div>
                                    <h4 className="fw-bold">Responsabilidad</h4>
                                    <p className="text-white-50 mb-0">Estamos comprometidos con nuestra audiencia, velando por la honestidad, confianza, inclusión y profesionalismo.</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="mb-3 d-inline-block bg-white bg-opacity-10 p-3 rounded-circle text-abc-gold">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="fw-bold">Veracidad</h4>
                                    <p className="text-white-50 mb-0">Somos una fuente de información confiable con datos verificables, fuentes diversas y objetividad.</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="mb-3 d-inline-block bg-white bg-opacity-10 p-3 rounded-circle text-abc-gold">
                                        <Users size={32} />
                                    </div>
                                    <h4 className="fw-bold">Servicio</h4>
                                    <p className="text-white-50 mb-0">En Radio ABC Stereo la voz de la audiencia vale, trabajamos con transparencia y apertura para hacer de este medio un espacio para todos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

About.layout = withMainLayout;

export default About;