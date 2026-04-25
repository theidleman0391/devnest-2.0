
const { BlurText, FadeIn, ArrowUpRight, PlayIcon, useLang, t } = window;

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4';
const partners = ['Anthropic', 'Python', 'React', 'Next.js', 'TypeScript', 'Figma'];

const heroI18n = {
  badge: { en: 'Introducing AI-powered web design.', es: 'Presentamos diseño web impulsado por IA.' },
  heading: { en: 'The Website Your Brand Deserves', es: 'El Sitio Web Que Tu Marca Merece' },
  sub: { en: 'Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.', es: 'Diseño impresionante. Rendimiento excepcional. Creado con IA, perfeccionado por expertos. Diseño web, totalmente reinventado.' },
  cta: { en: 'Get Started', es: 'Comenzar' },
  newBadge: { en: 'New', es: 'Nuevo' },
  tech: { en: 'Built with cutting-edge technology', es: 'Creado con tecnología de vanguardia' },
};

function Hero() {
  const { lang } = useLang();
  const heroAnim = (delay) => ({
    animation: `fadeInUp 0.6s ease ${delay}ms both`
  });

  return (
    <section style={{ position: 'relative', height: 1000, overflow: 'visible' }}>
      {/* BG video */}
      <video autoPlay loop muted playsInline src={HERO_VIDEO}
        className="absolute left-0 w-full z-0 h-full md:h-auto object-cover md:object-contain top-0 md:top-[28%]" />
      <div className="absolute inset-0 z-[1] bg-black/10 bg-gradient-to-b from-black/80 via-black/40 to-transparent md:bg-none pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] z-[2] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, black)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 h-full pt-[140px] md:pt-[120px]">

        {/* Badge */}
        <div style={{ ...heroAnim(200), marginBottom: 32, opacity: 0 }}>
          <span className="liquid-glass" style={{ borderRadius: 9999, padding: '4px 4px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ background: 'white', color: 'black', borderRadius: 9999, padding: '4px 12px', fontSize: 11, fontWeight: 600, fontFamily: "'Barlow', sans-serif" }}>{t(heroI18n.newBadge, lang)}</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', paddingRight: 10, fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}>{t(heroI18n.badge, lang)}</span>
          </span>
        </div>

        {/* Heading — BlurText */}
        <div style={{ maxWidth: 780, marginBottom: 28 }}>
          <BlurText
            text={t(heroI18n.heading, lang)}
            delay={120}
            animateBy="words"
            className="blur-heading"
          />
          <style>{`
            .blur-heading span { 
              font-family: 'Instrument Serif', serif !important;
              font-style: italic !important;
              font-size: clamp(3rem, 8vw, 5.5rem) !important;
              color: white !important;
              line-height: 0.88 !important;
              letter-spacing: -0.04em !important;
            }
            .hero-partners {
              position: absolute;
              bottom: 32px;
              left: 0; right: 0;
            }
            @media (max-width: 767px) {
              .hero-partners { bottom: 160px; }
            }
          `}</style>
        </div>

        {/* Subtext */}
        <p style={{
          ...heroAnim(800), opacity: 0, fontSize: 'clamp(14px, 1.8vw, 16px)',
          color: 'rgba(255,255,255,0.8)', fontFamily: "'Barlow', sans-serif",
          fontWeight: 300, lineHeight: 1.6, maxWidth: 460, marginBottom: 36
        }}>
          {t(heroI18n.sub, lang)}
        </p>

        <div style={{ ...heroAnim(1100), display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0 }}>
          <a href="/precios.html" className="liquid-glass-strong" style={{
            borderRadius: 9999, padding: '10px 22px', background: 'none', border: 'none', textDecoration: 'none',
            color: 'white', cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
            fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 7
          }}>
            {t(heroI18n.cta, lang)} <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Partners */}
        <div className="hero-partners" style={{ ...heroAnim(1400), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, opacity: 0 }}>
          <span className="liquid-glass" style={{ borderRadius: 9999, padding: '6px 16px', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}>
            {t(heroI18n.tech, lang)}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 5vw, 48px)', flexWrap: 'wrap', justifyContent: 'center', padding: '0 16px' }}>
            {partners.map(p => (
              <span key={p} style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.8vw, 1.75rem)', color: 'rgba(255,255,255,0.65)' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
