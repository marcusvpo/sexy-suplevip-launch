import { motion } from "framer-motion";
import { Shield, Award, Zap, TrendingUp, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Pureza Comprovada em Laudo",
    description: "Certificado laboratorial completo. Pureza ≥99,5%, zero metais pesados, zero contaminantes.",
    delay: 0.1,
  },
  {
    icon: Award,
    title: "Qualidade Farmacêutica Premium",
    description: "Monohidratada e micronizada. Dissolução rápida e absorção máxima para resultados visíveis.",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "100 Doses de Performance Real",
    description: "300g = 100 doses de 3g. Economia inteligente com o melhor custo-benefício do mercado.",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Ganhos Mais Rápidos",
    description: "Acelere sua hipertrofia muscular e veja resultados reais em menos tempo de treino.",
    delay: 0.4,
  },
  {
    icon: Sparkles,
    title: "Máxima Energia nos Treinos",
    description: "Aumente sua força, resistência e explosão muscular. Treine mais intenso, recupere mais rápido.",
    delay: 0.5,
  },
  {
    icon: Target,
    title: "Resultados Garantidos ou Dinheiro de Volta",
    description: "30 dias de garantia total. Se não sentir a diferença, devolvemos 100% do seu investimento.",
    delay: 0.6,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-100 dark:bg-black text-black dark:text-white overflow-hidden">
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
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
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
              <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-primary/80 hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
                <CardContent className="pt-8 pb-6 text-center relative z-10">
                  <motion.div
                    className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
