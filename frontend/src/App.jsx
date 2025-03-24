import './App.css';
import PaginaInicial from './pages/pagina-inicial.jsx'
import Cadastro from './pages/cadastro.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;