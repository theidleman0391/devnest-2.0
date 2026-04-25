
const { SectionBadge, FadeIn, useLang, t } = window;

const GIF_1 = '/dist/assets/feature1.webp';
const GIF_2 = '/dist/assets/feature2.webp';

const chessI18n = {
  badge: { en: 'Capabilities', es: 'Capacidades' },
  heading: { en: 'Pro features. Zero complexity.', es: 'Funciones pro. Cero complicaciones.' },
  row1Title: { en: 'Designed to convert. Built to perform.', es: 'Diseñado para convertir. Hecho para rendir.' },
  row1Body: { en: 'Every pixel is intentional. We study what works across top-performing sites and build yours to outperform them — combining sharp design with proven conversion strategy.', es: 'Cada pixel es intencional. Estudiamos lo que funciona en los mejores sitios y construimos el tuyo para superarlos — combinando diseño impactante con estrategias de conversión comprobadas.' },
  row2Title: { en: 'Delivered fast. Built to last.', es: 'Entrega rápida. Hecho para durar.' },
  row2Body: { en: 'We move quickly without cutting corners. From first brief to live site, our process is lean and focused — so you get a polished, production-ready product in days, not months.', es: 'Nos movemos rápido sin sacrificar calidad. Desde el primer brief hasta el sitio en línea, nuestro proceso es ágil y enfocado — para que tengas un producto pulido y listo en días, no meses.' },
};

function ChessRow({ title, body, gif, reverse }) {
  return (
    <FadeIn y={40} style={{
      display: 'flex', alignItems: 'center', gap: 64,
      padding: '72px 0', flexWrap: 'wrap',
      flexDirection: reverse ? 'row-reverse' : 'row',
      justifyContent: 'center'
    }}>
      <div style={{ flex: '1 1 340px', maxWidth: 440 }}>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20 }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>{body}</p>
      </div>
      <div className="liquid-glass" style={{ flex: '1 1 360px', maxWidth: 520, borderRadius: 16, overflow: 'hidden', aspectRatio: '16/10' }}>
        <img src={gif} alt={title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    </FadeIn>
  );
}

function FeaturesChess() {
  const { lang } = useLang();
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <FadeIn style={{ textAlign: 'center', marginBottom: 16 }}><SectionBadge>{t(chessI18n.badge, lang)}</SectionBadge></FadeIn>
      <FadeIn delay={100} style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-heading">{t(chessI18n.heading, lang)}</h2>
      </FadeIn>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <ChessRow title={t(chessI18n.row1Title, lang)} body={t(chessI18n.row1Body, lang)} gif={GIF_1} reverse={false} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <ChessRow title={t(chessI18n.row2Title, lang)} body={t(chessI18n.row2Body, lang)} gif={GIF_2} reverse={true} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeaturesChess });
