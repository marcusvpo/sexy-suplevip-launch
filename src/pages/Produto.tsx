
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Award, Package, CheckCircle2, Download, Truck, CreditCard, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ResponsiveImage from "@/components/ResponsiveImage";
import productImage from "@/assets/creatina-product.webp";
import laudoCert from "@/assets/laudo-certificate.jpg";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";

const Produto = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();
  
  const images = [productImage, productImage, productImage];

  const handleAddToCart = () => {
    toast({
      title: "✨ Produto adicionado!",
      description: "Creatina 300g foi adicionada ao seu carrinho.",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Creatina 300g | SupleVip — 100% Pura | Laudo Disponível</title>
        <meta
          name="description"
          content="Creatina monohidratada micronizada 300g. 100% pura, rende 100 doses (3g/dose). Laudo de pureza disponível para download. Compre com segurança."
        />
        <meta property="og:title" content="Creatina 300g | SupleVip — 100% Pura" />
        <meta property="og:description" content="100% pura com laudo. Rende 100 doses. Frete grátis acima de R$ 199." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Creatina Monohidratada Micronizada 300g - SupleVip",
            image: productImage,
            description: "Creatina monohidratada micronizada 300g. 100% pura, rendimento de 100 doses (3g/dose).",
            sku: "SV-CR-300",
            brand: { "@type": "Brand", name: "SupleVip" },
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: "89.90",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Breadcrumbs */}
        <div className="container py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Início
          </Link>
          {" / "}
          <span className="text-foreground font-medium">Creatina 300g</span>
        </div>

        {/* Product Hero - 2 Columns */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: Product Image */}
              <div className="space-y-4">
                <motion.div
                  className="bg-muted/30 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, rotate: [0, -2, 2, -2, 0] }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ResponsiveImage
                        small={productImage}
                        medium={productImage}
                        large={images[selectedImage]}
                        alt="Creatina SupleVip 300g - 100% pura monohidratada micronizada"
                        className="w-full max-w-md relative z-10"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <div className="grid grid-cols-3 gap-3">
                  {images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(idx)}
                      className={cn(
                        "bg-muted/30 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all duration-300",
                        selectedImage === idx
                          ? "ring-2 ring-primary shadow-gold"
                          : "hover:ring-2 hover:ring-primary/50 hover:shadow-gold"
                      )}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Buybox */}
              <div className="space-y-6">
                <div>
                  <Badge variant="gold" className="mb-2">
                    LAUDO 100% PURO
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-black mb-2">CREATINA — Muscle Performance</h1>
                  <p className="text-lg text-muted-foreground">100% Pura • Monohidratada • Micronizada</p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline">
                    <Shield className="h-3 w-3 mr-1" />
                    Laudo Disponível
                  </Badge>
                  <Badge variant="outline">
                    <Award className="h-3 w-3 mr-1" />
                    Zero Calorias
                  </Badge>
                  <Badge variant="outline">
                    <Package className="h-3 w-3 mr-1" />
                    Rende 100 Doses
                  </Badge>
                </div>

                {/* Price */}
                <div className="border-t border-b border-border py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">R$ 89,90</span>
                    <span className="text-sm text-muted-foreground line-through">R$ 119,90</span>
                  </div>
                  <p className="text-sm text-primary font-semibold mt-1">ou 3x de R$ 29,97 sem juros</p>
                  <p className="text-xs text-muted-foreground mt-2">3g por dose — rende 100 doses</p>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button variant="cta" size="xl" className="w-full group">
                    <span className="group-hover:scale-110 inline-block transition-transform">COMPRAR AGORA</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full hover:scale-105 transition-all"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    ADICIONAR AO CARRINHO
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Frete grátis acima de R$ 199</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>Parcelamento em até 6x sem juros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-black mb-8">Por Que Escolher Esta Creatina?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/40">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Força & Recuperação</h3>
                  <p className="text-sm text-muted-foreground">
                    Auxilia na performance muscular e recuperação pós-treino. Recomendado por atletas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">100% Pura e Micronizada</h3>
                  <p className="text-sm text-muted-foreground">
                    Qualidade farmacêutica. Pureza testada com laudo disponível. Dissolução superior.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Ótimo Custo/Benefício</h3>
                  <p className="text-sm text-muted-foreground">
                    Rende 100 doses com 3g cada. Investimento que compensa nos resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Como Usar - Tabs Version */}
        <section className="py-12 bg-background">
          <div className="container max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black mb-6"
            >
              Informações Completas
            </motion.h2>
            
            <Tabs defaultValue="uso" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/30">
                <TabsTrigger value="uso" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Como Usar
                </TabsTrigger>
                <TabsTrigger value="beneficios" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Benefícios
                </TabsTrigger>
                <TabsTrigger value="detalhes" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Detalhes Técnicos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="uso" className="mt-6">
                <Card className="border-border/40">
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Dosagem Recomendada
                      </h3>
                      <p className="text-muted-foreground">
                        Use 3 gramas (1 colher medida) por dia, preferencialmente perto do treino. Para iniciantes,
                        comece com 3g/dia sem fase de carga.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Preparo</h3>
                      <p className="text-muted-foreground">
                        Misture em água ou bebida de sua preferência. A creatina micronizada dissolve melhor — mexa por
                        10-15 segundos.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Armazenamento</h3>
                      <p className="text-muted-foreground">
                        Guarde o produto em local seco e ao abrigo de luz. Evite calor extremo e umidade.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-4">
                      <strong>Importante:</strong> Consulte um profissional de saúde antes de iniciar qualquer
                      suplementação. Este produto não substitui orientação médica.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="beneficios" className="mt-6">
                <Card className="border-border/40">
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-3">
                      {[
                        "Auxilia no aumento de força e potência muscular",
                        "Contribui para melhor recuperação pós-treino",
                        "Suporta ganho de massa muscular magra",
                        "Melhora performance em exercícios de alta intensidade",
                        "Zero calorias e adequado para diversos protocolos",
                      ].map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="detalhes" className="mt-6">
                <Card className="border-border/40">
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-primary mb-1">Peso Líquido</h4>
                        <p className="text-muted-foreground">300g</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Rendimento</h4>
                        <p className="text-muted-foreground">100 doses de 3g</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Tipo</h4>
                        <p className="text-muted-foreground">Creatina Monohidratada</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Pureza</h4>
                        <p className="text-muted-foreground">≥ 99,5%</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Processamento</h4>
                        <p className="text-muted-foreground">Micronizada</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Qualidade</h4>
                        <p className="text-muted-foreground">Farmacêutica</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Laudo Section - Energia Sexy: Segurança */}
        <section className="py-12 bg-secondary text-secondary-foreground">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <Badge variant="gold" className="mb-3">
                TRANSPARÊNCIA QUE PESA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-black mb-4">Laudo de Pureza</h2>
              <p className="text-muted-foreground">
                Você paga por creatina, não por propaganda. Aqui está o PDF oficial do Certificado de Análise.
              </p>
            </div>

            <Card className="border-border/40 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted/30 flex items-center justify-center">
                  <img
                    src={laudoCert}
                    alt="Certificado de análise de pureza da creatina SupleVip"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Pureza</p>
                      <p className="font-bold text-primary text-lg">≥ 99,5%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Metais Pesados</p>
                      <p className="font-bold text-primary text-lg">NEGATIVO</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Contaminação</p>
                      <p className="font-bold text-primary text-lg">AUSENTE</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/laudo.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      BAIXAR PDF DO LAUDO
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Laudo laboratorial completo com lote, data de fabricação e validade. 100% pura = creatina
                    monohidratada acima de 99,5%.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-black mb-8">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="border border-border/40 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline font-semibold">
                  A SupleVip Creatina é testada em laboratório?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. O produto possui Certificado de Análise (Laudo) que comprova pureza e conformidade. O PDF do
                  laudo está disponível na página do produto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/40 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline font-semibold">
                  Qual a dosagem recomendada?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Recomendamos 3g por dose. Consulte um profissional de saúde antes de iniciar qualquer suplementação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/40 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline font-semibold">
                  Posso tomar creatina todos os dias?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Muitos protocolos utilizam 3g por dia de forma contínua. Siga orientações de um nutricionista ou
                  médico se tiver dúvidas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/40 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline font-semibold">
                  Vocês possuem garantia e política de devolução?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim. Garantia de arrependimento de 7 dias após o recebimento (produto lacrado e em condições de
                  comercialização). Consulte a página Políticas do site.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Produto;
