import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Download, FileText } from "lucide-react";
import laudoCert from "@/assets/laudo-certificate.jpg";
import { Helmet } from "react-helmet";

const Laudo = () => {
  return (
    <>
      <Helmet>
        <title>Laudo de Pureza | SupleVip — Certificado de Análise</title>
        <meta
          name="description"
          content="Certificado de Análise oficial da Creatina SupleVip. Pureza acima de 99,5%, testes microbiológicos OK. Transparência total com laudo disponível."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <Badge variant="gold" className="mb-4">
                CERTIFICADO OFICIAL
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black mb-4">
                Laudo de <span className="text-primary">Pureza</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparência que pesa: veja o certificado laboratorial completo que comprova a qualidade da Creatina
                SupleVip.
              </p>
            </div>

            {/* Certificate Display */}
            <Card className="border-border/40 shadow-strong mb-8">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={laudoCert}
                    alt="Certificado de Análise - Creatina SupleVip 300g"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Pureza Comprovada</p>
                  <p className="text-3xl font-black text-primary">≥ 99,5%</p>
                </CardContent>
              </Card>

              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Metais Pesados</p>
                  <p className="text-3xl font-black text-primary">NEGATIVO</p>
                </CardContent>
              </Card>

              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Testes Microbiológicos</p>
                  <p className="text-3xl font-black text-primary">AUSENTE</p>
                </CardContent>
              </Card>
            </div>

            {/* Explanation */}
            <Card className="border-border/40 mb-8">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Como Ler o Laudo</h2>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Pureza (≥ 99,5%)
                    </h3>
                    <p className="text-sm text-muted-foreground pl-6">
                      O laudo atesta que a creatina monohidratada possui pureza igual ou superior a 99,5%, conforme
                      padrões internacionais USP (United States Pharmacopeia). Isso significa que você está recebendo
                      creatina pura, sem enchimentos ou adulterações.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Metais Pesados (NEGATIVO)
                    </h3>
                    <p className="text-sm text-muted-foreground pl-6">
                      Testes confirmam ausência de metais pesados como chumbo, arsênio e mercúrio — substâncias tóxicas
                      que podem contaminar suplementos de baixa qualidade.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Contaminação Microbiológica (AUSENTE)
                    </h3>
                    <p className="text-sm text-muted-foreground pl-6">
                      O produto passou por análise microbiológica e está livre de bactérias, fungos e outros
                      microrganismos nocivos. Seguro para consumo.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mt-6">
                  <p className="text-sm font-semibold mb-2">Informações do Lote</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      <strong>Lote:</strong> Disponível no rótulo de cada pote
                    </li>
                    <li>
                      <strong>Data de Fabricação:</strong> Verificar embalagem
                    </li>
                    <li>
                      <strong>Validade:</strong> 24 meses a partir da fabricação
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="text-center">
              <Button variant="cta" size="xl" asChild className="mb-4">
                <a href="/laudo.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  BAIXAR PDF DO LAUDO
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Arquivo PDF oficial do Certificado de Análise. Salve e comprove a qualidade.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Laudo;
