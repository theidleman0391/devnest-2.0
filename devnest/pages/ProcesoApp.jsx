const { LangProvider, Navbar, ProcessPage, CtaFooter } = window;
function App() {
  return (
    <LangProvider>
      <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <ProcessPage />
        </div>
        <CtaFooter />
      </div>
    </LangProvider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
