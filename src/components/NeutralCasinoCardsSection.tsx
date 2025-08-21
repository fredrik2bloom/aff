import React from 'react';
import { getCasinosForCards } from '@/lib/data-service';

const NeutralCasinoCardsSection = () => {
  const casinos = getCasinosForCards();

  const sectionStyle = {
    padding: '60px 20px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    backgroundColor: '#f4f7f9',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    maxWidth: '750px',
    margin: '0 auto 50px auto',
  };

  const introTextStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#555',
    textAlign: 'left' as const,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    transition:
      'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e2e8f0',
  };

  const cardBodyStyle = {
    padding: '20px',
    flexGrow: '1',
  };

  const cardFooterStyle = {
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
  };

  const infoPointStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #f1f5f9',
  };

  const ctaLinkStyle = {
    display: 'block',
    textAlign: 'center' as const,
    padding: '10px 15px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#0284c7',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  };

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2
          style={{
            fontSize: '32px',
            marginBottom: '20px',
            fontWeight: '700',
          }}
        >
          Analys av Utvalda Casinoplattformar
        </h2>
        <div style={introTextStyle}>
          <p style={{ marginBottom: '15px' }}>
            Vi på casinoutansvensklicens strävar efter att ge en tydlig och
            pålitlig bild av de casinoplattformar som är mest relevanta för
            svenska spelare. Vi vet att det kan vara svårt att navigera bland
            alla alternativ som finns på marknaden, och därför har vi samlat vår
            kunskap och erfarenhet för att göra processen enklare för dig.
          </p>
          <p style={{ marginBottom: '15px' }}>
            Varje plattform i denna översikt har utvärderats noggrant av vårt
            team. Vi använder en uppsättning standardiserade kriterier som gör
            jämförelsen rättvis och transparent. Bland annat granskar vi
            licensstatus, säkerhetsrutiner, tillgängliga betalningsmetoder,
            spelutbudets bredd och kvalitet, samt hur väl plattformarna hanterar
            kundsupport. På så sätt kan du vara säker på att informationen du
            tar del av är både aktuell och baserad på verifierade fakta.
          </p>
          <p>
            Vårt arbete handlar inte om att lyfta fram ett enskilt casino, utan
            om att ge dig som spelare ett faktabaserat underlag för att fatta
            egna, välgrundade beslut. Vi vill dela med oss av vår branschkunskap
            och långa erfarenhet för att du ska känna dig trygg i ditt val av
            plattform. När du jämför casinon med hjälp av våra guider minskar
            risken för obehagliga överraskningar, och du får istället en tydligare
            bild av vilka alternativ som bäst motsvarar dina behov och
            preferenser.
          </p>
        </div>
      </div>

      <div style={gridStyle}>
        {casinos.map((casino) => (
          <div key={casino.slug} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <img
                src={casino.logoUrl}
                alt={`${casino.name} logo`}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  marginRight: '15px',
                }}
              />
              <h3
                style={{
                  fontSize: '20px',
                  margin: '0',
                  fontWeight: '600',
                }}
              >
                {casino.name}
              </h3>
            </div>
            <div style={cardBodyStyle}>
              <div style={infoPointStyle}>
                <span style={{ color: '#64748b' }}>Antal spel:</span>
                <span style={{ fontWeight: '600' }}>
                  {casino.stats.games}
                </span>
              </div>
              <div style={infoPointStyle}>
                <span style={{ color: '#64748b' }}>Betyg:</span>
                <span style={{ fontWeight: '600' }}>
                  {casino.rating.toFixed(1)} / 5.0
                </span>
              </div>
              <div style={infoPointStyle}>
                <span style={{ color: '#64748b' }}>Utbetalningstid:</span>
                <span style={{ fontWeight: '600' }}>
                  {casino.stats.payoutTime}
                </span>
              </div>
            </div>
            <div style={cardFooterStyle}>
              <a
                href={casino.affiliateUrl}
                style={ctaLinkStyle}
                rel="noopener noreferrer sponsored"
              >
                Läs mer hos {casino.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeutralCasinoCardsSection;