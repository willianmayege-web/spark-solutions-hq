import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface DiagnosticResult {
  category: string;
  checks: {
    name: string;
    status: 'pass' | 'fail' | 'warning';
    message: string;
    recommendation?: string;
  }[];
}

const DiagnosticsPage = () => {
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [webVitals, setWebVitals] = useState<any>({});

  const runDiagnostics = () => {
    setLoading(true);
    
    // Obter Web Vitals
    const vitals = (window as any).__EM_VITALS__ || {};
    setWebVitals(vitals);

    const diagnostics: DiagnosticResult[] = [
      {
        category: "Web Vitals",
        checks: [
          {
            name: "LCP (Largest Contentful Paint)",
            status: vitals.LCP && vitals.LCP < 1500 ? 'pass' : vitals.LCP && vitals.LCP < 2500 ? 'warning' : 'fail',
            message: vitals.LCP ? `${(vitals.LCP / 1000).toFixed(2)}s` : 'Aguardando medição',
            recommendation: vitals.LCP > 1500 ? 'Otimize imagens e lazy loading' : undefined
          },
          {
            name: "CLS (Cumulative Layout Shift)",
            status: vitals.CLS && vitals.CLS < 0.05 ? 'pass' : vitals.CLS && vitals.CLS < 0.1 ? 'warning' : 'fail',
            message: vitals.CLS ? vitals.CLS.toFixed(3) : 'Aguardando medição',
            recommendation: vitals.CLS > 0.05 ? 'Defina dimensões de imagens e evite inserções dinâmicas' : undefined
          },
          {
            name: "INP (Interaction to Next Paint)",
            status: vitals.INP && vitals.INP < 200 ? 'pass' : vitals.INP && vitals.INP < 500 ? 'warning' : 'fail',
            message: vitals.INP ? `${vitals.INP}ms` : 'Aguardando medição',
            recommendation: vitals.INP > 200 ? 'Otimize JavaScript e use debouncing' : undefined
          },
          {
            name: "TTFB (Time to First Byte)",
            status: vitals.TTFB && vitals.TTFB < 800 ? 'pass' : vitals.TTFB && vitals.TTFB < 1500 ? 'warning' : 'fail',
            message: vitals.TTFB ? `${vitals.TTFB}ms` : 'Aguardando medição',
            recommendation: vitals.TTFB > 800 ? 'Otimize servidor e use CDN' : undefined
          }
        ]
      },
      {
        category: "SEO Técnico",
        checks: [
          {
            name: "Title Tag",
            status: document.title && document.title.length > 0 && document.title.length < 60 ? 'pass' : 'warning',
            message: `"${document.title}" (${document.title.length} caracteres)`,
            recommendation: document.title.length > 60 ? 'Reduza para menos de 60 caracteres' : undefined
          },
          {
            name: "Meta Description",
            status: document.querySelector('meta[name="description"]') ? 'pass' : 'fail',
            message: document.querySelector('meta[name="description"]')?.getAttribute('content')?.substring(0, 50) + '...' || 'Não encontrada',
            recommendation: !document.querySelector('meta[name="description"]') ? 'Adicione meta description em todas as páginas' : undefined
          },
          {
            name: "Canonical URL",
            status: document.querySelector('link[rel="canonical"]') ? 'pass' : 'warning',
            message: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'Não definida',
            recommendation: !document.querySelector('link[rel="canonical"]') ? 'Adicione canonical tag para evitar conteúdo duplicado' : undefined
          },
          {
            name: "Imagens com Alt",
            status: checkImagesAlt(),
            message: getImagesAltMessage(),
            recommendation: checkImagesAlt() !== 'pass' ? 'Adicione texto alternativo em todas as imagens' : undefined
          }
        ]
      },
      {
        category: "Dados Estruturados",
        checks: [
          {
            name: "JSON-LD Schema",
            status: document.querySelector('script[type="application/ld+json"]') ? 'pass' : 'fail',
            message: document.querySelector('script[type="application/ld+json"]') ? 'Detectado' : 'Não encontrado',
            recommendation: !document.querySelector('script[type="application/ld+json"]') ? 'Adicione schema LocalBusiness e Service' : undefined
          }
        ]
      },
      {
        category: "Acessibilidade",
        checks: [
          {
            name: "Atributo lang",
            status: document.documentElement.lang ? 'pass' : 'fail',
            message: document.documentElement.lang || 'Não definido',
            recommendation: !document.documentElement.lang ? 'Adicione lang="pt-BR" no HTML' : undefined
          },
          {
            name: "Labels em Inputs",
            status: checkInputLabels(),
            message: getInputLabelsMessage(),
            recommendation: checkInputLabels() !== 'pass' ? 'Associe labels a todos os inputs' : undefined
          }
        ]
      },
      {
        category: "Segurança",
        checks: [
          {
            name: "HTTPS",
            status: window.location.protocol === 'https:' ? 'pass' : 'fail',
            message: window.location.protocol === 'https:' ? 'Ativo' : 'Não ativo',
            recommendation: window.location.protocol !== 'https:' ? 'Configure certificado SSL' : undefined
          }
        ]
      },
      {
        category: "Performance",
        checks: [
          {
            name: "Lazy Loading",
            status: checkLazyLoading(),
            message: getLazyLoadingMessage(),
            recommendation: checkLazyLoading() !== 'pass' ? 'Adicione loading="lazy" nas imagens' : undefined
          }
        ]
      }
    ];

    setResults(diagnostics);
    setLoading(false);
  };

  const checkImagesAlt = (): 'pass' | 'warning' | 'fail' => {
    const images = document.querySelectorAll('img');
    const withAlt = Array.from(images).filter(img => img.alt).length;
    const percentage = images.length > 0 ? (withAlt / images.length) * 100 : 0;
    if (percentage === 100) return 'pass';
    if (percentage > 80) return 'warning';
    return 'fail';
  };

  const getImagesAltMessage = (): string => {
    const images = document.querySelectorAll('img');
    const withAlt = Array.from(images).filter(img => img.alt).length;
    return `${withAlt}/${images.length} imagens com alt`;
  };

  const checkInputLabels = (): 'pass' | 'warning' | 'fail' => {
    const inputs = document.querySelectorAll('input, textarea, select');
    const withLabels = Array.from(inputs).filter(input => {
      const id = input.getAttribute('id');
      return id && document.querySelector(`label[for="${id}"]`);
    }).length;
    const percentage = inputs.length > 0 ? (withLabels / inputs.length) * 100 : 100;
    if (percentage === 100) return 'pass';
    if (percentage > 80) return 'warning';
    return 'fail';
  };

  const getInputLabelsMessage = (): string => {
    const inputs = document.querySelectorAll('input, textarea, select');
    const withLabels = Array.from(inputs).filter(input => {
      const id = input.getAttribute('id');
      return id && document.querySelector(`label[for="${id}"]`);
    }).length;
    return `${withLabels}/${inputs.length} inputs com labels`;
  };

  const checkLazyLoading = (): 'pass' | 'warning' | 'fail' => {
    const images = document.querySelectorAll('img');
    const withLazy = Array.from(images).filter(img => img.loading === 'lazy').length;
    const percentage = images.length > 0 ? (withLazy / images.length) * 100 : 0;
    if (percentage > 80) return 'pass';
    if (percentage > 50) return 'warning';
    return 'fail';
  };

  const getLazyLoadingMessage = (): string => {
    const images = document.querySelectorAll('img');
    const withLazy = Array.from(images).filter(img => img.loading === 'lazy').length;
    return `${withLazy}/${images.length} imagens com lazy loading`;
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const getStatusIcon = (status: 'pass' | 'fail' | 'warning') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
              Diagnóstico Técnico do Site
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Auditoria completa de performance, SEO e acessibilidade
            </p>
            <Button
              onClick={runDiagnostics}
              disabled={loading}
              variant="orange"
              size="lg"
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Analisando...' : 'Re-testar'}
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-12 h-12 animate-spin mx-auto text-primary mb-4" />
              <p className="text-muted-foreground">Executando diagnósticos...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {results.map((result, index) => (
                <Card key={index} className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    {result.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {result.checks.map((check, checkIndex) => (
                      <div
                        key={checkIndex}
                        className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(check.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{check.name}</h3>
                            <span className="text-sm text-muted-foreground">{check.message}</span>
                          </div>
                          {check.recommendation && (
                            <p className="text-sm text-muted-foreground italic">
                              → {check.recommendation}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-4">Critérios de Aprovação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ LCP {'<'} 1.5s | CLS {'<'} 0.05 | INP {'<'} 200ms | TTFB {'<'} 0.8s</li>
              <li>✓ Title, meta description, canonical e robots válidos</li>
              <li>✓ JSON-LD LocalBusiness + Service implementados</li>
              <li>✓ lang=pt-BR, contraste AA, labels nos inputs</li>
              <li>✓ HTTPS ativo e headers de segurança configurados</li>
              <li>✓ Lazy load e otimização de imagens</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiagnosticsPage;
