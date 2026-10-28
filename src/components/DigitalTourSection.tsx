import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, CheckCircle2, Award, ChevronRight } from 'lucide-react';

interface DigitalTourSectionProps {
  onOpenModal?: (startTime?: number) => void;
  onRequestQuoteClick?: () => void;
}

const chapters = [
  { time: 0, label: '0:00 Sprayers & Applicators', title: 'Precision Field Equipment', desc: 'High-clearance boom sprayers & atomization systems' },
  { time: 15, label: '0:15 Implement Castings', title: 'Ductile Iron Components', desc: 'Axle housings, clutch housings & planetary gearboxes' },
  { time: 30, label: '0:30 Precision Manufacturing', title: 'Induction Melting & CNC', desc: 'Robotic 5-axis machining & zero-porosity metallurgy' },
  { time: 45, label: '0:45 Quality Testing', title: 'Quality Assurance', desc: 'In-house metallurgical testing and field endurance audits' },
];

export const DigitalTourSection: React.FC<DigitalTourSectionProps> = ({ onOpenModal, onRequestQuoteClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const seekToChapter = (index: number) => {
    if (!videoRef.current) return;
    const targetTime = chapters[index].time;
    videoRef.current.currentTime = targetTime;
    setActiveChapter(index);
    if (!isPlaying) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    if (cur >= 45) {
      setActiveChapter(3);
    } else if (cur >= 30) {
      setActiveChapter(2);
    } else if (cur >= 15) {
      setActiveChapter(1);
    } else {
      setActiveChapter(0);
    }
  };

  return (
    <section
      id="digital-tour"
      style={{
        background: 'linear-gradient(180deg, #0C241B 0%, #0F3314 50%, #07170E 100%)',
        color: '#FFFFFF',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '2px solid rgba(129, 199, 132, 0.25)',
        borderBottom: '2px solid rgba(129, 199, 132, 0.25)',
      }}
    >
      {/* Background Subtle Accent Grids & Ambient Glows */}
      <div
        className="blueprint-grid-dark"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(76, 175, 80, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              margin: '0 0 1.25rem 0',
              textTransform: 'uppercase',
              fontFamily: "'Manrope', sans-serif !important",
              color: '#FFFFFF',
            }}
          >
            TAKE THE 56-SECOND <span style={{ color: '#69F0AE' }}>DIGITAL TOUR</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#C8E6C9',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500,
            }}
          >
            A high-definition walkthrough of Agro Foundries' equipment portfolio — from high-clearance crop sprayers and heavy-duty implement castings to induction foundry operations and rigorous field-tested quality.
          </p>
        </div>

        {/* Video Player Display Container */}
        <div
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            background: 'rgba(0, 0, 0, 0.65)',
            borderRadius: '16px',
            border: '1px solid rgba(129, 199, 132, 0.35)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.65), 0 0 50px rgba(76, 175, 80, 0.15)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              padding: '12px 20px',
              background: 'rgba(27, 94, 32, 0.85)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: isPlaying ? '#69F0AE' : '#FFD54F',
                  boxShadow: isPlaying ? '0 0 10px #69F0AE' : 'none',
                  display: 'inline-block',
                }}
              />
              <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.08em', color: '#FFFFFF', textTransform: 'uppercase' }}>
                Agro Foundries &bull; Digital Walkthrough Reel (00:56)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Sound Toggle */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                style={iconControlStyle}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span style={{ fontSize: '11px', fontWeight: 800 }}>{isMuted ? 'Muted' : 'Sound On'}</span>
              </button>

              {/* Fullscreen / Modal Launcher */}
              {onOpenModal && (
                <button
                  onClick={() => onOpenModal(videoRef.current ? videoRef.current.currentTime : 0)}
                  aria-label="Open in Theater Modal"
                  style={iconControlStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                >
                  <Maximize2 size={16} />
                  <span style={{ fontSize: '11px', fontWeight: 800 }}>Theater View</span>
                </button>
              )}
            </div>
          </div>

          {/* Video Screen Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              background: '#051009',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/videos/agro_foundries_walkthrough.mp4"
              poster="/videos/walkthrough_poster.jpg"
              playsInline
              muted={isMuted}
              loop
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />

            {/* Big Play Overlay (shown when paused) */}
            {!isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.45)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  transition: 'opacity 0.25s ease',
                }}
              >
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)',
                    border: '3px solid #69F0AE',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 35px rgba(105, 240, 174, 0.6), 0 10px 25px rgba(0,0,0,0.4)',
                    transform: 'scale(1)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <Play size={34} style={{ marginLeft: '4px' }} />
                </div>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  Click to Play Digital Tour
                </span>
              </div>
            )}
          </div>

          {/* Interactive Chapter Selector Bar */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(10, 31, 16, 0.95)',
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
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#81C784',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ChevronRight size={14} color="#69F0AE" />
                Select Chapter to Jump:
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={togglePlay}
                  style={{
                    background: isPlaying ? 'rgba(255, 255, 255, 0.1)' : '#4CAF50',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 14px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s',
                  }}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            </div>

            {/* Chapters Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '10px',
              }}
            >
              {chapters.map((ch, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => seekToChapter(idx)}
                    style={{
                      background: isActive ? 'rgba(76, 175, 80, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                      border: isActive ? '1.5px solid #69F0AE' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 900,
                          color: isActive ? '#69F0AE' : '#A5D6A7',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {ch.label}
                      </span>
                      {isActive && (
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#69F0AE',
                            boxShadow: '0 0 6px #69F0AE',
                          }}
                        />
                      )}
                    </div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        marginBottom: '2px',
                      }}
                    >
                      {ch.title}
                    </strong>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        color: 'rgba(255, 255, 255, 0.65)',
                        lineHeight: 1.35,
                      }}
                    >
                      {ch.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Pillar Summary Strip Underneath */}
        <div
          style={{
            maxWidth: '1060px',
            margin: '2.5rem auto 0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <div style={benefitCardStyle}>
            <div style={iconBadgeStyle}>
              <CheckCircle2 size={20} color="#81C784" />
            </div>
            <div>
              <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', textTransform: 'uppercase' }}>
                Complete Product Catalog
              </strong>
              <span style={{ fontSize: '12px', color: '#C8E6C9', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>
                Trailed sprayers, boom assemblies, and high-performance implement castings.
              </span>
            </div>
          </div>

          <div style={benefitCardStyle}>
            <div style={iconBadgeStyle}>
              <Award size={20} color="#81C784" />
            </div>
            <div>
              <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', textTransform: 'uppercase' }}>
                Field Tested &bull; Heavy Duty Quality
              </strong>
              <span style={{ fontSize: '12px', color: '#C8E6C9', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>
                High-strength ductile iron metallurgy with 100% in-house quality inspection.
              </span>
            </div>
          </div>

          <div style={benefitCardStyle}>
            <div style={iconBadgeStyle}>
              <ShieldCheck size={20} color="#81C784" />
            </div>
            <div>
              <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', textTransform: 'uppercase' }}>
                Direct OEM Consultation
              </strong>
              <span style={{ fontSize: '12px', color: '#C8E6C9', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>
                Technical CAD drawing reviews and custom production quotes within 24 hours.
              </span>
            </div>
          </div>
        </div>

        {onRequestQuoteClick && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={onRequestQuoteClick}
              style={{
                background: '#1B5E20',
                color: '#FFFFFF',
                border: '1.5px solid #69F0AE',
                borderRadius: '4px',
                padding: '14px 28px',
                fontSize: '12.5px',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 18px rgba(76, 175, 80, 0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4CAF50';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1B5E20';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>REQUEST MACHINERY &amp; CASTING QUOTE</span>
              <ChevronRight size={16} color="#FFEB3B" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const iconControlStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#FFFFFF',
  borderRadius: '4px',
  padding: '6px 12px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const benefitCardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(129, 199, 132, 0.2)',
  borderRadius: '10px',
  padding: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
};

const iconBadgeStyle: React.CSSProperties = {
  background: 'rgba(76, 175, 80, 0.2)',
  padding: '8px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export default DigitalTourSection;
