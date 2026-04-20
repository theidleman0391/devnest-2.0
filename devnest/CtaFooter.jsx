
const { useLang, t } = window;

const footerI18n = {
  copy: { en: '© 2026 Devnest. All rights reserved.', es: '© 2026 Devnest. Todos los derechos reservados.' },
  links: {
    en: ['Privacy', 'Terms', 'Contact'],
    es: ['Privacidad', 'Términos', 'Contacto']
  }
};

function CtaFooter() {
  const { lang } = useLang();
  const links = t(footerI18n.links, lang);
  return (
    <footer style={{ position: 'relative', zIndex: 10, padding: '28px 48px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t(footerI18n.copy, lang)}</span>
      <div style={{ display: 'flex', gap: 28 }}>
        {links.map(link => (
          <a key={link} href="#" style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
          >{link}</a>
        ))}
      </div>
    </footer>
  );
}

Object.assign(window, { CtaFooter });
