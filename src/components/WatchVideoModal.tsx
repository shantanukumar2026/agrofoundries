import React, { useEffect, useRef } from 'react';
import { X, Play, Clock, ShieldCheck } from 'lucide-react';

interface WatchVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTime?: number;
}

export const WatchVideoModal: React.FC<WatchVideoModalProps> = ({ isOpen, onClose, initialTime = 0 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (videoRef.current) {
        if (initialTime > 0) {
          videoRef.current.currentTime = initialTime;
        }
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialTime, onClose]);

  if (!isOpen) return null;

  const seekTo = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(12, 36, 27, 0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          background: '#0F3314',
          border: '1.5px solid rgba(129, 199, 132, 0.4)',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '960px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(76, 175, 80, 0.2)',
          color: '#FAF6EE',
          animation: 'fadeInScale 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: '1rem 1.25rem',
            background: 'rgba(27, 94, 32, 0.7)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(76, 175, 80, 0.2)',
                border: '1px solid rgba(129, 199, 132, 0.4)',
                color: '#A5D6A7',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.08em',
                padding: '4px 12px',
                borderRadius: '4px',
                textTransform: 'uppercase',
              }}
            >
              Digital Walkthrough Reel
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              <Clock size={12} />
              00:56 HD 60fps
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video player"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E53935';
              e.currentTarget.style.borderColor = '#E53935';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            background: '#000000',
            aspectRatio: '16 / 9',
            maxHeight: '65vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            src="/videos/agro_foundries_walkthrough.mp4"
            poster="/videos/walkthrough_poster.jpg"
            controls
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              background: '#000000',
            }}
          />
        </div>

        {/* Chapters & Footer */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(15, 51, 20, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '1rem',
            }}
          >
            <div>
              <h3
                id="video-modal-title"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  margin: '0 0 4px 0',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Agro Foundries Machinery &amp; Digital Platform Walkthrough
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '12px',
                  color: '#A5D6A7',
                  fontWeight: 600,
                }}
              >
                Comprehensive overview of our crop sprayers, heavy implement castings, induction foundry, and in-house testing quality.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#69F0AE" />
              <span style={{ fontSize: '11px', color: '#E8F5E9', fontWeight: 800, letterSpacing: '0.04em' }}>
                HEAVY DUTY &bull; FIELD TESTED QUALITY
              </span>
            </div>
          </div>

          {/* Quick Chapter Navigation Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: '#81C784', fontWeight: 800, textTransform: 'uppercase', marginRight: '4px' }}>
              Jump to:
            </span>
            <button
              onClick={() => seekTo(0)}
              style={chapterButtonStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Play size={10} /> 0:00 Sprayers
            </button>
            <button
              onClick={() => seekTo(15)}
              style={chapterButtonStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Play size={10} /> 0:15 Implement Castings
            </button>
            <button
              onClick={() => seekTo(30)}
              style={chapterButtonStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Play size={10} /> 0:30 Manufacturing
            </button>
            <button
              onClick={() => seekTo(45)}
              style={chapterButtonStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Play size={10} /> 0:45 Quality Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const chapterButtonStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(129, 199, 132, 0.3)',
  color: '#E8F5E9',
  fontSize: '11px',
  fontWeight: 700,
  padding: '5px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  transition: 'all 0.2s ease',
};

const hoverIn = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.background = '#4CAF50';
  e.currentTarget.style.color = '#FFFFFF';
  e.currentTarget.style.borderColor = '#4CAF50';
};

const hoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
  e.currentTarget.style.color = '#E8F5E9';
  e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.3)';
};

export default WatchVideoModal;
