import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="company-overview" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint Grid Pattern Overlay */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="section-shape-accent" style={{ top: '10%', right: '5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div className="company-intro-grid">

          {/* Left Side: Storytelling & Why Choose Us */}
          <div className="company-intro-col-left">
            <div className="eyebrow" style={{ letterSpacing: '0.2em', marginBottom: '1rem', fontFamily: "'Manrope', sans-serif !important" }}>
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>THE AGRICULTURAL HERITAGE</span>
            </div>

            {/* High-Impact Uppercase Swiss Industrial Heading */}
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
                color: '#4CAF50',
                fontWeight: 900,
                lineHeight: 1.06,
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              SOLVING REAL PROBLEMS<br />
              <span style={{ color: '#1B5E20', position: 'relative', display: 'inline-block' }}>
                IN AMERICAN FIELDS
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '4px', background: '#4CAF50' }} />
              </span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#2E7D32', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '640px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              At Agro Foundries, we engineer durable crop sprayers, heavy-duty ductile iron implement castings, and high-performance machinery parts built for modern agriculture. From high-clearance boom sprayers and planetary carriers to roller rings, link housings, and rotavator gearboxes, our equipment empowers growers and commercial operators to maximize crop yield with zero field downtime.
            </p>

            {/* Why Choose Agro Foundries - 4 Story Pillars */}
            <div style={{ marginBottom: '2.25rem', padding: '1.25rem', background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #4CAF50', borderRadius: '2px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <strong style={{ fontSize: '12.5px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem', fontFamily: "'Manrope', sans-serif !important" }}>
                WHY GROWERS &amp; DEALERS CHOOSE AGRO FOUNDRIES
              </strong>
              <div className="grid-responsive-2" style={{ gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>ISO &amp; ASABE Standards Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>100% Calibrated &amp; Pressure Tested</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>High-Acreage Ductile Iron Alloys</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>Rapid USA Parts &amp; Field Support</span>
                </div>
              </div>
            </div>

            <a
              href="#capabilities"
              className="link-hover-arrow"
            >
              <span>DISCOVER OUR MANUFACTURING FOOTPRINT</span>
              <ArrowRight size={15} color="#4CAF50" />
            </a>
          </div>

          {/* Right Side: Crop Sprayer & Casting Photo */}
          <div className="company-intro-col-right">
            <div className="img-hover-zoom" style={{ border: '1px solid #E5E7EB', background: '#FFFFFF', boxShadow: '0 20px 45px rgba(27, 94, 32, 0.12)', borderRadius: '2px', position: 'relative' }}>

              {/* Badge overlay */}
              <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 20, background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 10px', border: '1px solid #4CAF50', letterSpacing: '0.1em', fontFamily: "'Manrope', sans-serif !important" }}>
                ASABE &bull; ISO 9001
              </div>

              {/* Dynamic Image */}
              <div style={{ height: '440px', overflow: 'hidden', position: 'relative', background: '#F8F9FA' }}>
                <img
                  src="/images/red_sprayer_patriot.jpg"
                  alt="AGRO FOUNDRIES RED USA PATRIOT CROP SPRAYER & CASTINGS"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Image Footer Details */}
              <div style={{ padding: '1.25rem', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '12px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                    PRECISION SPRAYING &amp; DUCTILE CASTINGS
                  </strong>
                  <span style={{ fontSize: '11px', color: '#4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    ASTM A536 Ductile Iron &bull; Precision Drift-Control Nozzles
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={16} color="#4CAF50" />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>FIELD TESTED</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
