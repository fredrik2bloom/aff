import React from 'react';
import { getCasinosForAnalysis } from '@/lib/data-service';

// --- 1. Re-introduce the expert data and helper function ---
const EXPERTS = {
  niklas: {
    name: 'Niklas',
    image: '/authors/niklas-portrait.png',
    title: 'Casinoexpert',
  },
  fredrik: {
    name: 'Fredrik',
    image: '/authors/fredrik-portrait.png',
    title: 'Casinoexpert',
  },
} as const;

type ExpertKey = keyof typeof EXPERTS;

function resolveExpert(casino: any): (typeof EXPERTS)[ExpertKey] {
  const raw = casino?.editorial?.expert ?? 'niklas';
  const key = String(raw).toLowerCase().trim() as ExpertKey;
  if (key in EXPERTS) return EXPERTS[key];
  return EXPERTS.niklas;
}

const detailedCasinos = getCasinosForAnalysis();

const NeutralDetailedCasinoAnalysis = () => {
  // --- Inline styles ---
  const sectionStyle = {
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    maxWidth: '800px',
    margin: '0 auto 50px auto',
  };

  const articleStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '30px',
    padding: '25px',
    maxWidth: '900px',
    margin: '0 auto 30px auto',
    backgroundColor: '#f9f9f9',
  };

  const articleHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '20px',
    marginBottom: '20px',
  };

  const subHeadingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#111',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '15px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '25px',
  };

  const listItemStyle = {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#555',
  };

  const verdictStyle = {
    backgroundColor: '#eef2f5',
    padding: '20px',
    borderRadius: '6px',
    borderLeft: '4px solid #0056b3',
    margin: '20px 0',
  };

  const expertInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
          <strong>Djupgående Casinoanalyser</strong>
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          En detaljerad granskning av varje casino baserat på en rad objektiva mätvärden, utförd av våra experter. Denna analys täcker allt från säkerhetsprotokoll till spelutbud och supportkvalitet.
        </p>
      </div>

      <div>
        {detailedCasinos.map((casino, index) => {
          // --- 2. Resolve the expert for each casino ---
          const expert = resolveExpert(casino);

          return (
            <article key={casino.slug} style={articleStyle}>
              <header style={articleHeaderStyle}>
                <img
                  src={casino.logoUrl}
                  alt={`${casino.name} logo`}
                  style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '20px' }}
                />
                <div>
                  <h3 style={{ fontSize: '24px', margin: '0 0 5px 0' }}>
                    {index + 1}. {casino.name}
                  </h3>
                  <p style={{ margin: '0', color: '#666' }}>
                    {casino.editorial.tagline}
                  </p>
                </div>
              </header>

              <section>
                <h4 style={subHeadingStyle}>Detaljerad Poängsättning</h4>
                <div style={gridStyle}>
                  {Object.entries(casino.analysisScores).map(([category, data]) => (
                    <div key={category}>
                      <strong style={{ textTransform: 'capitalize' }}>{category}:</strong> {(data as any).score} / 100
                      <p style={{ fontSize: '13px', color: '#666', margin: '5px 0 0 0' }}>{(data as any).details}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 style={subHeadingStyle}>Nyckelfunktioner</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h5><strong>Positiva Aspekter</strong></h5>
                    <ul style={{ paddingLeft: '20px' }}>
                      {casino.editorial.pros.map((pro: string, i: number) => (
                        <li key={i} style={listItemStyle}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5><strong>Förbättringsområden</strong></h5>
                    <ul style={{ paddingLeft: '20px' }}>
                      {casino.editorial.cons.map((con: string, i: number) => (
                        <li key={i} style={listItemStyle}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* --- 3. Updated Verdict Section with Expert Info --- */}
              <section style={verdictStyle}>
                <div style={expertInfoStyle}>
                  <img
                    src={expert.image}
                    alt={`Porträtt av ${expert.name}`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div>
                    <h4 style={{ marginTop: '0', marginBottom: '5px' }}><strong>Expertens Omdöme</strong></h4>
                    <p style={{ margin: '0', fontSize: '14px', color: '#444' }}>
                      Av {expert.name}, {expert.title}
                    </p>
                  </div>
                </div>
                <p style={{ margin: '0', fontStyle: 'italic', color: '#444' }}>
                  "{casino.editorial.verdict}"
                </p>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NeutralDetailedCasinoAnalysis;