import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Link, Mail, MessageCircle, Check } from 'lucide-react';
import {
  ShareableContent,
  copyToClipboard,
  shareViaWebShare,
  shareOnFacebook,
  shareOnTwitter,
  shareOnWhatsApp,
  shareViaEmail,
  generateShareUrl
} from '../utils/shareUtils';

interface ShareButtonProps {
  content: ShareableContent;
  variant?: 'icon' | 'button';
  className?: string;
}

export default function ShareButton({ content, variant = 'icon', className = '' }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = generateShareUrl(content);
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWebShare = async () => {
    const success = await shareViaWebShare(content);
    if (success) {
      setShowMenu(false);
    }
  };

  const handleSocialShare = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'email') => {
    switch (platform) {
      case 'facebook':
        shareOnFacebook(content);
        break;
      case 'twitter':
        shareOnTwitter(content);
        break;
      case 'whatsapp':
        shareOnWhatsApp(content);
        break;
      case 'email':
        shareViaEmail(content);
        break;
    }
    setShowMenu(false);
  };

  return (
    <div className="share-button-container position-relative">
      <button
        className={`share-trigger-btn ${variant === 'button' ? 'btn-share' : 'btn-share-icon'} ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
        title="Compartir"
      >
        <Share2 size={variant === 'button' ? 18 : 20} />
        {variant === 'button' && <span className="ms-2">Compartir</span>}
      </button>

      {showMenu && (
        <>
          <div
            className="share-menu-backdrop"
            onClick={() => setShowMenu(false)}
          ></div>
          <div className="share-menu">
            <div className="share-menu-header">
              <h6 className="mb-0 fw-bold">Compartir</h6>
              <button
                className="btn-close-menu"
                onClick={() => setShowMenu(false)}
              >
                ✕
              </button>
            </div>

            <div className="share-menu-body">
              {/* Web Share API (mobile) */}
              {'share' in navigator && (
                <button
                  className="share-option"
                  onClick={handleWebShare}
                >
                  <div className="share-icon bg-primary">
                    <Share2 size={18} />
                  </div>
                  <span>Compartir...</span>
                </button>
              )}

              {/* Copy Link */}
              <button
                className="share-option"
                onClick={handleCopyLink}
              >
                <div className={`share-icon ${copied ? 'bg-success' : 'bg-secondary'}`}>
                  {copied ? <Check size={18} /> : <Link size={18} />}
                </div>
                <span>{copied ? '¡Copiado!' : 'Copiar enlace'}</span>
              </button>

              {/* Facebook */}
              <button
                className="share-option"
                onClick={() => handleSocialShare('facebook')}
              >
                <div className="share-icon bg-facebook">
                  <Facebook size={18} />
                </div>
                <span>Facebook</span>
              </button>

              {/* Twitter */}
              <button
                className="share-option"
                onClick={() => handleSocialShare('twitter')}
              >
                <div className="share-icon bg-twitter">
                  <Twitter size={18} />
                </div>
                <span>Twitter</span>
              </button>

              {/* WhatsApp */}
              <button
                className="share-option"
                onClick={() => handleSocialShare('whatsapp')}
              >
                <div className="share-icon bg-whatsapp">
                  <MessageCircle size={18} />
                </div>
                <span>WhatsApp</span>
              </button>

              {/* Email */}
              <button
                className="share-option"
                onClick={() => handleSocialShare('email')}
              >
                <div className="share-icon bg-email">
                  <Mail size={18} />
                </div>
                <span>Email</span>
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        .share-button-container {
          display: inline-block;
        }

        .share-trigger-btn {
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .btn-share-icon {
          padding: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          color: #6b7280;
        }

        .btn-share-icon:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #1f2937;
          transform: scale(1.1);
        }

        .btn-share {
          padding: 8px 16px;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .btn-share:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .share-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1040;
        }

        .share-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          z-index: 1050;
          min-width: 240px;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .share-menu-header {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .share-menu-header h6 {
          font-size: 0.9rem;
          color: #1f2937;
        }

        .btn-close-menu {
          background: none;
          border: none;
          font-size: 20px;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .btn-close-menu:hover {
          background: #f3f4f6;
          color: #1f2937;
        }

        .share-menu-body {
          padding: 8px;
        }

        .share-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          color: #374151;
        }

        .share-option:hover {
          background: #f3f4f6;
        }

        .share-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .bg-facebook {
          background: #1877f2;
        }

        .bg-twitter {
          background: #1da1f2;
        }

        .bg-whatsapp {
          background: #25d366;
        }

        .bg-email {
          background: #ea4335;
        }

        .bg-primary {
          background: #667eea;
        }

        .bg-secondary {
          background: #6b7280;
        }

        .bg-success {
          background: #10b981;
        }

        @media (max-width: 768px) {
          .share-menu {
            position: fixed;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 16px 16px 0 0;
            animation: slideUp 0.3s ease;
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
}
