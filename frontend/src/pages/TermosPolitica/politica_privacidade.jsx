import Sidebar from '../../components/Sidebar/sidebar.jsx';
import '../../App.css';

function PoliticaPrivacidade() {
  return (
    <div className="flex">
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="bg-[#cfe8fc] h-40 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-blue-800">Política de Privacidade</h1>
        </div>

        <div className="px-6 py-8 max-w-4xl mx-auto text-sm text-gray-800 leading-relaxed">
          <p className="mb-4">
            A sua privacidade é importante para nós. É política do <strong>HemoWeb</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site HemoWeb, e outros sites que possuímos e operamos.
          </p>
          <p className="mb-4">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p className="mb-4">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p className="mb-4">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p className="mb-4">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          <p className="mb-4">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          <p className="mb-4">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mt-6 mb-2">Compromisso do Usuário</h2>
          <p className="mb-2">
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o <strong>HemoWeb</strong> oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do HemoWeb, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas que possam causar esses danos.</li>
          </ul>

          <h2 className="text-base font-semibold text-blue-700 mt-6 mb-2">Mais informações</h2>
          <p className="mb-4">
            Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>

          <p className="text-gray-500 text-xs mt-6">
            Esta política é efetiva a partir de <strong>24 de Junho de 2025, 00:10</strong>.
          </p>
        </div>

        <p className="text-gray-400 text-xs text-center mt-auto mb-4">
          &copy; 2025 HemoWeb. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;
