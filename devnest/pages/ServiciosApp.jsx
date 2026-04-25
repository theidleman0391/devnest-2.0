const { LangProvider, Navbar, ServicesPage } = window;
function App() {
  return (
    <LangProvider>
      <div style={{ background: '#000', minHeight: '100vh' }}>
        <Navbar />
        <ServicesPage />
      </div>
    </LangProvider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
