import React from 'react';
import { getCasinosForTable } from '@/lib/data-service';

// This is the simplified, neutral version of the comparison table for bots.
const NeutralComparisonTable = () => {
  const tableData = getCasinosForTable();

  // Basic inline styles for readability
  const thStyle = {
    padding: '12px 15px',
    textAlign: 'left' as const,
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase' as const,
    color: '#495057',
  };

  const tdStyle = {
    padding: '12px 15px',
    borderBottom: '1px solid #dee2e6',
    fontSize: '14px',
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    objectFit: 'contain' as const,
    borderRadius: '4px',
    marginRight: '10px',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem 0' }}>
      <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '1rem' }}>
        <strong>Jämförelsetabell för Casinon</strong>
      </h2>
      <p
      style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto 2rem auto',
        color: '#6c757d',
        maxWidth: '700px', // begränsar bredden för bättre läsbarhet
        lineHeight: '1.6', // gör texten luftigare
      }}
    >
      Denna toplista sammanställer fakta om ledande casinoplattformar på den svenska
      marknaden. Här presenteras information om licensstatus, spelutbud,
      bonusvillkor, betalningsalternativ, kundsupport och säkerhetsnivå. Syftet är
      att ge en objektiv jämförelse som hjälper dig att identifiera vilka casinon
      som uppfyller dina krav. Alla uppgifter är baserade på verifierade källor och
      uppdateras regelbundet för att säkerställa korrekthet och relevans.
      <br /><br />
      Att jämföra casinon är viktigt för att kunna fatta trygga och medvetna beslut.
      Genom att se över villkor, säkerhetsnivå och spelutbud i förväg minskar risken
      för obehagliga överraskningar och du får en tydligare bild av vilken plattform
      som bäst motsvarar dina preferenser.
    </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>Casino</th>
            <th style={thStyle}>Välkomstbonus</th>
            <th style={thStyle}>Omsätt.</th>
            <th style={thStyle}>Spel</th>
            <th style={thStyle}>Betyg</th>
            <th style={thStyle}>Länk</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            const rank = index + 1;
            return (
              <tr key={row.slug}>
                {/* Rank */}
                <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 'bold' }}>
                  {rank}
                </td>

                {/* Casino */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.logoUrl} alt={`${row.name} logo`} style={logoStyle} />
                    <span>{row.name}</span>
                  </div>
                </td>

                {/* Bonus */}
                <td style={tdStyle}>
                  <div>
                    <div style={{ fontWeight: '600' }}>{row.bonus.main}</div>
                    <div style={{ fontSize: '12px', color: '#6c757d' }}>{row.bonus.details}</div>
                  </div>
                </td>

                {/* Wagering */}
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  {row.bonus.wagering}
                </td>

                {/* Game Count */}
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  {row.stats.games}
                </td>

                {/* Rating */}
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  {row.rating.toFixed(1)} / 5.0
                </td>

                {/* Link (Neutral CTA) */}
                <td style={{ ...tdStyle, textAlign: 'center' }}>
                  <a href={row.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                    Besök
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NeutralComparisonTable;