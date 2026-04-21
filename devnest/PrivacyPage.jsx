const { FadeIn, BlurText, SectionBadge, useLang, t } = window;

const privacyI18n = {
  badge: { en: 'Legal', es: 'Legal' },
  heading: { en: 'Privacy Policy', es: 'Política de Privacidad' },
  sub: { 
    en: 'At Devnest, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.',
    es: 'En Devnest, nos comprometemos a proteger su información personal y su derecho a la privacidad. Si tiene alguna pregunta o inquietud sobre nuestra política o nuestras prácticas con respecto a su información personal, por favor contáctenos.'
  },
  sections: {
    en: [
      {
        title: 'Information Collection',
        content: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.'
      },
      {
        title: 'How We Use Your Information',
        content: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.'
      },
      {
        title: 'Information Sharing',
        content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.'
      },
      {
        title: 'Cookies and Tracking',
        content: 'We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.'
      },
      {
        title: 'Data Security',
        content: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.'
      }
    ],
    es: [
      {
        title: 'Recopilación de Información',
        content: 'Recopilamos la información personal que usted nos proporciona voluntariamente cuando expresa interés en obtener información sobre nosotros o nuestros productos y servicios, cuando participa en actividades en el sitio web o cuando se pone en contacto con nosotros.'
      },
      {
        title: 'Cómo Utilizamos su Información',
        content: 'Utilizamos la información personal recopilada a través de nuestro sitio web para diversos fines comerciales descritos a continuación. Procesamos su información personal para estos fines basándonos en nuestros intereses comerciales legítimos, para celebrar o realizar un contrato con usted, con su consentimiento y/o para cumplir con nuestras obligaciones legales.'
      },
      {
        title: 'Uso Compartido de la Información',
        content: 'Solo compartimos información con su consentimiento, para cumplir con las leyes, para brindarle servicios, para proteger sus derechos o para cumplir con obligaciones comerciales.'
      },
      {
        title: 'Cookies y Seguimiento',
        content: 'Podemos utilizar cookies y tecnologías de seguimiento similares para acceder o almacenar información. La información específica sobre cómo utilizamos dichas tecnologías y cómo puede rechazar ciertas cookies se establece en nuestra Política de Cookies.'
      },
      {
        title: 'Seguridad de los Datos',
        content: 'Hemos implementado medidas de seguridad técnicas y organizativas adecuadas diseñadas para proteger la seguridad de cualquier información personal que procesemos. Sin embargo, recuerde también que no podemos garantizar que la propia Internet sea 100% segura.'
      }
    ]
  }
};

function PrivacyPage() {
  const { lang } = useLang();
  const sections = t(privacyI18n.sections, lang);

  return (
    <div style={{ background: '#000', minHeight: '80vh', paddingTop: 120 }}>
      {/* Ambient glass background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', left: '15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px', paddingBottom: 100 }}>
        {/* Header */}
        <div style={{ textAlign: 'left', paddingTop: 48, paddingBottom: 60 }}>
          <FadeIn><SectionBadge>{t(privacyI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(privacyI18n.heading, lang)} delay={100} />
          </div>
          <FadeIn delay={200}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              {t(privacyI18n.sub, lang)}
            </p>
          </FadeIn>
        </div>

        {/* Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={300 + i * 50} y={20}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 28, color: 'white', marginBottom: 16 }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                {section.content}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PrivacyPage });
