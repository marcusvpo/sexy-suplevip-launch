import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, TrendingUp, Shield } from "lucide-react";

const urgencyPoints = [
  {
    icon: CheckCircle2,
    text: "Entrega rápida e segura em todo Brasil",
  },
  {
    icon: Clock,
    text: "Estoque limitado - garanta o seu agora",
  },
  {
    icon: TrendingUp,
    text: "Resultados visíveis em até 30 dias",
  },
  {
    icon: Shield,
    text: "Garantia total ou dinheiro de volta",
  },
];

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
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
            <Badge variant="gold" className="mb-6 animate-pulse-glow text-base px-6 py-2">
              🔥 OFERTA LIMITADA - ÚLTIMAS UNIDADES
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Está Pronto para{" "}
            <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
              Transformar Seu Corpo
            </span>{" "}
            de Verdade?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto"
          >
            Junte-se a <strong className="text-primary">+50.000 atletas</strong> que já conquistaram resultados reais 
            com a creatina mais pura e transparente do Brasil
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button variant="hero" size="xl" asChild className="group relative">
              <Link to="/produto">
                <motion.span
                  className="relative z-10 font-black text-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  QUERO MINHA TRANSFORMAÇÃO AGORA →
                </motion.span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto"
          >
            {urgencyPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                className="flex flex-col items-center gap-2 text-sm bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700"
              >
                <point.icon className="h-6 w-6 text-primary" />
                <span className="text-center font-medium">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-sm text-zinc-500 pt-4"
          >
            * Frete grátis para compras acima de R$ 150 | Parcelamento em até 3x sem juros no cartão
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
