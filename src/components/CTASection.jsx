// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { trackClick } from '../utils/tracking';

// CTA repetido logo após as ofertas — é aqui que o usuário está mais
// "aquecido", depois de ver os produtos, e não deveria precisar
// rolar de volta até o topo pra entrar no grupo.
export function CTASection() {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="container mx-auto max-w-2xl bg-astro-dark/60 border border-astro-purple/30 rounded-2xl p-8 md:p-12 text-center shadow-lg shadow-astro-purple/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
          Gostou das ofertas? <span className="text-astro-purple">Tem muito mais no grupo.</span>
        </h2>
        <p className="text-astro-light mb-8">
          Promoções novas todos os dias, antes de esgotar. Entre agora, é grátis.
        </p>
        <a
          href="https://chat.whatsapp.com/CtXTI0RUR1xL5eJpFjjiKu" // <-- COLOQUE SEU LINK DO WHATSAPP AQUI
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('Contact', { canal: 'whatsapp', local: 'cta_ofertas' })}
          className="btn-shine inline-flex items-center justify-center gap-3 text-lg font-bold text-white bg-green-500 rounded-lg py-4 px-8 transition-all duration-300 transform hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg shadow-green-500/30"
        >
          <FaWhatsapp size={26} />
          Quero entrar no grupo agora
        </a>
      </motion.div>
    </section>
  );
}
