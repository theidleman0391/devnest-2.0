
const { useState, useEffect } = React;
const { ArrowUpRight, useLang, t } = window;

const NAV_LINKS_I18N = {
  en: [
    { label: 'Home', href: 'index.html' },
    { label: 'Services', href: 'Services.html' },
    { label: 'Work', href: 'Work.html' },
    { label: 'Process', href: 'Process.html' },
    { label: 'Pricing', href: 'Pricing.html' },
  ],
  es: [
    { label: 'Inicio', href: 'index.html' },
    { label: 'Servicios', href: 'Services.html' },
    { label: 'Trabajo', href: 'Work.html' },
    { label: 'Proceso', href: 'Process.html' },
    { label: 'Precios', href: 'Pricing.html' },
  ]
};

const CTA_TEXT = { en: 'Get Started', es: 'Comenzar' };

const mobileMenuStyles = `
  @keyframes menuSlideIn {
    from { opacity: 0; transform: translateY(-18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes menuSlideOut {
    from { opacity: 1; transform: translateY(0); }
    to   { opacity: 0; transform: translateY(-18px); }
  }
  @keyframes menuLinkIn {
    from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }
  .mobile-menu-enter { animation: menuSlideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .mobile-menu-exit  { animation: menuSlideOut 0.28s cubic-bezier(0.55, 0, 0.68, 0.06) forwards; }
  .mobile-menu-link  { opacity: 0; animation: menuLinkIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
`;

function Navbar() {
  const current = window.location.pathname.split('/').pop() || '';
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { lang, setLang } = useLang();
  const NAV_LINKS = NAV_LINKS_I18N[lang] || NAV_LINKS_I18N.en;

  const openMenu = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 280);
  };

  const toggleMenu = () => isOpen ? closeMenu() : openMenu();

  return (
    <>
      <style>{mobileMenuStyles}</style>

      <nav style={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 50 }} className="px-4 md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, paddingBottom: 12, maxWidth: 1400, margin: '0 auto' }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
              <img src="/logo.png" alt="Logo" style={{ width: 56, height: 56, objectFit: 'cover', objectPosition: '47% center' }} />
            </div>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 20, color: 'white', letterSpacing: '-0.02em' }}>Devnest</span>
          </a>

          {/* Desktop Nav */}
          <div className="liquid-glass hidden md:flex items-center gap-[2px] rounded-full p-[6px]">
            {NAV_LINKS.map(link => {
              const isActive = current === link.href || (current === '' && link.href === 'index.html');
              return (
                <a key={link.href} href={link.href} style={{
                  padding: '8px 14px', fontSize: 13, fontWeight: 500,
                  color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', fontFamily: "'Barlow', sans-serif", borderRadius: 9999,
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Language Toggle */}
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{
              padding: '6px 12px', fontSize: 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)', borderRadius: 9999,
              cursor: 'pointer', fontFamily: "'Barlow', sans-serif",
              transition: 'all 0.2s', marginLeft: 2
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            <a href="https://wa.me/522203305165" style={{ padding: '8px 14px', fontSize: 13, fontWeight: 600, background: 'white', color: 'black', textDecoration: 'none', fontFamily: "'Barlow', sans-serif", borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 4, marginLeft: 2 }}>
              {t(CTA_TEXT, lang)} <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Toggle Mobile */}
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{
              padding: '6px 12px', fontSize: 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)', borderRadius: 9999,
              cursor: 'pointer', fontFamily: "'Barlow', sans-serif"
            }}>
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <a href="https://wa.me/522203305165" className="liquid-glass" style={{ padding: '8px 14px', fontSize: 13, fontWeight: 600, background: 'white', color: 'black', textDecoration: 'none', fontFamily: "'Barlow', sans-serif", borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {lang === 'en' ? 'Start' : 'Iniciar'}
            </a>
            <button onClick={toggleMenu} className="liquid-glass" style={{
              padding: '8px 14px', borderRadius: 9999, background: 'none', border: 'none',
              color: 'white', display: 'flex', alignItems: 'center', gap: 6,
              cursor: 'pointer', fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: 'transform 0.25s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
              {lang === 'en' ? 'Menu' : 'Menú'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={isClosing ? 'mobile-menu-exit' : 'mobile-menu-enter'}
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)', paddingTop: 120, paddingLeft: 24, paddingRight: 24 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
            {NAV_LINKS.map((link, i) => {
              const isActive = current === link.href || (current === '' && link.href === 'index.html');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontSize: 36,
                    color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    animationDelay: `${i * 60 + 80}ms`,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { Navbar });
