import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial/pagina_inicial';
import Cadastro from './pages/Cadastro/cadastro';
import Verificacao from './pages/Cadastro/verificacao_email';
import Login from './pages/Login/login';
import InformacoesExtras from './pages/Cadastro/informacoes_extras';
import ConfirmacaoCadastro from './pages/Cadastro/confirmacao_cadastro';
import EsqueciMinhaSenha from './pages/Login/esqueci_minha_senha';
import RedefinaASenha from './pages/Login/redefina_a_senha';
import SenhaRedefinida from './pages/Login/senha_redefinida';
import Perfil from './pages/Perfil/perfil';
import Notificacao from './pages/Notificação/notificacao';
import Agendamento from './pages/Agendamento/agendamento';
import NovoAgendamento from './pages/Agendamento/novo_agendamento';
import FAQ from './pages/FAQ/faq';

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
        <Route path="esqueci_minha_senha" element={<EsqueciMinhaSenha />} />
        <Route path="redefina_a_senha" element={<RedefinaASenha />} />
        <Route path="senha_redefinida" element={<SenhaRedefinida />} />

        <Route path="perfil" element={<Perfil />} />
        <Route path="notificacao" element={<Notificacao />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="novo_agendamento" element={<NovoAgendamento />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}