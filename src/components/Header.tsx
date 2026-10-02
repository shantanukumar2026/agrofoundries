import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowRight, Search, ChevronDown, Building2, Layers, ShieldCheck, Compass, Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onRequestQuoteClick?: () => void;
  onOpenExplorer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>('spray_machinery');

  useEffect(() => {
    const handleScroll = () => {
      setActiveMegaMenu(null);
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navCategories = [
    {
      id: 'spray_machinery',
      label: 'CROP SPRAYERS & APPLICATORS',
      icon: Layers,
      columns: [
        {
          title: 'FIELD SPRAYING MACHINERY',
          links: [
            'Precision Trailed Crop Sprayers',
            'Self-Propelled High-Clearance Sprayers',
            'Broad-Acre Spray Booms & Nozzle Rigs',
            'Chemical Flow Control & Metering Units',
            'Targeted Row Crop Application Systems'
          ]
        },
        {
          title: 'SPRAYER COMPONENTS & HARDWARE',
          links: [
            'Multi-Nozzle Atomizer Assemblies',
            'High-Pressure Diaphragm Pump Castings',
            'Spray Tank Agitator & Manifold Kits',
            'Quick-Attach Boom Section Hardware',
            'Corrosion-Resistant Fluid Fittings'
          ]
        }
      ]
    },
    {
      id: 'agri_machinery',
      label: 'FARM MACHINERY & IMPLEMENTS',
      icon: Building2,
      columns: [
        {
          title: 'TILLAGE & HARVESTING GEAR',
          links: [
            'Rotavator Gearbox 13x23 & 13x25 Casing',
            'Reduction Gear Housing & Harvester Parts',
            'Heavy Duty Stub Axles & Steering Knuckles',
            'Front & Rear 3-Point Linkage Assemblies',
            'Heavy Flanges & Rotary Tiller Blades'
          ]
        },
        {
          title: 'COMMERCIAL FARM EQUIPMENT',
          links: [
            'Agricultural Trailer Suspension Parts',
            'PTO Drive Assemblies & Heavy Hubs',
            'Ductile Iron Brake Drums & Flywheels',
            'Undercarriage Drive Sprockets & Pulleys',
            'Custom Agricultural Machine Tooling'
          ]
        }
      ]
    },
    {
      id: 'precision_agri',
      label: 'PRECISION AGRI SOLUTIONS',
      icon: ShieldCheck,
      columns: [
        {
          title: 'SMART SPRAYING TECHNOLOGY',
          links: [
            'Variable Rate Application Solutions',
            'Pressure Regulation & Flow Monitoring',
            'Row Guidance & Boom Section Shutoff',
            'Field Operating Efficiency Analytics',
            'Labour-Reduction Automated Spray Rigging'
          ]
        },
        {
          title: 'FARM EFFICIENCY SYSTEMS',
          links: [
            'High-Speed Acreage Coverage Kits',
            'Drop Size Optimization & Drift Control',
            'Heavy Duty Chassis & Terrain Dampening',
            'USA Broad-Acre Operational Packages',
            'Dealer Demonstration & Support Systems'
          ]
        }
      ]
    },
    {
      id: 'support_qa',
      label: 'DEALER & FIELD SUPPORT',
      icon: ShieldCheck,
      columns: [
        {
          title: 'FIELD SERVICE & INQUIRIES',
          links: [
            'Find Regional Equipment Dealer',
            'Request Commercial Machinery Demo',
            'Spare Parts & Maintenance Service',
            'Agritech Technical Consultation'
          ]
        },
        {
          title: 'STANDARDS & ACCREDITATIONS',
          links: [
            'ASABE S318 Equipment Standards',
            'ISO 9001:2015 Quality Manufacturing',
            'USDA Agritech Field Research Data',
            'FEMA North America Equipment Spec'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#FFFFFF',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: "'Manrope', sans-serif"
        }}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >

        {/* Tier 1: Middle Corporate Branding Bar */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '12px 0' }}>
          <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>

            {/* Corporate Group Emblem (First / Left) */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Logo height="58px" />
            </div>

            {/* Technical Search Bar removed per request */}

            {/* Right Division Emblem (Desktop) */}
            <div className="desktop-nav-only" style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={onRequestQuoteClick}
                style={{
                  padding: '12px 24px',
                  fontSize: '12.5px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 14px rgba(27, 94, 32, 0.25)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; }}
              >
                <span>GET PRODUCT DETAILS</span>
                <ArrowRight size={15} color="#FFEB3B" />
              </button>
            </div>

            {/* Mobile Header Right Controls: Hamburger Menu Toggle */}
            <div className="mobile-nav-toggle" style={{ alignItems: 'center', gap: '8px' }}>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                style={{
                  padding: '8px 10px',
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>


        {/* Tier 2: Corporate Industrial Navigation Bar */}
        <div style={{ background: '#4CAF50', borderBottom: '3px solid #388E3C', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}>
          <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none', width: '100%' }}>
              {navCategories.map((cat) => {
                const isActive = activeMegaMenu === cat.id;
                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveMegaMenu(cat.id)}
                    style={{ position: 'relative', flexShrink: 0, borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    <button
                      style={{
                        background: isActive ? '#FAF6EE' : 'transparent',
                        border: 'none',
                        color: isActive ? '#1B5E20' : '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        borderBottom: isActive ? '3px solid #1B5E20' : '3px solid transparent',
                        fontFamily: "'Manrope', sans-serif"
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = '#FAF6EE';
                          e.currentTarget.style.color = '#1B5E20';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#FFFFFF';
                        }
                      }}
                      onClick={() => setActiveMegaMenu(isActive ? null : cat.id)}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={13} style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: isActive ? '#1B5E20' : '#FFFFFF' }} />
                    </button>
                  </div>
                );
              })}

              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>

                <a
                  href="#contact"
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    padding: '16px 20px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Manrope', sans-serif",
                    borderRadius: '2px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <span>TALK TO US</span>
                </a>
              </div>
            </nav>

          </div>
        </div>

        {/* Mega Menu Overlay Panel Attached Directly to Header Bottom */}
        {activeMegaMenu && (
          <div
            className="megamenu-panel"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#FFFFFF',
              color: '#1B5E20',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
              borderTop: '3px solid #4CAF50',
              borderBottom: '3px solid #1B5E20',
              zIndex: 999,
              fontFamily: "'Manrope', sans-serif"
            }}
          >
            <div className="container-custom" style={{ padding: '2.5rem 2rem 1.75rem 2rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>

                {/* Categorized Multi-Column Content */}
                <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                  {navCategories.find(m => m.id === activeMegaMenu)?.columns.map((col, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '13px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1.5px solid #E5E7EB', paddingBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Manrope', sans-serif" }}>
                        <span style={{ width: '4px', height: '14px', background: '#4CAF50', display: 'inline-block' }} />
                        <span>{col.title}</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a
                              href="#products"
                              onClick={() => setActiveMegaMenu(null)}
                              style={{
                                color: '#2E7D32',
                                textDecoration: 'none',
                                fontSize: '13.5px',
                                fontWeight: 600,
                                display: 'inline-block',
                                transition: 'all 0.2s',
                                padding: '2px 6px',
                                borderRadius: '2px',
                                fontFamily: "'Manrope', sans-serif"
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = '#1B5E20';
                                e.currentTarget.style.background = '#FAF6EE';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = '#2E7D32';
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Division Right Panel */}
                <div style={{ gridColumn: 'span 4' }}>
                  <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                      <img
                        src="/images/red_sprayer_patriot.jpg"
                        alt="Agro Foundries Red USA Field Machinery"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27, 94, 32, 0.88), transparent)' }} />
                      <span style={{ position: 'absolute', bottom: '12px', left: '14px', color: '#FFFFFF', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: "'Manrope', sans-serif" }}>
                        PRECISION FARM MACHINERY
                      </span>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', margin: '0 0 6px 0', fontFamily: "'Manrope', sans-serif" }}>
                        North American Commercial Agricultural Equipment
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#4CAF50', margin: '0 0 14px 0', lineHeight: 1.45, fontFamily: "'Manrope', sans-serif" }}>
                        Modern agricultural machinery designed to reduce manual effort, improve spraying efficiency, and save operational time.
                      </p>
                      <a
                        href="#products"
                        onClick={() => setActiveMegaMenu(null)}
                        style={{ color: '#1B5E20', fontSize: '13px', fontWeight: 900, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Manrope', sans-serif" }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span>Access Machinery Catalogue</span>
                        <ArrowRight size={14} color="#4CAF50" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* Blur Backdrop Overlay when Mega Menu is Open */}
      {activeMegaMenu && (
        <div
          className="megamenu-backdrop"
          style={{ top: '100%' }}
          onClick={() => setActiveMegaMenu(null)}
        />
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="mobile-drawer-content">
            {/* Drawer Header */}
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', background: '#F8F9FA' }}>
              <Logo height="44px" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  border: '1px solid #4CAF50',
                  color: '#1B5E20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Search Bar removed */}

            {/* Mobile Primary Actions */}
            <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '12px 10px',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  border: '1.5px solid #4CAF50',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <Compass size={15} />
                <span>SOLUTIONS</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onRequestQuoteClick) onRequestQuoteClick();
                }}
                style={{
                  padding: '12px 10px',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: '1.5px solid #1B5E20',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <span>REQUEST DETAILS</span>
                <ArrowRight size={14} color="#FFFFFF" />
              </button>
            </div>

            {/* Collapsible Accordion Navigation Categories */}
            <div style={{ flex: 1, padding: '12px 0', overflowY: 'auto' }}>
              <div style={{ padding: '8px 20px', fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                MACHINERY DIVISIONS &amp; PRODUCTS
              </div>

              {navCategories.map((cat) => {
                const isExpanded = expandedMobileCategory === cat.id;
                const IconComp = cat.icon;

                return (
                  <div key={cat.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <button
                      onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                      style={{
                        width: '100%',
                        padding: '14px 20px',
                        background: isExpanded ? '#F0FDF4' : 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Manrope', sans-serif"
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <IconComp size={16} color="#1B5E20" />
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20' }}>{cat.label}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        color="#1B5E20"
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>

                    {isExpanded && (
                      <div style={{ padding: '8px 20px 16px 20px', background: '#FAFAFA' }}>
                        {cat.columns.map((col, cIdx) => (
                          <div key={cIdx} style={{ marginBottom: '14px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '3px', height: '10px', background: '#4CAF50', display: 'inline-block' }} />
                              <span>{col.title}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <a
                                    href="#products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                      fontSize: '12.5px',
                                      color: '#2E7D32',
                                      textDecoration: 'none',
                                      fontWeight: 600,
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      padding: '3px 0'
                                    }}
                                  >
                                    <ChevronRight size={12} color="#81C784" />
                                    <span>{link}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Direct Links */}
              <div style={{ padding: '16px 20px 8px 20px', fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                DIRECT DIRECTORY
              </div>
              <div style={{ padding: '0 20px 16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="#capabilities"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Machinery Capabilities
                </a>
                <a
                  href="#process"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Production &amp; Assembly Timeline
                </a>
                <a
                  href="#standards"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Agricultural Engineering Standards
                </a>
                <a
                  href="#testing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Pressure &amp; Spray Testing Labs
                </a>
                <a
                  href="#approvals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Industry Accreditations
                </a>
                <a
                  href="#news"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  News &amp; Technical Bulletins
                </a>
              </div>
            </div>

            {/* Mobile Drawer Footer Contacts */}
            <div style={{ padding: '16px 20px', background: '#144818', color: '#FFFFFF', borderTop: '2px solid #4CAF50' }}>
              <div style={{ fontSize: '11px', color: '#A5D6A7', fontWeight: 800, marginBottom: '8px' }}>
                TECHNICAL SALES &amp; SUPPORT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <a href="tel:5550198383" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                  <Phone size={14} color="#81C784" />
                  <span>+1 (555) 019-8383 / +1 (555) 019-8384</span>
                </a>
                <a href="mailto:info@agrofoundries.com" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <Mail size={14} color="#81C784" />
                  <span>info@agrofoundries.com</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
