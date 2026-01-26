import React from 'react';
import { router } from '@inertiajs/react';

export default function PopularSections() {
    const onCategoryClick = (slug: string) => {
        router.visit(`/category/${slug}`);
    };

    return (
        <div className="card border-0 shadow-sm bg-white">
            <div className="card-body">
                <h3 className="h5 sidebar-widget-title text-abc-blue">Secciones Populares</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 border-0 bg-transparent py-2">
                        <a href="/category/nacionales" onClick={(e) => { e.preventDefault(); onCategoryClick('nacionales'); }} className="text-decoration-none text-secondary hover-red">Nacionales</a>
                        <span className="badge bg-light text-secondary rounded-pill">42</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 border-0 bg-transparent py-2">
                        <a href="/category/deportes" onClick={(e) => { e.preventDefault(); onCategoryClick('deportes'); }} className="text-decoration-none text-secondary hover-red">Deportivas ABC</a>
                        <span className="badge bg-light text-secondary rounded-pill">28</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 border-0 bg-transparent py-2">
                        <a href="/category/salud" onClick={(e) => { e.preventDefault(); onCategoryClick('salud'); }} className="text-decoration-none text-secondary hover-red">A tu salud</a>
                        <span className="badge bg-light text-secondary rounded-pill">15</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 border-0 bg-transparent py-2">
                        <a href="/category/reportajes" onClick={(e) => { e.preventDefault(); onCategoryClick('reportajes'); }} className="text-decoration-none text-secondary hover-red">Reportajes</a>
                        <span className="badge bg-light text-secondary rounded-pill">10</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
