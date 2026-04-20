const { FadeIn, BlurText, SectionBadge, ArrowUpRight, useLang, t } = window;

const pricingI18n = {
  badge: { en: 'Pricing', es: 'Precios' },
  heading: { en: 'Investment', es: 'Inversión' },
  sub: { en: 'Clear, upfront pricing in MXN. No hidden fees, just premium quality tailored to your exact scope and needs.', es: 'Precios claros y directos en MXN. Sin tarifas ocultas, solo calidad premium adaptada a tu alcance y necesidades.' },
  cta: { en: 'Get Started', es: 'Comenzar' },
  plans: {
    en: [
      {
        title: 'Landing Pages',
        price: '$700 MXN',
        desc: 'Ideal for quick conversions.',
        features: ['Single page layout', 'Conversion optimized', 'Responsive design', 'Basic SEO setup'],
        color: 'rgba(80,180,140,0.15)'
      },
      {
        title: 'Online Shop and E-Commerce',
        price: '$1,000 MXN',
        desc: 'Your business, professionalized.',
        features: ['E-Commerce functionality', 'Product catalog', 'Payment gateway', 'Admin dashboard'],
        color: 'rgba(80,120,200,0.15)'
      },
      {
        title: 'Mobile Apps',
        price: 'From $1,500 MXN',
        desc: 'Your brand in your customers\' pockets.',
        features: ['iOS & Android', 'Native performance', 'Push notifications', 'Custom UI/UX'],
        color: 'rgba(160,80,200,0.15)'
      },
      {
        title: 'Custom Software',
        price: 'From $2,500 MXN',
        desc: 'Automate your processes.',
        features: ['Custom architecture', 'API integrations', 'Real-time sync', 'Scalable database'],
        color: 'rgba(200,140,80,0.15)'
      }
    ],
    es: [
      {
        title: 'Landing Pages',
        price: '$700 MXN',
        desc: 'Ideal para conversiones rápidas.',
        features: ['Diseño de una sola página', 'Optimizado para conversión', 'Diseño responsivo', 'Configuración SEO básica'],
        color: 'rgba(80,180,140,0.15)'
      },
      {
        title: 'Tienda Online y E-Commerce',
        price: '$1,000 MXN',
        desc: 'Tu negocio, profesionalizado.',
        features: ['Funcionalidad E-Commerce', 'Catálogo de productos', 'Pasarela de pago', 'Panel de administración'],
        color: 'rgba(80,120,200,0.15)'
      },
      {
        title: 'Aplicaciones Móviles',
        price: 'Desde $1,500 MXN',
        desc: 'Tu marca en los bolsillos de tus clientes.',
        features: ['iOS y Android', 'Rendimiento nativo', 'Notificaciones push', 'UI/UX personalizado'],
        color: 'rgba(160,80,200,0.15)'
      },
      {
        title: 'Software Personalizado',
        price: 'Desde $2,500 MXN',
        desc: 'Automatiza tus procesos.',
        features: ['Arquitectura personalizada', 'Integraciones API', 'Sincronización en tiempo real', 'Base de datos escalable'],
        color: 'rgba(200,140,80,0.15)'
      }
    ]
  }
};

function PricingPage() {
  const { lang } = useLang();
  const plans = t(pricingI18n.plans, lang);

  return (
    <div style={{ background: '#000', minHeight: '80vh', paddingTop: 120 }}>
      {/* Ambient orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,180,140,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,120,200,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 24px', paddingBottom: 80 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 80 }}>
          <FadeIn><SectionBadge>{t(pricingI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(pricingI18n.heading, lang)} delay={100} />
          </div>
          <FadeIn delay={200} style={{ maxWidth: 500, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {t(pricingI18n.sub, lang)}
            </p>
          </FadeIn>
        </div>

        {/* Pricing Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {plans.map((plan, i) => (
            <FadeIn key={plan.title} delay={i * 120} y={30} style={{ display: 'flex' }}>
              <div className="liquid-glass" style={{ flex: 1, borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                {/* Glow ring */}
                <div style={{ position: 'absolute', top: -50, right: -50, width: 100, height: 100, borderRadius: '50%', background: plan.color, filter: 'blur(30px)' }} />
                
                <h3 style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                  {plan.title}
                </h3>
                
                <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 16 }}>
                  {plan.price}
                </div>
                
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: 32, minHeight: 45 }}>
                  {plan.desc}
                </p>

                <div style={{ flex: 1 }}>
                  {plan.features.map(feat => (
                    <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/522203305165" className="liquid-glass-strong" style={{ width: '100%', marginTop: 32, borderRadius: 9999, padding: '12px 0', background: 'none', border: 'none', textDecoration: 'none', color: 'white', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  {t(pricingI18n.cta, lang)} <ArrowUpRight size={14} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PricingPage });
