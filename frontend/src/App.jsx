import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial/pagina-inicial';
import Cadastro from './pages/Cadastro/cadastro';
import Perfil from './pages/Perfil/perfil';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}