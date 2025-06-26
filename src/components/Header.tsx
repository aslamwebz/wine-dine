
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Wine Collection', href: '#wines' },
    { label: 'Vineyard Tours', href: '#tours' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal/98 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-playfair font-bold text-gold">
            WineDine
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-cream hover:text-gold transition-colors duration-300 font-inter font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-6 py-2">
              Reserve Table
            </Button>
          </div>

          <button 
            className="md:hidden text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-wine-primary/30">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-cream hover:text-gold transition-colors duration-300 font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium mt-4">
                Reserve Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
