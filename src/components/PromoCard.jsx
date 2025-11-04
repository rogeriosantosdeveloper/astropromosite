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
  delay = 0, // Delay para animação
}) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl shadow-black/30 flex flex-col h-full"
      // Animação de entrada (Scroll Reveal)
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
    >
      {/* Imagem do Produto */}
      <div className="relative h-64 w-full bg-gray-900 overflow-hidden rounded-t-lg">
        <div className="flex items-center justify-center p-3 h-full">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Conteúdo de Texto */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 flex-grow">{title}</h3>
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
          <span className="text-3xl font-black text-blue-400 block">
            R$ {newPrice}
          </span>
          {discount && (
            <span className="inline-block bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full mt-2">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}