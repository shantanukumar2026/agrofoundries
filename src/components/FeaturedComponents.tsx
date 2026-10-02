import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface FeaturedComponentsProps {
  onOpenProductDetail?: (productTitle: string) => void;
}

export const FeaturedComponents: React.FC<FeaturedComponentsProps> = ({ onOpenProductDetail }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory] = useState<string>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  const components = [
    // Precision Sprayers
    {
      id: 'spray-01',
      category: 'sprayers',
      title: 'High-Clearance Boom Sprayer',
      series: 'AGRO-SPRAY 120',
      specs: '120ft Boom • Pulse Width Mod',
      desc: 'Precision high-clearance self-propelled crop sprayer with automatic boom height leveling and drift-control nozzles.',
      img: '/images/red_sprayer_patriot.jpg',
    },
    {
      id: 'spray-02',
      category: 'sprayers',
      title: 'High-Capacity Axial Combine Harvester',
      series: 'AGRO-HARVEST 9120',
      specs: '523 HP • 350-Bushel Grain Tank',
      desc: 'Commercial high-capacity single-rotor combine harvester engineered for gentle grain threshing and maximum field output.',
      img: '/images/red_combine_axialflow.jpg',
    },
    {
      id: 'spray-03',
      category: 'sprayers',
      title: 'Heavy-Duty Articulated 4WD Tractor',
      series: 'AGRO-STEIGER 485',
      specs: '485 HP • Heavy Drawbar Capacity',
      desc: 'High-power 4WD articulated tractor built for deep ripping, continuous tillage, and high-acreage field operations.',
      img: '/images/red_tractor_steiger.jpg',
    },
    {
      id: 'spray-04',
      category: 'sprayers',
      title: 'Row-Crop High-Torque Tractor',
      series: 'AGRO-MAGNUM 250',
      specs: '250 HP • CVT Precision Drive',
      desc: 'High-efficiency row-crop tractor providing maximum traction balance for heavy implements and planting rigs.',
      img: '/images/red_tractor_magnum.jpg',
    },

    // Agricultural Castings (Casting Reference)
    {
      id: 'cast-01',
      category: 'castings',
      title: 'Heavy Duty Cambridge Roller Ring',
      series: 'CRES-RING 500',
      specs: 'Ductile Iron ASTM A536',
      desc: 'Robust breaker and Cambridge packer rings for soil consolidation, moisture retention, and seedbed preparation.',
      img: '/images/prod_centering_disc.jpg',
    },
    {
      id: 'cast-02',
      category: 'castings',
      title: 'Tractor Lower Link Housing',
      series: 'HITCH-LINK 3P',
      specs: 'Grade 65-45-12 Ductile',
      desc: 'High-tensile 3-point hitch link housing and pivot brackets manufactured to withstand extreme tractive loads.',
      img: '/images/prod_pin_bracket.jpg',
    },
    {
      id: 'cast-03',
      category: 'castings',
      title: 'Tractor Front Counterweights',
      series: 'BALLAST-PRO',
      specs: 'Grey Iron ASTM A48 Class 35',
      desc: 'Interlocking suitcase counterweights and wheel ballast weights providing optimal traction balance in wet soils.',
      img: '/images/amsted_jacking_pad.jpg',
    },
    {
      id: 'cast-04',
      category: 'castings',
      title: 'Planetary Carrier Housing',
      series: 'DRIVE-CAST',
      specs: 'CNC Machined Ductile Iron',
      desc: 'Precision-machined final drive planetary gear carriers for high-horsepower tractors and harvesters.',
      img: '/images/prod_overspeed_trip_casting.jpg',
    },

    // Combine & Harvesting Upgrades (Parts Reference)
    {
      id: 'comb-01',
      category: 'combine',
      title: 'Progressive Discharge Beater',
      series: 'HARVEST-PRO 80',
      specs: 'Dynamic Balanced Steel',
      desc: 'Progressive discharge beater designed for smooth grain flow, reduced rotor loss, and higher threshing capacity.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
    },
    {
      id: 'comb-02',
      category: 'combine',
      title: 'Square Bar Concave - Corn & Beans',
      series: 'CONCAVE-SB 8010',
      specs: 'Abrasion Resistant Steel',
      desc: 'High-throughput square bar concaves providing cleaner grain samples and maximum crop separation in high-moisture harvests.',
      img: '/images/prod_railway_track_plates.jpg',
    },
    {
      id: 'comb-03',
      category: 'combine',
      title: 'Feeder Chain with Poly Flights',
      series: 'FEED-CHAIN PF',
      specs: 'Heavy-Duty Roller Links',
      desc: 'Quiet-running poly flight feeder chains designed for reduced rock damage and positive header intake.',
      img: '/images/prod_sprockets.jpg',
    },
    {
      id: 'comb-04',
      category: 'combine',
      title: 'High-Capacity Kile Rotor Flights',
      series: 'ROTOR-KILE',
      specs: 'Wear-Resistant Alloy',
      desc: 'Engineered rotor inlet flighting ensuring continuous transition into the threshing chamber with minimal grain cracking.',
      img: '/images/prod_brake_head.jpg',
    },

    // Tillage & Implements
    {
      id: 'till-01',
      category: 'tillage',
      title: 'Rotavator Gearbox 13x23',
      series: 'AGRI GEAR 13x23',
      specs: 'Precision Cast Ductile Iron',
      desc: 'Heavy-duty multi-speed rotavator gearbox engineered for deep seedbed cultivation and high-torque soil churning.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
    },
    {
      id: 'till-02',
      category: 'tillage',
      title: 'Secondary Reduction Gearbox 13x25',
      series: 'AGRI GEAR 13x25',
      specs: 'Hardened Helical Gears',
      desc: 'Severe-duty rotary tiller transmission case with dual oil seals and high shock resistance for rocky terrains.',
      img: '/images/amsted_rotavator_gearbox.jpg',
    },
    {
      id: 'till-03',
      category: 'tillage',
      title: 'Notched Tillage Disc Blades',
      series: 'DISC-HEAVY 26',
      specs: 'Boron Steel 50-52 HRC',
      desc: 'Heat-treated concaved disc harrow blades providing superior residue cutting and soil aeration across stubble.',
      img: '/images/prod_centering_disc.jpg',
    },
    {
      id: 'till-04',
      category: 'tillage',
      title: 'Planter Heavy-Duty Hub & Spindle',
      series: 'SEED-HUB HD',
      specs: 'Triple Lip Sealed Bearing',
      desc: 'Zero-maintenance planter gauge wheel hubs designed to resist abrasive dust, fertilizer salts, and slurry ingress.',
      img: '/images/amsted_bogie_axlebox.jpg',
    },

    // Tractor & Drivetrain
    {
      id: 'trac-01',
      category: 'tractor',
      title: 'Agricultural Differential Housing',
      series: 'DIFF-CASE 4WD',
      specs: 'Machined Ductile Iron',
      desc: 'Stout differential cases and axle carrier assemblies engineered for heavy mechanical front wheel drive (MFWD) tractors.',
      img: '/images/amsted_bogie_axlebox.jpg',
    },
    {
      id: 'trac-02',
      category: 'tractor',
      title: 'Heavy-Duty Brake Drums',
      series: 'AGRI BRAKE HD',
      specs: 'High-Carbon Grey Iron',
      desc: 'Fade-resistant agricultural brake drums with integrated cooling fins for grain haulers, manure tankers, and heavy trailers.',
      img: '/images/locomotive_wheelset_stock.jpg',
    },
    {
      id: 'trac-03',
      category: 'tractor',
      title: 'Engine Balanced Flywheels',
      series: 'FLYWHEEL D-12',
      specs: 'Dynamically Balanced ISO G2.5',
      desc: 'Precision cast and CNC-turned engine flywheels for diesel agricultural power units and irrigation pumps.',
      img: '/images/real_cnc_machining_stock.jpg',
    },
    {
      id: 'trac-04',
      category: 'tractor',
      title: 'PTO Driveline Drive Hubs & Yokes',
      series: 'PTO-YOKE 1000',
      specs: 'Forged Alloy Steel',
      desc: 'Splined PTO driveline output yokes and slip clutch adapters with safety shielding to power silage choppers and balers.',
      img: '/images/prod_pin_bracket.jpg',
    }
  ];

  const filteredComponents = activeCategory === 'all'
    ? components
    : components.filter(c => c.category === activeCategory);

  return (
    <>
      <section id="products" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', padding: '2.75rem 0 1.5rem 0' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Section Header with Navigation Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span>ASABE, ISO 9001 &amp; ASTM A536 CERTIFIED CATALOG</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
                FEATURED AGRICULTURAL MACHINERY &amp; CASTINGS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Carousel Arrows */}
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
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
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
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
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

              <a
                href="#contact"
                className="link-hover-arrow"
              >
                <span>REQUEST COMPLETE TECHNICAL CATALOG</span>
                <ArrowRight size={14} color="#4CAF50" />
              </a>
            </div>
          </div>

          {/* Full Card Horizontal Slider (4 visible across 100% container width) */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
              width: '100%'
            }}
          >
            {filteredComponents.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenProductDetail && onOpenProductDetail(item.title)}
                className="card-slider-item card-hover-industrial img-hover-zoom"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  minHeight: '480px'
                }}
              >
                {/* Product Photo */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#000000', position: 'relative', flexShrink: 0, borderBottom: '1px solid #E5E7EB', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.series}
                  </span>
                </div>

                {/* Full Card Body & Footer */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', margin: '0 0 6px 0', textTransform: 'uppercase', lineHeight: 1.3, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', display: 'block', marginBottom: '8px', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.specs}
                    </span>
                    <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={13} color="#4CAF50" />
                      <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>Agro Foundries QUALITY CERTIFIED</span>
                    </div>

                    <span style={{
                      background: '#E8F5E9',
                      color: '#1B5E20',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      AAR / AREMA
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedComponents;

