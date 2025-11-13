
import { motion } from "framer-motion";
import { Droplet, Clock, Repeat } from 'lucide-react';
import howToTakeImage from "@/assets/pote supino aberto.webp";

export const HowToTakeSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
            MAXIMIZE SEUS RESULTADOS: O RITUAL DO CAMPEÃO
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mt-2">
            Veja como integrar a Creatina SupleVIP na sua rotina para ganhos explosivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={howToTakeImage} alt="Pote de creatina aberto" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="flex items-center text-xl font-bold text-yellow-400 mb-2">
                <Droplet className="mr-2" /> COMO TOMAR?
              </h3>
              <p className="text-zinc-300">
                Misture 1 dosador (3g) em 200ml de água ou na sua bebida favorita (shake, suco, etc).
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-bold text-yellow-400 mb-2">
                <Clock className="mr-2" /> QUANDO TOMAR?
              </h3>
              <p className="text-zinc-300">
                A creatina funciona por saturação. Você pode tomar em qualquer horário, mas muitos atletas preferem no pós-treino (junto com whey ou carboidratos) para otimizar a absorção e recuperação.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-bold text-yellow-400 mb-2">
                <Repeat className="mr-2" /> PRECISO PARAR?
              </h3>
              <p className="text-zinc-300">
                Não. A Creatina SupleVIP é 100% pura e pode ser usada de forma contínua para manter seus músculos sempre abastecidos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
