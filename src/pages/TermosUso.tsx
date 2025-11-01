import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const TermosUso = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Termos de Uso | Eletro May's Engenharia"
        description="Termos e condições de uso do site da Eletro May's Engenharia Elétrica. Direitos, deveres e responsabilidades."
      />
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <h1 className="text-4xl font-bold text-foreground mb-8 font-montserrat">
          Termos de Uso
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar o site da Eletro May's Engenharia Elétrica (eletromays.com.br), 
              você concorda com estes Termos de Uso. Se não concordar, não utilize este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Serviços Oferecidos</h2>
            <p className="text-muted-foreground mb-2">
              O site oferece informações sobre nossos serviços de engenharia elétrica, incluindo:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Projetos elétricos industriais, residenciais e prediais</li>
              <li>Instalação de sistemas de energia solar fotovoltaica</li>
              <li>SPDA (Sistema de Proteção contra Descargas Atmosféricas)</li>
              <li>Laudos técnicos e perícias elétricas</li>
              <li>Automação e controle</li>
              <li>Consultoria em eficiência energética</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Uso do Site</h2>
            <p className="text-muted-foreground mb-2">Você concorda em:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fornecer informações verdadeiras e atualizadas nos formulários</li>
              <li>Não utilizar o site para fins ilícitos ou não autorizados</li>
              <li>Não tentar violar a segurança do site</li>
              <li>Respeitar os direitos autorais e de propriedade intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Simulações e Orçamentos</h2>
            <p className="text-muted-foreground">
              As simulações de energia solar e orçamentos fornecidos online são estimativas preliminares 
              e não constituem proposta vinculativa. Valores definitivos serão apresentados após análise 
              técnica detalhada por engenheiro CREA-RS 231706.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo do site (textos, imagens, logos, códigos) é de propriedade da 
              Eletro May's ou licenciado para uso. É proibida a reprodução sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              A Eletro May's não se responsabiliza por danos decorrentes de:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Uso inadequado das informações do site</li>
              <li>Interrupções ou erros técnicos</li>
              <li>Links para sites de terceiros</li>
              <li>Decisões tomadas com base em simulações não validadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modificações</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              Recomendamos revisar periodicamente esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Lei Aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro de Santa Rosa/RS 
              para dirimir quaisquer controvérsias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
              <li><strong>E-mail:</strong> atendimento@eletromays.com.br</li>
              <li><strong>Telefone:</strong> (55) 3520-5555</li>
              <li><strong>Endereço:</strong> Rua Vinte de Setembro, 751 - Santa Rosa, RS</li>
              <li><strong>CREA-RS:</strong> 231706</li>
            </ul>
          </section>
        </div>
      </div>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default TermosUso;
