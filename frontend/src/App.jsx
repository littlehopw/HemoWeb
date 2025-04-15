import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial/pagina-inicial';
import Cadastro from './pages/Cadastro/cadastro';
import Verificacao from './pages/Cadastro/verificacao_email';
import Login from './pages/Login/login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="verificacao" element={<Verificacao />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}