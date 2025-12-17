import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import DOMPurify from "dompurify";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
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

  // Sanitize HTML content for XSS protection
  const sanitizedContent = useMemo(() => {
    if (!content) return '';
    return DOMPurify.sanitize(
      content.content.replace(/\n/g, '<br />'),
      { 
        ALLOWED_TAGS: ['br', 'p', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'h2', 'h3', 'h4', 'span'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
      }
    );
  }, [content]);

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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": "Eng. Willian Paulo May",
      "jobTitle": "Engenheiro Eletricista",
      "memberOf": {
        "@type": "Organization",
        "name": "Eletro May's Engenharia Elétrica"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eletro May's Engenharia Elétrica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eletromays.com.br/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png"
      }
    },
    "datePublished": article.date,
    "image": article.image
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${article.title} | Blog Eletro May's`}
        description={article.excerpt}
        keywords={`${article.category.toLowerCase()}, engenharia elétrica, ${article.title.toLowerCase()}`}
        ogImage={article.image}
        jsonLd={articleJsonLd}
      />
      <Header />
      
      <main id="main-content">
        {/* Article Header */}
        <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/blog")}
            className="mb-6"
            aria-label="Voltar para a página do blog"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
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
                aria-label="Compartilhar este artigo"
              >
                <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={`${article.title} - Artigo técnico sobre engenharia elétrica por Eletro May's`}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                width="1200"
                height="630"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
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
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default ArticlePage;
