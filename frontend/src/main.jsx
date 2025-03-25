import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import PaginaInicial from './pages/PaginaInicial/pagina-inicial.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <PaginaInicial />
    </Router>
  </StrictMode>
);