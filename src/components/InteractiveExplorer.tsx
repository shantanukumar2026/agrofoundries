import React, { useState, useMemo } from 'react';
import {
  Search, Check,
  ChevronRight, Table, Grid, Info, Sparkles, X, Compass
} from 'lucide-react';

export interface ProductItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  series: string;
  specs: string;
  compliance: string[];
  axleLoad: string;
  materialGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  hardness: string;
  desc: string;
  img: string;
  keyFeatures: string[];
}

export const EXPLORER_PRODUCTS: ProductItem[] = [
  // 1. Sprayers
  {
    id: 'spray-01',
    category: 'sprayers',
    categoryLabel: 'Precision Field Sprayers',
    title: 'High-Clearance Self-Propelled Boom Sprayer 120ft',
    series: 'AGRO-PATRIOT 120',
    specs: '120ft Truss Boom • Pulse Width Modulation',
    compliance: ['ASABE S572.1', 'ISO 11783', 'EPA DRT'],
    axleLoad: 'High Clearance',
    materialGrade: 'High-Strength Tubular Alloy & Poly Tank',
    tensileStrength: '550 MPa',
    yieldStrength: '420 MPa',
    hardness: '210 BHN',
    desc: 'High-performance commercial self-propelled field sprayer engineered for high-acreage American row crops with automatic ultrasonic boom height control and drift-reduction atomization.',
    img: '/images/red_sprayer_patriot.jpg',
    keyFeatures: ['120-Foot Dual-Fold Truss Boom', 'Individual Pulse Width Modulation Nozzle Shutoff', '1,200 Gallon Solution Tank', 'Air-Suspended High-Clearance Chassis']
  },
  {
    id: 'spray-02',
    category: 'sprayers',
    categoryLabel: 'Precision Field Sprayers',
    title: 'Commercial Axial-Flow High-Capacity Combine Harvester',
    series: 'AGRO-HARVEST 9120',
    specs: '523 HP Peak • 350-Bushel Grain Tank',
    compliance: ['ASABE S318', 'ISO 4254', 'FEMA Standards'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'High-Tensile Structural Steel & Quadtrac Ready',
    tensileStrength: '620 MPa',
    yieldStrength: '480 MPa',
    hardness: '240 BHN',
    desc: 'Class 9 high-throughput rotary combine harvester featuring gentle single-rotor threshing, precision yield mapping, and rapid 4.0 bu/sec unloading rates.',
    img: '/images/red_combine_axialflow.jpg',
    keyFeatures: ['Axial-Flow Single Rotor Threshing', '350-Bushel Grain Tank Capacity', 'High-Output Grain Unloading Auger', 'Integrated GPS Yield Mapping']
  },
  {
    id: 'spray-03',
    category: 'sprayers',
    categoryLabel: 'Precision Field Sprayers',
    title: 'Heavy Articulated 4WD Field Tractor 485 HP',
    series: 'AGRO-STEIGER 485',
    specs: '485 Rated HP • Heavy Drawbar Category IV/V',
    compliance: ['ASABE S349', 'ISO 500', 'SAE J2847'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'Cast Ductile Iron Axle Housings & Heavy Forged Frame',
    tensileStrength: '700 MPa',
    yieldStrength: '520 MPa',
    hardness: '260 BHN',
    desc: 'Heavy-duty articulated 4WD high-horsepower agricultural tractor built for continuous deep tillage, heavy rippers, and high-acreage field preparation.',
    img: '/images/red_tractor_steiger.jpg',
    keyFeatures: ['485 HP High-Torque Turbocharged Engine', 'Articulated Hydraulic Center Pivot', 'Heavy-Duty Category 4/5 Three-Point Hitch', 'Heavy Double-Reduction Planetary Axles']
  },
  {
    id: 'spray-04',
    category: 'sprayers',
    categoryLabel: 'Precision Field Sprayers',
    title: 'Row-Crop High-Torque Agricultural Tractor 250 HP',
    series: 'AGRO-MAGNUM 250',
    specs: '250 HP • Continuously Variable Transmission (CVT)',
    compliance: ['ASABE S279', 'ISO 730', 'FEMA Approved'],
    axleLoad: 'Mid-Range',
    materialGrade: 'ASTM A536 Grade 80-55-06 Ductile Castings',
    tensileStrength: '650 MPa',
    yieldStrength: '450 MPa',
    hardness: '220 BHN',
    desc: 'Versatile row-crop workhorse engineered for precision planting, spray implement towing, and mid-range tillage with optimal power-to-weight balance.',
    img: '/images/red_tractor_magnum.jpg',
    keyFeatures: ['CVT Transmission with Smooth Torque Curve', 'High-Flow Electro-Hydraulic Remote Valves', 'Suspended Front Axle for Smooth Row Operations', 'ISOBUS Virtual Terminal Display Integration']
  },

  // 2. Castings
  {
    id: 'cast-01',
    category: 'castings',
    categoryLabel: 'Agricultural Castings',
    title: 'Heavy-Duty Cambridge Packer Roller Ring 500mm',
    series: 'SERIES CRES-RING',
    specs: 'ASTM A536 Grade 65-45-12 Ductile Iron',
    compliance: ['ASTM A536', 'ISO 9001:2015', 'FEMA Spec'],
    axleLoad: 'Implement',
    materialGrade: 'Spheroidal Graphite Ductile Iron',
    tensileStrength: '450 MPa',
    yieldStrength: '310 MPa',
    hardness: '170-210 BHN',
    desc: 'Robust breaker and Cambridge packer roller rings for seedbed preparation, soil clod crushing, moisture retention, and uniform seed emergence.',
    img: '/images/prod_centering_disc.jpg',
    keyFeatures: ['100% Porosity-Free Ductile Iron Casting', 'Optimized Serrated Edge Profile', 'Precision Bored Hub Tolerances', 'High Impact Resistance in Rocky Soils']
  },
  {
    id: 'cast-02',
    category: 'castings',
    categoryLabel: 'Agricultural Castings',
    title: 'Tractor 3-Point Hitch Lower Link Housing & Pivot',
    series: 'SERIES HITCH-LINK',
    specs: 'ASTM A536 80-55-06 High-Tensile Ductile',
    compliance: ['ASABE S217', 'ASTM A536', 'ISO 9001:2015'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'Austempered Ductile Iron (ADI)',
    tensileStrength: '800 MPa',
    yieldStrength: '550 MPa',
    hardness: '260-310 BHN',
    desc: 'Severe-duty lower link draft arm bracket and pivot housing engineered to handle dynamic pull loads from heavy tillage shanks and rippers.',
    img: '/images/prod_pin_bracket.jpg',
    keyFeatures: ['High Fatigue Strength Under Cyclic Tractive Pull', 'Robotic CNC Machined Bushing Bores', 'Heavy Reinforcement Ribbing', 'Corrosion Inhibited Primer Coating']
  },
  {
    id: 'cast-03',
    category: 'castings',
    categoryLabel: 'Agricultural Castings',
    title: 'Interlocking Tractor Front Counterweight Ballast (100 lbs)',
    series: 'SERIES BALLAST-PRO',
    specs: 'ASTM A48 Class 35 Heavy Grey Iron',
    compliance: ['ASTM A48', 'ASABE S318', 'ISO 9001:2015'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'High-Density Grey Cast Iron',
    tensileStrength: '250 MPa',
    yieldStrength: '180 MPa',
    hardness: '190-230 BHN',
    desc: 'Interlocking suitcase counterweights and rear wheel ballast rings delivering precise front-to-rear traction balance and reduced wheel slippage.',
    img: '/images/amsted_jacking_pad.jpg',
    keyFeatures: ['Precision Cast Integrated Carry Handle', 'Interlocking Keyway Prevents Clattering', 'Consistent ±1% Weight Distribution', 'Weather-Resistant Epoxy Enamel Finish']
  },
  {
    id: 'cast-04',
    category: 'castings',
    categoryLabel: 'Agricultural Castings',
    title: 'Heavy Planetary Gear Carrier Housing',
    series: 'SERIES PLANET-CARRIER',
    specs: 'High-Strength SG Iron 70-50-05',
    compliance: ['ASTM A536', 'ISO 9001:2015', 'SAE J434'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'Ductile Iron with Induction Hardened Bores',
    tensileStrength: '700 MPa',
    yieldStrength: '500 MPa',
    hardness: '240-280 BHN',
    desc: 'Precision 5-axis CNC machined planetary carrier housing for final drive gearboxes on combine harvesters and high-horsepower agricultural tractors.',
    img: '/images/prod_overspeed_trip_casting.jpg',
    keyFeatures: ['±0.015mm Pinion Shaft Alignment', 'MagmaSoft Verified Thermal Solidification', 'Integrated Lubrication Channels', 'Dynamic Balanced for Heavy Torque']
  },

  // 3. Harvesting Upgrades
  {
    id: 'harv-01',
    category: 'harvesting',
    categoryLabel: 'Combine & Harvesting Upgrades',
    title: 'Progressive Discharge Beater Assembly',
    series: 'SERIES DISCHARGE-PRO',
    specs: 'Precision Dynamic Balanced Steel Construction',
    compliance: ['ASABE S343', 'ISO 9001:2015', 'FEMA Spec'],
    axleLoad: 'Combine & Harvesting',
    materialGrade: 'Abrasion Resistant High-Yield Alloy',
    tensileStrength: '650 MPa',
    yieldStrength: '480 MPa',
    hardness: '260 BHN',
    desc: 'Upgraded progressive combine discharge beater engineered to prevent rotor plug-ups, accelerate straw flow, and reduce power demand in tough residue.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    keyFeatures: ['Progressive Spiral Flighting Design', 'Computer Dynamically Balanced to G2.5 Spec', 'Reversible Hardened Wear Bars', 'Zero-Vibration High-Speed Rotor Operation']
  },
  {
    id: 'harv-02',
    category: 'harvesting',
    categoryLabel: 'Combine & Harvesting Upgrades',
    title: 'High-Throughput Square Bar Concave (Corn & Soybeans)',
    series: 'SERIES CONCAVE-SB',
    specs: 'Heat-Treated Square Bar Alloy Steel',
    compliance: ['ASTM A36/A514', 'ISO 9001:2015', 'FEMA Spec'],
    axleLoad: 'Combine & Harvesting',
    materialGrade: 'Quenched & Tempered Wear-Resistant Steel',
    tensileStrength: '750 MPa',
    yieldStrength: '550 MPa',
    hardness: '320-360 BHN',
    desc: 'Heavy-duty square bar concaves providing up to 30% cleaner grain samples, reduced rotor loss, and superior threshing action in high-moisture corn and beans.',
    img: '/images/prod_railway_track_plates.jpg',
    keyFeatures: ['Aggressive Square Bar Threshing Edges', 'Precision Wire Spacing for High Moisture', 'Individually Replaceable Cover Plates', 'Direct Bolt-In OEM Replacement Geometry']
  },
  {
    id: 'harv-03',
    category: 'harvesting',
    categoryLabel: 'Combine & Harvesting Upgrades',
    title: 'Heavy Feederhouse Chain with High-Density Poly Flights',
    series: 'SERIES FEED-POLY',
    specs: 'Chrome Moly Riveted Chain & Ultra-Wear Poly',
    compliance: ['ISO 9001:2015', 'ASABE S318', 'AEM Spec'],
    axleLoad: 'Combine & Harvesting',
    materialGrade: 'Case-Hardened Alloy Pins & UHMW Poly',
    tensileStrength: '850 MPa',
    yieldStrength: '620 MPa',
    hardness: '58-62 HRC Pins',
    desc: 'Ultra quiet poly flight feeder chain that absorbs rock impacts, prevents stone trap bending, and delivers uninterrupted positive crop feeding.',
    img: '/images/prod_sprockets.jpg',
    keyFeatures: ['Impact-Absorbing UHMW Poly Flights', 'Heavy-Duty CA557 Connector Links', 'Reduced Header Infeed Noise', 'Extends Feederhouse Floor Pan Life']
  },
  {
    id: 'harv-04',
    category: 'harvesting',
    categoryLabel: 'Combine & Harvesting Upgrades',
    title: 'Wear-Resistant Kile Rotor Inlet Flighting Kit',
    series: 'SERIES ROTOR-KILE',
    specs: 'Austenitic Hardfaced Flight Segments',
    compliance: ['ISO 9001:2015', 'ASTM A532', 'FEMA Standards'],
    axleLoad: 'Combine & Harvesting',
    materialGrade: 'Chrome Carbide Hardfaced Alloy',
    tensileStrength: '690 MPa',
    yieldStrength: '510 MPa',
    hardness: '52-56 HRC Surface',
    desc: 'Extended wear inlet rotor flighting providing smooth uninterrupted crop transition from feederhouse to threshing cylinder with reduced kernel cracking.',
    img: '/images/prod_brake_head.jpg',
    keyFeatures: ['Continuous Feeding Transition Profile', 'Chrome Carbide Overlay on Leading Edges', 'Eliminates Crop Bunching at Rotor Nose', 'Simple Bolt-On Installation']
  },

  // 4. Tillage & Implements
  {
    id: 'till-01',
    category: 'tillage',
    categoryLabel: 'Tillage & Rotary Implements',
    title: 'Rotavator Heavy Multi-Speed Gearbox 13x23',
    series: 'SERIES AGRI-GEAR 13x23',
    specs: 'Multi-Speed Ratio • Ductile Iron Casting Housing',
    compliance: ['ISO 9001:2015', 'ASABE S318', 'FEMA Approved'],
    axleLoad: 'Implement',
    materialGrade: 'ASTM A536 Grade 65-45-12 Housing & 20MnCr5 Gears',
    tensileStrength: '680 MPa',
    yieldStrength: '480 MPa',
    hardness: '58-62 HRC Gears',
    desc: 'Heavy-duty multi-speed rotavator gearbox engineered for high-horsepower tractors, seedbed rototillers, and deep cultivation in stony soils.',
    img: '/images/amsted_rotavator_gearbox.jpg',
    keyFeatures: ['Precision Crown-Shaved Helical Gears', 'Dual Lip High-Temp Nitrile Oil Seals', 'Integrated Top Oil Level Dipstick', 'Heavy Oil Sump for Thermal Heat Dissipation']
  },
  {
    id: 'till-02',
    category: 'tillage',
    categoryLabel: 'Tillage & Rotary Implements',
    title: 'Secondary Reduction Rotary Tiller Gearcase 13x25',
    series: 'SERIES AGRI-GEAR 13x25',
    specs: 'High-Reduction Planetary Ratio 13:25',
    compliance: ['ISO 9001:2015', 'AGMA Spec', 'FEMA Standards'],
    axleLoad: 'Implement',
    materialGrade: 'High-Grade Spheroidal Graphite Iron',
    tensileStrength: '720 MPa',
    yieldStrength: '520 MPa',
    hardness: '240-270 BHN',
    desc: 'Severe-duty rotary tiller transmission case with heavy shock load absorbing capability, case-hardened alloy splines, and synthetic gear lubricant compatibility.',
    img: '/images/amsted_rotavator_gearbox.jpg',
    keyFeatures: ['High Shock Absorption Rating', 'Precision Robotic Face-Milled Mounting Flanges', 'Tapered Roller Bearing Support', 'Field-Proven Across 50,000+ Operating Hours']
  },
  {
    id: 'till-03',
    category: 'tillage',
    categoryLabel: 'Tillage & Rotary Implements',
    title: 'Notched Heavy Tillage Disc Harrow Blades 26-Inch',
    series: 'SERIES DISC-HEAVY 26',
    specs: 'Boron Steel 50-52 HRC Heat Treated',
    compliance: ['ASTM A684', 'ISO 5680', 'FEMA Approved'],
    axleLoad: 'Implement',
    materialGrade: 'Boron Alloy Implement Steel (AISI 15B35)',
    tensileStrength: '1450 MPa',
    yieldStrength: '1200 MPa',
    hardness: '50-52 HRC',
    desc: 'Heat-treated concaved notched disc harrow blades providing superior corn stalk residue slicing, soil penetration, and zero-shatter toughness.',
    img: '/images/prod_centering_disc.jpg',
    keyFeatures: ['Quenched and Tempered Boron Steel', 'Reinforced Square Axle Arbor Hole', 'Razor-Sharpened Notched Cutting Profile', 'Maximum Resistance to Rock Chipping']
  },
  {
    id: 'till-04',
    category: 'tillage',
    categoryLabel: 'Tillage & Rotary Implements',
    title: 'High-Speed Planter Heavy-Duty Hub & Spindle Assembly',
    series: 'SERIES SEED-HUB HD',
    specs: 'Triple-Lip Cartridge Seal • 5-Bolt Pattern',
    compliance: ['ASABE S318', 'ISO 9001:2015', 'SAE J434'],
    axleLoad: 'Implement',
    materialGrade: 'Forged 1045 Carbon Steel Spindle & Ductile Hub',
    tensileStrength: '620 MPa',
    yieldStrength: '430 MPa',
    hardness: '220-260 BHN',
    desc: 'Zero-maintenance planter gauge wheel and coulter hubs with severe-duty labyrinth triple-lip seals to lock out fertilizer salts and abrasive dust.',
    img: '/images/amsted_bogie_axlebox.jpg',
    keyFeatures: ['Pre-Greased Maintenance-Free Sealed Bearing Cartridge', 'Forged High-Strength Steel Spindle', 'Precision CNC Drilled 5-Bolt Hub Flange', 'Protected Against Slurry and Soil Ingress']
  },

  // 5. Drivetrain & Brakes
  {
    id: 'drive-01',
    category: 'drivetrain',
    categoryLabel: 'Tractor Drivetrain & Brakes',
    title: 'Heavy Front Wheel Drive (MFWD) Differential Housing',
    series: 'SERIES DIFF-4WD',
    specs: 'High-Strength Ductile Iron ASTM A536',
    compliance: ['ASTM A536', 'ISO 9001:2015', 'SAE J434'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'Ductile Iron Grade 80-55-06',
    tensileStrength: '620 MPa',
    yieldStrength: '420 MPa',
    hardness: '200-240 BHN',
    desc: 'Stout differential housings and axle trumpet carrier castings engineered for high-torque mechanical front wheel drive (MFWD) agricultural tractors.',
    img: '/images/amsted_bogie_axlebox.jpg',
    keyFeatures: ['High Rigidity Case Prevents Ring & Pinion Deflection', 'Integrated Trunnion Bearing Saddles', 'High-Pressure Hydraulic Porting', '100% CMM Verified Bore Tolerances']
  },
  {
    id: 'drive-02',
    category: 'drivetrain',
    categoryLabel: 'Tractor Drivetrain & Brakes',
    title: 'Fade-Resistant Agricultural Trailer Brake Drum',
    series: 'SERIES AGRI-BRAKE HD',
    specs: 'High-Carbon Grey Iron with Thermal Cooling Fins',
    compliance: ['DOT FMVSS 121', 'ISO 9001:2015', 'SAE J661'],
    axleLoad: 'Heavy Drawbar',
    materialGrade: 'ASTM A48 Class 35B High-Carbon Grey Iron',
    tensileStrength: '280 MPa',
    yieldStrength: '200 MPa',
    hardness: '210-250 BHN',
    desc: 'Fade-resistant heavy agricultural brake drums with external radial heat dissipation fins for grain carts, slurry tankers, and heavy farm haulers.',
    img: '/images/amsted_jacking_pad.jpg',
    keyFeatures: ['External Heat Dissipation Cooling Fins', 'Precision Lathe-Turned Braking Surface', 'High Thermal Damping to Prevent Heat Cracks', 'Standard 10-Hole Heavy Hub Pilot Pattern']
  }
];

interface InteractiveExplorerProps {
  onRequestQuoteForProduct?: (productTitle: string) => void;
  isModalView?: boolean;
  onCloseModal?: () => void;
  onOpenProductDetail?: (product: ProductItem) => void;
}

export const InteractiveExplorer: React.FC<InteractiveExplorerProps> = ({
  onRequestQuoteForProduct,
  isModalView = false,
  onCloseModal,
  onOpenProductDetail
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStandard, setActiveStandard] = useState<string>('all');
  const [activeAxleLoad, setActiveAxleLoad] = useState<string>('all');
  // View & Glossary States
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'compare'>('grid');
  const [showGlossary, setShowGlossary] = useState<boolean>(false);

  // Selected items for Comparison Tool (max 3)
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);

  // Available Standards Filter Options
  const standardsList = [
    { id: 'all', label: 'All Standards' },
    { id: 'ASABE', label: 'ASABE S572.1' },
    { id: 'ASTM', label: 'ASTM A536' },
    { id: 'ISO', label: 'ISO 11783 (ISOBUS)' },
    { id: 'FEMA', label: 'FEMA / AEM' },
    { id: 'SAE', label: 'SAE Ag Standards' }
  ];

  // Available Axle Load Filter Options
  const axleLoadList = [
    { id: 'all', label: 'All Equipment Ratings' },
    { id: 'Heavy', label: 'Heavy Drawbar (>250 HP)' },
    { id: 'Mid', label: 'Mid-Range (100-250 HP)' },
    { id: 'High', label: 'Self-Propelled / High Clearance' },
    { id: 'Implement', label: 'Tillage & Implements' }
  ];

  const categories = [
    { id: 'all', label: 'All Equipment & Parts' },
    { id: 'sprayers', label: 'Precision Field Sprayers' },
    { id: 'castings', label: 'Agricultural Castings' },
    { id: 'harvesting', label: 'Combine & Harvesting' },
    { id: 'tillage', label: 'Tillage & Implements' },
    { id: 'drivetrain', label: 'Tractor Drivetrain & Brakes' }
  ];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(item => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;

      // Standard match
      if (activeStandard !== 'all') {
        const matchesStandard = item.compliance.some(c => c.toLowerCase().includes(activeStandard.toLowerCase())) ||
          item.specs.toLowerCase().includes(activeStandard.toLowerCase());
        if (!matchesStandard) return false;
      }

      // Axle Load match
      if (activeAxleLoad !== 'all') {
        const matchesAxle = item.axleLoad.toLowerCase().includes(activeAxleLoad.toLowerCase());
        if (!matchesAxle) return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.series.toLowerCase().includes(query) ||
          item.specs.toLowerCase().includes(query) ||
          item.materialGrade.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [activeCategory, activeStandard, activeAxleLoad, searchQuery]);

  // Comparison toggle handler
  const toggleCompare = (id: string) => {
    setComparedProductIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 products at a time.');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const comparedProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(p => comparedProductIds.includes(p.id));
  }, [comparedProductIds]);

  return (
    <section
      id="explorer"
      style={{
        background: isModalView ? '#FFFFFF' : '#FAFBFD',
        padding: isModalView ? '1.5rem' : '4rem 1.5rem',
        borderBottom: isModalView ? 'none' : '1px solid #E2E8F0',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <div className={isModalView ? '' : 'container-custom'}>

        {/* Section Header */}
        {!isModalView && (
          <div style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(27, 94, 32, 0.08)',
              color: '#1B5E20',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <Sparkles size={16} color="#4CAF50" />
              <span>INTERACTIVE ENGINEERING SEARCH ENGINE</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#111827',
              fontWeight: 900,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              ENGINEERING PRODUCT &amp; SPECIFICATION EXPLORER
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#4CAF50', lineHeight: 1.6, margin: 0 }}>
              Search across Agro Foundries precision crop sprayers, heavy agricultural castings, combine upgrades, and implement gearboxes. Filter by compliance, load rating, and mechanical tolerances.
            </p>
          </div>
        )}

        {/* Modal Top Bar if in Modal View */}
        {isModalView && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#1B5E20', color: '#FFF', padding: '8px', borderRadius: '6px', display: 'flex' }}>
                <Compass size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                  Component &amp; Technical Spec Explorer
                </h3>
                <span style={{ fontSize: '0.825rem', color: '#4CAF50' }}>
                  Filter by ASABE / ASTM standards, implement categories, and CAD schematics
                </span>
              </div>
            </div>

            {onCloseModal && (
              <button
                onClick={onCloseModal}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#4CAF50',
                  transition: 'all 0.2s'
                }}
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Filter Controls Toolbar */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #E2E8F0',
          marginBottom: '2rem'
        }}>

          {/* Top Line: Search Bar + View Mode Toggles + Compare Counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>

            {/* Search Input Box */}
            <div style={{ flex: '1 1 320px', position: 'relative' }}>
              <Search size={18} color="#4CAF50" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search machinery, part name, spec (e.g. ASABE, ASTM, ISO, Gearbox, Nozzle)..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 42px',
                  borderRadius: '8px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.925rem',
                  color: '#1B5E20',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = '#1B5E20'}
                onBlur={e => e.target.style.borderColor = '#CBD5E1'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    fontSize: '0.8rem'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Switcher + Compare Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

              {/* Compare Items Button */}
              {comparedProductIds.length > 0 && (
                <button
                  onClick={() => setViewMode('compare')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'compare' ? '#1B5E20' : '#E8F5E9',
                    color: viewMode === 'compare' ? '#FFF' : '#1B5E20',
                    border: '1px solid #4CAF50',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Compare ({comparedProductIds.length}/3)</span>
                </button>
              )}

              {/* Grid / Table View Toggles */}
              <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '8px', padding: '4px', border: '1px solid #E2E8F0' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'grid' ? '#1B5E20' : '#4CAF50',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Grid size={16} />
                  <span>Grid Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'table' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'table' ? '#1B5E20' : '#4CAF50',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'table' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Spec Table</span>
                </button>
              </div>

            </div>

          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9', marginBottom: '1rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  background: activeCategory === cat.id ? '#1B5E20' : '#F8FAFC',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#4CAF50',
                  border: activeCategory === cat.id ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Pill Filters: Standard & Axle Load */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>

            {/* Standards Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Standard:
              </span>
              {standardsList.map(std => (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeStandard === std.id ? 700 : 500,
                    background: activeStandard === std.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeStandard === std.id ? '#1B5E20' : '#4CAF50',
                    border: activeStandard === std.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {std.label}
                </button>
              ))}
            </div>

            {/* Axle Load Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Axle Load:
              </span>
              {axleLoadList.map(axle => (
                <button
                  key={axle.id}
                  onClick={() => setActiveAxleLoad(axle.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeAxleLoad === axle.id ? 700 : 500,
                    background: activeAxleLoad === axle.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeAxleLoad === axle.id ? '#1B5E20' : '#4CAF50',
                    border: activeAxleLoad === axle.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {axle.label}
                </button>
              ))}
            </div>

            {/* Active Results Counter & Glossary Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setShowGlossary(!showGlossary)}
                style={{
                  background: showGlossary ? '#1B5E20' : '#E8F5E9',
                  color: showGlossary ? '#FFFFFF' : '#1B5E20',
                  border: '1px solid #4CAF50',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Info size={14} />
                <span>{showGlossary ? 'Hide Full Forms Guide' : 'View Full Forms & Acronym Glossary'}</span>
              </button>

              <div style={{ fontSize: '0.825rem', color: '#4CAF50', fontWeight: 600 }}>
                Showing <strong style={{ color: '#1B5E20' }}>{filteredProducts.length}</strong> components
              </div>
            </div>

          </div>

          {/* Expandable Acronym & Full Form Glossary Banner */}
          {showGlossary && (
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px dashed #CBD5E1',
              background: '#F8FAFC',
              borderRadius: '10px',
              padding: '1rem 1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <Info size={16} color="#1B5E20" />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Full Form Glossary &amp; Technical Abbreviation Legend
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '8px 16px',
                fontSize: '0.8rem',
                color: '#2E7D32'
              }}>
                <div><strong style={{ color: '#1B5E20' }}>BCNHL:</strong> Bogie Covered Number High-Capacity Length Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>ASABE S572.1:</strong> Droplet Size Spectrum &amp; Drift Reduction Spray Standard</div>
                <div><strong style={{ color: '#1B5E20' }}>ASTM A536:</strong> Standard Spec for Ductile Iron Implement Castings</div>
                <div><strong style={{ color: '#1B5E20' }}>ISO 11783:</strong> ISOBUS Standardized Tractor &amp; Implement Electronic Interface</div>
                <div><strong style={{ color: '#1B5E20' }}>PWM:</strong> Pulse Width Modulation Electronic Individual Nozzle Control</div>
                <div><strong style={{ color: '#1B5E20' }}>FEMA:</strong> Farm Equipment Manufacturers Association (USA)</div>
                <div><strong style={{ color: '#1B5E20' }}>AEM:</strong> Association of Equipment Manufacturers (USA)</div>
                <div><strong style={{ color: '#1B5E20' }}>ASTM A48 Class 35:</strong> High-Damping Grey Iron for Tractor Ballast &amp; Weights</div>
                <div><strong style={{ color: '#1B5E20' }}>SG 65-45-12:</strong> High-Ductility Spheroidal Graphite Implement Castings</div>
                <div><strong style={{ color: '#1B5E20' }}>AISI 15B35:</strong> Quenched &amp; Tempered Boron Steel Tillage Blades (50-52 HRC)</div>
                <div><strong style={{ color: '#1B5E20' }}>5-Axis CNC:</strong> Multi-Axis High Precision Machining (±0.02mm Tolerance)</div>
                <div><strong style={{ color: '#1B5E20' }}>CMM:</strong> Coordinate Measuring Machine 3D Dimensional Inspection</div>
                <div><strong style={{ color: '#1B5E20' }}>HRC:</strong> Rockwell Hardness C Scale</div>
              </div>
            </div>
          )}

        </div>

        {/* ==================== VIEW 1: GRID CARDS VIEW ==================== */}
        {viewMode === 'grid' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredProducts.map(product => {
              const isCompared = comparedProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="card-hover-industrial"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(27,94,32,0.1)';
                    e.currentTarget.style.borderColor = '#4CAF50';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  {/* Card Media Preview Header */}
                  <div
                    onClick={() => onOpenProductDetail && onOpenProductDetail(product)}
                    style={{ position: 'relative', height: '200px', background: '#0F2E14', overflow: 'hidden', borderBottom: '1px solid #E2E8F0', cursor: onOpenProductDetail ? 'pointer' : 'default' }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#F8FAFC', opacity: 1, transition: 'transform 0.4s ease' }}
                    />

                    {/* Top Series Badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', alignItems: 'center', zIndex: 2 }}>
                      <span style={{
                        background: '#1B5E20',
                        color: '#FFF',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        {product.series}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.25rem 1.4rem 1.4rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Brand Tag */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                        Agro Foundries
                      </span>
                    </div>

                    {/* Compliance pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      {product.compliance.slice(0, 2).map((comp, idx) => (
                        <span key={idx} style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          {comp}
                        </span>
                      ))}
                      <span style={{ background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>
                        {product.axleLoad}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => onOpenProductDetail && onOpenProductDetail(product)}
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#111827',
                        margin: '0 0 8px 0',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                        fontFamily: "'Manrope', sans-serif !important",
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '2.8em',
                        cursor: onOpenProductDetail ? 'pointer' : 'default'
                      }}
                      onMouseEnter={e => {
                        if (onOpenProductDetail) e.currentTarget.style.color = '#1B5E20';
                      }}
                      onMouseLeave={e => {
                        if (onOpenProductDetail) e.currentTarget.style.color = '#111827';
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Product Description */}
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#2E7D32',
                      lineHeight: 1.6,
                      margin: '0 0 10px 0',
                      flex: 1,
                      fontWeight: 500,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      {product.desc}
                    </p>

                    {/* Divider Line (Requested by User) */}
                    <div style={{ borderTop: '1px solid #E5E7EB', margin: '14px 0 14px 0' }} />

                    {/* Card Actions */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>

                      {/* Compare Checkbox Button */}
                      <button
                        onClick={() => toggleCompare(product.id)}
                        style={{
                          background: isCompared ? '#E8F5E9' : '#FFFFFF',
                          color: '#111827',
                          border: isCompared ? '1.5px solid #1B5E20' : '1.5px solid #94A3B8',
                          borderRadius: '8px',
                          padding: '9px 13px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#F1F5F9';
                          e.currentTarget.style.borderColor = '#111827';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = isCompared ? '#E8F5E9' : '#FFFFFF';
                          e.currentTarget.style.borderColor = isCompared ? '#1B5E20' : '#94A3B8';
                        }}
                      >
                        <Check size={14} color={isCompared ? '#1B5E20' : '#111827'} strokeWidth={2.5} />
                        <span style={{ color: '#111827', fontWeight: 800 }}>{isCompared ? 'Compared' : 'Compare'}</span>
                      </button>

                      {/* See More Button -> Opens Product Detail Page */}
                      <button
                        onClick={() => {
                          if (onOpenProductDetail) {
                            onOpenProductDetail(product);
                          } else {
                            window.location.hash = '#contact';
                          }
                        }}
                        className="btn-animated"
                        style={{
                          flex: 1,
                          background: '#1B5E20',
                          color: '#FFFFFF',
                          border: '1.5px solid #1B5E20',
                          borderRadius: '8px',
                          padding: '9px 14px',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(27,94,32,0.2)',
                          transition: 'all 0.2s',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        <span>See More</span>
                        <ChevronRight size={15} />
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== VIEW 2: SPECIFICATIONS TABLE VIEW ==================== */}
        {viewMode === 'table' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#1B5E20', color: '#FFFFFF', textTransform: 'uppercase', fontSize: '0.775rem', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '14px 16px' }}>Series &amp; Title</th>
                    <th style={{ padding: '14px 16px' }}>Category</th>
                    <th style={{ padding: '14px 16px' }}>Axle Load / Rating</th>
                    <th style={{ padding: '14px 16px' }}>Specification Standard</th>
                    <th style={{ padding: '14px 16px' }}>Material Grade</th>
                    <th style={{ padding: '14px 16px' }}>Tensile Strength</th>
                    <th style={{ padding: '14px 16px' }}>Ref Code</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p, idx) => (
                    <tr
                      key={p.id}
                      style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC', cursor: onOpenProductDetail ? 'pointer' : 'default' }}
                      onClick={() => onOpenProductDetail && onOpenProductDetail(p)}
                    >
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 800, color: '#1B5E20' }}>{p.title}</div>
                        <span style={{ fontSize: '0.75rem', color: '#1B5E20', fontWeight: 700 }}>{p.series}</span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontWeight: 600 }}>
                        {p.categoryLabel}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: '#E0F2FE', color: '#0369A1', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          {p.axleLoad}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#2E7D32', fontWeight: 600 }}>
                        {p.specs}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontWeight: 600 }}>
                        {p.materialGrade}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#1B5E20' }}>
                        {p.tensileStrength}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <code style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                          {p.id.toUpperCase()}
                        </code>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenProductDetail) {
                              onOpenProductDetail(p);
                            } else {
                              window.location.hash = '#contact';
                            }
                          }}
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-block'
                          }}
                        >
                          See More
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== VIEW 3: PRODUCT COMPARISON MATRIX ==================== */}
        {viewMode === 'compare' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                  Side-by-Side Component Comparison Matrix
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#4CAF50' }}>
                  Comparing {comparedProducts.length} selected engineering components
                </span>
              </div>

              <button
                onClick={() => setComparedProductIds([])}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#4CAF50', cursor: 'pointer' }}
              >
                Clear Comparison
              </button>
            </div>

            {comparedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#4CAF50' }}>
                <Info size={40} color="#94A3B8" style={{ marginBottom: '1rem' }} />
                <p>No products selected for comparison. Switch to Grid view and click "Compare" on up to 3 products.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '220px', padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>Parameter</th>
                      {comparedProducts.map(p => (
                        <th key={p.id} style={{ padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                          <div style={{ fontWeight: 800, color: '#1B5E20', fontSize: '1rem' }}>{p.title}</div>
                          <div style={{ color: '#1B5E20', fontSize: '0.8rem', fontWeight: 700 }}>{p.series}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Category</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 600 }}>{p.categoryLabel}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Axle Load Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0284C7', fontWeight: 700 }}>{p.axleLoad}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Standard Compliance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20' }}>
                          {p.compliance.join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Material Metallurgy</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontSize: '0.825rem' }}>{p.materialGrade}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Tensile Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 800 }}>{p.tensileStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Yield Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.yieldStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Hardness Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.hardness}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>RFQ Action</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px' }}>
                          <button
                            onClick={() => {
                              if (onRequestQuoteForProduct) onRequestQuoteForProduct(p.title);
                            }}
                            style={{
                              background: '#1B5E20',
                              color: '#FFF',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '8px 14px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Request Quote
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveExplorer;
