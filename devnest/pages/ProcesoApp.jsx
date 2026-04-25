const { LangProvider, Navbar, ProcessPage } = window;
function App() {
  return (
    <LangProvider>
      <div style={{ background: '#000', minHeight: '100vh' }}>
        <Navbar />
        <ProcessPage />
      </div>
    </LangProvider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
