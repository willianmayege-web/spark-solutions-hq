import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { articles } from "@/data/articles";
import { articlesContent } from "@/data/articles-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.slug === slug);
  const content = articlesContent.find(c => c.id === article?.id);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Eletro May's Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", article.excerpt);
      }
    }
  }, [article]);

  if (!article || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Button onClick={() => navigate("/blog")} variant="orange">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </div>
        <FooterEletroMays />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/blog")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>

          {/* Article Meta */}
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <Tag className="w-3 h-3 mr-1" />
              {article.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, '<br />') }}
            />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection
        title="Precisa de Ajuda com Seu Projeto?"
        description="Nossa equipe de especialistas está pronta para transformar seu projeto em realidade. Entre em contato e solicite um orçamento personalizado."
        primaryButtonText="Solicitar Análise do Projeto"
        secondaryButtonText="Falar no WhatsApp"
      />

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default ArticlePage;
