import { Zap, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterEletroMays = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground font-montserrat">Eletro May's</span>
                <div className="text-sm text-muted-foreground">CNPJ: 44.443.829/0001-34</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Especialistas em soluções completas de engenharia elétrica moderna, 
              oferecendo inovação, qualidade e eficiência.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 font-montserrat">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contato@eletromays.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 font-montserrat">Links</h3>
            <div className="space-y-2">
              {["Política de Privacidade", "Termos de Uso", "Certificações"].map((link) => (
                <a key={link} href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>© 2024 Eletro May's. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 bg-green-500 hover:bg-green-600 text-white animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </footer>
  );
};

export default FooterEletroMays;