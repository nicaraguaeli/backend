import React from 'react';

interface AdSpaceProps {
  variant?: 'sidebar' | 'horizontal' | 'square';
  imageUrl?: string;
  link?: string;
  label?: string;
  className?: string;
}

export default function AdSpace({ 
  variant = 'sidebar', 
  imageUrl, 
  link = '#', 
  label = 'Publicidad',
  className = ''
}: AdSpaceProps) {
  
  // Dimensions based on variant
  const getDimensions = () => {
    switch(variant) {
      case 'horizontal': return { minHeight: '120px', width: '100%' };
      case 'square': return { minHeight: '250px', width: '100%' };
      case 'sidebar': default: return { minHeight: '300px', width: '100%' };
    }
  };

  const style = getDimensions();

  return (
    <div className={`ad-space-container ${className} mb-4`}>
      <span className="d-block text-end text-muted text-uppercase mb-1" style={{ fontSize: '0.6rem', letterSpacing: '1px' }}>
        {label}
      </span>
      
      {imageUrl ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="d-block shadow-sm hover-opacity">
          <img 
            src={imageUrl} 
            alt="Anuncio" 
            className="w-100 h-100 object-fit-cover rounded"
            style={{ ...style, objectFit: variant === 'horizontal' ? 'cover' : 'contain', backgroundColor: '#fff' }} 
          />
        </a>
      ) : (
        /* Placeholder styling when no image is provided */
        <a href="/contacto-publicidad" className="d-block text-decoration-none">
          <div 
            className="rounded overflow-hidden position-relative d-flex flex-column align-items-center justify-content-center text-center p-4 shadow-sm group-hover"
            style={{ 
              ...style, 
              background: 'linear-gradient(135deg, #212529 0%, #343a40 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Pattern overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '10px 10px'}}>
            </div>

            <div className="position-relative z-2">
              <h5 className="text-white fw-bold mb-2 text-uppercase">Espacio Disponible</h5>
              <p className="text-white-50 small mb-3">Anuncia tu marca aquí y llega a miles de personas.</p>
              <span className="btn btn-light btn-sm fw-bold text-abc-blue rounded-pill px-3 shadow">
                Contáctanos
              </span>
            </div>
            
            <div className="position-absolute bottom-0 end-0 p-3 opacity-25">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
          </div>
        </a>
      )}
      
      <style>{`
        .hover-opacity { transition: opacity 0.2s; }
        .hover-opacity:hover { opacity: 0.9; }
        
        .group-hover { transition: transform 0.3s; }
        .group-hover:hover { transform: translateY(-3px); }
        .group-hover:hover .btn { transform: scale(1.05); }
      `}</style>
    </div>
  );
}