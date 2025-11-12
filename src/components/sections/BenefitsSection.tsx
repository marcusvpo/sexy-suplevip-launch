import { motion } from "framer-motion";
import { Shield, Award, Zap, TrendingUp, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Pureza Comprovada em Laudo",
    description: "Certificado laboratorial completo. Pureza ≥99,5%, zero metais pesados, zero contaminantes.",
    delay: 0.1,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Award,
    title: "Qualidade Farmacêutica Premium",
    description: "Monohidratada e micronizada. Dissolução rápida e absorção máxima para resultados visíveis.",
    delay: 0.2,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Zap,
    title: "100 Doses de Performance Real",
    description: "300g = 100 doses de 3g. Economia inteligente com o melhor custo-benefício do mercado.",
    delay: 0.3,
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: TrendingUp,
    title: "Ganhos Mais Rápidos",
    description: "Acelere sua hipertrofia muscular e veja resultados reais em menos tempo de treino.",
    delay: 0.4,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "Máxima Energia nos Treinos",
    description: "Aumente sua força, resistência e explosão muscular. Treine mais intenso, recupere mais rápido.",
    delay: 0.5,
    gradient: "from-yellow-500/10 to-gold/10",
  },
  {
    icon: Target,
    title: "Resultados Garantidos ou Dinheiro de Volta",
    description: "30 dias de garantia total. Se não sentir a diferença, devolvemos 100% do seu investimento.",
    delay: 0.6,
    gradient: "from-red-500/10 to-rose-500/10",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Por Que a SupleVip é{" "}
            <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
              Sua Melhor Escolha?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência total, pureza comprovada e resultados garantidos para você alcançar seu melhor shape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: benefit.delay, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-gold transition-all duration-300 group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="pt-8 pb-6 text-center relative z-10">
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
  );
};
