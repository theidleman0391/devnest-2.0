
const { SectionBadge, FadeIn, useLang, t } = window;

const testimonialsI18n = {
  badge: { en: 'What They Say', es: 'Lo Que Dicen' },
  heading: { en: "Don't take our word for it.", es: 'No lo digas tú, que lo digan ellos.' },
  items: {
    en: [
      { quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.", name: 'Sarah Chen', role: 'CEO, Luminary' },
      { quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.", name: 'Marcus Webb', role: 'Head of Growth, Arcline' },
      { quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.", name: 'Elena Voss', role: 'Brand Director, Helix' },
    ],
    es: [
      { quote: 'Una reconstrucción completa en cinco días. El resultado superó todo lo que habíamos tardado meses en construir antes.', name: 'Sarah Chen', role: 'CEO, Luminary' },
      { quote: 'Conversiones al alza x4. No es un error tipográfico. El diseño funciona diferente cuando está basado en datos reales.', name: 'Marcus Webb', role: 'Director de Crecimiento, Arcline' },
      { quote: 'No solo diseñaron nuestro sitio. Definieron nuestra marca. "De clase mundial" se queda corto.', name: 'Elena Voss', role: 'Directora de Marca, Helix' },
    ],
  },
};

function Testimonials() {
  const { lang } = useLang();
  const testimonials = t(testimonialsI18n.items, lang);
  return (
    <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <FadeIn style={{ textAlign: 'center', marginBottom: 16 }}><SectionBadge>{t(testimonialsI18n.badge, lang)}</SectionBadge></FadeIn>
      <FadeIn delay={100} style={{ textAlign: 'center', marginBottom: 56 }}>
        <h2 className="section-heading">{t(testimonialsI18n.heading, lang)}</h2>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {testimonials.map(({ quote, name, role }, i) => (
          <FadeIn key={name} delay={i * 120} y={24}>
            <div className="liquid-glass" style={{ borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 52, color: 'rgba(255,255,255,0.13)', lineHeight: 1 }}>"</span>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', lineHeight: 1.75, flex: 1 }}>{quote}</p>
              <div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 14, color: 'white', marginBottom: 3 }}>{name}</div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{role}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });
