/**
 * Seção de Login do Cliente
 * Formulário simples de login para área do cliente
 * MVP: Usa emails mock do ClientAuthContext
 */

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Mail, ArrowRight, Info } from "lucide-react";
import { useClientAuth, AVAILABLE_MOCK_PROFILES } from "@/contexts/ClientAuthContext";
import { useNavigate } from "react-router-dom";

const ClientLoginSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useClientAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email);
      if (!success) {
        setError("E-mail não encontrado. Verifique suas credenciais.");
      }
    } catch {
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = (profileEmail: string) => {
    setEmail(profileEmail);
    login(profileEmail);
  };

  // Modo desenvolvimento: mostrar perfis mock disponíveis
  const isDev = import.meta.env.DEV;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Área do Cliente</CardTitle>
              <CardDescription>
                Faça login para acessar seus projetos, relatórios e dados de monitoramento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Entrando..." : "Entrar"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center mb-4">
                  Não tem acesso? Entre em contato para contratar um plano.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/planos-monitoramento')}
                >
                  Ver Planos de Monitoramento
                </Button>
              </div>

              {/* Modo Dev: Seletor de perfis mock */}
              {isDev && (
                <div className="mt-6 pt-6 border-t border-dashed border-primary/30">
                  <Alert className="mb-4 bg-primary/5 border-primary/20">
                    <Info className="w-4 h-4" />
                    <AlertDescription className="text-xs">
                      <strong>Modo Desenvolvimento:</strong> Selecione um perfil mock para testar diferentes cenários.
                    </AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-1 gap-2">
                    {AVAILABLE_MOCK_PROFILES.map((profileEmail) => (
                      <Button
                        key={profileEmail}
                        variant="ghost"
                        size="sm"
                        className="justify-start text-xs font-mono"
                        onClick={() => handleQuickLogin(profileEmail)}
                      >
                        {profileEmail}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientLoginSection;
