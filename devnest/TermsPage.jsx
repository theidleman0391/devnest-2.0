const { FadeIn, BlurText, SectionBadge, useLang, t } = window;

const termsI18n = {
  badge: { en: 'Legal', es: 'Legal' },
  heading: { en: 'Terms of Service', es: 'Términos de Servicio' },
  sub: { 
    en: 'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.',
    es: 'Al acceder a este sitio web, usted acepta estar sujeto a estos Términos y Condiciones de uso del sitio web, a todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.'
  },
  sections: {
    en: [
      {
        title: 'Use License',
        content: 'Permission is granted to temporarily view the materials (information or software) on Devnest\'s website for personal, non-commercial transitory viewing only.'
      },
      {
        title: 'Disclaimer',
        content: 'The materials on Devnest\'s website are provided on an \'as is\' basis. Devnest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
      },
      {
        title: 'Limitations',
        content: 'In no event shall Devnest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Devnest\'s website.'
      },
      {
        title: 'Design Ownership',
        content: 'Unless otherwise agreed in a separate service contract, all designs, code, and digital assets created by Devnest remains the intellectual property of Devnest until full payment is received, at which point the license terms of the specific service agreement apply.'
      },
      {
        title: 'Governing Law',
        content: 'Any claim relating to Devnest\'s website shall be governed by the laws of the jurisdiction in which Devnest operates without regard to its conflict of law provisions.'
      }
    ],
    es: [
      {
        title: 'Licencia de Uso',
        content: 'Se otorga permiso para ver temporalmente los materiales (información o software) en el sitio web de Devnest solo para visualización transitoria personal y no comercial.'
      },
      {
        title: 'Descargo de Responsabilidad',
        content: 'Los materiales en el sitio web de Devnest se proporcionan "tal cual". Devnest no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, sin limitación, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de la propiedad intelectual u otra violación de derechos.'
      },
      {
        title: 'Limitaciones',
        content: 'En ningún caso Devnest o sus proveedores serán responsables de ningún daño (incluidos, sin limitación, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web de Devnest.'
      },
      {
        title: 'Propiedad del Diseño',
        content: 'A menos que se acuerde lo contrario en un contrato de servicio por separado, todos los diseños, códigos y activos digitales creados por Devnest siguen siendo propiedad intelectual de Devnest hasta que se reciba el pago completo, momento en el cual se aplican los términos de la licencia del acuerdo de servicio específico.'
      },
      {
        title: 'Ley Aplicable',
        content: 'Cualquier reclamo relacionado con el sitio web de Devnest se regirá por las leyes de la jurisdicción en la que opera Devnest sin tener en cuenta sus disposiciones sobre conflictos de leyes.'
      }
    ]
  }
};

function TermsPage() {
  const { lang } = useLang();
  const sections = t(termsI18n.sections, lang);

  return (
    <div style={{ background: '#000', minHeight: '80vh', paddingTop: 120 }}>
      {/* Ambient glass background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '5%', right: '15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px', paddingBottom: 100 }}>
        {/* Header */}
        <div style={{ textAlign: 'left', paddingTop: 48, paddingBottom: 60 }}>
          <FadeIn><SectionBadge>{t(termsI18n.badge, lang)}</SectionBadge></FadeIn>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <BlurText text={t(termsI18n.heading, lang)} delay={100} />
          </div>
          <FadeIn delay={200}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              {t(termsI18n.sub, lang)}
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

Object.assign(window, { TermsPage });
