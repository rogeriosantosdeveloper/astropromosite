// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      
      {/* 1. Logo Animado */}
      <motion.img
        src="/assets/logo.png"
        alt="Astro Promo Logo"
        className="w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full shadow-lg shadow-astro-purple/30"
        // Animação de "flutuar" e fade-in
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
        className="text-lg md:text-xl text-astro-light max-w-xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } }}
      >
        Entre para nossa comunidade e economize com as melhores ofertas.
      </motion.p>

      {/* 3. Botões de Ação */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' } }}
      >
        <a
          href="https://whatsapp.com/channel/0029VbBOD5mCBtx84LuExb2u" // <-- COLOQUE SEU LINK DO WHATSAPP AQUI
          className="flex-1 btn-shine flex items-center justify-center gap-3 text-lg font-bold text-white bg-green-500 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <FaWhatsapp size={24} />
          Entrar no grupo WhatsApp
        </a>
        <a
          href="https://t.me/astropromo" // <-- COLOQUE SEU LINK DO TELEGRAM AQUI
          className="flex-1 btn-shine flex items-center justify-center gap-3 text-lg font-bold text-white bg-blue-500 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <FaTelegramPlane size={24} />
          Entrar no canal Telegram
        </a>
      </motion.div>
    </section>
  );
}