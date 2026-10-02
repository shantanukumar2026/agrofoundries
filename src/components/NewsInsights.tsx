import React from 'react';
import { ArrowRight } from 'lucide-react';

export const NewsInsights: React.FC = () => {
  const news = [
    {
      category: 'FIELD TECHNOLOGY',
      date: 'PRECISION BULLETIN',
      title: 'Next-Generation Pulse Width Modulation for Crop Sprayers',
      desc: 'Agro Foundries introduces intelligent individual nozzle shutoff and variable rate liquid application controllers for reduced chemical waste and maximum yield.',
      img: '/images/red_sprayer_patriot.jpg'
    },
    {
      category: 'METALLURGY',
      date: 'MANUFACTURING INSIGHT',
      title: 'Advancing Ductile Iron Durability in Rotavator Gearboxes',
      desc: 'Implementation of MagmaSoft® 3D thermal simulation and robotic CNC machining centers operating to 0.02mm tolerances for heavy agricultural implements.',
      img: '/images/usa_industrial_machining.jpg'
    },
    {
      category: 'EXPANSION',
      date: 'PRESS DISPATCH',
      title: 'Expanding Agricultural Dealer Network Across the US Midwest',
      desc: 'Announcing 25 new regional distribution partnerships across Iowa, Illinois, and Nebraska providing guaranteed same-day farm machinery parts dispatch.',
      img: '/images/red_combine_axialflow.jpg'
    }
  ];

  return (
    <section id="news" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>INDUSTRY DISPATCHES &amp; FIELD INNOVATIONS</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              NEWS &amp; INSIGHTS
            </h2>
          </div>

          <a 
            href="#news" 
            className="link-hover-arrow"
          >
            <span>VIEW ALL NEWS</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* Exactly 3 Premium Cards Grid */}
        <div className="grid-responsive-3">
          {news.map((item, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                borderRadius: '2px',
                height: '420px'
              }}
            >
              <div>
                {/* Large Photo */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#E5E7EB' }}>|</span>
                    <span style={{ fontSize: '10.5px', color: '#4CAF50', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#111827', lineHeight: 1.35, margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#2E7D32', lineHeight: 1.6, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  READ TECHNICAL BULLETIN
                </span>
                <ArrowRight size={13} color="#4CAF50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsInsights;
