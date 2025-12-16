import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { 
  User, 
  Shield, 
  Clock,
  Info
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';

export default function AdminSettingsPage() {
  const { email, expiresAt } = useAdminAuth();

  const formatDate = (date: string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <SEOHead
        title="Configurações - Admin - Eletro May's"
        description="Configurações do painel administrativo"
        noIndex={true}
      />

      <AdminLayout 
        title="Configurações"
        breadcrumbs={[{ label: 'Configurações' }]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Informações da Sessão
              </CardTitle>
              <CardDescription>
                Detalhes da sua sessão administrativa atual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Shield className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Nível de acesso</p>
                  <p className="font-medium">Administrador</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Clock className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Sessão expira em</p>
                  <p className="font-medium">{formatDate(expiresAt)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5" />
                Informações de Segurança
              </CardTitle>
              <CardDescription>
                Boas práticas de segurança
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Sessões expiram automaticamente após 8 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Rate limiting ativo para tentativas de login</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Todas as tentativas de login são registradas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>APIs protegidas com autenticação obrigatória</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Token armazenado apenas em sessionStorage</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
}
