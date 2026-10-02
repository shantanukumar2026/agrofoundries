import re

source_path = r"g:\bens sir team\train-transit - Copy\src\components\InteractiveExplorer.tsx"

with open(source_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the glossary
old_glossary = """                <div><strong style={{ color: '#1B5E20' }}>BOXNHL:</strong> Bogie Open High Speed Stainless Heavy Load Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>BOBRN:</strong> Bogie Open Bottom Rapid Discharge Nitrogen Hopper</div>
                <div><strong style={{ color: '#1B5E20' }}>CASNUB:</strong> Cast Steel Heavy Freight Wagon Bogie</div>
                <div><strong style={{ color: '#1B5E20' }}>CMS Frog:</strong> Cast Manganese Steel (12-14% Mn) Crossing Frog</div>
                <div><strong style={{ color: '#1B5E20' }}>TWS:</strong> Thick Web Switch Point Tongue Rail</div>
                <div><strong style={{ color: '#1B5E20' }}>RDSO:</strong> Research Designs &amp; Standards Organisation</div>
                <div><strong style={{ color: '#1B5E20' }}>AAR:</strong> Association of American Railroads</div>
                <div><strong style={{ color: '#1B5E20' }}>AREMA:</strong> Amer. Railway Engineering &amp; Maint.-of-Way Assoc.</div>
                <div><strong style={{ color: '#1B5E20' }}>IRS:</strong> Indian Railway Standards</div>
                <div><strong style={{ color: '#1B5E20' }}>FRA:</strong> Federal Railroad Administration (USA)</div>
                <div><strong style={{ color: '#1B5E20' }}>APTA:</strong> American Public Transportation Association</div>
                <div><strong style={{ color: '#1B5E20' }}>5-Axis CNC:</strong> 5-Axis Computer Numerical Control Milling</div>
                <div><strong style={{ color: '#1B5E20' }}>CMM:</strong> Coordinate Measuring Machine 3D Inspection</div>
                <div><strong style={{ color: '#1B5E20' }}>BHN:</strong> Brinell Hardness Number</div>
                <div><strong style={{ color: '#1B5E20' }}>HPC:</strong> High Performance Concrete (M60 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>UHSC:</strong> Ultra High Strength Concrete (M80 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>SCC:</strong> Self-Compacting Concrete (650mm Flow)</div>"""

new_glossary = """                <div><strong style={{ color: '#1B5E20' }}>ASABE S572.1:</strong> Droplet Size Spectrum &amp; Drift Reduction Spray Standard</div>
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
                <div><strong style={{ color: '#1B5E20' }}>HRC:</strong> Rockwell Hardness C Scale</div>"""

if old_glossary in content:
    content = content.replace(old_glossary, new_glossary)
    print("Replaced glossary successfully")
else:
    print("Old glossary not found directly, checking regex")

# Replace header description and placeholders
content = content.replace("Search across 100+ AREMA, RDSO &amp; AAR certified railway components, heavy steel castings, and ready-mix concrete formulations.",
                          "Search across AgroFarms USA precision crop sprayers, heavy agricultural castings, combine upgrades, and implement gearboxes.")
content = content.replace("Filter by RDSO / AAR standards, material grades, and CAD schematics",
                          "Filter by ASABE / ASTM standards, implement categories, and CAD schematics")
content = content.replace('placeholder="Search part name, spec (e.g. RDSO, CASNUB, M-201, M60), DWG filename..."',
                          'placeholder="Search machinery, part name, spec (e.g. ASABE, ASTM, ISO, Gearbox, Nozzle)..."')

# Replace standards list
old_standards = """  const standardsList = [
    { id: 'all', label: 'All Standards' },
    { id: 'RDSO', label: 'RDSO' },
    { id: 'AAR', label: 'AAR M-201' },
    { id: 'AREMA', label: 'AREMA' },
    { id: 'ASTM', label: 'ASTM' },
    { id: 'IS', label: 'IS / IRS Spec' }
  ];"""

new_standards = """  const standardsList = [
    { id: 'all', label: 'All Standards' },
    { id: 'ASABE', label: 'ASABE S572.1' },
    { id: 'ASTM', label: 'ASTM A536' },
    { id: 'ISO', label: 'ISO 11783 (ISOBUS)' },
    { id: 'FEMA', label: 'FEMA / AEM' },
    { id: 'SAE', label: 'SAE Ag Standards' }
  ];"""

if old_standards in content:
    content = content.replace(old_standards, new_standards)
    print("Replaced standards list")

# Replace axle load list
old_axle = """  const axleLoadList = [
    { id: 'all', label: 'All Axle Loads' },
    { id: '22.9', label: '22.9T Freight' },
    { id: '25.0', label: '25.0T Heavy Freight' },
    { id: '32.5', label: '32.5T Heavy Haul' },
    { id: 'High', label: 'High Speed / Pass.' }
  ];"""

new_axle = """  const axleLoadList = [
    { id: 'all', label: 'All Equipment Ratings' },
    { id: 'Heavy', label: 'Heavy Drawbar (>250 HP)' },
    { id: 'Mid', label: 'Mid-Range (100-250 HP)' },
    { id: 'High', label: 'Self-Propelled / High Clearance' },
    { id: 'Implement', label: 'Tillage & Implements' }
  ];"""

if old_axle in content:
    content = content.replace(old_axle, new_axle)
    print("Replaced axle load list")

# Replace categories list
old_categories = """  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'rail', label: 'Rail Coach & Bogie Components' },
    { id: 'loco', label: 'Components for Locomotives' },
    { id: 'oem', label: 'Components for OEMs' },
    { id: 'other', label: 'Other Industries' }
  ];"""

new_categories = """  const categories = [
    { id: 'all', label: 'All Equipment & Parts' },
    { id: 'sprayers', label: 'Precision Field Sprayers' },
    { id: 'castings', label: 'Agricultural Castings' },
    { id: 'harvesting', label: 'Combine & Harvesting' },
    { id: 'tillage', label: 'Tillage & Implements' },
    { id: 'drivetrain', label: 'Tractor Drivetrain & Brakes' }
  ];"""

if old_categories in content:
    content = content.replace(old_categories, new_categories)
    print("Replaced categories list")

with open(source_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Saved InteractiveExplorer.tsx updates")
