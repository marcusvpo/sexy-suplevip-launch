
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/Badge";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/pote-supino.webp";
import { Zap, RefreshCw, Star } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-around items-center overflow-hidden text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div
        className="container relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center gap-3 mb-4">
            <Badge variant="outline">BEST DEAL</Badge>
            <Badge variant="gold">PREMIUM QUALITY</Badge>
        </div>
        <h1
          className="text-4xl md:text-5xl font-black leading-tight text-white"
          style={{ textShadow: "0px 0px 15px rgba(255, 223, 0, 0.4)" }}
        >
          SUPLEVIP CREATINA:
          <br />
          <span className="text-yellow-400">A FORÇA E A PUREZA QUE VOCÊ EXIGE.</span>
        </h1>
        <h2
          className="text-lg md:text-xl text-zinc-200 mt-4 max-w-2xl mx-auto"
        >
            100% Pura Monohidratada Micronizada. Performance Superior, Resultados Reais.
        </h2>
      </motion.div>

      <motion.div
        className="container relative z-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-4">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="group relative overflow-hidden bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <Link to="/produto">
                <span className="relative z-10 font-black text-lg">
                  COMPRAR AGORA E TRANSFORMAR!
                </span>
              </Link>
            </Button>
            <p className="text-sm text-zinc-300">Frete Grátis para todo o Brasil</p>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
                <Zap size={18} className="text-yellow-400" />
                <span>Aumento de Força</span>
            </div>
            <div className="flex items-center gap-2">
                <RefreshCw size={18} className="text-yellow-400" />
                <span>Recuperação Rápida</span>
            </div>
            <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400" />
                <span>Massa Muscular</span>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
