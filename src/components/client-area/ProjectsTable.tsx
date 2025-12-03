import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Download } from "lucide-react";

type ProjectStatus = "em_analise" | "em_execucao" | "concluido" | "aguardando_docs";

interface Project {
  id: string;
  name: string;
  serviceType: string;
  status: ProjectStatus;
  lastUpdate: string;
  hasReport: boolean;
}

const statusConfig: Record<ProjectStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  em_analise: { label: "Em análise", variant: "secondary" },
  em_execucao: { label: "Em execução", variant: "default" },
  concluido: { label: "Concluído", variant: "outline" },
  aguardando_docs: { label: "Aguardando documentos", variant: "destructive" },
};

const projectsData: Project[] = [
  {
    id: "PRJ-2024-001",
    name: "Sistema Fotovoltaico 15kWp - Indústria Metalúrgica",
    serviceType: "Energia Solar",
    status: "em_execucao",
    lastUpdate: "02/12/2025",
    hasReport: false,
  },
  {
    id: "PRJ-2024-002",
    name: "Laudo SPDA - Condomínio Residencial Park",
    serviceType: "Laudo SPDA",
    status: "concluido",
    lastUpdate: "28/11/2025",
    hasReport: true,
  },
  {
    id: "PRJ-2024-003",
    name: "Análise de Qualidade de Energia - Frigorífico Regional",
    serviceType: "Qualidade de Energia",
    status: "concluido",
    lastUpdate: "25/11/2025",
    hasReport: true,
  },
  {
    id: "PRJ-2024-004",
    name: "Projeto Elétrico - Ampliação Galpão Industrial",
    serviceType: "Projeto Elétrico",
    status: "em_analise",
    lastUpdate: "01/12/2025",
    hasReport: false,
  },
  {
    id: "PRJ-2024-005",
    name: "Laudo de Aterramento - Hospital Municipal",
    serviceType: "Laudo de Aterramento",
    status: "aguardando_docs",
    lastUpdate: "30/11/2025",
    hasReport: false,
  },
  {
    id: "PRJ-2024-006",
    name: "Manutenção Preventiva Quadros - Supermercado Centro",
    serviceType: "Manutenção Elétrica",
    status: "concluido",
    lastUpdate: "20/11/2025",
    hasReport: true,
  },
];

const ProjectsTable = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-montserrat">
          Meus Projetos e Laudos
        </h2>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Projeto</TableHead>
                  <TableHead className="font-semibold">Tipo de Serviço</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Última Atualização</TableHead>
                  <TableHead className="font-semibold text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectsData.map((project) => (
                  <TableRow key={project.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.id}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {project.serviceType}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[project.status].variant}>
                        {statusConfig[project.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {project.lastUpdate}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver detalhes
                        </Button>
                        {project.hasReport && (
                          <Button variant="orange" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Baixar PDF
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTable;
