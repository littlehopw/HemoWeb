import Sidebar from '../../components/Sidebar/sidebar.jsx';
import '../../App.css';

function TermosDeUso() {
  return (
    <div className="flex">
      <div className="bg-white min-h-screen flex-1 flex flex-col">
        <div className="bg-[#cfe8fc] h-40 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-blue-800">Termos de Uso</h1>
        </div>

        <div className="px-6 py-8 max-w-4xl mx-auto text-sm text-gray-800 leading-relaxed">
          <h2 className="text-base font-semibold text-blue-700 mb-2">1. Termos</h2>
          <p className="mb-4">
            Ao acessar ao site HemoWeb, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">2. Uso de Licença</h2>
          <p className="mb-2">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site HemoWeb, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site HemoWeb;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
            <li>Transferir os materiais para outra pessoa ou espelhar os materiais em qualquer outro servidor.</li>
          </ul>
          <p className="mb-4">
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por HemoWeb a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">3. Isenção de responsabilidade</h2>
          <p className="mb-4">
            Os materiais no site da HemoWeb são fornecidos "como estão". HemoWeb não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            Além disso, o HemoWeb não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">4. Limitações</h2>
          <p className="mb-4">
            Em nenhum caso o HemoWeb ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido à interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em HemoWeb, mesmo que HemoWeb ou um representante autorizado tenha sido notificado da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">5. Precisão dos materiais</h2>
          <p className="mb-4">
            Os materiais exibidos no site da HemoWeb podem incluir erros técnicos, tipográficos ou fotográficos. HemoWeb não garante que qualquer material em seu site seja preciso, completo ou atual. HemoWeb pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, HemoWeb não se compromete a atualizar os materiais.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">6. Links</h2>
          <p className="mb-4">
            O HemoWeb não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por HemoWeb do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">Modificações</h2>
          <p className="mb-4">
            O HemoWeb pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2 className="text-base font-semibold text-blue-700 mb-2">Lei aplicável</h2>
          <p className="mb-4">
            Estes termos e condições são regidos e interpretados de acordo com as leis do HemoWeb e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>

        <p className="text-gray-400 text-xs text-center mt-auto mb-4">
          &copy; 2025 HemoWeb. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default TermosDeUso;
