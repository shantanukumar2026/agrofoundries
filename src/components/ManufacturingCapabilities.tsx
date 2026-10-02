import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'TRACTORS',
      sub: 'Heavy Duty Power',
      desc: 'Reliable and powerful tractors built to handle the toughest jobs on any American farm.',
      img: '/images/red_tractor_magnum.jpg'
    },
    {
      title: 'HARVESTERS',
      sub: 'Crop Gathering',
      desc: 'High-capacity combine harvesters designed to bring in your crops quickly and efficiently.',
      img: '/images/red_combine_axialflow.jpg'
    },
    {
      title: 'CROP SPRAYERS',
      sub: 'Precision Application',
      desc: 'High-clearance self-propelled sprayers built for maximum acreage and minimal drift.',
      img: '/images/red_sprayer_patriot.jpg'
    },
    {
      title: 'PLANTERS & SEEDERS',
      sub: 'Soil Planting',
      desc: 'Accurate planting equipment to ensure perfect seed placement and maximum yield.',
      img: '/images/red_tractor_steiger.jpg'
    },
    {
      title: 'BALERS',
      sub: 'Hay & Forage',
      desc: 'Durable baling machines that tightly pack hay and forage for easy transport and storage.',
      img: '/images/red_tractor_magnum.jpg'
    }
  ];

  return (
    <section id="capabilities" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ top: '-10%', left: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>HOW WE BUILD OUR EQUIPMENT</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
              MANUFACTURING CAPABILITIES
            </h2>
            <p style={{ fontSize: '14px', color: '#2E7D32', margin: 0, maxWidth: '580px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              From melting the raw iron to testing the finished product, we handle every step of the building process in-house to guarantee quality.
            </p>
          </div>

          <a 
            href="#process" 
            className="link-hover-arrow"
          >
            <span>OUR PROCESS TIMELINE</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 5 Horizontal / Grid Cards Matching Reference Screenshot */}
        <div className="grid-responsive-5">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                background: '#1B5E20', 
                color: '#FAF6EE', 
                border: '1px solid #1B5E20', 
                borderRadius: '2px',
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '320px', 
                position: 'relative' 
              }}
            >
              {/* Background Photo */}
              <img 
                src={cap.img} 
                alt={cap.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />

              {/* Dark Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)' }} />

              {/* Card Label Overlay */}
              <div style={{ position: 'relative', zIndex: 10, padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                  {cap.sub}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FAF6EE', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {cap.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManufacturingCapabilities;
