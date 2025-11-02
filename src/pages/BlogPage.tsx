import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = ["all", ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog Técnico | Artigos sobre Engenharia Elétrica e Energia Solar"
        description="Artigos técnicos sobre eficiência energética, normas NBR 5410 e 5419, energia solar fotovoltaica e instalações elétricas industriais. Conteúdo por engenheiro CREA-RS."
        keywords="blog engenharia elétrica, artigos energia solar, normas técnicas elétricas, eficiência energética, SPDA"
      />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border" aria-labelledby="blog-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-primary mr-3" aria-hidden="true" />
            <h1 id="blog-heading" className="text-4xl md:text-5xl font-bold text-foreground font-montserrat">
              Blog <span className="text-primary">Técnico</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Artigos especializados sobre eficiência energética, normas de segurança elétrica, 
            energia solar e melhores práticas em instalações industriais e residenciais.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
                aria-label="Pesquisar artigos no blog"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-border" aria-label="Filtros de categoria">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filtros de categoria de artigos">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "orange" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
                aria-pressed={selectedCategory === category}
                aria-label={`Filtrar por categoria ${category === "all" ? "Todos" : category}`}
              >
                {category === "all" ? "Todos" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4" aria-label="Lista de artigos">
        <div className="container mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPage;
