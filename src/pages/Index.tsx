import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Zap, CheckCircle2, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import productImage from "@/assets/creatina-product.png";
import showcaseImage from "@/assets/creatinas-showcase.png";
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

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-hero">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, hsl(45 100% 51% / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, hsl(45 100% 51% / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, hsl(45 100% 51% / 0.15) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="gold" className="mb-4 animate-pulse-glow">
                  LAUDO 100% PURO
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                CREATINA
                <br />
                <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
                  MUSCLE PERFORMANCE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                100% Pura • Monohidratada • Micronizada
                <br />
                <span className="text-primary font-bold">Rende 100 doses de performance real</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="hero"
                  size="xl"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link to="/produto">
                    <span className="relative z-10">QUERO MINHA FORÇA AGORA</span>
                    <motion.div
                      className="absolute inset-0 bg-gold-glow"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/laudo">VER LAUDO DE PUREZA</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Laudo Certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Pureza 99,5%+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>100 Doses</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={productImage}
                  alt="Creatina SupleVip 300g - 100% pura monohidratada micronizada"
                  className="w-full max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(255,195,0,0.3)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-radial blur-3xl opacity-40 animate-pulse-glow" />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-secondary/30 backdrop-blur-sm">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Por Que Escolher <span className="text-primary">SupleVip?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparência total, pureza comprovada e performance garantida
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Laudo de Pureza",
                  description: "Certificado laboratorial completo disponível. Pureza ≥99,5%, sem metais pesados.",
                  delay: 0.1,
                },
                {
                  icon: Award,
                  title: "Qualidade Farmacêutica",
                  description: "Creatina monohidratada micronizada. Dissolução superior e absorção otimizada.",
                  delay: 0.2,
                },
                {
                  icon: Zap,
                  title: "100 Doses de Performance",
                  description: "300g = 100 doses de 3g. Melhor custo-benefício com resultados reais.",
                  delay: 0.3,
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: benefit.delay, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-gold transition-all duration-300 group">
                    <CardContent className="pt-8 pb-6 text-center">
                      <motion.div
                        className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, hsl(45 100% 51% / 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, hsl(45 100% 51% / 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, hsl(45 100% 51% / 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img
                  src={showcaseImage}
                  alt="Linha completa SupleVip Creatina"
                  className="w-full rounded-2xl shadow-gold-strong"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
              >
                <Badge variant="gold">LINHA PREMIUM</Badge>
                <h2 className="text-3xl md:text-4xl font-black">
                  Qualidade que você pode <span className="text-primary">comprovar</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada pote SupleVip vem com certificado de análise. Sem mistério, sem enrolação. Apenas creatina
                  pura, testada e pronta para resultados reais.
                </p>
                <Button variant="cta" size="lg" asChild className="group">
                  <Link to="/produto">
                    <span className="group-hover:scale-110 inline-block transition-transform">
                      CONFERIR PRODUTO
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Milhares confiam na <span className="text-primary">SupleVip</span>
              </h2>
              <p className="text-lg text-muted-foreground">Resultados reais de quem já usa</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Carlos M.",
                  role: "Atleta Fitness",
                  rating: 5,
                  comment: "Finalmente uma creatina com laudo de verdade. Sinto a diferença nos treinos.",
                  delay: 0.1,
                },
                {
                  name: "Ana Paula S.",
                  role: "Personal Trainer",
                  rating: 5,
                  comment: "Recomendo para todos os meus alunos. Qualidade premium com preço justo.",
                  delay: 0.2,
                },
                {
                  name: "Ricardo L.",
                  role: "Crossfit",
                  rating: 5,
                  comment: "100 doses por pote é imbatível. E dissolve perfeitamente!",
                  delay: 0.3,
                },
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: review.delay, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-gold transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 leading-relaxed">"{review.comment}"</p>
                      <div className="pt-4 border-t border-border/40">
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32 bg-gradient-section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial opacity-30" />
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="gold" className="mb-6 animate-pulse-glow">
                  OFERTA LIMITADA
                </Badge>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-black"
              >
                Pronto para <span className="text-primary">elevar</span> seu desempenho?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-muted-foreground"
              >
                Junte-se a milhares de atletas que já confiam na qualidade SupleVip
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/produto">
                    <span className="group-hover:scale-110 inline-block transition-transform">
                      COMPRAR AGORA
                    </span>
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Entrega rápida e segura</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
