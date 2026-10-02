import React from 'react';
import { ShieldCheck, Layers, Box, Shield } from 'lucide-react';

export const FactoryOverview: React.FC = () => {
  const stats = [
    {
      value: 'STATE-OF-THE-ART',
      label: 'MANUFACTURING FOOTPRINT',
      sub: 'Induction foundry, automated forge & robotic CNC complexes',
      icon: Box
    },
    {
      value: 'ISO 9001 / ASABE',
      label: 'AGRICULTURAL STANDARDS',
      sub: 'Certified manufacturing excellence for farm machinery',
      icon: ShieldCheck
    },
    {
      value: 'FIELD-TESTED',
      label: 'COMPONENTS DELIVERED',
      sub: 'Precision sprayers, castings & gearboxes across USA',
      icon: Layers
    },
    {
      value: 'COAST-TO-COAST',
      label: 'USA DEALER NETWORK',
      sub: 'Supplying commercial growers & equipment dealers nationwide',
      icon: Shield
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div className="factory-overview-grid">
          
          {/* Left Column: USA Agricultural Machinery Photo */}
          <div className="factory-col-img">
            <img 
              src="/images/red_combine_axialflow.jpg" 
              alt="Agro Foundries Advanced Agricultural Machinery Manufacturing" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 60%, rgba(27, 94, 32, 0.95) 100%)' }} />
          </div>

          {/* Right Column: Dark Green Stats Panel */}
          <div className="factory-col-stats">
            <div className="grid-responsive-2" style={{ gap: '3rem 2rem' }}>
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div key={idx} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.85rem' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid #81C784', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#81C784' }}>
                        <IconComp size={22} color="#81C784" />
                      </div>
                      <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, fontFamily: "'Manrope', sans-serif !important" }}>
                        {stat.value}
                      </span>
                    </div>

                    <strong style={{ fontSize: '13.5px', fontWeight: 900, color: '#81C784', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '6px', fontFamily: "'Manrope', sans-serif !important" }}>
                      {stat.label}
                    </strong>
                    <span style={{ fontSize: '14.5px', color: '#FFFFFF', lineHeight: 1.5, display: 'block', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                      {stat.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FactoryOverview;
