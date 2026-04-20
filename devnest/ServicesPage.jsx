
const { FadeIn, BlurText, SectionBadge, ArrowUpRight, useLang, t } = window;

const servicesI18n = {
  badge: { en: 'Services', es: 'Servicios' },
  heading: { en: 'What We Build', es: 'Lo Que Construimos' },
  sub: { en: 'Three focused offerings. Infinite possibilities. All powered by AI, refined by experts who care about every detail.', es: 'Tres ofertas enfocadas. Posibilidades infinitas. Todo impulsado por IA, refinado por expertos que cuidan cada detalle.' },
  includes: { en: 'Includes', es: 'Incluye' },
  learnMore: { en: 'Learn more', es: 'Saber más' },
  footerHeading: { en: 'Not sure what you need?', es: '¿No sabes qué necesitas?' },
  footerSub: { en: "Let's talk — we'll figure it out together.", es: 'Hablemos — lo resolveremos juntos.' },
  footerCta: { en: "Let's talk", es: 'Hablemos' },
};

const servicesData = {
  en: [
    {
      num: '01',
      title: 'AI Design',
      tag: 'Design',
      tagline: 'Every pixel, perfected by intelligence.',
      body: 'We train on thousands of high-performing sites to craft designs that are both beautiful and strategically engineered to convert. Your brand, elevated by AI.',
      features: ['Brand identity', 'Design systems', 'Responsive layouts', 'Motion & micro-interactions'],
    },
    {
      num: '02',
      title: 'Web & App Development',
      tag: 'Development',
      tagline: 'Code that performs as beautifully as it looks.',
      body: 'From full-stack web platforms to native Android apps, we build fast, scalable, and maintainable software that your users will love from day one.',
      features: ['React / Next.js', 'Node / Python backend', 'iOS & Android', 'API integrations'],
    },
    {
      num: '03',
      title: 'Landing Pages',
      tag: 'Conversion',
      tagline: 'One page. Maximum impact.',
      body: 'High-converting landing pages built and shipped in days. Every element is optimized for one thing: turning visitors into customers.',
      features: ['A/B testing ready', 'CRO-optimized layout', 'Sub-2s load time', 'Analytics built-in'],
    },
  ],
  es: [
    {
      num: '01',
      title: 'Diseño con IA',
      tag: 'Diseño',
      tagline: 'Cada píxel, perfeccionado por la inteligencia.',
      body: 'Nos entrenamos con miles de sitios de alto rendimiento para crear diseños que son bellos y estratégicamente diseñados para convertir. Tu marca, elevada por IA.',
      features: ['Identidad de marca', 'Sistemas de diseño', 'Diseños responsivos', 'Movimiento y micro-interacciones'],
    },
    {
      num: '02',
      title: 'Desarrollo Web y Apps',
      tag: 'Desarrollo',
      tagline: 'Código que rinde tan bien como se ve.',
      body: 'Desde plataformas web full-stack hasta aplicaciones nativas para Android, construimos software rápido, escalable y mantenible que tus usuarios amarán desde el primer día.',
      features: ['React / Next.js', 'Backend Node / Python', 'iOS y Android', 'Integraciones API'],
    },
    {
      num: '03',
      title: 'Landing Pages',
      tag: 'Conversión',
      tagline: 'Una página. Impacto máximo.',
      body: 'Landing pages de alta conversión construidas y lanzadas en días. Cada elemento está optimizado para una sola cosa: convertir visitantes en clientes.',
      features: ['Lista para A/B testing', 'Layout CRO-optimizado', 'Carga en menos de 2s', 'Analytics integrado'],
    },
  ],
};

function ServicesPage() {
  const { lang } = useLang();
  const services = t(servicesData, lang);
  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingTop: 120 }}>
      {/* Ambient bg orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,100,180,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,80,180,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Page header */}
        <div style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 80 }}>
          <FadeIn delay={0}><SectionBadge>{t(servicesI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(servicesI18n.heading, lang)} delay={100} />
            <style>{`
              span[style*="display: block"] > span {
                font-family: 'Instrument Serif', serif !important;
                font-style: italic !important;
                font-size: clamp(3rem, 7vw, 5rem) !important;
                color: white !important;
                line-height: 0.9 !important;
                letter-spacing: -0.03em !important;
              }
            `}</style>
          </div>
          <FadeIn delay={200} style={{ maxWidth: 480, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              {t(servicesI18n.sub, lang)}
            </p>
          </FadeIn>
        </div>

        {/* Service cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {services.map(({ num, title, tag, tagline, body, features }, i) => (
            <FadeIn key={num} delay={i * 100} y={32}>
              <div className="liquid-glass" style={{ borderRadius: 20, padding: 'clamp(32px, 4vw, 56px)', display: 'flex', gap: 56, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {/* Left: number + tag */}
                <div style={{ minWidth: 80 }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'rgba(255,255,255,0.12)', lineHeight: 1, letterSpacing: '-0.04em' }}>{num}</div>
                  <span style={{ display: 'inline-block', marginTop: 12, fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
                </div>

                {/* Center: main content */}
                <div style={{ flex: '1 1 300px' }}>
                  <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 8 }}>{title}</h2>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontStyle: 'italic', fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{tagline}</p>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 480, marginBottom: 32 }}>{body}</p>
                  <button className="liquid-glass-strong" style={{ borderRadius: 9999, padding: '10px 22px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {t(servicesI18n.learnMore, lang)} <ArrowUpRight size={13} />
                  </button>
                </div>

                {/* Right: features list */}
                <div style={{ minWidth: 180 }}>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>{t(servicesI18n.includes, lang)}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0} style={{ textAlign: 'center', padding: '100px 0 80px' }}>
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
            {t(servicesI18n.footerHeading, lang)}
          </h3>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            {t(servicesI18n.footerSub, lang)}
          </p>
          <a href="https://wa.me/522203305165" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', borderRadius: 9999, padding: '13px 32px', background: 'white', color: 'black', border: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600 }}>
            {t(servicesI18n.footerCta, lang)}
          </a>
        </FadeIn>
      </div>
    </div>
  );
}

Object.assign(window, { ServicesPage });
