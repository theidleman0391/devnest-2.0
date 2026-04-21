
const { useEffect, useRef, useState, useContext, createContext } = React;

// ── Language Context ─────────────────────────────────────────────────────────
const LangContext = createContext({ lang: 'es', setLang: () => {} });

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('devnest_lang');
    if (saved) return saved;
    const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
  });
  useEffect(() => { localStorage.setItem('devnest_lang', lang); }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

function useLang() { return useContext(LangContext); }
function t(translations, lang) { return translations[lang] || translations.en; }

// ── useInView hook ───────────────────────────────────────────────────────────
function useInView(ref, { once = true, threshold = 0.05 } = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        if (once) obs.disconnect();
      }
    }, { threshold, rootMargin: '0px 0px -20px 0px' });
    
    obs.observe(el);
    return () => { obs.disconnect(); };
  }, [once, threshold]);
  return inView;
}

// ── FadeIn wrapper ───────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, y = 28, style = {}, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
      filter: inView ? 'blur(0px)' : 'blur(10px)',
      transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
    }}>
      {children}
    </div>
  );
}


// ── BlurText ─────────────────────────────────────────────────────────────────
function BlurText({ text, delay = 100, className = '', animateBy = 'words' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  return (
    <span ref={ref} className={className} style={{ display: 'block' }}>
      {elements.map((el, i) => (
        <span key={i} style={{
          display: 'inline-block',
          marginRight: animateBy === 'words' ? '0.28em' : '0',
          opacity: 0,
          filter: inView ? undefined : 'blur(10px)',
          transform: inView ? undefined : 'translateY(50px)',
          animation: inView ? `blurFadeIn 0.7s ease-out ${i * delay}ms both` : 'none',
        }}>
          {el}
        </span>

      ))}
    </span>
  );
}

// ── HlsVideo ──────────────────────────────────────────────────────────────────
function HlsVideo({ src, className = '', style = {}, desaturate = false }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    let hls;
    if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls({ enableWorker: false });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(window.Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => video.play().catch(() => {}));
    }
    return () => { if (hls) hls.destroy(); };
  }, [src]);
  return (
    <video ref={videoRef} autoPlay loop muted playsInline className={className}
      style={{ ...style, ...(desaturate ? { filter: 'saturate(0)' } : {}) }} />
  );
}

// ── SectionBadge ─────────────────────────────────────────────────────────────
function SectionBadge({ children }) {
  return (
    <span className="liquid-glass" style={{
      borderRadius: 9999, padding: '6px 16px', fontSize: 12,
      fontWeight: 500, color: 'white', fontFamily: "'Barlow', sans-serif",
      display: 'inline-block'
    }}>
      {children}
    </span>
  );
}

// ── Icons (inline SVG) ────────────────────────────────────────────────────────
function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}
function PlayIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  );
}
function ZapIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function PaletteIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}
function BarChart3Icon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
    </svg>
  );
}
function ShieldIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

Object.assign(window, {
  LangContext, LangProvider, useLang, t,
  FadeIn, BlurText, HlsVideo, SectionBadge,
  ArrowUpRight, PlayIcon, ZapIcon, PaletteIcon, BarChart3Icon, ShieldIcon
});
