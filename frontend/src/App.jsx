import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial/pagina-inicial';
import Cadastro from './pages/Cadastro/cadastro';
import Verificacao from './pages/Cadastro/verificacao_email';
import Login from './pages/Login/login';
import InformacoesExtras from './pages/Cadastro/informacoes_extras';
import ConfirmacaoCadastro from './pages/Cadastro/confirmacao_cadastro';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaginaInicial />} />

        <Route path="cadastro" element={<Cadastro />} />
        <Route path="verificacao" element={<Verificacao />} />
        <Route path="informacoes_extras" element={<InformacoesExtras />} />
        <Route path="confirmacao_cadastro" element={<ConfirmacaoCadastro />} />

        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}