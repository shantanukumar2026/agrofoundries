import React, { useState } from 'react';
import { Gauge, Radio, ShieldCheck, Activity } from 'lucide-react';

export const RailwayTelemetryWidget: React.FC = () => {
  const [speed, setSpeed] = useState<number>(14);
  const [signalStatus, setSignalStatus] = useState<'CLEAR' | 'CAUTION' | 'STOP'>('CLEAR');
  const [pressure, setPressure] = useState<number>(45);

  const getSignalColor = () => {
    switch (signalStatus) {
      case 'CLEAR': return '#4CAF50';
      case 'CAUTION': return '#F59E0B';
      case 'STOP': return '#DC2626';
    }
  };

  const getStatusLabel = () => {
    switch (signalStatus) {
      case 'CLEAR': return 'SPRAYING ACTIVE';
      case 'CAUTION': return 'HEADLAND BUFFER';
      case 'STOP': return 'VALVE SHUTOFF';
    }
  };

  return (
    <section className="section-full-vh section-dark-gradient" style={{ color: '#FAF6EE', borderBottom: '3px solid #4CAF50', position: 'relative' }}>
      <div className="blueprint-grid-dark" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow eyebrow-dark">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#81C784' }} />
              <span style={{ color: '#A5D6A7', fontWeight: 900 }}>LIVE FIELD SPRAYER &amp; BOOM TELEMETRY</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              INTELLIGENT CROP SPRAYER &amp; NOZZLE FLOW MONITOR
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid #81C784', padding: '8px 16px', borderRadius: '2px' }}>
            <Radio size={16} color={getSignalColor()} />
            <span style={{ fontSize: '11px', fontWeight: 900, color: getSignalColor(), letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              BOOM STATUS: {getStatusLabel()}
            </span>
          </div>
        </div>

        {/* Interactive Controls & Real-Time Telemetry Dashboard Grid */}
        <div className="telemetry-grid">

          {/* Left Panel: Speed & Signal Interactive JS Controls */}
          <div className="telemetry-col-left" style={{ background: '#144818', border: '1px solid #81C784', padding: '2rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
                <Gauge size={18} color="#81C784" />
                <span>SPRAYER GROUND SPEED CONTROL</span>
              </h3>

              {/* Speed Slider */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#E8F5E9', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Manrope', sans-serif !important" }}>FIELD OPERATIONAL SPEED (MPH)</label>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>{speed} MPH</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="1"
                  value={speed}
                  onChange={e => setSpeed(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#4CAF50', cursor: 'pointer', height: '6px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#E8F5E9', marginTop: '6px', fontWeight: 700 }}>
                  <span>0 (Stationary)</span>
                  <span>14 (Optimal Field Cruise)</span>
                  <span>25 (Road Transport)</span>
                </div>
              </div>

              {/* Signal Switcher Buttons */}
              <div>
                <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#E8F5E9', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px', fontFamily: "'Manrope', sans-serif !important" }}>SIMULATE BOOM STATE</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <button
                    onClick={() => { setSignalStatus('CLEAR'); setPressure(45); }}
                    style={{
                      background: signalStatus === 'CLEAR' ? '#4CAF50' : 'rgba(255,255,255,0.08)',
                      color: signalStatus === 'CLEAR' ? '#FFFFFF' : '#FAF6EE',
                      border: '1px solid #4CAF50',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                    onMouseEnter={e => { if (signalStatus !== 'CLEAR') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                    onMouseLeave={e => { if (signalStatus !== 'CLEAR') { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                  >
                    ACTIVE SPRAY
                  </button>

                  <button
                    onClick={() => { setSignalStatus('CAUTION'); setPressure(32); }}
                    style={{
                      background: signalStatus === 'CAUTION' ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                      color: signalStatus === 'CAUTION' ? '#FFFFFF' : '#FAF6EE',
                      border: '1px solid #F59E0B',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                    onMouseEnter={e => { if (signalStatus !== 'CAUTION') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                    onMouseLeave={e => { if (signalStatus !== 'CAUTION') { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                  >
                    HEADLAND TURN
                  </button>

                  <button
                    onClick={() => { setSignalStatus('STOP'); setPressure(0); }}
                    style={{
                      background: signalStatus === 'STOP' ? '#DC2626' : 'rgba(255,255,255,0.08)',
                      color: signalStatus === 'STOP' ? '#FFFFFF' : '#FAF6EE',
                      border: '1px solid #DC2626',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                    onMouseEnter={e => { if (signalStatus !== 'STOP') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                    onMouseLeave={e => { if (signalStatus !== 'STOP') { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                  >
                    FULL SHUTOFF
                  </button>
                </div>
              </div>

            </div>

            <div style={{ paddingTop: '1.25rem', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#4CAF50" />
              <span style={{ fontSize: '11px', color: '#E8F5E9', fontFamily: "'Manrope', sans-serif !important" }}>
                ISO 11783 (ISOBUS) &amp; ASABE S572.1 droplet spectrum compliance.
              </span>
            </div>
          </div>

          {/* Right Panel: Simulated Live Telemetry Telematics */}
          <div className="telemetry-col-right" style={{ background: '#FFFFFF', color: '#1B5E20', padding: '2.25rem', borderRadius: '2px', boxShadow: '0 20px 45px rgba(0,0,0,0.3)', borderTop: '4px solid #4CAF50', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  PRECISION BOOM PRESSURE &amp; FLOW TELEMETRY
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className={signalStatus === 'STOP' ? 'signal-dot-red' : 'signal-dot-green'} />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                    {signalStatus === 'STOP' ? 'SYSTEM IDLE' : 'OPTIMAL CALIBRATION'}
                  </span>
                </div>
              </div>

              {/* Telemetry Gauge Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: `4px solid ${getSignalColor()}` }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>BOOM PRESSURE</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: signalStatus === 'STOP' ? '#DC2626' : '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{pressure} PSI</strong>
                  <span style={{ fontSize: '10px', color: '#4CAF50', display: 'block', marginTop: '2px', fontWeight: 600 }}>Nominal: 40-50 PSI</span>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: '4px solid #4CAF50' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>APPLICATION RATE</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{signalStatus === 'STOP' ? '0.0' : Math.round(15 * (speed / 14))} GPA</strong>
                  <span style={{ fontSize: '10px', color: '#4CAF50', display: 'block', marginTop: '2px', fontWeight: 600 }}>Gallons / Acre Target</span>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: '4px solid #1B5E20' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>DROPLET ATOMIZATION</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{signalStatus === 'STOP' ? '0 µm' : '320 µm'}</strong>
                  <span style={{ fontSize: '10px', color: '#4CAF50', display: 'block', marginTop: '2px', fontWeight: 600 }}>Coarse Drift Reduction</span>
                </div>

              </div>

              {/* Telemetry Visual Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 800, color: '#1B5E20', marginBottom: '6px', fontFamily: "'Manrope', sans-serif !important" }}>
                  <span>ACTIVE SPRAY COVERAGE EFFICIENCY</span>
                  <span>{signalStatus === 'STOP' ? 0 : Math.round((speed / 25) * 100)}% THROUGHPUT</span>
                </div>
                <div style={{ height: '10px', background: '#E5E7EB', borderRadius: '2px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: `${signalStatus === 'STOP' ? 0 : (speed / 25) * 100}%`, background: getSignalColor(), transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#1B5E20', color: '#FAF6EE', padding: '1rem 1.25rem', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} color="#4CAF50" />
                <span style={{ fontSize: '12px', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>
                  PRECISION VARIABLE-RATE NITROGEN &amp; HERBICIDE CONTROL COMPLIANT
                </span>
              </div>
              <a href="#contact" className="link-hover-arrow" style={{ color: '#FAF6EE' }}>
                <span>REQUEST SPECS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RailwayTelemetryWidget;
