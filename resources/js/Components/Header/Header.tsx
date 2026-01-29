
import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { asset } from '@/url';
import { Menu, X, Search, Play, Pause, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { NavItem, AudioState } from '../../types';
import { fetchCategories } from '../../services/newsService';

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
        const categories = await fetchCategories();

        // Filter by is_active AND show_in_menu (tolerant to '1'/'0' strings)
        const visibleCategories = categories.filter(cat => {
          const isActive = Boolean(Number(cat.is_active));
          const showInMenu = Boolean(Number(cat.show_in_menu));
          return isActive && showInMenu;
        });

        // Sort by menu_order (safe when null/undefined)
        visibleCategories.sort((a, b) => (Number(a.menu_order) || 0) - (Number(b.menu_order) || 0));

        const MAX_VISIBLE_ITEMS = 7;
        let dynamicNavItems: NavItem[];
        let remainingItems: NavItem[] = [];

        if (visibleCategories.length > MAX_VISIBLE_ITEMS) {
          // Take the first 7 items for the main nav
          dynamicNavItems = visibleCategories.slice(0, MAX_VISIBLE_ITEMS).map(cat => ({
            label: cat.name,
            href: route('category.show', { slug: cat.slug }),
          }));

          // The rest go into the '+Contenido' dropdown
          remainingItems = visibleCategories.slice(MAX_VISIBLE_ITEMS).map(cat => ({
            label: cat.name,
            href: route('category.show', { slug: cat.slug }),
          }));

        } else {
          // If 7 or fewer, all are in the main nav
          dynamicNavItems = visibleCategories.map(cat => ({
            label: cat.name,
            href: route('category.show', { slug: cat.slug }),
          }));
        }

        const megaMenuItems = [
          ...remainingItems
        ];

        const finalNavItems = [
          ...dynamicNavItems,
        ];

        // Only add "+Contenido" if there are items for it
        if (megaMenuItems.length > 0) {
          finalNavItems.push({
            label: '+Contenido',
            href: '#',
            subItems: megaMenuItems
          });
        }

        setNavItems(finalNavItems);
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

    if (href && href.startsWith(route('home'))) {
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
    // If user has an active suggestion, go to it first
    if (activeSuggestion !== null && suggestions[activeSuggestion]) {
      const s = suggestions[activeSuggestion];
      router.visit(route('news.show', { slug: s.slug }));
      setSuggestions([]);
      setShowSuggestions(false);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
      return;
    }

    // Navigate to a /search route with query param
    router.visit(asset(`search?q=${encodeURIComponent(q)}`));
    setIsMobileMenuOpen(false);
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
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
      fetch(`/api/news/suggestions?q=${encodeURIComponent(searchQuery.trim())}`, { signal: controller.signal })
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

  const navigateToVideos = (e: React.MouseEvent) => { e.preventDefault(); onNavigate && onNavigate('videos'); setIsMobileMenuOpen(false); };
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
  const navigateToAbout = (e: React.MouseEvent) => { e.preventDefault(); onNavigate && onNavigate('about'); setIsMobileMenuOpen(false); };

  return (
    <header className="fixed-top bg-white shadow-sm">
      {/* Top Bar: Corporate Links & Socials (Desktop Only) */}
      <div className="bg-black text-white py-2 d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Corporate Links */}
            <ul className="nav align-items-center">
              <li className="nav-item"><a href="#" onClick={navigateToAbout} className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>QUÍENES SOMOS</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>ANUNCIATE</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>CONTÁCTANOS</a></li>
              <li className="nav-item"><a href="#" onClick={navigateToVideos} className="nav-link text-abc-gold px-2 py-0 hover-white fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>ABCTV</a></li>
              <li className="nav-item"><a href="#" onClick={navigateToPodcast} className="nav-link text-light px-2 py-0 hover-white cursor-pointer" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>AUDIOREPORTAJES</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-light px-2 py-0 hover-white" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PROGRAMACIÓN</a></li>
              <li className="nav-item"><a href="#" onClick={navigateToJobs} className="nav-link text-light px-2 py-0 hover-white cursor-pointer" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>EMPLEOS</a></li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 align-items-center">
              <span className="text-light me-2" style={{ fontSize: '11px' }}>Síguenos:</span>
              <a href="#" className="text-white hover-opacity"><Facebook size={16} fill="currentColor" /></a>
              <a href="#" className="text-white hover-opacity"><Twitter size={16} fill="currentColor" /></a>
              <a href="#" className="text-white hover-opacity"><Instagram size={16} /></a>
              <a href="#" className="text-white hover-opacity"><Youtube size={16} fill="currentColor" /></a>
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
            <a href={route('home')} onClick={(e) => { e.preventDefault(); router.visit(route('home')); }} className="navbar-brand m-0 brand-logo-wrapper">
              <img src="https://radioabcstereo.com/img/brand.png" alt="Radio ABC Stereo" className="brand-logo" />
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
                        onClick={(e) => handleNavClick(e, item.label, hasSubItems, undefined, item.href)}
                      >
                        {item.label}
                        {hasSubItems && <ChevronDown size={12} />}
                      </a>
                      {hasSubItems && (
                        <div className="dropdown-menu border-0 shadow-lg rounded-0 mt-0 py-2">
                          {item.subItems?.map(sub => {
                            const isSpecial = SPECIAL_HIGHLIGHTS.includes(sub.label);
                            return <a key={sub.label} href={sub.href} className={`dropdown-item py-2 px-4 small ${isSpecial ? 'text-gray fw-bold' : ''}`} onClick={(e) => handleNavClick(e, sub.label, false, sub.target, sub.href)}>{sub.label}</a>;
                          })}
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
          {/* Backdrop with fade-in animation */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 animate-fade-in-overlay"
            style={{ zIndex: 1040 }}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Drawer with sliding animation */}
          <div
            className="position-fixed top-0 start-0 h-100 bg-white shadow animate-slide-right"
            style={{ zIndex: 1050, width: '320px', overflowY: 'auto' }}
          >
            <div className="d-flex align-items-center justify-content-between p-3 bg-abc-blue text-white">
              <h5 className="m-0">Menú</h5>
              <button className="btn btn-link text-white p-0" onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="p-3 bg-light border-bottom position-relative">
              <form onSubmit={handleSearch} className="input-group input-group-sm" role="search" aria-label="Buscar">
                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} onFocus={() => { if (suggestions.length) setShowSuggestions(true); }} />
                <button className="btn btn-outline-secondary" type="submit"><Search size={16} /></button>
              </form>

              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions dropdown-menu show mt-1 w-100 shadow-sm" style={{ left: 0 }} role="listbox" aria-label="Sugerencias de búsqueda">
                  {suggestions.map((s, idx) => (
                    <button key={s.id} type="button" role="option" aria-selected={activeSuggestion === idx} className={`dropdown-item text-truncate ${activeSuggestion === idx ? 'active' : ''}`} onMouseDown={(e) => { e.preventDefault(); router.visit(route('news.show', { slug: s.slug })); setShowSuggestions(false); setSuggestions([]); setSearchQuery(''); setIsMobileMenuOpen(false); }}>
                      <strong className="d-block">{s.title}</strong>
                      {s.excerpt && <small className="text-muted d-block">{s.excerpt}</small>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="list-group list-group-flush">
              {navItems.map((item) => {
                if (item.subItems) {
                  const subItems = item.subItems;
                  return (
                    <div key={item.label} className="list-group-item bg-light p-0 border-bottom">
                      <button className="p-3 fw-bold text-abc-blue d-flex align-items-center justify-content-between w-100 btn btn-link" onClick={() => toggleSection(item.label)}>
                        <span className="text-start">{item.label}</span>
                        <ChevronDown size={16} className={openSections[item.label] ? 'rotate-180' : ''} />
                      </button>
                      {openSections[item.label] && (
                        <div className="bg-white ps-3">
                          {subItems.map((sub: any) => {
                            const isSpecial = SPECIAL_HIGHLIGHTS.includes(sub.label);
                            return (
                              <a key={sub.label} href={sub.href} className={`list-group-item list-group-item-action border-0 ps-3 py-2 ${isSpecial ? 'text-gray fw-bold' : 'text-secondary'}`} onClick={(e) => handleNavClick(e, sub.label, false, sub.target, sub.href)}>
                                {sub.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return <a key={item.label} href={item.href} className="list-group-item list-group-item-action fw-bold text-secondary" onClick={(e) => handleNavClick(e, item.label, false, undefined, item.href)}>{item.label}</a>;
              })}
              <a href="#" className="list-group-item list-group-item-action fw-bold text-abc-gold" onClick={navigateToVideos}>AbcTV</a>
              <a href="#" className="list-group-item list-group-item-action fw-bold text-secondary" onClick={navigateToPodcast}>AUDIOREPORTAJES</a>
              <a href="#" className="list-group-item list-group-item-action fw-bold text-secondary" onClick={navigateToJobs}>Empleos</a>
              <a href="#" className="list-group-item list-group-item-action fw-bold text-secondary" onClick={navigateToAbout}>Quiénes Somos</a>
            </div>
          </div>
        </div>
      )}
      <style>{`
        /* Logo Positioning & Styling */
        @media (min-width: 992px) {
          .brand-logo-wrapper {
            position: absolute;
            top: -5px;
            left: 12px;
            z-index: 1050;
            display: block;
          }
          .brand-logo {
            height: 115px;
            width: auto;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
            transition: transform 0.3s ease;
            padding-top: 10px;
          }
          .brand-logo:hover {
            transform: scale(1.02);
          }
          .search-container {
            margin-left: 180px !important;
          }
        }
        
        @media (max-width: 991.98px) {
          .brand-logo {
            height: 45px;
          }
        }

        .dropdown-hover:hover .dropdown-menu { display: block; margin-top: 0; animation: fadeIn 0.2s ease-in; }
        .dropdown-item:hover { background-color: #f8f9fa; color: var(--abc-blue); }
        .item-card:hover { background-color: #f8f9fa; }
        .item-card:hover h6 { color: var(--abc-blue) !important; }
        .hover-opacity:hover { opacity: 0.8; }
        
        /* Mobile Menu Animations */
        .animate-slide-right {
          animation: slideRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fade-in-overlay {
          animation: fadeInOverlay 0.3s ease-out forwards;
        }
        
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .rotate-180 { transform: rotate(180deg); transition: transform 0.2s ease; }
        /* Search suggestions */
        .search-suggestions { position: absolute; z-index: 2050; max-height: 280px; overflow-y: auto; }
        .search-suggestions .dropdown-item { white-space: normal; }
        .search-suggestions .dropdown-item small { display: block; }
      `}</style>
    </header>
  );
}