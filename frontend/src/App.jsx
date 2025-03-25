import './App.css';
import { Routes, Route } from 'react-router-dom'; // Certificando-se de importar Routes e Route
import PaginaInicial from './pages/PaginaInicial/pagina-inicial.jsx';
import Cadastro from './pages/Cadastro/cadastro.jsx';

function App() {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;