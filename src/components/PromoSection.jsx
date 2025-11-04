// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { PromoCard } from './PromoCard';

// Aqui está o "banco de dados" das suas promoções.
// Você só precisa atualizar aqui e adicionar as fotos em /public/assets/products/
const promoData = [
  {
    id: 1,
    imageUrl: '/assets/products/ryzen.png', // <-- Adicione a imagem real aqui
    title: 'Processador AMD Ryzen 5 5600GT',
    description: '3.6 GHz, (4.6GHz Max Turbo), Cache 4MB, 6 Núcleos, 12 Threads.',
    oldPrice: '799,99',
    newPrice: '511,00',
    discount: 36,
  },
  {
    id: 2,
    imageUrl: '/assets/products/gpu.png', // <-- Adicione a imagem real aqui
    title: '[BUG] Placa de Vídeo Gigabyte RTX 5050 GAMING OC 8G NVIDIA GeForce',
    description: '8GB GDDR6, 128bits, RGB,DLSS, Ray Tracing.',
    oldPrice: '1.899,99',
    newPrice: '209,00',
    discount: 89,
  },
  {
    id: 3,
    imageUrl: '/assets/products/creatina.png', // <-- Adicione a imagem real aqui
    title: 'Creatina Monohidratada Black Skull Creatine Turbo - 150g',
    description: 'Com maltodextrina. Aumente sua força e desempenho.',
    oldPrice: '20,00', // Sem preço antigo
    newPrice: '00,00',
    discount: 100, // Sem desconto
  },
  {
    id: 4,
    imageUrl: '/assets/products/fralda.png', // <-- Adicione a imagem real aqui
    title: 'Fralda Turma da Mônica Baby Premium pants Tam. P, 2 Pacotes 26 Unidades',
    description: 'Conforto e proteção para seu bebê.',
    oldPrice: '21,00',
    newPrice: '01,00',
    discount: 95,
  },
  {
    id: 5,
    imageUrl: '/assets/products/iphone-13.png', // <-- Adicione a imagem real aqui
    title: 'Apple iPhone 13',
    description: 'XDR, 12MP; Estilos fotográficos, Smart HDR 4, A15.',
    oldPrice: '2815,00',
    newPrice: '2174,00',
    discount: 23,
  },
  {
    id: 6,
    imageUrl: '/assets/products/notebook.png', // <-- Adicione a imagem real aqui
    title: '[BUG] Notebook Vaio FE16',
    description: 'Ryzen 7-5825U Windows 11 Home 32GB RAM 512GB SSD 16" IPS', // Sem descrição
    oldPrice: 3499.00,
    newPrice: '169,00', // Coloquei um preço de exemplo, já que "R$ 0" era só do layout
    discount: 95,
  },
];


export function PromoSection() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl md:text-5xl font-black text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Algumas de nossas <span className="text-astro-purple">ofertas recentes</span>
        </motion.h2>
        
        {/* Galeria de Promoções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoData.map((promo, index) => (
            <PromoCard
              key={promo.id}
              imageUrl={promo.imageUrl}
              title={promo.title}
              description={promo.description}
              oldPrice={promo.oldPrice}
              newPrice={promo.newPrice}
              discount={promo.discount}
              delay={index * 0.1} // Efeito cascata na animação
            />
          ))}
        </div>
      </div>
    </section>
  );
}