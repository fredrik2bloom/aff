import React from 'react';

// --- Data updated to include a 'logoUrl' for each winner ---
const specialtyCategories = [
  { id: 'welcome-bonus', name: 'Bäst välkomstbonus' },
  { id: 'mobile', name: 'Bäst mobilcasino' },
  { id: 'live-dealer', name: 'Bästa live dealer' },
  { id: 'slots', name: 'Störst slotsutbud' },
  { id: 'payouts', name: 'Snabbaste uttagen' },
  { id: 'overall', name: 'Totalvinnare' }
];

const specialtyWinners = {
  'welcome-bonus': { casino: 'Sportium', logoUrl: '/logos/sportium.png', offer: '10€ utan insättning + 100% upp till 200€', features: ['Ingen insättning krävs', 'Låga omsättningskrav', 'Förlängd giltighetstid'] },
  'mobile': { casino: 'LeoVegas', logoUrl: '/logos/leovegas.png', offer: 'Prisbelönt mobilapp', features: ['Inbyggda appar för iOS/Android', 'Pekskärmsoptimerat gränssnitt', 'Mobil-exklusiva spel'] },
  'live-dealer': { casino: 'Casino777', logoUrl: '/logos/casino777.png', offer: '50+ live dealer-bord', features: ['Flera olika studior', 'HD-kvalitet på streaming', 'Live-spelshower'] },
  'slots': { casino: 'Luckia', logoUrl: '/logos/luckia.png', offer: '3 700+ slotsspel', features: ['Alla stora leverantörer', 'Dagliga nysläpp', 'Progressiva jackpottar'] },
  'payouts': { casino: 'Casumo', logoUrl: '/logos/casumo.png', offer: 'Uttag inom 24 timmar', features: ['Omedelbara uttag till e-plånböcker', 'Inga uttagsavgifter', 'Verifierad snabb behandling'] },
  'overall': { casino: 'Casino777', logoUrl: '/logos/casino777.png', offer: 'Komplett casinoupplevelse', features: ['Bästa spelutbudet', 'Säkerhet i toppklass', 'Utmärkt support'] }
};

const NeutralCasinoSpecialties = () => {
  // --- Inline styles ---
  const sectionStyle = {
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    maxWidth: '800px',
    margin: '0 auto 50px auto',
  };

  const categorySectionStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '25px',
    maxWidth: '900px',
    margin: '0 auto 30px auto',
  };

  const categoryTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: '15px',
  };

  const winnerInfoStyle = {
    borderTop: '1px solid #eee',
    paddingTop: '15px',
  };

  const winnerHeaderStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      margin: '0 0 15px 0',
  };
  
  const logoStyle = {
      width: '40px',
      height: '40px',
      objectFit: 'contain' as const,
  };

  const listItemStyle = {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
          <strong>Kategoriledande Casinon</strong>
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          En analys av plattformar som utmärker sig inom specifika områden. Denna översikt belyser de casinon som presterar bäst inom nyckelkategorier som bonusar, mobilanvändning och spelutbud.
        </p>
      </div>

      <div>
        {specialtyCategories.map((category) => {
          const winner = specialtyWinners[category.id as keyof typeof specialtyWinners];
          return (
            <div key={category.id} style={categorySectionStyle}>
              <h3 style={categoryTitleStyle}>{category.name}</h3>
              <div style={winnerInfoStyle}>
                <div style={winnerHeaderStyle}>
                  {/* --- LOGO IMAGE ADDED HERE --- */}
                  <img src={winner.logoUrl} alt={`${winner.casino} logo`} style={logoStyle} />
                  <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>
                    {winner.casino}
                  </p>
                </div>
                
                <p style={{ margin: '0 0 15px 0', fontSize: '15px', color: '#444' }}>
                  <strong>Erbjudande:</strong> {winner.offer}
                </p>
                <div>
                  <strong>Nyckelfunktioner:</strong>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {winner.features.map((feature, index) => (
                      <li key={index} style={listItemStyle}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NeutralCasinoSpecialties;