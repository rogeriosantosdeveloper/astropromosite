import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export function Footer() {
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/astropromo0", label: "Instagram" },
    { icon: FaTwitter, href: "https://x.com/promo18280", label: "Twitter" },
  ];

  return (
    <footer className="py-12 px-4 border-t border-astro-purple/20">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-24 sm:gap-48">
        <p className="text-astro-silver text-center sm:text-left">
          © {new Date().getFullYear()} Astro Promo. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-astro-silver hover:text-astro-purple transition-colors duration-300"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}