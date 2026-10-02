import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ManufacturingProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'RAW MATERIALS',
      desc: 'We start with high-quality iron and steel to make sure our parts are strong right from the beginning.'
    },
    {
      num: '02',
      title: 'MELTING & CASTING',
      desc: 'We melt the metal in large furnaces and carefully pour it into molds to shape our heavy farm parts.'
    },
    {
      num: '03',
      title: 'HEAT TREATMENT',
      desc: 'We heat and cool the metal to make it tough enough to handle rocky farm fields without breaking.'
    },
    {
      num: '04',
      title: 'PRECISION MACHINING',
      desc: 'Our machinists cut and smooth the metal so that every single part fits together perfectly on the farm.'
    },
    {
      num: '05',
      title: 'QUALITY TESTING',
      desc: 'We thoroughly check every part for leaks, cracks, and flaws before it ever leaves our factory floor.'
    },
    {
      num: '06',
      title: 'SHIPPING TO YOU',
      desc: 'We paint the parts to stop rust, pack them safely, and ship them directly to farms across America.'
    }
  ];

  return (
    <section id="process" style={{ background: '#FAF6EE', padding: '5.5rem 0', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow">
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50' }}>QUALITY ASSURANCE WORKFLOW</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 800, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            MANUFACTURING PROCESS TIMELINE
          </h2>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="grid-responsive-6" style={{ position: 'relative' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                padding: '2rem 1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: '260px',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '7rem', fontWeight: 900, color: '#F0FDF4', zIndex: 0, fontFamily: "'Manrope', sans-serif !important", pointerEvents: 'none' }}>
                {step.num}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1B5E20', marginBottom: '1rem', lineHeight: 1, fontFamily: "'Manrope', sans-serif !important" }}>
                  {step.num}.
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', lineHeight: 1.35, marginBottom: '1rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: 1.6, margin: 0, fontFamily: "'Manrope', sans-serif !important", fontWeight: 500 }}>
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', zIndex: 1 }}>
                  <ArrowRight size={20} color="#4CAF50" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManufacturingProcess;
