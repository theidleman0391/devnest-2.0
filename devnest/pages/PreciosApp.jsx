const { LangProvider, Navbar, PricingPage, CtaFooter } = window;
function App() {
  return (
    <LangProvider>
      <div style={{ background: '#000', minHeight: '100vh' }}>
        <Navbar />
        <PricingPage />
        <CtaFooter />
      </div>
    </LangProvider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
