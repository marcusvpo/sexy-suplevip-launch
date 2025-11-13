
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
import showcaseImageWebp from "@/assets/creatinas-showcase.webp";
import showcaseImagePng from "@/assets/creatinas-showcase.png";
import { CheckCircle2, Star, TrendingUp } from "lucide-react";

const features = [
  "✓ Creatina Monohidratada 100% Pura",
  "✓ Micronizada para Absorção Rápida",
  "✓ Sem Sabor - Mistura com Qualquer Bebida",
  "✓ Testada e Certificada em Laboratório",
  "✓ Livre de Glúten e Lactose",
  "✓ Fabricação Nacional com Padrão Internacional",
];

export const ProductShowcase = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-zinc-900 text-black dark:text-white overflow-hidden">
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
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <ResponsiveImage
              small={showcaseImageWebp}
              medium={showcaseImageWebp}
              large={showcaseImageWebp}
              alt="Linha completa SupleVip Creatina"
              className="w-full rounded-2xl shadow-gold-strong relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src={showcaseImagePng} 
              alt="Linha completa SupleVip Creatina - Fallback" 
              style={{ display: 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="gold" className="mb-4">
                LINHA PREMIUM
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                A Creatina que{" "}
                <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
                  Você Pode Comprovar
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                Cada pote SupleVip vem com certificado de análise laboratorial. Sem mistério, sem enrolação. 
                Apenas creatina pura, testada e pronta para entregar os resultados que você merece.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="border-t border-dashed border-zinc-300 dark:border-zinc-700 pt-6 space-y-5"
            >
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-500 line-through">De R$ 179,90</span>
                    <span className="text-4xl font-black text-zinc-900 dark:text-white">Por R$ 149,90</span>
                    <span className="text-primary font-semibold">ou 3x de R$ 49,99 sem juros</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="gold" className="mb-1 animate-pulse">
                      OFERTA LIMITADA
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <TrendingUp className="w-4 h-4"/>
                      <span>Últimas Unidades!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="cta" size="xl" asChild className="w-full group text-center">
                <Link to="/produto">
                  <span className="group-hover:scale-110 inline-block transition-transform">
                    GARANTIR MINHA CREATINA
                  </span>
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-zinc-500">
                  <strong>4.9/5</strong> (2.847 avaliações)
                </span>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
