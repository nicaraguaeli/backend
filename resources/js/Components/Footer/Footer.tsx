import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Instagram, Youtube, Phone, MessageCircle, Building2, MapPin, Send } from 'lucide-react';
import { route } from 'ziggy-js';
import { asset } from '@/url';
import { SOCIAL_LINKS } from '../../constants';
import { fetchCategories } from '../../services/newsService';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [menuCategories, setMenuCategories] = useState<{ label: string; href: string }[]>([]);

  useEffect(() => {
    fetchCategories().then(categories => {
      const visible = categories
        .filter(cat => Boolean(Number(cat.is_active)) && Boolean(Number(cat.show_in_menu)))
        .sort((a, b) => (Number(a.menu_order) || 0) - (Number(b.menu_order) || 0))
        .slice(0, 5)
        .map(cat => ({
          label: cat.name,
          href: route('category.show', { slug: cat.slug }),
        }));
      setMenuCategories(visible);
    }).catch(() => { });
  }, []);

  return (
    <footer className="bg-abc-blue text-white pt-5 pb-3 border-top border-4 border-abc-red overflow-hidden position-relative">
      {/* Background Pattern/Gradient Overlay for premium feel */}
      <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)', pointerEvents: 'none', zIndex: 0 }}>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-5 mb-5">

          {/* Col 1: Brand & Socials */}
          <div className="col-md-6 col-lg-3">
            <div className="mb-4">
              <img
                src={asset('storage/logotipo.png')}
                alt="ABC Stereo"
                className="bg-white p-2 rounded video-card-hover"
                style={{ height: '52px', width: 'auto' }}
              />
            </div>
            <p className="small text-white-50 mb-4 lh-lg">
              Radio ABC Stereo, la emisora de las mejores calificaciones.
              Tu portal informativo completo.

            </p>
            <div className="d-flex gap-2">
              {[
                { Icon: Facebook, href: SOCIAL_LINKS.facebook },
                { Icon: Twitter, href: SOCIAL_LINKS.twitter },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram },
                { Icon: Youtube, href: SOCIAL_LINKS.youtube }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 text-white-50 border-secondary hover-scale"
                  style={{ width: '36px', height: '36px', transition: 'all 0.3s ease' }}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Sections & Corporate */}
          <div className="col-md-6 col-lg-3">
            <div className="row">
              <div className="col-6">
                <h4 className="text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1">Noticias</h4>
                <ul className="list-unstyled small space-y-2">
                  {menuCategories.length > 0
                    ? menuCategories.map(cat => (
                      <li key={cat.href} className="mb-2">
                        <Link href={cat.href} className="text-white-50 text-decoration-none footer-link">{cat.label}</Link>
                      </li>
                    ))
                    : [1, 2, 3, 4, 5].map(i => (
                      <li key={i} className="mb-2">
                        <span className="d-inline-block bg-secondary rounded" style={{ width: '90px', height: '12px', opacity: 0.3 }} />
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="col-6">
                <h4 className="text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1">La Radio</h4>
                <ul className="list-unstyled small space-y-2">
                  <li className="mb-2"><Link href={route('corporate.about')} className="text-white-50 text-decoration-none footer-link">Quiénes Somos</Link></li>
                  <li className="mb-2"><Link href={route('corporate.programming')} className="text-white-50 text-decoration-none footer-link">Programación</Link></li>
                  <li className="mb-2"><Link href={route('corporate.advertise')} className="text-white-50 text-decoration-none footer-link">Anúnciate</Link></li>
                  <li className="mb-2"><Link href={route('corporate.contact')} className="text-white-50 text-decoration-none footer-link">Contáctanos</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="col-md-6 col-lg-3">
            <h4 className="text-white h6 fw-bold mb-4 border-bottom border-secondary d-inline-block pb-1">Contáctanos</h4>
            <ul className="list-unstyled small text-white-50">
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="p-1 rounded text-abc-red">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">Cabina</span>
                  <a href="tel:+50527133043" className="text-white-50 text-decoration-none footer-link">+505 2713-3043</a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="p-1 rounded text-abc-red">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">WhatsApp</span>
                  <a href="https://wa.me/50588450415" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none footer-link">+505 8845-0415</a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3 mb-3">
                <div className="p-1 rounded text-abc-red">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="d-block fw-bold text-white">Ubicación</span>
                  <p className="mb-0 text-white-50">Parque Infantil 2c y media al oeste.
                    Bo. El Calvario, Estelí, Nicaragua.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: App & Newsletter */}
          <div className="col-md-6 col-lg-3">

            {/* App Section */}
            <h4 className="text-white h6 fw-bold mb-3">App Oficial</h4>
            <div className="mb-4">
              <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer" className="d-inline-block hover-opacity transition-transform">
                <img
                  src="https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png"
                  alt="Disponible en Google Play"
                  style={{ height: '55px', width: 'auto', marginLeft: '-10px' }}
                />
              </a>
            </div>

            {/* Newsletter */}
            <h4 className="text-white h6 fw-bold mb-3">Boletín</h4>
            <div className="newsletter-box mt-3">
              <p className="small text-white-50 mb-2">Suscríbete para recibir noticias.</p>
              <form className="position-relative">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="form-control bg-dark border-secondary text-white small pe-5 rounded-pill"
                  style={{ paddingRight: '40px' }}
                />
                <button className="btn btn-sm btn-abc-red position-absolute top-50 end-0 translate-middle-y rounded-circle me-1 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
          <p className="mb-2 mb-md-0">
            &copy; {currentYear} Radio ABC Stereo. Todos los derechos reservados.
            <span className="d-none d-md-inline ms-2 border-start border-secondary ps-2">
              Desarrollado por Eli Moncada
            </span>
          </p>
          <div className="d-flex gap-3">
            <Link href="#" className="text-white-50 text-decoration-none footer-link">Términos</Link>
            <Link href="#" className="text-white-50 text-decoration-none footer-link">Privacidad</Link>
            <Link href="#" className="text-white-50 text-decoration-none footer-link">Mapa</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link { transition: color 0.2s ease; }
        .footer-link:hover { color: white !important; text-decoration: underline !important; }
        .hover-scale:hover { transform: scale(1.1); background-color: #dc2626 !important; border-color: #dc2626 !important; color: white !important; }
        .hover-opacity:hover { opacity: 0.9; }
        .transition-transform { transition: transform 0.2s; }
        .transition-transform:hover { transform: translateY(-2px); }
        .text-abc-red { color: #dc2626; }
        .border-abc-red { border-color: #dc2626 !important; }
      `}</style>
    </footer>
  );
}