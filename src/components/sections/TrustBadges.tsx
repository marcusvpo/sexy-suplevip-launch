import { Shield, Award, Zap, CheckCircle2, Truck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Shield,
    text: "Laudo Certificado",
    color: "text-primary",
  },
  {
    icon: Award,
    text: "99,5%+ Puro",
    color: "text-primary",
  },
  {
    icon: Zap,
    text: "100 Doses",
    color: "text-primary",
  },
  {
    icon: Truck,
    text: "Frete Grátis",
    color: "text-green-400",
  },
  {
    icon: CreditCard,
    text: "Pix ou 3x Sem Juros",
    color: "text-blue-400",
  },
  {
    icon: CheckCircle2,
    text: "Garantia 30 Dias",
    color: "text-emerald-400",
  },
];

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * idx, duration: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/40 hover:border-primary/50 transition-all duration-300"
        >
          <badge.icon className={`h-4 w-4 ${badge.color}`} />
          <span className="font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
};
