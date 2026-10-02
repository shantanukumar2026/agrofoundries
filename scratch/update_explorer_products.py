import re

source_path = r"g:\bens sir team\train-transit - Copy\src\components\InteractiveExplorer.tsx"

with open(source_path, "r", encoding="utf-8") as f:
    code = f.read()

# Generate clean authentic AgroFarms USA products
new_products = """export const EXPLORER_PRODUCTS: ProductItem[] = [
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
];"""

# Replace the EXPLORER_PRODUCTS definition
pattern = r"export const EXPLORER_PRODUCTS: ProductItem\[\] = \[[\s\S]*?\n\s*\];"
if re.search(pattern, code):
    code = re.sub(pattern, new_products, code, count=1)
    print("Successfully replaced EXPLORER_PRODUCTS array")
else:
    print("Could not match EXPLORER_PRODUCTS pattern")

with open(source_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Saved updated InteractiveExplorer.tsx")
