import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

const products = [
  { name: 'Axle Housing', img: '/products/axle-housing-683x1024.webp', desc: 'Heavy-duty housing for agricultural axles.' },
  { name: 'Clutch Housing', img: '/products/clutch-housing-150x150.webp', desc: 'Precision-cast clutch housing assemblies.' },
  { name: 'Differential Case', img: '/products/differnetioal-case.webp', desc: 'Robust differential cases for high-load farming.' },
  { name: 'Drop Housing', img: '/products/drop-housing-768x747.webp', desc: 'Custom drop housings for commercial tractors.' },
  { name: 'Front Axle', img: '/products/front-axle1-768x192.webp', desc: 'Durable front axle castings for heavy machinery.' },
  { name: 'Gearbox', img: '/products/gearbox-707x1024.webp', desc: 'High-torque agricultural gearbox casings.' },
  { name: 'Front Engine Support', img: '/products/img_9957-front-engine-support-768x512.webp', desc: 'Reliable engine support bracket castings.' },
  { name: 'Hydraulic Lift Cover', img: '/products/img_9959-hydraulic-lift-cover-768x512.webp', desc: 'Pressure-tested hydraulic lift covers.' },
  { name: 'Rear Axle', img: '/products/rear-axle-1536x468.webp', desc: 'High-capacity rear axle assemblies.' },
  { name: 'Trumpet Casting', img: '/products/trumpet-casting-768x704.webp', desc: 'Premium ductile iron trumpet castings.' },
  { name: 'Axle Housing', img: '/products/axle-housing-683x1024.webp', desc: 'Heavy-duty housing for agricultural axles.' },
  { name: 'Differential Case', img: '/products/differnetioal-case.webp', desc: 'Robust differential cases for high-load farming.' }
];

export const ProductsSection: React.FC = () => {
  return (
    <section id="agricultural-products" className="section-full-vh" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Settings size={14} color="#4CAF50" />
            <span style={{ color: '#4CAF50' }}>PREMIUM AGRICULTURAL CASTINGS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#111827', fontWeight: 900, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            AGRICULTURAL CASTING PRODUCTS
          </h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0 auto', color: '#2E7D32', fontSize: '1rem', fontWeight: 500 }}>
            Precision-engineered cast iron components designed specifically for the rigorous demands of modern farming equipment and heavy agricultural machinery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map((item, idx) => (
            <div
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{
                background: '#F8F9FA',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111827', marginBottom: '0.5rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#4B5563', marginBottom: '1.5rem', flex: 1, fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', borderTop: '1px solid #E5E7EB', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>EXPLORE COMPONENT</span>
                  <ArrowRight size={14} color="#4CAF50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
