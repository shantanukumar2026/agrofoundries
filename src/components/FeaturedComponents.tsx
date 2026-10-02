import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface FeaturedComponentsProps {
}

export const FeaturedComponents: React.FC<FeaturedComponentsProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory] = useState<string>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  const components = [
    {
      id: 'spray-01',
      category: 'sprayers',
      title: 'High-Clearance Boom Sprayer',
      series: 'AGRO-SPRAY 120',
      specs: '120ft Boom • Pulse Width Mod',
      desc: 'Precision high-clearance self-propelled crop sprayer with automatic boom height leveling and drift-control nozzles.',
      img: '/images/red_sprayer_patriot.jpg',
    },
    {
      id: 'comb-01',
      category: 'combine',
      title: 'High-Capacity Axial Combine Harvester',
      series: 'AGRO-HARVEST 9120',
      specs: '523 HP • 350-Bushel Grain Tank',
      desc: 'Commercial high-capacity single-rotor combine harvester engineered for gentle grain threshing and maximum field output.',
      img: '/images/red_combine_axialflow.jpg',
    },
    {
      id: 'trac-01',
      category: 'tractor',
      title: 'Heavy-Duty Articulated 4WD Tractor',
      series: 'AGRO-STEIGER 485',
      specs: '485 HP • Heavy Drawbar Capacity',
      desc: 'High-power 4WD articulated tractor built for deep ripping, continuous tillage, and high-acreage field operations.',
      img: '/images/red_tractor_steiger.jpg',
    },
    {
      id: 'trac-02',
      category: 'tractor',
      title: 'Row-Crop High-Torque Tractor',
      series: 'AGRO-MAGNUM 250',
      specs: '250 HP • CVT Precision Drive',
      desc: 'High-efficiency row-crop tractor providing maximum traction balance for heavy implements and planting rigs.',
      img: '/images/red_tractor_magnum.jpg',
    }
  ];

  const filteredComponents = activeCategory === 'all'
    ? components
    : components.filter(c => c.category === activeCategory);

  return (
    <>
      <section id="products" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', padding: '2.75rem 0 1.5rem 0' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Section Header with Navigation Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span>ASABE, ISO 9001 &amp; ASTM A536 CERTIFIED CATALOG</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
                FEATURED AGRICULTURAL MACHINERY &amp; CASTINGS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Carousel Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => scroll('left')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#FAF6EE';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#1B5E20';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1B5E20';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#FFFFFF';
                  }}
                >
                  <ChevronLeft size={22} color="#FFFFFF" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#FAF6EE';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#1B5E20';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1B5E20';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#FFFFFF';
                  }}
                >
                  <ChevronRight size={22} color="#FFFFFF" />
                </button>
              </div>

              <a
                href="#contact"
                className="link-hover-arrow"
              >
                <span>REQUEST COMPLETE TECHNICAL CATALOG</span>
                <ArrowRight size={14} color="#4CAF50" />
              </a>
            </div>
          </div>

          {/* Full Card Horizontal Slider (4 visible across 100% container width) */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
              width: '100%'
            }}
          >
            {filteredComponents.map((item, idx) => (
              <div
                key={idx}
                className="card-slider-item card-hover-industrial img-hover-zoom"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  minHeight: '480px'
                }}
              >
                {/* Product Photo */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#000000', position: 'relative', flexShrink: 0, borderBottom: '1px solid #E5E7EB', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.series}
                  </span>
                </div>

                {/* Full Card Body & Footer */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', margin: '0 0 6px 0', textTransform: 'uppercase', lineHeight: 1.3, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', display: 'block', marginBottom: '8px', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.specs}
                    </span>
                    <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={13} color="#4CAF50" />
                      <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>Agro Foundries QUALITY CERTIFIED</span>
                    </div>

                    <span style={{
                      background: '#E8F5E9',
                      color: '#1B5E20',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      AAR / AREMA
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedComponents;

