
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
import showcaseImageSmall from "@/assets/creatinas-showcase-sm.webp";
import showcaseImageMedium from "@/assets/creatinas-showcase-md.webp";
import showcaseImageLarge from "@/assets/creatinas-showcase-lg.webp";
import { CheckCircle2, Star } from "lucide-react";

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
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <ResponsiveImage
              small={showcaseImageSmall}
              medium={showcaseImageMedium}
              large={showcaseImageLarge}
              alt="Linha completa SupleVip Creatina"
              className="w-full rounded-2xl shadow-gold-strong relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="cta" size="lg" asChild className="group">
                <Link to="/produto">
                  <span className="group-hover:scale-110 inline-block transition-transform">
                    GARANTIR MINHA CREATINA
                  </span>
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">4.9/5</strong> (2.847 avaliações)
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
