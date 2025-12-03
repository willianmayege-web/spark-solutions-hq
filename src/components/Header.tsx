import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Projetos", href: "/#projetos" },
    { name: "Simulador Solar", href: "/#simulador" },
    { name: "Seguro Solar", href: "/seguro-energia-solar" },
    { name: "Artigos", href: "/#artigos" },
    { name: "Área do Cliente", href: "/area-do-cliente" },
    { name: "Contato", href: "/#orcamento" },
  ];

  const scrollToQuote = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="banner">
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
            <img 
              src="/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png" 
              alt="Eletro May's Logo" 
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground font-montserrat">Eletro May's</span>
              <span className="text-xs text-muted-foreground">Engenharia • CREA-RS 231706</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav 
            className="hidden lg:flex items-center space-x-8" 
            role="navigation" 
            aria-label="Navegação principal"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="orange" 
              className="ml-4" 
              onClick={scrollToQuote}
              aria-label="Abrir formulário de orçamento"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border"
            role="navigation"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
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
                onClick={scrollToQuote}
                aria-label="Abrir formulário de orçamento"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;