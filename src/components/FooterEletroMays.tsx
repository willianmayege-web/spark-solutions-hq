import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Clock, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterEletroMays = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Rua+Vinte+de+Setembro,+751,+Santa+Rosa,+RS', '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png" 
                alt="Eletro May's Engenharia Elétrica - Logotipo oficial CREA-RS 231706" 
                className="w-12 h-12"
              />
              <div>
                <span className="text-xl font-bold text-foreground font-montserrat">Eletro May's</span>
                <div className="text-xs text-muted-foreground">Engenharia Elétrica</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Engenharia elétrica com excelência técnica. Projetos, laudos, 
              energia solar e SPDA em Santa Rosa e região noroeste do RS.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold text-sm">CREA-RS: 231706</span>
            </div>
            <div className="text-xs text-muted-foreground">
              CNPJ: 44.443.829/0001-34
            </div>
          </div>

          {/* Coluna 2 - Contato Completo */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-montserrat">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-muted-foreground text-sm">(55) 3520-5555</div>
                  <div className="text-xs text-muted-foreground">WhatsApp disponível</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:atendimento@eletromays.com.br" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  atendimento@eletromays.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-muted-foreground text-sm">Rua Vinte de Setembro, 751</div>
                  <div className="text-muted-foreground text-sm">Santa Rosa - RS</div>
                  <div className="text-muted-foreground text-sm mb-2">CEP: 98900-000</div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={openGoogleMaps}
                    className="text-xs"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Ver no Mapa
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3 - Serviços e Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-montserrat">Serviços</h3>
            <div className="space-y-2">
              {[
                { name: "Energia Solar", href: "#services" },
                { name: "SPDA - Para-raios", href: "#services" },
                { name: "Projetos Elétricos", href: "#services" },
                { name: "Perícias Técnicas", href: "#services" },
                { name: "Portfólio", href: "#projetos" },
                { name: "Artigos Técnicos", href: "#artigos" },
                { name: "Simulador Solar", href: "#simulador" }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 4 - Redes Sociais e Horários */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-montserrat">Redes Sociais</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://instagram.com/eletromays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/eletromays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <h3 className="font-semibold text-foreground mb-3 font-montserrat flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              Horário de Atendimento
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Seg - Sex: 8h às 18h</div>
              <div>Sábado: 8h às 12h</div>
              <div className="text-xs pt-1">Atendimento 24h para emergências</div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 Eletro May's Engenharia Elétrica - CREA-RS 231706. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/termos-uso" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/politica-cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            ⚡ Desenvolvido com energia sustentável
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEletroMays;