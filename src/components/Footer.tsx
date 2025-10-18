import { Zap, Mail, Phone, MapPin, Linkedin, Instagram, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#projects" },
    { name: "Sobre", href: "/sobre" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Instalações Industriais",
    "Instalações Residenciais",
    "Manutenção Predial",
    "Eficiência Energética",
    "Energia Solar",
    "Laudos Técnicos CREA-RS"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/eletromays", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/eletromays", label: "Instagram" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-md flex items-center justify-center border-2 border-primary">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">Eletro May's</span>
                <span className="text-xs text-muted-foreground">Engenharia Elétrica</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Especialistas em instalações elétricas industriais, residenciais e manutenção predial em Santa Rosa, RS. 
              Certificação CREA-RS 231706.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">CREA-RS 231706</span>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(55) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contato@eletromays.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Santa Rosa, RS<br />
                  Região Noroeste do Rio Grande do Sul
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-foreground mb-2">
              Receba Nossas Novidades
            </h3>
            <p className="text-muted-foreground mb-4">
              Fique por dentro das últimas tecnologias em engenharia elétrica.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground"
              />
              <Button variant="orange">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Eletro May's Engenharia Elétrica. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;