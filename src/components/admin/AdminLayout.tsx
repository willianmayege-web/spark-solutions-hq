import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Shield,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Clientes', href: '/admin/clients' },
  { icon: Settings, label: 'Configurações', href: '/admin/settings' },
];

export function AdminLayout({ children, title, breadcrumbs }: AdminLayoutProps) {
  const { email, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:transform-none",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <Link to="/admin" className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <span className="font-bold text-lg">Admin</span>
              </Link>
              <button 
                className="lg:hidden p-2 hover:bg-muted rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <Badge variant="outline" className="mt-2 bg-primary/10 text-primary border-primary/30">
              ÁREA ADMINISTRATIVA
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <div className="mb-3">
              <p className="text-sm text-muted-foreground">Logado como</p>
              <p className="text-sm font-medium truncate">{email}</p>
            </div>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>

          {/* Back to site */}
          <div className="p-4 pt-0">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                ← Voltar ao site
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 hover:bg-muted rounded-md"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Breadcrumbs */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="hidden sm:flex items-center gap-1 text-sm">
                  <Link to="/admin" className="text-muted-foreground hover:text-foreground">
                    Admin
                  </Link>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      {crumb.href ? (
                        <Link to={crumb.href} className="text-muted-foreground hover:text-foreground">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-foreground">{crumb.label}</span>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              )}
            </div>

            <Badge variant="destructive" className="hidden sm:flex">
              MODO ADMIN
            </Badge>
          </div>

          {/* Page title */}
          {title && (
            <div className="px-4 pb-4">
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
