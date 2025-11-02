import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Política de Privacidade | Eletro May's Engenharia"
        description="Política de privacidade e proteção de dados da Eletro May's Engenharia Elétrica. LGPD e tratamento de informações."
      />
      <Header />
      
      <main id="main-content">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
            aria-label="Voltar para página inicial"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Voltar
          </Button>

        <h1 className="text-4xl font-bold text-foreground mb-8 font-montserrat">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Informações Gerais</h2>
            <p className="text-muted-foreground">
              A Eletro May's Engenharia Elétrica (CREA-RS 231706) está comprometida com a proteção 
              da privacidade e dos dados pessoais dos seus clientes e visitantes do site, em conformidade 
              com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground mb-2">Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Empresa (opcional)</li>
              <li>Descrição do projeto</li>
              <li>Dados de navegação (cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Finalidade do Uso dos Dados</h2>
            <p className="text-muted-foreground mb-2">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Responder solicitações de orçamento e contato</li>
              <li>Realizar simulações e análises técnicas</li>
              <li>Enviar propostas comerciais</li>
              <li>Melhorar nossos serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para 
              prestação de serviços (ex.: homologação junto à concessionária de energia) ou por 
              determinação legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados 
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground mb-2">Você tem direito a:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
              <li><strong>E-mail:</strong> atendimento@eletromays.com.br</li>
              <li><strong>Telefone:</strong> (55) 3520-5555</li>
              <li><strong>Endereço:</strong> Rua Vinte de Setembro, 751 - Santa Rosa, RS</li>
            </ul>
          </section>
        </div>
      </div>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default PoliticaPrivacidade;
