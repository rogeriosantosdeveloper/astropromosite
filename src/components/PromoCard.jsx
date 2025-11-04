// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Componente do Card de Promoção
// Ele aceita props para ser reutilizável
export function PromoCard({
  imageUrl,
  title,
  description,
  oldPrice,
  newPrice,
  discount,
  telegramLink,
  delay = 0, // Delay para animação
}) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl shadow-black/30 flex flex-col h-full group cursor-pointer"
      // Animação de entrada (Scroll Reveal)
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Imagem do Produto - Clicável */}
      <motion.a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-64 w-full bg-gray-900 overflow-hidden rounded-t-lg block"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center p-3 h-full">
          <motion.img
            src={imageUrl}
            alt={title}
            className="max-h-full max-w-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        {/* Overlay roxo no hover */}
        <motion.div
          className="absolute inset-0 bg-astro-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.a>

      {/* Conteúdo de Texto */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 flex-grow group-hover:text-astro-purple transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-astro-light mb-4">{description}</p>
        )}

        {/* Preços */}
        <div className="mt-auto">
          {oldPrice && (
            <span className="text-base text-gray-500 line-through block">
              R$ {oldPrice}
            </span>
          )}
          <motion.span 
            className="text-3xl font-black text-blue-400 block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            R$ {newPrice}
          </motion.span>
          {discount && (
            <motion.span 
              className="inline-block bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mt-2"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              {discount}% OFF
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
}