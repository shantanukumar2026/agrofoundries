import React from 'react';

export const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      title: 'COMMERCIAL ROW CROP GROWERS',
      img: '/images/red_sprayer_patriot.jpg'
    },
    {
      title: 'AGRICULTURAL OEM MACHINERY',
      img: '/images/usa_industrial_machining.jpg'
    },
    {
      title: 'ORCHARDS & SPECIALTY CROPS',
      img: '/images/red_tractor_magnum.jpg'
    },
    {
      title: 'TILLAGE & FIELD CONTRACTORS',
      img: '/images/red_tractor_harvest_field.jpg'
    },
    {
      title: 'HIGH-OUTPUT COMBINE HARVEST',
      img: '/images/red_combine_axialflow.jpg'
    },
    {
      title: 'FARM EQUIPMENT DEALER NETWORKS',
      img: '/images/red_tractor_steiger.jpg'
    }
  ];

  return (
    <section id="industries" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="eyebrow">
            <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50' }}>NATIONWIDE AGRICULTURAL SECTOR COVERAGE</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            AGRICULTURAL SECTORS WE SERVE
          </h2>
        </div>

        {/* 6 Large Image Cards Grid */}
        <div className="grid-responsive-6">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                position: 'relative', 
                height: '280px', 
                overflow: 'hidden', 
                border: '1px solid #E5E7EB',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              <img 
                src={ind.img} 
                alt={ind.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(27, 94, 32, 0.95) 0%, rgba(20, 61, 46, 0.3) 60%, transparent 100%)' }} />
              
              <div style={{ position: 'relative', zIndex: 10, padding: '1.25rem 1rem', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#FAF6EE', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                  {ind.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
