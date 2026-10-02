import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const simpleCards = [
  {
    title: 'ISO 9001:2015 Certified',
    description: 'International Quality Management System for Design, Melting, Casting, Forging, Machining, and Assembly.',
    icon: ShieldCheck,
  },
  {
    title: 'ASABE S572.1 Compliant',
    description: 'Audited Quality System for Agricultural Equipment Manufacturing and Supply.',
    icon: Award,
  },
  {
    title: 'ISO 14001:2015 Sustainable',
    description: 'Environmental Management System for 100% Recycled Electric Induction Foundry.',
    icon: CheckCircle2,
  }
];

export const TrustCertificationSection: React.FC = () => {
  return (
    <section style={{ background: '#FFFFFF', padding: '4rem 2rem', borderBottom: '2px solid #E5E7EB' }}>
      <div className="container-custom" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#111827', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>
          Official Certifications
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {simpleCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} style={{ padding: '2rem', background: '#F8F9FA', border: '1px solid #E5E7EB', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
                <Icon size={48} color="#4caf50" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111827' }}>{card.title}</h3>
                <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.5 }}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustCertificationSection;
