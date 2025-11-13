import { Footer } from "@/components/Footer";
import { Badge } from "@/components/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target, Download } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import laudoCert from "@/assets/laudo-certificate.jpg";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | SupleVip — Nossa História</title>
        <meta
          name="description"
          content="Conheça a SupleVip. Missão: fornecer suplementos puros com laudo de qualidade. Transparência, compromisso e resultados reais."
        />
      </Helmet>

        <section className="py-12 md:py-16 bg-gradient-section">
          <div className="container max-w-4xl">
            <div className="text-center mb-12 scroll-fade-in">
              <Badge variant="gold" className="mb-4 animate-pulse-glow">
                NOSSA HISTÓRIA
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black mb-4 animate-fade-in-up">
                Quem é a <span className="text-primary drop-shadow-[0_0_20px_rgba(255,195,0,0.4)]">SupleVip</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Aqui não tem enrolação, tem resultado com respeito. Fornecemos suplementos com laudo e transparência
                total.
              </p>
            </div>

            {/* Mission */}
            <Card className="border-border/40 shadow-card mb-8 hover:shadow-gold-strong transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Nossa Missão</h2>
                    <p className="text-muted-foreground">
                      Fornecer suplementos de alta qualidade com total transparência. Cada produto possui laudo
                      laboratorial disponível para download. Você merece saber exatamente o que está consumindo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border/40 hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-glow">
                    <Shield className="h-10 w-10 text-black-pure" />
                  </div>
                  <h3 className="font-bold mb-2">Segurança</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos os produtos testados e com laudo de pureza disponível.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-glow">
                    <Award className="h-10 w-10 text-black-pure" />
                  </div>
                  <h3 className="font-bold mb-2">Qualidade</h3>
                  <p className="text-sm text-muted-foreground">Pureza comprovada acima de 99% em nossos laudos.</p>
                </CardContent>
              </Card>

              <Card className="border-border/40 hover:shadow-gold transition-all duration-500 hover:scale-105 group">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-glow">
                    <Users className="h-10 w-10 text-black-pure" />
                  </div>
                  <h3 className="font-bold mb-2">Respeito</h3>
                  <p className="text-sm text-muted-foreground">Transparência com nossos clientes em primeiro lugar.</p>
                </CardContent>
              </Card>
            </div>

            {/* Story */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">Por Que Criamos a SupleVip?</h2>
              <p className="text-muted-foreground mb-4">
                Cansados de ver o mercado cheio de suplementos sem transparência, decidimos criar algo diferente. A
                SupleVip nasceu do compromisso com a verdade: mostrar laudos reais, comprovar pureza e entregar
                resultado sem caô.
              </p>
              <p className="text-muted-foreground mb-4">
                Trabalhamos com fábricas parceiras certificadas, exigimos testes rigorosos e disponibilizamos cada
                laudo para você. Não tem mistério, não tem jogo de marketing — só creatina pura e honestidade.
              </p>
              <p className="text-muted-foreground">
                Nosso objetivo é simples: que você treine com confiança, sabendo que está usando o melhor.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 text-center hover:shadow-gold-strong transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3">Veja o Laudo e Comprove</h2>
                <p className="text-muted-foreground mb-6">
                  Transparência é nosso diferencial. Baixe o certificado de análise e confira a pureza.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={laudoCert} download="laudo-suplevip.jpg">
                    <Button variant="hero" size="lg" className="hover:scale-110 transition-all">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Laudo Completo
                    </Button>
                  </a>
                  <Link to="/produto">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black-pure hover:scale-110 transition-all">
                      COMPRAR CREATINA
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </>
  );
};

export default Sobre;
