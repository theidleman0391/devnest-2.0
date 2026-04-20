
const { FadeIn, BlurText, SectionBadge, ArrowUpRight, useLang, t } = window;

const workI18n = {
  badge: { en: 'Work', es: 'Trabajo' },
  heading: { en: 'Selected Projects', es: 'Proyectos Destacados' },
  sub: { en: "A handful of the things we've built. Each one a collaboration between human ambition and machine precision.", es: 'Una selección de lo que hemos construido. Cada uno, una colaboración entre la ambición humana y la precisión de la máquina.' },
  viewProject: { en: 'View project', es: 'Ver proyecto' },
  footerHeading: { en: 'Want results like these?', es: '¿Quieres resultados como estos?' },
  footerSub: { en: "Let's talk about your project.", es: 'Hablemos de tu proyecto.' },
  footerCta: { en: 'Start a Project', es: 'Iniciar un Proyecto' },
  demo: { en: 'Demo', es: 'Demo' },
};

const projectsI18n = {
  en: [
    {
      num: '01',
      name: 'Innovamob',
      url: 'https://innovamob.com',
      category: 'Web Platform',
      year: '2025',
      desc: 'A complete brand and web presence for a next-gen mobile solutions provider. Full design system, marketing site, and client portal — designed and shipped in under a week.',
      tags: ['Branding', 'Web Design', 'Development'],
      accent: 'rgba(80,120,200,0.15)',
    },
    {
      num: '02',
      name: 'ServiciosVIP',
      url: 'https://servicios-vip.vercel.app/login',
      category: 'Android App',
      year: '2025',
      desc: 'A premium service marketplace app with seamless UX, real-time booking, native Android performance, and a provider-side dashboard for managing clients and schedules.',
      tags: ['Android', 'UI/UX', 'App Design'],
      accent: 'rgba(160,80,200,0.12)',
    },
    {
      num: '03',
      name: 'Roofconnect',
      url: 'https://roofconnect.vercel.app',
      category: 'Web Application',
      year: '2026',
      desc: 'A custom CRM built for a growing team — intuitive pipeline management, client tracking, automated follow-ups, and a reporting dashboard that actually makes sense.',
      demo: { email: 'demuser@gmail.com', password: 'demouser1' },
      tags: ['CRM', 'SaaS', 'Full-Stack'],
      accent: 'rgba(80,180,140,0.12)',
    },
  ],
  es: [
    {
      num: '01',
      name: 'Innovamob',
      url: 'https://innovamob.com',
      category: 'Plataforma Web',
      year: '2025',
      desc: 'Presencia de marca y web completa para un proveedor de soluciones móviles de nueva generación. Sistema de diseño, sitio de marketing y portal de clientes — diseñado y entregado en menos de una semana.',
      tags: ['Branding', 'Diseño Web', 'Desarrollo'],
      accent: 'rgba(80,120,200,0.15)',
    },
    {
      num: '02',
      name: 'ServiciosVIP',
      url: 'https://servicios-vip.vercel.app/login',
      category: 'App Android',
      year: '2025',
      desc: 'App de marketplace de servicios premium con UX fluida, reservas en tiempo real, rendimiento nativo en Android y panel para proveedores para gestionar clientes y horarios.',
      tags: ['Android', 'UI/UX', 'Diseño de App'],
      accent: 'rgba(160,80,200,0.12)',
    },
    {
      num: '03',
      name: 'Roofconnect',
      url: 'https://roofconnect.vercel.app',
      category: 'Aplicación Web',
      year: '2026',
      desc: 'Un CRM a medida para un equipo en crecimiento — gestión de pipeline intuitiva, seguimiento de clientes, seguimientos automáticos y un panel de reportes que realmente tiene sentido.',
      demo: { email: 'demuser@gmail.com', password: 'demouser1' },
      tags: ['CRM', 'SaaS', 'Full-Stack'],
      accent: 'rgba(80,180,140,0.12)',
    },
  ],
};

function WorkPage() {
  const { lang } = useLang();
  const projects = t(projectsI18n, lang);
  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingTop: 120, position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orbs — kept so they blend through the video */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', right: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,160,180,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,80,120,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      {/* BG video — blends into gradient */}
      <video autoPlay loop muted playsInline src="../public/stripe2.mp4"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', objectFit: 'contain', zIndex: 1, mixBlendMode: 'screen', opacity: 0.85 }} />
      {/* Subtle dark overlay for text readability */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'rgba(0,0,0,0.45)', zIndex: 2, pointerEvents: 'none' }} />
      {/* Bottom fade to black */}
      <div style={{ position: 'absolute', top: '35%', left: 0, right: 0, height: '30%', background: 'linear-gradient(to bottom, transparent, black)', zIndex: 3, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 80 }}>
          <FadeIn><SectionBadge>{t(workI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(workI18n.heading, lang)} delay={100} />
          </div>
          <FadeIn delay={200} style={{ maxWidth: 440, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {t(workI18n.sub, lang)}
            </p>
          </FadeIn>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map(({ num, name, url, category, year, desc, demo, tags, accent }, i) => (
            <FadeIn key={num} delay={i * 120} y={36}>
              <div className="liquid-glass" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
                {/* Colored accent panel */}
                <div style={{ width: 'clamp(120px, 20%, 220px)', minHeight: 240, background: accent, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 32, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 56, color: 'rgba(255,255,255,0.12)', lineHeight: 1, letterSpacing: '-0.04em' }}>{num}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{year}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{category}</div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, minWidth: 260 }}>
                  <div>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 16 }}>{name}</h2>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 520 }}>
                      {desc}
                      {demo && (
                        <> {' '}— <span style={{ color: 'rgba(255,255,255,0.4)' }}>{t(workI18n.demo, lang)}: </span>{demo.email} / {demo.password}</>
                      )}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {tags.map(tag => (
                        <span key={tag} className="liquid-glass" style={{ borderRadius: 9999, padding: '5px 12px', fontSize: 12, color: 'rgba(255,255,255,0.55)', fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}>{tag}</span>
                      ))}
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="liquid-glass-strong" style={{ borderRadius: 9999, padding: '9px 20px', background: 'none', border: 'none', color: 'white', textDecoration: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                      {t(workI18n.viewProject, lang)} <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer CTA */}
        <FadeIn style={{ textAlign: 'center', padding: '100px 0 80px' }}>
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
            {t(workI18n.footerHeading, lang)}
          </h3>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            {t(workI18n.footerSub, lang)}
          </p>
          <a href="https://wa.me/522203305165" style={{ borderRadius: 9999, padding: '13px 32px', background: 'white', color: 'black', textDecoration: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
            {t(workI18n.footerCta, lang)}
          </a>
        </FadeIn>
      </div>
    </div>
  );
}


Object.assign(window, { WorkPage });

