import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

const TechnicalArticles = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-10 h-10 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Blog <span className="text-primary">Técnico</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Artigos especializados sobre eficiência energética, normas de segurança elétrica e melhores práticas 
            em instalações industriais e residenciais no Rio Grande do Sul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="orange" 
            size="lg"
            onClick={() => navigate("/blog")}
          >
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArticles;
