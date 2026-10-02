import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const TestingFacilities: React.FC = () => {
  const tests = [
    'Mechanical Endurance & Fatigue Testing',
    'Spectrometry Chemical Dosing (ASTM A536)',
    '100% Hydrostatic & Boom Flow Validation',
    'Metallographic Solidification & Nodule Count',
    'CMM Laser Dimensional Audits',
    'ISO/IEC 17025 Accredited In-House Lab'
  ];

  return (
    <section id="testing" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', padding: '5rem 0' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column - Graphic/Image */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img 
              src="/images/usa_industrial_machining.jpg" 
              alt="Quality Assurance Laboratory" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>State-of-the-Art QA Facilities</span>
            </div>
          </div>

          {/* Right Column - Clean Text List */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50', fontWeight: 700 }}>QUALITY ASSURANCE & NDT</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#111827', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
              Testing Facilities & Labs
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We ensure uncompromising quality and traceability for every component through our fully equipped, accredited in-house testing laboratories.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tests.map((test, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={24} color="#4CAF50" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', color: '#1F2937', fontWeight: 600 }}>{test}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-animated" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: '#1B5E20', color: '#fff', padding: '14px 28px', 
              borderRadius: '4px', fontWeight: 700, textDecoration: 'none',
              transition: 'background 0.3s'
            }}>
              <span>REQUEST LAB REPORTS</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestingFacilities;
