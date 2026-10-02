import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductShowcaseStripProps {
  onOpenProductDetail?: (productTitle: string) => void;
}

export const ProductShowcaseStrip: React.FC<ProductShowcaseStripProps> = ({ onOpenProductDetail }) => {
  const parts = [
    {
      title: 'TRACTORS',
      fullTitle: 'Heavy-Duty Farm Tractors',
      img: 'https://images.unsplash.com/photo-1635438622580-e5fd8ca7096e?q=80&w=800&auto=format&fit=crop',
      specs: 'Field Power & Towing'
    },
    {
      title: 'COMBINE HARVESTERS',
      fullTitle: 'Combine Harvesters for Grain',
      img: 'https://images.unsplash.com/photo-1536719504278-9cfcf309f376?q=80&w=800&auto=format&fit=crop',
      specs: 'Efficient Crop Harvesting'
    },
    {
      title: 'SEEDERS & PLANTERS',
      fullTitle: 'Precision Seeders & Planters',
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
      specs: 'Accurate Seed Placement'
    },
    {
      title: 'PLOWS & TILLAGE',
      fullTitle: 'Plows and Soil Tillage Equipment',
      img: 'https://images.unsplash.com/photo-1635438622580-e5fd8ca7096e?q=80&w=800&auto=format&fit=crop',
      specs: 'Soil Preparation'
    },
    {
      title: 'CROP SPRAYERS',
      fullTitle: 'Self-Propelled Crop Sprayers',
      img: 'https://images.unsplash.com/photo-1536719504278-9cfcf309f376?q=80&w=800&auto=format&fit=crop',
      specs: 'Fertilizer & Weed Control'
    },
    {
      title: 'HAY BALERS',
      fullTitle: 'Round and Square Hay Balers',
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
      specs: 'Harvest Collection'
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#FAF6EE', borderBottom: '1px solid #E5E7EB', padding: '3.5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ top: '-10%', right: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Title */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50' }}>PRECISION AGRICULTURAL CASTINGS &amp; MACHINED PARTS</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            CRITICAL AGRICULTURAL &amp; IMPLEMENT COMPONENTS
          </h2>
        </div>

        {/* 6 Isolated Product Cards Grid (Sleek Dark Black Cards with Emerald Accents) */}
        <div className="grid-responsive-6">
          {parts.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onOpenProductDetail && onOpenProductDetail(item.fullTitle || item.title)}
              className="card-hover-industrial img-hover-zoom"
              style={{
                background: 'linear-gradient(165deg, #18201C 0%, #0D120F 100%)',
                border: '1.5px solid rgba(76, 175, 80, 0.4)',
                padding: '1.15rem 1rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '275px',
                cursor: 'pointer',
                boxShadow: '0 10px 28px rgba(0,0,0,0.18)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#69F0AE';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(76, 175, 80, 0.28)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(76, 175, 80, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.18)';
              }}
            >
              {/* Product Photo - Dark Precision Frame */}
              <div style={{ height: '135px', overflow: 'hidden', background: '#050806', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '6px', padding: '6px' }}>
                <img 
                  src={item.img} 
                  alt={item.fullTitle} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
                />
              </div>

              {/* Product Label & Specs */}
              <div>
                <h3 style={{ fontSize: '14.5px', fontWeight: 900, color: '#FFFFFF', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: '12px', color: '#69F0AE', fontWeight: 800, display: 'block', marginBottom: '10px', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.specs}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '10px' }}>
                  <span style={{ fontSize: '11px', color: '#A5D6A7', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                    VIEW SPECS
                  </span>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(76, 175, 80, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowRight size={13} color="#69F0AE" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductShowcaseStrip;
