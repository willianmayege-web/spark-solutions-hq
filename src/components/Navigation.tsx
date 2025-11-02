import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Portfólio", href: "/#projetos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/#orcamento" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" role="banner">
      <a href="#main-content" className="skip-to-main">
        Pular para o conteúdo principal
      </a>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3"
            aria-label="Eletro May's - Página inicial"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-md flex items-center justify-center border-2 border-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">Eletro May's</span>
              <span className="text-xs text-muted-foreground">CREA-RS 231706</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div 
            className="hidden md:flex items-center space-x-8" 
            role="navigation" 
            aria-label="Navegação principal"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="orange" 
              className="ml-4"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#orcamento';
                } else {
                  document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Abrir formulário de orçamento gratuito"
            >
              Solicite Orçamento Gratuito
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-nav"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu-nav"
            className="md:hidden py-4 border-t border-border"
            role="navigation"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={0}
                  aria-label={`Navegar para ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="orange" 
                className="w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#orcamento';
                  } else {
                    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                aria-label="Abrir formulário de orçamento gratuito"
              >
                Solicite Orçamento Gratuito
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;