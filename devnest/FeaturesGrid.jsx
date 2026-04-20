
const { SectionBadge, FadeIn, ZapIcon, PaletteIcon, BarChart3Icon, ShieldIcon, useLang, t } = window;

const gridI18n = {
  badge: { en: 'Why Us', es: 'Por Qué Nosotros' },
  heading: { en: 'The difference is everything.', es: 'La diferencia lo es todo.' },
  features: {
    en: [
      { icon: ZapIcon,        title: 'Days, Not Months',       body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy." },
      { icon: PaletteIcon,    title: 'Obsessively Crafted',    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.' },
      { icon: BarChart3Icon,  title: 'Built to Convert',       body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.' },
      { icon: ShieldIcon,     title: 'Secure by Default',      body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.' },
    ],
    es: [
      { icon: ZapIcon,        title: 'Días, No Meses',          body: 'Del concepto al lanzamiento a un ritmo que redefine la velocidad. Porque esperar no es una estrategia.' },
      { icon: PaletteIcon,    title: 'Obsesivamente Diseñado',  body: 'Cada detalle considerado. Cada elemento refinado. Diseño tan preciso que se siente inevitable.' },
      { icon: BarChart3Icon,  title: 'Hecho para Convertir',    body: 'Diseños basados en datos. Decisiones respaldadas por rendimiento. Resultados que puedes medir.' },
      { icon: ShieldIcon,     title: 'Seguridad Incluida',      body: 'Protección de nivel empresarial de serie. SSL, mitigación DDoS, cumplimiento normativo. Todo incluido.' },
    ]
  }
};

function FeaturesGrid() {
  const { lang } = useLang();
  const features = t(gridI18n.features, lang);
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <FadeIn style={{ textAlign: 'center', marginBottom: 16 }}><SectionBadge>{t(gridI18n.badge, lang)}</SectionBadge></FadeIn>
      <FadeIn delay={100} style={{ textAlign: 'center', marginBottom: 56 }}>
        <h2 className="section-heading">{t(gridI18n.heading, lang)}</h2>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {features.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 100} y={24}>
            <div className="liquid-glass" style={{ borderRadius: 16, padding: 28, height: '100%' }}>
              <div className="liquid-glass-strong" style={{ borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: 'white' }}>
                <Icon size={17} />
              </div>
              <h4 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 15, color: 'white', marginBottom: 10 }}>{title}</h4>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { FeaturesGrid });
