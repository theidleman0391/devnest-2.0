'use strict';

var FadeIn = window.FadeIn;
var BlurText = window.BlurText;
var SectionBadge = window.SectionBadge;
var ArrowUpRight = window.ArrowUpRight;
var LanguageContext = window.LanguageContext;
var _React = React;
var useContext = _React.useContext;

var translations = {
  en: {
    badge: 'Pricing',
    title: 'Investment',
    desc: 'Clear, upfront pricing in MXN. No hidden fees, just premium quality tailored to your exact scope and needs.',
    start: 'Start',
    plans: [{
      title: 'Landing Pages',
      price: '$700 MXN',
      desc: 'Ideal for quick conversions.',
      features: ['Single page layout', 'Conversion optimized', 'Responsive design', 'Basic SEO setup'],
      color: 'rgba(80,180,140,0.15)'
    }, {
      title: 'Online Shop & E-Commerce',
      price: '$1,000 MXN',
      desc: 'Your business, professionalized.',
      features: ['E-Commerce functionality', 'Product catalog', 'Payment gateway', 'Admin dashboard'],
      color: 'rgba(80,120,200,0.15)'
    }, {
      title: 'Mobile Apps',
      price: 'From $1,500 MXN',
      desc: 'Your brand in your customers\' pockets.',
      features: ['iOS & Android', 'Native performance', 'Push notifications', 'Custom UI/UX'],
      color: 'rgba(160,80,200,0.15)'
    }, {
      title: 'Custom Software',
      price: 'From $2,500 MXN',
      desc: 'Automate your processes.',
      features: ['Custom architecture', 'API integrations', 'Real-time sync', 'Scalable database'],
      color: 'rgba(200,140,80,0.15)'
    }]
  },
  es: {
    badge: 'Precios',
    title: 'Inversión',
    desc: 'Precios claros y transparentes en MXN. Sin tarifas ocultas, solo calidad premium adaptada a tu alcance y necesidades.',
    start: 'Comenzar',
    plans: [{
      title: 'Landing Pages',
      price: '$700 MXN',
      desc: 'Ideal para conversiones rápidas.',
      features: ['Diseño de una página', 'Optimizado para conversión', 'Diseño responsivo', 'SEO básico'],
      color: 'rgba(80,180,140,0.15)'
    }, {
      title: 'E-Commerce',
      price: '$1,000 MXN',
      desc: 'Tu negocio, profesionalizado.',
      features: ['Funcionalidad E-Commerce', 'Catálogo', 'Pasarela de pago', 'Panel de admin'],
      color: 'rgba(80,120,200,0.15)'
    }, {
      title: 'Apps Móviles',
      price: 'Desde $1,500 MXN',
      desc: 'Tu marca en el bolsillo de tus clientes.',
      features: ['iOS & Android', 'Rendimiento nativo', 'Notificaciones push', 'UI/UX a medida'],
      color: 'rgba(160,80,200,0.15)'
    }, {
      title: 'Software a Medida',
      price: 'Desde $2,500 MXN',
      desc: 'Automatiza tus procesos.',
      features: ['Arquitectura a medida', 'Integración API', 'Sinc en tiempo real', 'Bases de datos'],
      color: 'rgba(200,140,80,0.15)'
    }]
  }
};

function PricingPage() {
  var _useContext = useContext(LanguageContext);

  var language = _useContext.language;

  var t = translations[language];

  return React.createElement(
    'div',
    { style: { background: '#000', minHeight: '80vh', paddingTop: 80 } },
    React.createElement(
      'div',
      { style: { position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', top: '10%', right: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,180,140,0.08) 0%, transparent 70%)', filter: 'blur(50px)' } }),
      React.createElement('div', { style: { position: 'absolute', bottom: '15%', left: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,120,200,0.08) 0%, transparent 70%)', filter: 'blur(50px)' } })
    ),
    React.createElement(
      'div',
      { style: { position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 24px', paddingBottom: 40 } },
      React.createElement(
        'div',
        { style: { textAlign: 'center', paddingTop: 24, paddingBottom: 40 } },
        React.createElement(
          FadeIn,
          null,
          React.createElement(
            SectionBadge,
            null,
            t.badge
          )
        ),
        React.createElement(
          'div',
          { style: { marginTop: 24, marginBottom: 20 } },
          React.createElement(BlurText, { text: t.title, delay: 100 })
        ),
        React.createElement(
          FadeIn,
          { delay: 200, style: { maxWidth: 500, margin: '0 auto' } },
          React.createElement(
            'p',
            { style: { fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 } },
            t.desc
          )
        )
      ),
      React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 } },
        t.plans.map(function (plan, i) {
          return React.createElement(
            FadeIn,
            { key: plan.title, delay: i * 120, y: 30, style: { display: 'flex' } },
            React.createElement(
              'div',
              { className: 'liquid-glass', style: { flex: 1, borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' } },
              React.createElement('div', { style: { position: 'absolute', top: -50, right: -50, width: 100, height: 100, borderRadius: '50%', background: plan.color, filter: 'blur(30px)' } }),
              React.createElement(
                'h3',
                { style: { fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: 12 } },
                plan.title
              ),
              React.createElement(
                'div',
                { style: { fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 16 } },
                plan.price
              ),
              React.createElement(
                'p',
                { style: { fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: 24 } },
                plan.desc
              ),
              React.createElement(
                'div',
                { style: { flex: 1 } },
                plan.features.map(function (feat) {
                  return React.createElement(
                    'div',
                    { key: feat, style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 } },
                    React.createElement('div', { style: { width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' } }),
                    React.createElement(
                      'span',
                      { style: { fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)' } },
                      feat
                    )
                  );
                })
              )
            )
          );
        })
      ),
      React.createElement(
        FadeIn,
        { delay: 500, style: { display: 'flex', justifyContent: 'center', marginTop: 40 } },
        React.createElement(
          'a',
          { href: 'https://wa.me/522203305165', className: 'liquid-glass-strong', style: { borderRadius: 9999, padding: '14px 40px', background: 'white', border: 'none', textDecoration: 'none', color: 'black', cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 } },
          t.start,
          ' ',
          React.createElement(ArrowUpRight, { size: 16 })
        )
      )
    )
  );
}

Object.assign(window, { PricingPage: PricingPage });
/* Ambient orbs */ /* Header */ /* Pricing Grid */ /* Glow ring */ /* Global CTA */