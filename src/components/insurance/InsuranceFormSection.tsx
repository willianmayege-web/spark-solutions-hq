import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Send, MessageCircle, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CONTACT } from "@/config/contact";

const InsuranceFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    email: "",
    whatsapp: "",
    location: "",
    nfValue: "",
    clientType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Nossa equipe entrará em contato em até 24 horas úteis com sua cotação.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      document: "",
      email: "",
      whatsapp: "",
      location: "",
      nfValue: "",
      clientType: "",
      message: "",
    });
    setFileName("");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar uma cotação de seguro para meu sistema de energia solar.");
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <section id="insurance-form" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Solicitar cotação de seguro para meu sistema solar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo com os dados do seu sistema e receba uma cotação personalizada 
            em até 24 horas úteis.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome / Razão Social *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo ou empresa"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="document">CPF / CNPJ *</Label>
                    <Input
                      id="document"
                      placeholder="000.000.000-00"
                      value={formData.document}
                      onChange={(e) => handleInputChange("document", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Município / UF da instalação *</Label>
                    <Input
                      id="location"
                      placeholder="Santa Rosa - RS"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nfValue">Valor da Nota Fiscal (R$) *</Label>
                    <Input
                      id="nfValue"
                      placeholder="Ex: 25.000,00"
                      value={formData.nfValue}
                      onChange={(e) => handleInputChange("nfValue", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nfUpload">Upload da Nota Fiscal</Label>
                  <div className="relative">
                    <Input
                      id="nfUpload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label
                      htmlFor="nfUpload"
                      className="flex items-center justify-center gap-2 w-full h-20 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/50 hover:bg-muted/50 transition-colors"
                    >
                      {fileName ? (
                        <div className="flex items-center gap-2 text-accent">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm">{fileName}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Upload className="w-5 h-5" />
                          <span className="text-sm">Clique para enviar PDF ou imagem da NF</span>
                        </div>
                      )}
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientType">Tipo de cliente *</Label>
                  <Select
                    value={formData.clientType}
                    onValueChange={(value) => handleInputChange("clientType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="rural">Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem adicional</Label>
                  <Textarea
                    id="message"
                    placeholder="Informações adicionais sobre seu sistema ou dúvidas..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    variant="orange"
                    size="lg"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar dados para cotação de seguro
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={openWhatsApp}
                    className="sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Cotar pelo WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFormSection;
