
const { FadeIn, BlurText, SectionBadge, ArrowUpRight, useLang, t } = window;

const processI18n = {
  badge: { en: 'Process', es: 'Proceso' },
  heading: { en: 'From idea to live in 5 days.', es: 'De la idea al lanzamiento en 5 días.' },
  sub: { en: 'A tight, proven process that eliminates uncertainty and delivers extraordinary results — on a timeline that would shock most agencies.', es: 'Un proceso comprobado y eficiente que elimina la incertidumbre y entrega resultados extraordinarios — en un plazo que sorprendería a la mayoría de las agencias.' },
  footerHeading: { en: 'Ready to see it in action?', es: '¿Listo para verlo en acción?' },
  footerSub: { en: 'Book a free strategy call. Day 1 can start tomorrow.', es: 'Agenda una llamada de estrategia gratuita. El Día 1 puede comenzar mañana.' },
  contact: { en: 'Contact', es: 'Contacto' },
  viewWork: { en: 'View Our Work', es: 'Ver Nuestro Trabajo' },
};

const stepsI18n = {
  en: [
    {
      num: '01',
      day: 'Day 1',
      title: 'Discovery',
      body: 'We learn everything about your brand, audience, and goals. A deep-dive session that sets the foundation for everything that follows. No assumptions — only clarity.',
      detail: 'Brand audit · Competitor research · Goal alignment · Audience mapping',
    },
    {
      num: '02',
      day: 'Day 2',
      title: 'Wireframes',
      body: 'Our AI generates multiple layout concepts in hours, not weeks. You choose a direction and we refine it together — structure first, pixels second.',
      detail: 'AI layout generation · Flow mapping · Content hierarchy · Client review',
    },
    {
      num: '03',
      day: 'Days 2–3',
      title: 'Design',
      body: 'Full visual design, built on your brand identity. Typography, color, motion — every interaction considered. You see it before a single line of code is written.',
      detail: 'High-fidelity mockups · Design system · Motion design · Iteration rounds',
    },
    {
      num: '04',
      day: 'Days 3–4',
      title: 'Build',
      body: 'Clean, performant code. Your site comes to life exactly as designed — no creative drift, no surprises. We build for speed, accessibility, and scale.',
      detail: 'React / Next.js · Performance tuning · Responsive QA · CMS integration',
    },
    {
      num: '05',
      day: 'Day 5',
      title: 'Launch',
      body: "We deploy, test, and hand over the keys. Analytics wired up, SEO foundations in place, and us on call for 30 days. You're live — and you're not alone.",
      detail: 'Deployment · Analytics setup · SEO baseline · 30-day support',
    },
  ],
  es: [
    {
      num: '01',
      day: 'Día 1',
      title: 'Descubrimiento',
      body: 'Aprendemos todo sobre tu marca, audiencia y objetivos. Una sesión profunda que establece las bases para todo lo que sigue. Sin suposiciones — solo claridad.',
      detail: 'Auditoría de marca · Investigación de competencia · Alineación de objetivos · Mapeo de audiencia',
    },
    {
      num: '02',
      day: 'Día 2',
      title: 'Wireframes',
      body: 'Nuestra IA genera múltiples conceptos de diseño en horas, no semanas. Tú eliges la dirección y lo refinamos juntos — estructura primero, píxeles después.',
      detail: 'Generación de layouts con IA · Mapeo de flujos · Jerarquía de contenido · Revisión del cliente',
    },
    {
      num: '03',
      day: 'Días 2–3',
      title: 'Diseño',
      body: 'Diseño visual completo, basado en tu identidad de marca. Tipografía, color, movimiento — cada interacción considerada. Lo ves antes de que se escriba una sola línea de código.',
      detail: 'Mockups de alta fidelidad · Sistema de diseño · Diseño en movimiento · Rondas de iteración',
    },
    {
      num: '04',
      day: 'Días 3–4',
      title: 'Desarrollo',
      body: 'Código limpio y de alto rendimiento. Tu sitio cobra vida exactamente como fue diseñado — sin desviaciones creativas, sin sorpresas. Construimos para velocidad, accesibilidad y escala.',
      detail: 'React / Next.js · Optimización de rendimiento · QA responsivo · Integración con CMS',
    },
    {
      num: '05',
      day: 'Día 5',
      title: 'Lanzamiento',
      body: 'Desplegamos, probamos y te entregamos las llaves. Analytics configurado, bases SEO establecidas, y nosotros disponibles por 30 días. Estás en línea — y no estás solo.',
      detail: 'Despliegue · Configuración de analytics · Base SEO · Soporte por 30 días',
    },
  ],
};

function ProcessPage() {
  const { lang } = useLang();
  const steps = t(stepsI18n, lang);
  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingTop: 120, position: 'relative', overflow: 'hidden' }}>
      {/* BG video — top-anchored, slow playback */}
      <FadeIn delay={0} y={0} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', zIndex: 0 }}>
        <video autoPlay loop muted playsInline src="/stripe1.mp4"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </FadeIn>
      {/* Dark overlay — full video area for readability */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'rgba(0,0,0,0.72)', zIndex: 1 }} />
      {/* Bottom fade to black */}
      <div style={{ position: 'absolute', top: '30%', left: 0, right: 0, height: '30%', background: 'linear-gradient(to bottom, transparent, black)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 80 }}>
          <FadeIn><SectionBadge>{t(processI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(processI18n.heading, lang)} delay={110} />
          </div>
          <FadeIn delay={200} style={{ maxWidth: 440, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {t(processI18n.sub, lang)}
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 'clamp(0px, 5vw, 48px)' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 'clamp(16px, 5vw, 64px)', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent)', pointerEvents: 'none' }} />

          {steps.map(({ num, day, title, body, detail }, i) => (
            <FadeIn key={num} delay={i * 110} y={32}>
              <div style={{ display: 'flex', gap: 'clamp(24px, 5vw, 64px)', alignItems: 'flex-start', marginBottom: 16, position: 'relative' }}>
                {/* Step dot */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 2, marginTop: 8 }}>
                  <div className="liquid-glass-strong" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)'
                  }}>{num}</div>
                </div>

                {/* Card */}
                <div className="liquid-glass" style={{ flex: 1, borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)', marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: 'white', lineHeight: 1, letterSpacing: '-0.02em' }}>{title}</h3>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{day}</span>
                  </div>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 580, marginBottom: 24 }}>{body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {detail.split(' · ').map(d => (
                      <span key={d} className="liquid-glass" style={{ borderRadius: 9999, padding: '4px 12px', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: "'Barlow', sans-serif" }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn style={{ textAlign: 'center', padding: '80px 0 80px' }}>
          <div className="liquid-glass" style={{ borderRadius: 24, padding: 'clamp(48px, 6vw, 72px)', display: 'inline-block', width: '100%' }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 16 }}>
              {t(processI18n.footerHeading, lang)}
            </h3>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
              {t(processI18n.footerSub, lang)}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/522203305165" className="liquid-glass-strong" style={{ borderRadius: 9999, padding: '12px 28px', background: 'none', border: 'none', textDecoration: 'none', color: 'white', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                {t(processI18n.contact, lang)} <ArrowUpRight size={15} />
              </a>
              <a href="Work.html" style={{ borderRadius: 9999, padding: '12px 28px', background: 'white', color: 'black', textDecoration: 'none', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
                {t(processI18n.viewWork, lang)}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

Object.assign(window, { ProcessPage });
