import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { getAdminToken } from '@/contexts/AdminAuthContext';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEOHead from '@/components/SEOHead';

interface DashboardStats {
  totalClients: number;
  activeClients: number;
  pendingReports: number;
  openTickets: number;
  recentClients: Array<{
    id: string;
    name: string;
    email: string;
    created_at: string;
  }>;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      const token = getAdminToken();
      if (!token) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-api?resource=dashboard`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Erro ao carregar dados');
        }

        setStats(result.data);
      } catch (err) {
        console.error('Dashboard error:', err);
        setError('Erro ao carregar estatísticas');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total de Clientes',
      value: stats?.totalClients || 0,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Clientes Ativos',
      value: stats?.activeClients || 0,
      icon: TrendingUp,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Laudos Pendentes',
      value: stats?.pendingReports || 0,
      icon: FileText,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Chamados Abertos',
      value: stats?.openTickets || 0,
      icon: MessageSquare,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <>
      <SEOHead
        title="Dashboard - Admin - Eletro May's"
        description="Painel administrativo"
        noIndex={true}
      />

      <AdminLayout title="Dashboard">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin mt-2" />
                    ) : (
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Clients */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Clientes Recentes</CardTitle>
                  <CardDescription>Últimos clientes cadastrados</CardDescription>
                </div>
                <Link to="/admin/clients">
                  <Button variant="ghost" size="sm">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              ) : stats?.recentClients && stats.recentClients.length > 0 ? (
                <div className="space-y-4">
                  {stats.recentClients.map((client) => (
                    <div 
                      key={client.id} 
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-muted-foreground">{client.email}</p>
                      </div>
                      <Link to={`/admin/clients/${client.id}`}>
                        <Button variant="ghost" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Nenhum cliente cadastrado
                </p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>Acesso rápido às funções mais usadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin/clients" className="block">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Users className="w-5 h-5" />
                  Gerenciar Clientes
                </Button>
              </Link>
              <Link to="/admin/settings" className="block">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <FileText className="w-5 h-5" />
                  Configurações
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
}
