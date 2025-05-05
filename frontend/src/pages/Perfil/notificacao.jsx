import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState } from 'react';

function Mensagem({ titulo, conteudo }) {
  return (
    <div className="flex items-start bg-white p-4 shadow rounded-lg">
      <div className="mr-4 text-blue-600 text-2xl">📥</div>
      <div>
        <p
          className="font-bold text-black"
          style={{
            fontFamily: 'var(--menu-poppins)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          {titulo}
        </p>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--paragraph-poppins)',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          {conteudo}
        </p>
      </div>
    </div>
  );
}

function Notificacao() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('novas');

  const mensagensNovas = [
    { titulo: 'Mensagem', conteudo: 'Conteúdo da mensagem' },
    { titulo: 'Mensagem importante', conteudo: 'Lembre-se de realizar seu exame.' },
    { titulo: 'Notificação 3', conteudo: 'Esta é uma mensagem adicional.' },
    { titulo: 'Notificação 4', conteudo: 'Mais uma mensagem para teste.' },
  ];

  const mensagensLidas = [
    { titulo: 'Alerta', conteudo: 'Você tem uma nova notificação de consulta.' },
    { titulo: 'Atualização', conteudo: 'Seu cadastro foi atualizado com sucesso.' },
  ];

  const mensagensExibidas = abaAtiva === 'novas' ? mensagensNovas : mensagensLidas;

  return (
    <div className="flex">
      {/* Sidebar visível apenas em telas médias ou maiores */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Navbar para telas pequenas */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#075091] h-16 flex items-center justify-between px-4 shadow-md z-10">
        {/* Botão do menu hambúrguer */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Imagem de perfil */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Perfil"
            className="rounded-full border-4 border-white w-10 h-10 object-cover"
          />
        </div>
      </div>

      {/* Menu lateral móvel */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#075091] text-white shadow-lg z-20">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <a href="/perfil" className="hover:text-blue-300 cursor-pointer">
                Perfil
              </a>
            </li>
            <li>
              <a href="/notificacao" className="hover:text-blue-300 cursor-pointer">
                Notificações
              </a>
            </li>
            <li>
              <a href="/historico" className="hover:text-blue-300 cursor-pointer">
                Histórico
              </a>
            </li>
            <li>
              <a href="/agendamento" className="hover:text-blue-300 cursor-pointer">
                Agendamento
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-300 cursor-pointer">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="bg-white min-h-screen flex-1 flex flex-col">
        {/* Cabeçalho somente em desktop */}
        <div className="hidden md:flex relative bg-[#cfe8fc] h-40 items-center justify-center md:justify-end pr-0 md:pr-16">
          <div className="absolute top-20 md:mr-[60px]">
            <img
              src="https://via.placeholder.com/150"
              className="rounded-full border-4 border-white w-36 h-36 object-cover"
              alt="Perfil"
            />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col items-center w-full px-4 mt-24 md:mt-10">
          {/* Abas */}
          <div className="mt-8 flex gap-4 mb-4 border-b w-full max-w-2xl">
            <button
              onClick={() => setAbaAtiva('novas')}
              className={`pb-2 ${
                abaAtiva === 'novas'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-bold'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Novas
            </button>
            <button
              onClick={() => setAbaAtiva('lidas')}
              className={`pb-2 ${
                abaAtiva === 'lidas'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-bold'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Lidas
            </button>
          </div>

          {/* Lista de mensagens com barra de rolagem */}
          <div className="space-y-4 w-full max-w-2xl h-64 overflow-y-auto">
            {mensagensExibidas.map((mensagem, index) => (
              <Mensagem
                key={index}
                titulo={mensagem.titulo}
                conteudo={mensagem.conteudo}
              />
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex gap-6 mt-20 md:mt-16 lg:mt-20">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90">
              Ler tudo
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:opacity-90">
              Excluir tudo
            </button>
          </div>

          {/* Rodapé opcional */}
          <footer className="mt-8 md:mt-4 text-sm text-gray-400">
            ©2025 Todos os direitos reservados. Hemovida
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Notificacao;