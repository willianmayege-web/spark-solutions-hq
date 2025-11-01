import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEOHead 
        title="Página Não Encontrada | Eletro May's"
        description="A página solicitada não foi encontrada no site da Eletro May's Engenharia Elétrica."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! A página que você procura não existe</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
