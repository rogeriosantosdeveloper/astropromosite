import { FaWhatsapp } from 'react-icons/fa';
import { trackClick } from '../utils/tracking';

// Barra fixa só no mobile — é onde a maior parte do tráfego de anúncio
// chega, e o usuário não deveria precisar rolar até o topo pra converter.
export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-astro-dark/95 backdrop-blur border-t border-astro-purple/30 p-3">
      <a
        href="https://chat.whatsapp.com/CtXTI0RUR1xL5eJpFjjiKu" // <-- COLOQUE SEU LINK DO WHATSAPP AQUI
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick('Contact', { canal: 'whatsapp', local: 'sticky_mobile' })}
        className="flex items-center justify-center gap-2 text-base font-bold text-white bg-green-500 rounded-lg py-3 px-4 transition-all duration-300 active:scale-95 shadow-lg shadow-green-500/30"
      >
        <FaWhatsapp size={22} />
        Entrar no grupo VIP
      </a>
    </div>
  );
}
