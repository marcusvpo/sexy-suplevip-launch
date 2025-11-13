import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import qualityImage from '@/assets/pote maquinas.webp';

export const QualitySection = () => {
  const features = [
    {
      icon: <CheckCircle className="text-yellow-400" />,
      title: 'Laudo de Pureza Comprovada',
      description: 'Matéria-prima testada em laboratório.',
    },
    {
      icon: <CheckCircle className="text-yellow-400" />,
      title: 'Processo de Micronização Avançado',
      description: 'Garante a máxima absorção e diluição.',
    },
    {
      icon: <CheckCircle className="text-yellow-400" />,
      title: 'Fabricação High-Tech',
      description: 'Padrões de higiene e controle que garantem um produto livre de contaminantes.',
    },
    {
      icon: <CheckCircle className="text-yellow-400" />,
      title: 'Selo de Qualidade SupleVIP',
      description: 'Nosso compromisso com seu resultado.',
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                DA FÁBRICA ATÉ VOCÊ: <span className="text-yellow-400">NOSSO COMPROMISSO É COM A PUREZA.</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 mt-2">
                Não é apenas creatina. É a garantia de um produto com rigoroso controle de qualidade, desde a matéria-prima importada até o pote na sua mão.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-yellow-400">{feature.title}</h3>
                    <p className="text-zinc-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={qualityImage} alt="Processo de fabricação da creatina SupleVip" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
