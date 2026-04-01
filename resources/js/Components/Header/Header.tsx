
import React, { useState, useEffect } from 'react';
import { router, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { asset, url } from '@/url';
import { Menu, X, Search, Play, Pause, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';

const Tiktok = ({ size = 24, fill = "currentColor", className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.31 6.13-1.48 1.83-3.79 3.01-6.19 3.04-2.58.07-5.26-.78-7.14-2.6-1.84-1.74-2.92-4.26-3-6.85-.09-2.73 1.05-5.56 3.08-7.48 1.9-1.83 4.58-2.86 7.18-2.64v4.06c-1.28-.21-2.61-.1-3.8.44-1.11.51-2.03 1.43-2.5 2.54-.48 1.15-.56 2.45-.25 3.65.3 1.17 1.08 2.22 2.11 2.84 1.05.62 2.34.84 3.53.64 1.18-.18 2.29-.81 3.02-1.72.76-.92 1.15-2.12 1.15-3.3V0h3.58z" />
  </svg>
);
import { NavItem, AudioState } from '../../types';
import { fetchCategories } from '../../services/newsService';
import { SOCIAL_LINKS } from '../../constants';

// Data for the Mega Menu (kept simple now: no icons/colors, render as normal dropdown items)
const MEGA_MENU_DATA = [
  { label: 'A tu salud', href: '#', subtitle: 'Bienestar total' },
  { label: 'Aquí entre nos', href: '#', subtitle: 'Historias reales' },
  { label: 'Una historia, una canción', href: '#', subtitle: 'Melodías eternas' },
  { label: 'Deportivas ABC', href: '#', subtitle: 'Pasión y gloria' },
  { label: 'Audioreportajes', href: '#', subtitle: 'Podcast a fondo', target: 'podcast' },
  { label: 'ABC TV', href: '#', subtitle: 'Video noticias', target: 'videos' },
];

const SPECIAL_HIGHLIGHTS = ['A tu salud', 'Deportivas ABC', 'Aquí entre nos', 'Una historia, una canción'];

interface HeaderProps {
  audioState: AudioState;
  onPlayLive: () => void;
  onNavigate?: (page: string) => void;
  onCategoryClick?: (category: string) => void;
}

export default function Header({ audioState, onPlayLive, onNavigate, onCategoryClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Array<{ id: number; title: string; slug: string; excerpt?: string }>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState<number | null>(null);
  const searchRef = React.useRef<HTMLInputElement | null>(null);

  // Determinar si el botón debe mostrar "Sonando" (Solo si es LIVE y está PLAYING)
  const isLivePlaying = audioState.type === 'live' && audioState.isPlaying;

  // Load Categories on Mount
  useEffect(() => {
    const loadMenu = async () => {
      try {
        // API now returns top-level categories with their children nested
        const categories = await fetchCategories();

        // Filter top-level visible categories
        const visibleCategories = categories.filter(cat => {
          const isActive = Boolean(Number(cat.is_active));
          const showInMenu = Boolean(Number(cat.show_in_menu));
          return isActive && showInMenu;
        });

        // Sort by menu_order
        visibleCategories.sort((a, b) => (Number(a.menu_order) || 0) - (Number(b.menu_order) || 0));

        // Build nav items: if a category has visible children → subItems dropdown
        const dynamicNavItems: NavItem[] = visibleCategories.map(cat => {
          const visibleChildren = (cat.children || []).filter(child => {
            return Boolean(Number(child.is_active)) && Boolean(Number(child.show_in_menu));
          }).sort((a, b) => (Number(a.menu_order) || 0) - (Number(b.menu_order) || 0));

          const navItem: NavItem = {
            label: cat.name,
            href: route('category.show', { slug: cat.slug }),
          };

          if (visibleChildren.length > 0) {
            navItem.subItems = visibleChildren.map(child => ({
              label: child.name,
              href: route('category.show', { slug: child.slug }),
            }));
          }

          return navItem;
        });

        // Add fixed 'Audioreportajes' link
        dynamicNavItems.push({
          label: 'Audioreportajes',
          href: '#',
          target: 'podcastview',
        });

        setNavItems(dynamicNavItems);
      } catch (err) {
        console.error('Error loading menu categories:', err);
        setNavItems([]);
      }
    };

    loadMenu();
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent, label: string, hasSubItems: boolean = false, targetView?: string, href?: string) => {
    e.preventDefault();

    // If navigating to a URL route, first close any special view (podcast/video)
    if (href && href.startsWith(route('home'))) {
      if (onNavigate) onNavigate('home'); // reset podcastview / videoreportajes
      router.visit(href);
      setIsMobileMenuOpen(false);
      return;
    }

    if (targetView && onNavigate) {
      onNavigate(targetView);
      setIsMobileMenuOpen(false);
      return;
    }
    if (hasSubItems) return;
    if (label === 'Reportajes ABC' && onNavigate) {
      onNavigate('videos');
      setIsMobileMenuOpen(false);
      return;
    }
    if (onCategoryClick) {
      if (onNavigate) onNavigate('home'); // close any special view
      onCategoryClick(label);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleSection = (label: string) => {
    setOpenSections(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    // Siempre ir a la página completa de resultados al hacer submit
    // (el dropdown de sugerencias es solo para navegación rápida con teclado/mouse)
    setSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestion(null);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
    router.visit(route('search', { q }));
  };

  // --- Suggestions: fetch with debounce ---
  React.useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setActiveSuggestion(null);
      return;
    }

    const controller = new AbortController();
    const id = setTimeout(() => {
      fetch(url(`api/news/suggestions?q=${encodeURIComponent(searchQuery.trim())}`), { signal: controller.signal })
        .then(res => res.ok ? res.json() : [])
        .then((data) => {
          setSuggestions(Array.isArray(data) ? data : []);
          setShowSuggestions(true);
          setActiveSuggestion(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') return;
          console.error('Suggestion fetch error', err);
        });
    }, 250);

    return () => { clearTimeout(id); controller.abort(); };
  }, [searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || !suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => prev === null ? 0 : Math.min(suggestions.length - 1, prev + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => prev === null ? suggestions.length - 1 : Math.max(0, prev - 1));
    } else if (e.key === 'Enter') {
      if (activeSuggestion !== null && suggestions[activeSuggestion]) {
        e.preventDefault();
        const s = suggestions[activeSuggestion];
        router.visit(route('news.show', { slug: s.slug }));
        setSearchQuery('');
        setShowSuggestions(false);
        setSuggestions([]);
        setActiveSuggestion(null);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestion(null);
    }
  };

  const navigateToVideos = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('videos');
    }
    setIsMobileMenuOpen(false);
  };
  const navigateToPodcast = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('podcastview');
    } else {
      router.visit('/podcast');
    }
    setIsMobileMenuOpen(false);
  };
  const navigateToJobs = (e: React.MouseEvent) => {
    e.preventDefault();
    router.visit(route('jobs.index'));
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="fixed-top bg-white shadow-sm">
      {/* Top Bar: Corporate Links & Socials (Desktop Only) */}
      <div className="bg-black text-white py-2 d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Corporate Links */}
            <ul className="nav align-items-center">
              <li className="nav-item"><Link href={route('corporate.about')} className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>QUIÉNES SOMOS</Link></li>
              <li className="nav-item"><Link href={route('corporate.advertise')} className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>ANUNCIATE</Link></li>
              <li className="nav-item"><Link href={route('corporate.contact')} className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>CONTÁCTANOS</Link></li>
              {/* <li className="nav-item"><a href="#" onClick={navigateToVideos} className="nav-link text-abc-gold px-2 py-0 hover-white fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>ABCTV</a></li> */}
              <li className="nav-item"><Link href={route('corporate.programming')} className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PROGRAMACIÓN</Link></li>
              <li className="nav-item"><a href="#" onClick={navigateToJobs} className="nav-link text-light px-2 py-0 hover-white cursor-pointer" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>EMPLEOS</a></li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 align-items-center">
              <span className="text-light me-2" style={{ fontSize: '11px' }}>Síguenos:</span>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-white hover-opacity"><Facebook size={16} fill="currentColor" /></a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-white hover-opacity"><Tiktok size={16} fill="currentColor" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-white hover-opacity"><Instagram size={16} /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="text-white hover-opacity"><Youtube size={16} fill="currentColor" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="container position-relative">
        <div className="d-flex align-items-center justify-content-between py-3">

          {/* Left: Mobile Toggle + Logo */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link p-0 text-abc-blue d-lg-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a href={route('home')} onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); router.visit(route('home')); }} className="navbar-brand m-0 brand-logo-wrapper">
              <img src={asset('storage/logotipo.png')} alt="Radio ABC Stereo" className="brand-logo" />
            </a>
          </div>

          {/* Center: Search */}
          <div className="d-none d-xl-block flex-grow-1 mx-5 search-container position-relative">
            <form onSubmit={handleSearch} className="input-group" role="search" aria-label="Buscar noticias">
              <input ref={searchRef} type="text" className="form-control bg-light border-end-0 rounded-start-pill ps-4" placeholder="Buscar noticias..." aria-label="Buscar noticias" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} onFocus={() => { if (suggestions.length) setShowSuggestions(true); }} />
              <button type="submit" className="btn btn-light border-start-0 rounded-end-pill pe-3"><Search size={18} className="text-primary" /></button>
            </form>

            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions dropdown-menu show mt-1 w-100 shadow-sm" role="listbox" aria-label="Sugerencias de búsqueda">
                {suggestions.map((s, idx) => (
                  <button key={s.id} type="button" role="option" aria-selected={activeSuggestion === idx} className={`dropdown-item text-truncate ${activeSuggestion === idx ? 'active' : ''}`} onMouseDown={(e) => { e.preventDefault(); router.visit(route('news.show', { slug: s.slug })); setShowSuggestions(false); setSuggestions([]); setSearchQuery(''); }}>
                    <strong className="d-block">{s.title}</strong>
                    {s.excerpt && <small className="text-muted d-block">{s.excerpt}</small>}
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right: Live Button */}
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={onPlayLive}
              className={`btn ${isLivePlaying ? 'btn-outline-danger' : 'btn-abc-red'} rounded-pill d-flex align-items-center gap-2 px-3 py-2 shadow-sm border-0`}
            >
              <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
                {isLivePlaying && <span className="position-absolute w-100 h-100 bg-danger rounded-circle opacity-25 spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                <div className={`rounded-circle p-1 d-flex justify-content-center align-items-center ${isLivePlaying ? 'bg-danger text-white' : 'bg-white text-danger'}`} style={{ width: '16px', height: '16px' }}>
                  {isLivePlaying ? <Pause size={8} fill="currentColor" /> : <Play size={8} fill="currentColor" />}
                </div>
              </div>
              <div className="d-flex flex-column align-items-start lh-1">
                <span className={`text-uppercase fw-bold ${isLivePlaying ? 'text-danger' : 'text-white-50'}`} style={{ fontSize: '9px' }}>Radio</span>
                <span className={`fw-bolder text-uppercase text-nowrap ${isLivePlaying ? 'text-dark' : 'text-white'}`} style={{ fontSize: '12px' }}>
                  {isLivePlaying ? 'Sonando...' : 'Escúchanos en vivo'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Main Navigation */}
      <div className="bg-abc-blue d-none d-lg-block">
        <div className="container">
          <nav className="d-flex justify-content-center">
            <ul className="nav justify-content-center w-100 flex-nowrap">
              {navItems.length === 0 ? (
                // Loading Skeleton for Menu
                <div className="d-flex justify-content-center w-100 py-2">
                  <div className="spinner-border spinner-border-sm text-light" role="status"></div>
                </div>
              ) : (
                navItems.map((item) => {
                  const hasSubItems = !!item.subItems;
                  const isMegaMenu = item.label === '+Contenido';
                  return (
                    <li key={item.label} className={`nav-item ${hasSubItems ? 'dropdown-hover position-relative' : ''}`}>
                      <a
                        href={item.href}
                        className="nav-link nav-link-custom d-flex align-items-center gap-1 text-white text-uppercase fw-bold px-3 py-3"
                        style={{ fontSize: '0.75rem' }}
                        onClick={(e) => handleNavClick(e, item.label, hasSubItems, (item as any).target, item.href)}
                      >
                        {item.label}
                        {hasSubItems && <ChevronDown size={12} />}
                      </a>
                      {hasSubItems && (
                        <div className="nav-dropdown-panel">
                          {item.subItems?.map((sub, idx) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="nav-dropdown-item"
                              onClick={(e) => handleNavClick(e, sub.label, false, sub.target, sub.href)}
                            >
                              <span className="nav-dropdown-num">{String(idx + 1).padStart(2, '0')}</span>
                              <span className="nav-dropdown-text">{sub.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="d-lg-none">
          {/* Backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100 animate-fade-in-overlay"
            style={{ zIndex: 1040, background: 'rgba(5,15,40,0.72)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div
            className="position-fixed top-0 start-0 h-100 animate-slide-right mobile-drawer"
            style={{ zIndex: 1050, width: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}
          >
            {/* Drawer Header */}
            <div className="mobile-drawer-header d-flex align-items-center justify-content-between">
              <img src={asset('storage/logowhite.png')} alt="Radio ABC Stereo" style={{ height: '55px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} />
              <button className="mobile-drawer-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Cerrar menú">
                <X size={20} />
              </button>
            </div>

            {/* Search */}
            <div className="mobile-drawer-search position-relative">
              <form onSubmit={handleSearch} className="d-flex gap-2" role="search" aria-label="Buscar">
                <div className="flex-grow-1 position-relative">
                  <Search size={15} className="mobile-search-icon" />
                  <input
                    type="text"
                    className="mobile-search-input"
                    placeholder="Buscar noticias..."
                    aria-label="Buscar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    onFocus={() => { if (suggestions.length) setShowSuggestions(true); }}
                  />
                </div>
                <button className="mobile-search-btn" type="submit">IR</button>
              </form>
              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions dropdown-menu show mt-1 w-100 shadow" style={{ left: 0 }} role="listbox">
                  {suggestions.map((s, idx) => (
                    <button key={s.id} type="button" role="option" aria-selected={activeSuggestion === idx}
                      className={`dropdown-item text-truncate ${activeSuggestion === idx ? 'active' : ''}`}
                      onMouseDown={(e) => { e.preventDefault(); router.visit(route('news.show', { slug: s.slug })); setShowSuggestions(false); setSuggestions([]); setSearchQuery(''); setIsMobileMenuOpen(false); }}>
                      <strong className="d-block">{s.title}</strong>
                      {s.excerpt && <small className="text-muted d-block">{s.excerpt}</small>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Items */}
            <nav className="mobile-drawer-nav flex-grow-1">
              <p className="mobile-nav-section-label">SECCIONES</p>
              {navItems.map((item) => {
                if (item.subItems) {
                  const subItems = item.subItems;
                  const isOpen = openSections[item.label];
                  return (
                    <div key={item.label} className="mobile-nav-group">
                      <button
                        className={`mobile-nav-item mobile-nav-parent ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleSection(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={15} className={`mobile-chevron ${isOpen ? 'rotated' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="mobile-nav-children">
                          {subItems.map((sub: any) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="mobile-nav-child"
                              onClick={(e) => handleNavClick(e, sub.label, false, sub.target, sub.href)}
                            >
                              <span className="mobile-child-dot" />
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-item"
                    onClick={(e) => handleNavClick(e, item.label, false, (item as any).target, item.href)}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Divider + Extra Links */}
              <div className="mobile-nav-divider" />
              <p className="mobile-nav-section-label">RADIO ABC</p>
              <a href="#" className="mobile-nav-item" onClick={navigateToJobs}>Empleos</a>
              <Link href={route('corporate.programming')} className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Programación</Link>
              <Link href={route('corporate.about')} className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Quiénes Somos</Link>
              <Link href={route('corporate.advertise')} className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Anúnciate</Link>
              <Link href={route('corporate.contact')} className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</Link>
            </nav>

            {/* Social Links Footer */}
            <div className="mobile-drawer-footer">
              <p className="mobile-footer-label">Síguenos</p>
              <div className="d-flex gap-3">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="mobile-social-link" aria-label="Facebook"><Facebook size={18} fill="currentColor" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="mobile-social-link" aria-label="TikTok"><Tiktok size={18} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="mobile-social-link" aria-label="Instagram"><Instagram size={18} /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="mobile-social-link" aria-label="YouTube"><Youtube size={18} fill="currentColor" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        /* ===== LOGO ===== */
        @media (min-width: 992px) {
          .brand-logo-wrapper {
            position: absolute; top: -5px; left: 12px;
            z-index: 1050; display: block;
          }
          .brand-logo {
            height: 115px; width: auto;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
            transition: transform 0.3s ease;
            padding-top: 10px;
          }
          .brand-logo:hover { transform: scale(1.02); }
          .search-container { margin-left: 180px !important; }
        }
        @media (max-width: 991.98px) { .brand-logo { height: 45px; } }

        /* ===== DESKTOP NAV ===== */
        .dropdown-hover:hover .dropdown-menu { display: block; margin-top: 0; animation: fadeIn 0.2s ease-in; }
        .dropdown-item:hover { background-color: #f8f9fa; color: var(--abc-blue); }
        .hover-opacity:hover { opacity: 0.8; }

        /* ===== DESKTOP DROPDOWN PANEL ===== */
        .nav-dropdown-panel {
          display: none; position: absolute; top: 100%; right: 0;
          min-width: 240px; background: #0f1f3d;
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
          border-radius: 0 0 8px 8px; padding: 6px 0 10px;
          z-index: 1000; overflow: hidden;
          animation: dropFadeIn 0.18s ease-out;
        }
        .dropdown-hover:hover .nav-dropdown-panel { display: block; }
        .nav-dropdown-item {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 20px; text-decoration: none;
          color: rgba(255,255,255,0.75); font-size: 0.78rem;
          font-weight: 500; letter-spacing: 0.3px;
          border-left: 2px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          white-space: nowrap;
        }
        .nav-dropdown-item + .nav-dropdown-item { border-top: 1px solid rgba(255,255,255,0.06); }
        .nav-dropdown-item:hover { background: rgba(255,255,255,0.05); color: #ffffff; border-left-color: var(--abc-red, #c0392b); }
        .nav-dropdown-num { font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.2); min-width: 18px; transition: color 0.15s ease; }
        .nav-dropdown-item:hover .nav-dropdown-num { color: var(--abc-red, #c0392b); }
        .nav-dropdown-text { flex: 1; text-transform: capitalize; }
        @keyframes dropFadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

        /* ===== MOBILE OVERLAY ANIMATIONS ===== */
        .animate-slide-right { animation: slideRight 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .animate-fade-in-overlay { animation: fadeInOverlay 0.3s ease-out forwards; }
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }

        /* ===== MOBILE DRAWER ===== */
        .mobile-drawer {
          background: #0b1c3a;
          box-shadow: 4px 0 40px rgba(0,0,0,0.45);
        }

        /* Drawer Header */
        .mobile-drawer-header {
          padding: 16px 18px;
          background: linear-gradient(135deg, #0b1c3a 0%, #142d5e 100%);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
        }
        .mobile-drawer-close {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          color: rgba(255,255,255,0.8);
          padding: 6px 8px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          display: flex; align-items: center;
        }
        .mobile-drawer-close:hover { background: rgba(192,57,43,0.7); color: #fff; border-color: transparent; }

        /* Search */
        .mobile-drawer-search {
          padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .mobile-search-input {
          width: 100%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 9px 12px 9px 36px;
          color: #fff;
          font-size: 0.82rem;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .mobile-search-input::placeholder { color: rgba(255,255,255,0.35); }
        .mobile-search-input:focus { border-color: rgba(192,57,43,0.7); background: rgba(255,255,255,0.1); }
        .mobile-search-icon {
          position: absolute; left: 11px; top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.35);
          pointer-events: none;
        }
        .mobile-search-btn {
          background: var(--abc-red, #c0392b);
          border: none; border-radius: 8px;
          color: #fff; font-size: 0.72rem;
          font-weight: 700; letter-spacing: 0.8px;
          padding: 0 14px; cursor: pointer;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .mobile-search-btn:hover { background: #a93226; }

        /* Nav Section Label */
        .mobile-nav-section-label {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: rgba(255,255,255,0.3);
          margin: 0;
          padding: 14px 18px 6px;
        }

        /* Nav */
        .mobile-drawer-nav { padding-bottom: 8px; }

        /* Nav Item (leaf) */
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 18px;
          text-decoration: none;
          color: rgba(255,255,255,0.78);
          font-size: 0.83rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          border-left: 2px solid transparent;
          transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
          background: transparent;
          border-top: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .mobile-nav-item:first-of-type { border-top: none; }
        .mobile-nav-item:hover, .mobile-nav-item:focus {
          background: rgba(255,255,255,0.05);
          color: #ffffff;
          border-left-color: var(--abc-red, #c0392b);
          outline: none;
        }

        /* Parent with subItems */
        .mobile-nav-parent.open {
          color: #ffffff;
          background: rgba(192,57,43,0.12);
          border-left-color: var(--abc-red, #c0392b);
        }

        /* Chevron */
        .mobile-chevron {
          color: rgba(255,255,255,0.4);
          transition: transform 0.25s ease;
        }
        .mobile-chevron.rotated { transform: rotate(180deg); color: var(--abc-red, #c0392b); }

        /* Children container */
        .mobile-nav-children {
          background: rgba(0,0,0,0.25);
          border-left: 2px solid var(--abc-red, #c0392b);
          margin-left: 18px;
          border-radius: 0 0 4px 4px;
          animation: childFadeIn 0.2s ease;
        }
        @keyframes childFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-child {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 16px;
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 0.79rem;
          font-weight: 500;
          border-top: 1px solid rgba(255,255,255,0.04);
          transition: color 0.15s ease, background 0.15s ease;
        }
        .mobile-nav-child:first-of-type { border-top: none; }
        .mobile-nav-child:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .mobile-child-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--abc-red, #c0392b);
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Divider */
        .mobile-nav-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 10px 18px;
        }

        /* Footer */
        .mobile-drawer-footer {
          padding: 16px 18px;
          background: rgba(0,0,0,0.3);
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .mobile-footer-label {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          color: rgba(255,255,255,0.3);
          margin: 0 0 10px;
        }
        .mobile-social-link {
          color: rgba(255,255,255,0.5);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
        }
        .mobile-social-link:hover { color: #fff; transform: translateY(-2px); }

        /* ===== SHARED ===== */
        .search-suggestions { position: absolute; z-index: 2050; max-height: 280px; overflow-y: auto; }
        .search-suggestions .dropdown-item { white-space: normal; }
        .search-suggestions .dropdown-item small { display: block; }
        .rotate-180 { transform: rotate(180deg); transition: transform 0.2s ease; }
      `}</style>
    </header>
  );
}