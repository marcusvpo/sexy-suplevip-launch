import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Link } from "react-router-dom";
import productImage from "@/assets/creatina-product.png";
import { TrustBadges } from "./TrustBadges";

export const HeroSection = () => {
  return (
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
            TRANSFORME SEU CORPO
            <br />
            <span className="bg-gradient-gold-shine bg-clip-text text-transparent">
              COM PUREZA COMPROVADA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            A creatina que entrega resultados reais.
            <br />
            <span className="text-primary font-bold">Sinta a diferença em 30 dias ou seu dinheiro de volta</span>
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
                <span className="relative z-10 font-black">QUERO MINHA TRANSFORMAÇÃO AGORA</span>
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
          >
            <TrustBadges />
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
  );
};
