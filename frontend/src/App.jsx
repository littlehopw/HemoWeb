import './App.css';
import { Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial/pagina-inicial.jsx';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/pagina-inicial" element={<PaginaInicial />}> </Route>
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;