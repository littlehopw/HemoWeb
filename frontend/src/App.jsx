import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial/pagina-inicial';
import Cadastro from './pages/Cadastro/cadastro';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}