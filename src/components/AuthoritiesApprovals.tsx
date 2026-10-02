import React, { useRef } from 'react';
import { Landmark, Building2, Globe2, ShieldCheck, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const AuthoritiesApprovals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const approvals = [
    {
      category: 'ASABE & ANSI STANDARDS',
      icon: Award,
      desc: 'American Society of Agricultural and Biological Engineers standards.',
      items: [
        'ANSI / ASABE S572.1 Spray Droplet Spectrum Classification',
        'ASABE S318 Safety for Agricultural Field Equipment',
        'Standardized 3-Point Hitch Dimensions (ASABE S217)'
      ]
    },
    {
      category: 'FEMA & AEM INDUSTRY BODIES',
      icon: Landmark,
      desc: 'North American farm machinery manufacturing associations.',
      items: [
        'Farm Equipment Manufacturers Association (FEMA) Active Member',
        'Association of Equipment Manufacturers (AEM) USA Standards',
        'Equipment Security & Field Warranty Protection Protocol'
      ]
    },
    {
      category: 'USDA & EPA COMPLIANCE',
      icon: Building2,
      desc: 'Federal environmental & precision conservation standards.',
      items: [
        'EPA Drift-Reduction Technology (DRT) Verified Nozzle Ratings',
        'USDA NRCS Variable-Rate Precision Farming Guidelines',
        'Clean Water Act Agricultural Chemical Containment Compliance'
      ]
    },
    {
      category: 'OEM MACHINERY ALLIANCES',
      icon: ShieldCheck,
      desc: 'Direct supplier qualification for North American tractor & implement builders.',
      items: [
        'Commercial Sprayer & Tillage OEM Approved Supplier',
        'Precision Cast Ductile Iron Planetary & Axle Housings',
        'Direct Foundry to Assembly Line Just-In-Time Logistics'
      ]
    },
    {
      category: 'ISO & GLOBAL PROTOCOLS',
      icon: Globe2,
      desc: 'International electronics & mechanical safety certifications.',
      items: [
        'ISO 11783 (ISOBUS) Tractor-Implement Electronic Protocol',
        'ISO 4254-1 General Safety for Agricultural Machinery',
        'ISO 9001:2015 Manufacturing Traceability Audited'
      ]
    },
    {
      category: 'METALLURGY QA AUDITING',
      icon: ShieldCheck,
      desc: 'Full chemical composition & mechanical strength certifications.',
      items: [
        'ASTM A536 Ductile Iron Specification Compliance (Grade 65-45-12)',
        'ASTM A48 Class 35 Grey Iron Ballast Standards',
        'ISO/IEC 17025 Accredited In-House Metallurgical Testing Lab',
        '100% Heat Lot Chemical Spectrometer Certification'
      ]
    }
  ];

  return (
    <section id="approvals" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#1B5E20' }}>ASABE, FEMA &amp; ISO INSTITUTIONAL ACCREDITATION</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              INDUSTRY ACCREDITATIONS &amp; APPROVALS
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
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
            <a href="#contact" className="link-hover-arrow">
              <span>REQUEST AUDIT DOCUMENTATION</span>
              <ArrowRight size={14} color="#1B5E20" />
            </a>
          </div>
        </div>

        {/* 6 Full Detailed Regulatory Cards Horizontal Slider */}
        <div
          ref={scrollRef}
          className="cert-slider"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            marginBottom: '2.5rem',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .cert-slider::-webkit-scrollbar { display: none; }
          `}} />
          {approvals.map((app, idx) => {
            const IconComp = app.icon;
            return (
              <div
                key={idx}
                className="card-hover-industrial"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D1D5DB',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  minWidth: 'calc(33.333% - 1rem)',
                  flexShrink: 0,
                  scrollSnapAlign: 'start'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.85rem' }}>
                    <div style={{ width: '46px', height: '46px', background: '#1B5E20', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #4CAF50' }}>
                      <IconComp size={22} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 900, color: '#111827', letterSpacing: '0.02em', textTransform: 'uppercase', margin: 0, lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                      {app.category}
                    </h3>
                  </div>

                  {/* Authority Scope Description - Large & High Visibility */}
                  <div style={{ background: '#F8FAFC', borderLeft: '3px solid #1B5E20', padding: '10px 14px', borderRadius: '4px', marginBottom: '1.25rem' }}>
                    <p style={{ fontSize: '15px', color: '#1F2937', fontWeight: 600, lineHeight: 1.5, margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                      {app.desc}
                    </p>
                  </div>


                </div>
              </div>
            );
          })}
        </div>

        {/* Live Accreditation Audit Telemetry Bar */}
        <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', borderTop: '3px solid #4CAF50' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>FOUNDRY CLASSIFICATION</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>ASABE &amp; ASTM CERTIFIED FOUNDRY</strong>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>ULTRASONIC NDT PASS RATE</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>100.00% VOLUMETRIC SCAN</strong>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>ASABE &amp; FEMA COMPLIANCE</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>FULL HEAT CODE CERTIFICATION</strong>
            </div>
          </div>

          <a href="#contact" className="link-hover-arrow" style={{ color: '#FFFFFF', borderBottomColor: '#81C784' }}>
            <span>DOWNLOAD AUDIT PACK</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AuthoritiesApprovals;
