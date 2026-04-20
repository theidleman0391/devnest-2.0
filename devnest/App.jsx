
const { LangProvider, Navbar, Hero, StartSection, FeaturesChess, FeaturesGrid, Stats, CtaFooter } = window;

function App() {
  return (
    <LangProvider>
      <div style={{ background: '#000', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <Hero />
        <div style={{ background: '#000', position: 'relative', zIndex: 10 }}>
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <StartSection />
          <CtaFooter />
        </div>
      </div>
    </LangProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
