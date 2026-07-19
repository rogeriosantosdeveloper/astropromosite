// Limpe o App.jsx padrão e substitua por isso:

import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { PromoSection } from './components/PromoSection';
import { CTASection } from './components/CTASection';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    // O fundo gradiente/estrelado já está no body (via index.css)
    <main>
      <Hero />
      <Stats />
      <PromoSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </main>
  )
}

export default App