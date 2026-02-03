import React from 'react';
import { Link } from '@inertiajs/react';
import { Briefcase, ArrowRight, Search } from 'lucide-react';
import { route } from 'ziggy-js';

export default function JobsCallToAction() {
    return (
        <section className="py-5 bg-light my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm overflow-hidden bg-white">
                            <div className="card-body p-0">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-8 p-4 p-md-5">
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div className="bg-abc-blue text-white p-3 rounded-circle">
                                                <Briefcase size={24} />
                                            </div>
                                            <span className="text-abc-blue fw-bold text-uppercase small ls-1">
                                                Oportunidades Laborales
                                            </span>
                                        </div>

                                        <h2 className="display-6 fw-bold text-dark font-serif mb-3">
                                            ¿Buscas tu próximo empleo?
                                        </h2>

                                        <p className="lead text-muted mb-4">
                                            Explora nuestra bolsa de trabajo y descubre las vacantes disponibles en las mejores empresas de la región.
                                        </p>

                                        <div className="d-flex flex-wrap gap-3">
                                            <Link
                                                href={route('jobs.index')}
                                                className="btn btn-abc-blue px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2 hover-scale"
                                            >
                                                Ver Vacantes Disponibles
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-md-4 bg-abc-blue p-4 text-center d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                                        <div className="text-white opacity-25">
                                            <Search size={120} strokeWidth={1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .hover-scale {
                    transition: transform 0.2s ease;
                }
                .hover-scale:hover {
                    transform: translateY(-2px);
                }
                .ls-1 {
                    letter-spacing: 1px;
                }
            `}</style>
        </section>
    );
}
