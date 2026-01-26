import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, MessageCircle, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-abc-blue text-white pt-5 pb-3 border-top border-4 border-danger overflow-hidden">
      <div className="container">
        <div className="row g-5 mb-5">
          
          {/* Col 1: Brand & Socials */}
          <div className="col-md-6 col-lg-3">
             <div className="mb-4">
                 <img 
                    src="https://radioabcstereo.com/img/brand.png" 
                    alt="ABC Stereo" 
                    className="bg-white p-2 rounded"
                    style={{ height: '48px', width: 'auto' }}
                  />
             </div>
             <p className="small text-white-50 mb-4">
               La mejor información nacional e internacional, música y entretenimiento. Tu conexión directa con la actualidad.
             </p>
             <div className="d-flex gap-2">
               <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 border-secondary text-secondary hover-white" style={{width:'32px', height:'32px'}}><Facebook size={16} /></a>
               <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 border-secondary text-secondary hover-white" style={{width:'32px', height:'32px'}}><Twitter size={16} /></a>
               <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 border-secondary text-secondary hover-white" style={{width:'32px', height:'32px'}}><Instagram size={16} /></a>
               <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 border-secondary text-secondary hover-white" style={{width:'32px', height:'32px'}}><Youtube size={16} /></a>
             </div>
          </div>
          
          {/* Col 2: Sections */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-abc-gold h6 fw-bold mb-4">Secciones</h4>
            <ul className="list-unstyled small space-y-2">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Nacionales</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Deportivos</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Farándula</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Tecnología</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Escúchanos en vivo</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Info (Updated) */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-abc-gold h6 fw-bold mb-4">Contáctanos</h4>
            <ul className="list-unstyled small text-white-50">
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="bg-white bg-opacity-10 p-1 rounded text-abc-gold">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">Cabina</span>
                  <a href="tel:+50527133043" className="text-white-50 text-decoration-none hover-white">+505 2713-3043</a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="bg-white bg-opacity-10 p-1 rounded text-abc-gold">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">WhatsApp</span>
                  <a href="https://wa.me/50588450415" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-white">+505 8845-0415</a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="bg-white bg-opacity-10 p-1 rounded text-abc-gold">
                  <Building2 size={16} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">Oficinas</span>
                  <a href="tel:+50527136001" className="text-white-50 text-decoration-none hover-white">+505 2713-6001</a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Col 4: App & Newsletter */}
          <div className="col-md-6 col-lg-3">
            
            {/* App Section */}
            <h4 className="text-abc-gold h6 fw-bold mb-3">App Oficial</h4>
            <div className="mb-4">
               <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer" className="d-inline-block hover-opacity">
                  <img 
                    src="https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png" 
                    alt="Disponible en Google Play" 
                    style={{ height: '55px', width: 'auto', marginLeft: '-10px' }} 
                  />
               </a>
            </div>

            {/* Newsletter */}
            <h4 className="text-abc-gold h6 fw-bold mb-3">Boletín</h4>
            <p className="small text-white-50 mb-3">Suscríbete para recibir las noticias más importantes.</p>
            <form className="d-flex flex-column gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="form-control bg-dark border-secondary text-white small"
              />
              <button className="btn btn-abc-red text-white fw-bold small text-uppercase w-100">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
          <p className="mb-2 mb-md-0">
            &copy; 2024 Radio ABC Stereo. Todos los derechos reservados.
            <span className="ms-md-2 border-start border-secondary ps-2 d-inline-block mt-1 mt-md-0">
              Desarrollado por Eli Moncada
            </span>
          </p>
          <div className="d-flex gap-3">
             <a href="#" className="text-white-50 text-decoration-none hover-white">Términos</a>
             <a href="#" className="text-white-50 text-decoration-none hover-white">Privacidad</a>
             <a href="#" className="text-white-50 text-decoration-none hover-white">Cookies</a>
          </div>
        </div>
      </div>
      
      <style>{`
        .hover-opacity:hover { opacity: 0.9; }
        .hover-white:hover { color: white !important; }
      `}</style>
    </footer>
  );
}