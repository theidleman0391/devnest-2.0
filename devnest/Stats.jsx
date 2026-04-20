
const { HlsVideo, FadeIn, useLang, t } = window;
const STATS_VIDEO = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

const statsI18n = {
  en: [
    { value: '30+',   label: 'Sites launched' },
    { value: '98%',    label: 'Client satisfaction' },
    { value: '3.2x',   label: 'More conversions' },
    { value: '5 days', label: 'Average delivery' },
  ],
  es: [
    { value: '30+',   label: 'Sitios lanzados' },
    { value: '98%',    label: 'Satisfacción del cliente' },
    { value: '3.2x',   label: 'Más conversiones' },
    { value: '5 días', label: 'Entrega promedio' },
  ]
};

function Stats() {
  const { lang } = useLang();
  const stats = t(statsI18n, lang);
  return (
    <section style={{ position: 'relative', minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '80px 24px' }}>
      <HlsVideo src={STATS_VIDEO} desaturate style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />
      <FadeIn y={40} style={{ position: 'relative', zIndex: 10, maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        <div className="liquid-glass" style={{ borderRadius: 24, padding: 'clamp(48px, 6vw, 64px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, textAlign: 'center' }}>
            {stats.map(({ value, label }, i) => (
              <FadeIn key={label} delay={i * 100} y={16}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1, marginBottom: 10, letterSpacing: '-0.02em' }}>{value}</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

Object.assign(window, { Stats });
