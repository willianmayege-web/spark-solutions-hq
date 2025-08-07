import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Share2 } from "lucide-react";

const QRCodeSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">
            Acesse Rapidamente
          </h2>
          <p className="text-xl text-muted-foreground">
            Escaneie o QR Code para acessar nossos serviços
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-background border-border text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-foreground font-montserrat">
                <QrCode className="w-6 h-6 mr-3 text-primary" />
                QR Code Eletro May's
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code Placeholder - In a real implementation, you would generate this */}
              <div className="w-64 h-64 mx-auto bg-white rounded-lg p-4 flex items-center justify-center">
                <div className="w-full h-full bg-background rounded border-2 border-dashed border-muted flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      QR Code com logo<br />
                      Eletro May's
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  CNPJ: 00.000.000/0001-00
                </p>
                <div className="flex gap-2">
                  <Button variant="orange" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar QR
                  </Button>
                  <Button variant="outline-orange">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Escaneie para acessar nossos serviços de engenharia elétrica
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;