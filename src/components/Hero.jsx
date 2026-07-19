// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { trackClick } from '../utils/tracking';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden pb-24 md:pb-4">

      {/* 1. Logo Animado */}
      <motion.img
        src="/assets/logo.png"
        alt="Astro Promo Logo"
        className="w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full shadow-lg shadow-astro-purple/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      />

      {/* 2. Chamada Principal (Hero) */}
      <motion.h1
        className="text-4xl md:text-6xl font-black text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } }}
      >
        Descubra as melhores
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-purple to-astro-blue">
          promoções do universo!
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-astro-light max-w-xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } }}
      >
        Entre para nossa comunidade e economize com as melhores ofertas.
      </motion.p>

      {/* Badge de urgência — agora com destaque visual real */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' } }}
      >
        <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-400/40 text-red-300 text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full animate-pulse">
          🔥 Vagas esgotando — restam poucas hoje
        </span>
      </motion.div>

      {/* 3. Botões de Ação — hierarquia clara: WhatsApp é o canal principal */}
      <motion.div
        className="flex flex-col gap-3 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' } }}
      >
        <a
          href="https://chat.whatsapp.com/CtXTI0RUR1xL5eJpFjjiKu" // <-- COLOQUE SEU LINK DO WHATSAPP AQUI
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('Contact', { canal: 'whatsapp', local: 'hero' })}
          className="btn-shine flex items-center justify-center gap-3 text-lg font-bold text-white bg-green-500 rounded-lg py-4 px-6 transition-all duration-300 transform hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg shadow-green-500/30"
        >
          <FaWhatsapp size={26} />
          Entrar no grupo VIP WhatsApp
        </a>
        <a
          href="https://t.me/astropromo" // <-- COLOQUE SEU LINK DO TELEGRAM AQUI
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('Contact', { canal: 'telegram', local: 'hero' })}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-300 bg-transparent border border-blue-400/40 rounded-lg py-3 px-6 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <FaTelegramPlane size={18} />
          Prefere Telegram? Entrar no canal
        </a>
      </motion.div>
    </section>
  );
}
