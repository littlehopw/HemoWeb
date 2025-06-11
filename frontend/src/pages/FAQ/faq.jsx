import '../../App.css';
import Sidebar from '../../components/Sidebar/sidebar.jsx';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const perguntasRespostas = [
  {
    pergunta: 'Quais são os requisitos gerais para doar?',
    resposta: `Idade: 16 a 69 anos (com autorização dos pais entre 16 e 17). Acima de 60, só se já tiver doado antes dos 60.

Peso: Mínimo de 50 kg.

Documento: Levar documento oficial com foto, assinatura e filiação.

Estado de saúde: Estar bem de saúde, sem sintomas gripais, febre ou infecções.

Sono: Ter dormido ao menos 4 horas.

Nutrição: Estar bem alimentado e nutrido.`,
  },
  {
    pergunta: 'O que devo comer antes de doar?',
    resposta: `Não estar em jejum.

Evitar refeições gordurosas antes da doação (esperar 3 a 4 horas se ingerir comida pesada).

Hidratar-se bem antes e depois da doação.`,
  },
  {
    pergunta: 'De quanto em quanto tempo devo doar?',
    resposta: `Homens: Intervalo de 60 dias, até 4 vezes por ano.

Mulheres: Intervalo de 90 dias, até 3 vezes por ano.`,
  },
  {
    pergunta: 'Quais avaliações são feitas na hora da doação?',
    resposta: `Pressão arterial: Deve estar entre 90/60 e 180/100 mmHg.

Temperatura corporal: Abaixo de 37°C.

Pulso: Entre 50 e 100 bpm.

Peso: Avaliado na hora (descontado 1 kg da roupa).

Anemia: Avaliação da quantidade de ferro no sangue (furo no dedo) para exclusão de anemia.`,
  },
  {
    pergunta: 'O que é feito com o sangue doado?',
    resposta: `O sangue doado é fracionado para envio aos hospitais e pacientes que estejam necessitando. O sangue é fracionado em 4 hemocomponentes principais:

Concentrado de hemácias (CHM) – é a parte vermelha do sangue que contém as hemácias, células sanguíneas, responsáveis pelo transporte do oxigênio para todo o corpo humano.

Concentrado de plaquetas (CP) – é um componente claro, que contém as plaquetas, células responsáveis por um dos mecanismos de coagulação que impedem a continuidade do sangramento formando um tampão nos vasos sanguíneos.

Plasma fresco congelado (PFC) – é a parte líquida do sangue, clara e que contém fatores de coagulação responsáveis pelos outros mecanismos de coagulação, além da plaqueta.

Crioprecipitado (CRIO) – é um precipitado originado do descongelamento do PFC em temperatura de 4° C rico em fator VIII, fator XIII e fibrinogênio, muito utilizado para distúrbios de coagulação adquiridos por falta destes elementos.

O sangue é rotulado de forma a permitir sua rastreabilidade (possibilidade de identificar a origem do sangue doado em caso de reações adversas no receptor), porém, preservando o sigilo do doador. De acordo com a legislação brasileira a confidencialidade dos dados dos doadores deve ser mantida em todas as fases. São realizados exames para tipificação do sangue e identificação de doenças transmissíveis. Após a liberação de todos os exames, os hemocomponentes cujos resultados foram normais são liberados para distribuição aos hospitais e clínicas conveniados.`,
  },
  {
    pergunta: 'Quais exames são feitos no sangue doado?',
    resposta: `A liberação do sangue para utilização exige os seguintes exames:

Imuno-hematológicos: tipagem ABO e Rh, pesquisa de anticorpos irregulares e pesquisa de hemoglobina S.

Sorológicos: são feitos exames para pesquisa de hepatites B e C, Doença de Chagas, sífilis, HIV e HTLV.

Quando um paciente necessita do sangue são realizados testes de compatibilidade entre o sangue doado e o do potencial receptor - a chamada prova cruzada.`,
  },
  {
    pergunta: 'Por que são feitas tantas perguntas para avaliar a doação de sangue?',
    resposta: `Porque a doação de sangue, apesar de salvar vidas, pode também transmitir várias doenças a quem recebe o sangue. Os exames para verificar se o doador está com alguma doença não são absolutamente capazes de detectá-la. Por exemplo, a maioria dos exames mede a quantidade de anticorpos (defesa formada pelo corpo na presença de uma infecção) no organismo, mas para que o exame consiga detectar a presença da doença, é necessário que estes anticorpos tenham atingido um determinado valor no sangue. Assim, se uma pessoa adquiriu uma doença há pouco tempo, pode ser que o exame dê resultado negativo, mesmo ela estando infectada. O tempo transcorrido entre a pessoa adquirir uma doença e o exame conseguir identificá-la é conhecido como janela imunológica. Algumas das doenças transmitidas pelo sangue possuem um tempo de janela bastante grande e é por isso que algumas situações impedem a doação por um tempo longo.`,
  },
  {
    pergunta: 'Por que quem consome bebida alcoólica com frequência não pode doar sangue, mesmo que já tenha parado de beber?',
    resposta: `A restrição ocorre porque o uso frequente de bebidas alcoólicas pode afetar o fígado que, doente, pode não conseguir produzir adequadamente os fatores de coagulação. Na doação de sangue, a bolsa é fracionada em, pelo menos, três componentes, dentre os quais o plasma fresco congelado (PFC). O PFC é utilizado para repor fatores de coagulação em pessoas que estejam apresentando sangramento anormal. Assim, se o plasma de uma pessoa com doença hepática (doença do fígado) for utilizado, a transfusão pode não funcionar. Além disso, se o doador não estiver produzindo quantidades adequadas de fatores de coagulação, ele também poderá apresentar um sangramento anormal no local da doação, favorecendo ocorrência de hematomas.`,
  },
  {
    pergunta: 'Por que quem fez tatuagem ou maquiagem definitiva não pode doar por 12 meses?',
    resposta: `Nestes procedimentos ocorre a perfuração da pele para implantação do pigmento. Mesmo que a agulha seja descartável (utilizada uma única vez), se houver o reaproveitamento de pigmentos, poderá ocorrer a transmissão de algumas doenças infectocontagiosas que podem ser transmitidas pelo sangue, como, por exemplo, hepatite por vírus B, que se caracteriza por uma longa sobrevivência no ambiente.`,
  },
  {
    pergunta: 'Quais os principais mitos e crenças relacionados à doação de sangue?',
    resposta: `Dentre eles, destacam-se:

"Quem doa sangue uma vez, tem que doar sempre".

"Doar sangue engorda ou emagrece, afina ou engrossa o sangue"

"Doar sangue dá coceiras".

"Doar sangue contamina o doador".

É preciso deixar claro que esses mitos, tabus e preconceitos remontam ao início da prática da hemoterapia e não têm nenhum respaldo ou comprovação científica. Essas crenças, que prevalecem ainda hoje em algumas regiões do país, surgem e persistem por causa da desinformação e da herança cultural.`,
  },
  {
    pergunta: 'Doar sangue fornece atestado aos doadores de sangue?',
    resposta: `Sim. Os doadores podem gozar dos benefícios da Lei Federal n.º1075, de 27/03/1950 e do artigo 473 da Consolidação das Leis Trabalhistas (CLT), que dispõem sobre a doação voluntária de sangue e permitem a dispensa, uma vez por ano, dos funcionários que tenham doado sangue. Para o candidato que não puder doar, é fornecida uma declaração de comparecimento ao hemocentro para justificar o atraso no comparecimento ao trabalho.`,
  },
  {
    pergunta: 'Por que são feitas tantas perguntas a respeito da vida sexual (comportamento sexual) do candidato à doação?',
    resposta: `Porque várias doenças transmitidas via relações sexuais são também transmitidas pela transfusão de sangue. Algumas delas podem também demorar a serem identificadas nos exames de sangue. Por isto, o triagista avalia se a pessoa esteve exposta a alguma situação com um risco maior que o habitual para adquirir doenças sexualmente transmissíveis (DST); uma vez que todas as pessoas sexualmente ativas são consideradas sob risco de adquirir uma DST. Não poder doar por uma determinada situação não significa que a pessoa apresente comportamento de risco, que seja de grupo de risco ou promíscua. Significa apenas que ela deve aguardar um prazo de segurança para que, se tiver adquirido alguma doença, o exame consiga detectá-la, protegendo o receptor do sangue.`,
  },
  {
  pergunta: 'Tem mais dúvidas?',
  resposta: (
    <>
      Acesse o site do GOV:{' '}
      <a
        href="https://www.gov.br/saude/pt-br/composicao/saes/sangue"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 underline break-all"
      >
        https://www.gov.br/saude/pt-br/composicao/saes/sangue
      </a>
    </>
  ),
},
];

function CardPergunta({ pergunta, resposta, aberta, aoClicar }) {
  return (
    <div className="bg-white shadow-md p-5 w-full max-w-2xl relative mb-4 rounded-xl">
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
          className={`text-blue-900 text-2xl transition-transform duration-200 ${aberta ? 'rotate-180' : ''}`}
        />
      </div>
      {aberta && (
        <div
          className="mt-3 text-gray-600 whitespace-pre-line"
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
    <div className="flex bg-blue-900 min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 h-16 flex items-center justify-between px-4 shadow-md z-10">
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
          <div className="fixed top-16 left-0 w-full bg-blue-900 text-white shadow-lg z-20">
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

        <div className="relative bg-[#cfe8fc] h-40 flex items-center justify-center w-full mb-8 rounded-b-xl">
          <h1
            className="text-blue-900 font-bold"
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