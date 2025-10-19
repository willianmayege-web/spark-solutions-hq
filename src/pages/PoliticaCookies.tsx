import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticaCookies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
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
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. O que são Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita 
              nosso site. Eles nos ajudam a melhorar sua experiência, lembrar suas preferências e 
              entender como você usa nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Tipos de Cookies Utilizados</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Cookies Essenciais</h3>
            <p className="text-muted-foreground">
              Necessários para o funcionamento básico do site, incluindo navegação e acesso a áreas 
              seguras. Sem estes cookies, alguns serviços não podem ser fornecidos.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Cookies de Funcionalidade</h3>
            <p className="text-muted-foreground">
              Permitem que o site lembre suas escolhas (como idioma, região) e ofereça recursos 
              personalizados e melhorados.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3. Cookies de Análise</h3>
            <p className="text-muted-foreground">
              Coletam informações sobre como os visitantes usam o site (páginas mais visitadas, 
              tempo de permanência). Utilizamos Google Analytics para entender o comportamento dos 
              usuários e melhorar nossos serviços.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.4. Cookies de Marketing</h3>
            <p className="text-muted-foreground">
              Rastreiam sua navegação para exibir anúncios relevantes e medir a eficácia de campanhas 
              publicitárias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies de Terceiros</h2>
            <p className="text-muted-foreground mb-2">
              Nosso site pode usar cookies de terceiros para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Google Analytics:</strong> Análise de tráfego e comportamento</li>
              <li><strong>Google Maps:</strong> Exibição de localização</li>
              <li><strong>WhatsApp Business:</strong> Integração de chat</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Gerenciamento de Cookies</h2>
            <p className="text-muted-foreground mb-2">
              Você pode controlar e gerenciar cookies de várias formas:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Configurando seu navegador para bloquear ou alertar sobre cookies</li>
              <li>Excluindo cookies já armazenados no seu dispositivo</li>
              <li>Usando o modo de navegação anônima/privada</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Importante:</strong> Desabilitar cookies pode afetar a funcionalidade do site 
              e sua experiência de navegação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Como Desabilitar Cookies por Navegador</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
              <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
              <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
              <li><strong>Edge:</strong> Configurações → Privacidade → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Atualizações desta Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças nas 
              tecnologias e práticas. Recomendamos revisar esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre nossa política de cookies:
            </p>
            <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
              <li><strong>E-mail:</strong> atendimento@eletromays.com.br</li>
              <li><strong>Telefone:</strong> (55) 3520-5555</li>
              <li><strong>Endereço:</strong> Rua Vinte de Setembro, 751 - Santa Rosa, RS</li>
            </ul>
          </section>
        </div>
      </div>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default PoliticaCookies;
