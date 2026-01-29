import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Briefcase, MapPin, Clock, Building } from 'lucide-react';

interface Vacancy {
    id: number;
    title: string;
    company: string;
    city: string;
    employment_type: string;
    description: string;
    is_active: boolean;
    created_at: string;
    expires_at: string;
}

interface Props {
    vacancies: Vacancy[];
}

const JobsPage = ({ vacancies }: Props) => {
    return (
        <div className="container py-5">
            <Head title="Empleos" />

            <div className="row justify-content-center mb-4">
                <div className="col-md-10 text-center">
                    <h1 className="fw-bold mb-3 display-5">Bolsa de Empleos</h1>
                    <p className="lead text-muted">Encuentra tu próxima oportunidad profesional en ABC Stereo.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    {vacancies.length > 0 ? (
                        <div className="list-group shadow-sm">
                            {vacancies.map((vacancy) => (
                                <div key={vacancy.id} className="list-group-item p-4 border-0 mb-3 rounded shadow-sm hover-shadow bg-white">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                                        <div className="mb-3 mb-md-0">
                                            <h5 className="mb-1 fw-bold text-primary">{vacancy.title}</h5>
                                            <div className="d-flex flex-wrap gap-3 text-muted small mt-2">
                                                <div className="d-flex align-items-center">
                                                    <Building size={16} className="me-1" />
                                                    {vacancy.company || 'Confidencial'}
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <MapPin size={16} className="me-1" />
                                                    {vacancy.city || 'Nicaragua'}
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <Briefcase size={16} className="me-1" />
                                                    {vacancy.employment_type === 'con_experiencia' ? 'Con Experiencia' :
                                                        vacancy.employment_type === 'sin_experiencia' ? 'Sin Experiencia' :
                                                            vacancy.employment_type || 'Tiempo Completo'}
                                                </div>
                                                {/* 
                                                <div className="d-flex align-items-center">
                                                    <Clock size={16} className="me-1" />
                                                    Publicado hace {new Date(vacancy.created_at).toLocaleDateString()}
                                                </div>
                                                */}
                                            </div>
                                            <div className="mt-3 text-secondary" style={{ whiteSpace: 'pre-line' }}>
                                                {/* Limit description length if needed, currently showing full for simplicity or allow user to expand */}
                                                <div dangerouslySetInnerHTML={{ __html: vacancy.description }} />
                                            </div>
                                        </div>
                                        <div className="ms-md-4 mt-3 mt-md-0">
                                            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                                                {vacancy.is_active ? 'Activo' : 'Cerrado'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5 bg-white rounded shadow-sm">
                            <Briefcase size={48} className="text-muted mb-3" />
                            <h3>No hay vacantes disponibles</h3>
                            <p className="text-muted">Por favor revisa más tarde para nuevas oportunidades.</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .hover-shadow:hover {
                    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
                    transition: box-shadow 0.3s ease;
                }
            `}</style>
        </div>
    );
};

JobsPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default JobsPage;
