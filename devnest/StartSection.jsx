
const { HlsVideo, SectionBadge, FadeIn, ArrowUpRight, useLang, t } = window;
const START_VIDEO = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';

const startI18n = {
  badge: { en: 'How It Works', es: 'Cómo Funciona' },
  heading: { en: 'You dream it. We ship it.', es: 'Tú lo sueñas. Nosotros lo hacemos realidad.' },
  body: { en: 'Share your vision. Our AI handles the rest — wireframes, design, code, launch. All in days, not quarters.', es: 'Comparte tu visión. Nosotros nos encargamos del resto — wireframes, diseño, código, lanzamiento. Todo en días, no meses.' },
  cta: { en: 'Get Started', es: 'Comenzar' },
};

function StartSection() {
  const { lang } = useLang();
  return (
    <section style={{ position: 'relative', minHeight: 700, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <HlsVideo src={START_VIDEO} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />
      <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 24px', gap: 28 }}>
        <FadeIn delay={0}><SectionBadge>{t(startI18n.badge, lang)}</SectionBadge></FadeIn>
        <FadeIn delay={100}><h2 className="section-heading" style={{ maxWidth: 600 }}>{t(startI18n.heading, lang)}</h2></FadeIn>
        <FadeIn delay={200} style={{ maxWidth: 460 }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.65 }}>
            {t(startI18n.body, lang)}
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <a href="https://wa.me/522203305165" className="liquid-glass-strong" style={{ borderRadius: 9999, padding: '12px 28px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
            {t(startI18n.cta, lang)} <ArrowUpRight size={15} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { StartSection });
