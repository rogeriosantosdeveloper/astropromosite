// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: "+100", name: "Membros Ativos" },
  { id: 2, value: "+3.000", name: "Postagens" },
  { id: 3, value: "Diárias", name: "Promoções Exclusivas" },
];

// Configuração para animação de entrada
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2, // Cada card aparece com um pequeno delay
      duration: 0.5,
      ease: 'easeOut'
    },
  }),
};

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="bg-astro-dark/50 border border-astro-purple/30 rounded-lg p-8 text-center shadow-lg shadow-astro-purple/10"
              // Animação "enquanto entra na tela" (scroll reveal)
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Ativa quando 50% do card está visível
            >
              <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-lg text-astro-silver">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}