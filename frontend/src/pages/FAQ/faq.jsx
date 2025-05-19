import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const perguntasRespostas = [
  {
    pergunta: 'Como faço para agendar uma doação?',
    resposta: 'Você pode agendar uma doação acessando a área de Agendamento no menu principal e escolhendo a data e horário disponíveis.',
  },
  {
    pergunta: 'Quais são os requisitos para doar sangue?',
    resposta: 'É necessário ter entre 16 e 69 anos, pesar mais de 50kg e estar em boas condições de saúde. Outros requisitos podem ser consultados na área de FAQ.',
  },
  {
    pergunta: 'Como altero meus dados cadastrais?',
    resposta: 'Acesse o menu Perfil e clique em "Editar dados" para atualizar suas informações pessoais.',
  },
  {
    pergunta: 'Recebo alguma notificação após o agendamento?',
    resposta: 'Sim, você receberá notificações por e-mail e dentro do aplicativo sobre o status do seu agendamento.',
  },
  {
    pergunta: 'O que devo levar no dia da doação?',
    resposta: 'Leve um documento oficial com foto e esteja bem alimentado e hidratado.',
  },
];

function CardPergunta({ pergunta, resposta, aberta, aoClicar }) {
  return (
    <div className="bg-white shadow-md p-5 w-full max-w-2xl relative mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={aoClicar}>
        <div
          className="font-bold text-black"
          style={{
            fontFamily: 'var(--menu-poppins)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          {pergunta}
        </div>
        <FiChevronDown
          className={`text-[#075091] text-2xl transition-transform duration-200 ${aberta ? 'rotate-180' : ''}`}
        />
      </div>
      {aberta && (
        <div
          className="mt-3 text-gray-600"
          style={{
            fontFamily: 'var(--paragraph-poppins)',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          {resposta}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aberta, setAberta] = useState(null);

  return (
    <div className="flex bg-[#075091] min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="md:hidden fixed top-0 left-0 w-full bg-[#075091] h-16 flex items-center justify-between px-4 shadow-md z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
          <div className="flex items-center"></div>
        </div>
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

        <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center w-full mb-8">
          <h1
            className="text-[#075091] font-bold"
            style={{
              fontFamily: 'var(--menu-poppins)',
              fontSize: '2rem',
              lineHeight: '2.5rem',
            }}
          >
            Perguntas Frequentes
          </h1>
        </div>
        <div className="flex flex-col items-center w-full px-4 flex-grow relative">
          <div className="flex flex-col items-center w-full">
            {perguntasRespostas.map((item, idx) => (
              <CardPergunta
                key={idx}
                pergunta={item.pergunta}
                resposta={item.resposta}
                aberta={aberta === idx}
                aoClicar={() => setAberta(aberta === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-10 mb-4 text-center">
          &copy; 2025 HemoWeb. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default FAQ;