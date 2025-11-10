import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Award, Zap, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "@/assets/creatina-product.png";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SupleVip - Creatina 100% Pura com Laudo | Muscle Performance</title>
        <meta
          name="description"
          content="Creatina monohidratada micronizada 300g. 100% pura com laudo de pureza disponível. Rende 100 doses. Qualidade premium SupleVip."
        />
        <meta property="og:title" content="SupleVip - Creatina 100% Pura | Muscle Performance" />
        <meta property="og:description" content="Creatina 100% pura, laudo disponível. Rende 100 doses e dissolve fácil." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section - Energia Sexy: Vaidade + Curiosidade + Segurança */}
        <section className="relative bg-black-pure text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />

          <div className="container relative z-10 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Copy */}
              <div className="space-y-6">
                <Badge variant="gold" className="mb-2">
                  PREMIUM QUALITY
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                  CREATINA
                  <br />
                  <span className="text-primary">MUSCLE PERFORMANCE</span>
                </h1>
                <p className="text-xl md:text-2xl font-bold">
                  100% Pura • Monohidratada Micronizada • Rende 100 Doses
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  Comprove com o laudo. Creatina com pureza testada em laboratório. Resultado real nos treinos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/produto">
                    <Button variant="hero" size="xl" className="w-full sm:w-auto">
                      COMPRAR AGORA
                    </Button>
                  </Link>
                  <Link to="/laudo">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black-pure">
                      VER LAUDO
                    </Button>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Laudo Disponível</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-5 w-5 text-primary" />
                    <span>100% Pura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="h-5 w-5 text-primary" />
                    <span>Rende 100 Doses</span>
                  </div>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img
                  src={productImage}
                  alt="Creatina SupleVip 300g - 100% pura monohidratada micronizada"
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Energia Sexy: Segurança + Vaidade + Recompensa */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="gold" className="mb-4">
                POR QUE ESCOLHER SUPLEVIP
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Transparência que <span className="text-primary">Pesa</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Você paga por creatina, não por propaganda. Aqui está a prova real de qualidade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1: Segurança */}
              <Card className="border-border/40 shadow-card hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">100% Pura e Testada</h3>
                  <p className="text-muted-foreground mb-4">
                    Laudo de pureza disponível: pureza acima de 99% e testes microbiológicos OK. Sem enrolação.
                  </p>
                  <Link to="/laudo" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Ver Laudo <CheckCircle2 className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Benefit 2: Recompensa */}
              <Card className="border-border/40 shadow-card hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rende 100 Doses</h3>
                  <p className="text-muted-foreground mb-4">
                    Resultado real por pote. 3g por dose, 300g total. Investimento que compensa nos treinos.
                  </p>
                  <span className="text-primary font-semibold">Custo/benefício real</span>
                </CardContent>
              </Card>

              {/* Benefit 3: Vaidade */}
              <Card className="border-border/40 shadow-card hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Micronizada</h3>
                  <p className="text-muted-foreground mb-4">
                    Maior solubilidade, menos resíduos no fundo do copo. Dissolve fácil e absorve melhor.
                  </p>
                  <span className="text-primary font-semibold">Performance real</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Highlight - Energia Sexy: Ganância + Urgência */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={heroLifestyle}
                  alt="Atleta treinando com força e intensidade"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
              <div className="space-y-6">
                <Badge variant="gold">OFERTA ESPECIAL</Badge>
                <h2 className="text-3xl md:text-5xl font-black">
                  Preparado para <span className="text-primary">Treinar Sério?</span>
                </h2>
                <p className="text-lg">
                  Comece com creatina pura. Sem calorias, sem caô. Fórmula para treinos e performance.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Monohidratada - forma mais estudada e comprovada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Zero calorias - pode ser usada em qualquer protocolo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Garantia de 7 dias - compre com confiança</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <Link to="/produto">
                    <Button variant="cta" size="xl" className="w-full md:w-auto">
                      QUERO FICAR MAIS FORTE
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-3">Frete grátis acima de R$ 199</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Energia Sexy: Pertencimento + Segurança */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Clientes <span className="text-primary">Reais</span>
              </h2>
              <p className="text-lg text-muted-foreground">Resultados comprovados por quem treina sério</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "João Silva",
                  text: "Produto muito bom, dissolução perfeita e resultados reais no treino. Laudo disponível me deu confiança.",
                  rating: 5,
                },
                {
                  name: "Maria Santos",
                  text: "Melhor creatina que já usei. Sem resíduos, rende muito e o preço é justo. Recomendo!",
                  rating: 5,
                },
                {
                  name: "Carlos Mendes",
                  text: "Transparência total. Baixei o laudo antes de comprar e fiquei impressionado. Produto de verdade.",
                  rating: 5,
                },
              ].map((review, i) => (
                <Card key={i} className="border-border/40 shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-primary text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{review.text}"</p>
                    <p className="font-semibold text-sm">— {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final - Energia Sexy: Ação + Urgência */}
        <section className="py-16 md:py-20 bg-black-pure text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
            }}
          />
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Sem Dúvida, Sem <span className="text-primary">Caô</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Creatina SupleVip: 100% pura, laudo real. Rende 100 doses. Dá um fim na dúvida.
            </p>
            <Link to="/produto">
              <Button variant="hero" size="xl">
                COMPRAR AGORA
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
