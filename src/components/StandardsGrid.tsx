import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const StandardsGrid: React.FC = () => {
  const standards = [
    {
      code: 'HEAVY-DUTY QUALITY',
      name: 'MANUFACTURING TRACEABILITY',
      desc: 'Agricultural machinery production with full metallurgical tracking from raw melt to final field delivery.'
    },
    {
      code: 'PRECISION ATOMIZATION',
      name: 'UNIFORM DRIFT CONTROL',
      desc: 'Engineered spray nozzle geometry for ultra-fine atomization, uniform field coverage, and drift reduction.'
    },
    {
      code: 'DUCTILE IRON CASTINGS',
      name: 'HIGH-TENSILE ALLOY SPEC',
      desc: 'Heavy-duty ductile iron casting for implement housings, roller rings, and planetary carriers.'
    },
    {
      code: 'ISOBUS COMPATIBLE',
      name: 'TRACTOR & IMPLEMENT PROTOCOL',
      desc: 'Seamless electronic communication between tractor cab consoles, automatic boom leveling, and variable-rate controllers.'
    },
    {
      code: 'FIELD EQUIPMENT SAFETY',
      name: 'RUGGED DRIVELINE SHIELDING',
      desc: 'Heavy shielding and structural integrity built for high-torque PTO drivelines and rotary cutters.'
    },
    {
      code: 'COMMERCIAL GRADE',
      name: 'FARM EQUIPMENT RELIABILITY',
      desc: 'Heavy-duty equipment reliability, hydraulic safety tolerances, and field warranty protection.'
    }
  ];

  return (
    <section id="standards" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ bottom: '-10%', right: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>ENGINEERING &amp; MANUFACTURING QUALITY</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              AGRICULTURAL QUALITY &amp; TESTING STANDARDS
            </h2>
          </div>

          <a href="#contact" className="link-hover-arrow">
            <span>REQUEST TECHNICAL SPECIFICATIONS</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* Simple Standards Logo Strip */}
        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '1rem', justifyContent: 'space-between', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {standards.map((std, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                background: '#FFFFFF',
                border: '1.5px solid #E5E7EB',
                borderRadius: '6px',
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#4CAF50'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(76,175,80,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)'; }}
            >
              <ShieldCheck size={24} color="#1B5E20" />
              <span style={{ fontSize: '1rem', fontWeight: 900, color: '#111827', letterSpacing: '0.02em', fontFamily: "'Manrope', sans-serif !important", whiteSpace: 'nowrap' }}>
                {std.code}
              </span>
            </div>
          ))}
        </div>

        {/* High-Impact Visual Banner: USA Agricultural Machinery */}
        <div className="grid-responsive-2">

          <div className="img-hover-zoom" style={{ border: '1px solid #D1D5DB', borderRadius: '2px', overflow: 'hidden', position: 'relative', height: '220px' }}>
            <img
              src="/images/red_sprayer_patriot.jpg"
              alt="High-Clearance Boom Sprayer in American Field"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,94,32,0.9), transparent)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                PRECISION SPRAY SYSTEMS
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF', margin: '4px 0 0 0', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                Commercial High-Clearance Crop Sprayers &amp; Booms
              </h3>
            </div>
          </div>

          <div className="img-hover-zoom" style={{ border: '1px solid #D1D5DB', borderRadius: '2px', overflow: 'hidden', position: 'relative', height: '220px' }}>
            <img
              src="/images/red_combine_axialflow.jpg"
              alt="American Grain Harvest & Tillage Machinery"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,94,32,0.9), transparent)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                PRECISION HARVEST &amp; TILLAGE
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF', margin: '4px 0 0 0', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                Heavy-Duty Rotavator Gearboxes &amp; Combine Upgrades
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StandardsGrid;
