
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ReservationModal from './ReservationModal';
import MenuModal from './MenuModal';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle modal open/close
  const openReservationModal = () => setIsReservationModalOpen(true);
  const openMenuModal = () => setIsMenuModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal/80" />
      
      {/* Floating Wine Elements */}
      <div className="absolute top-20 left-10 animate-parallax-float">
        <div className="w-4 h-4 bg-wine-primary rounded-full opacity-70" />
      </div>
      <div className="absolute top-40 right-20 animate-parallax-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-gold rounded-full opacity-50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-parallax-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-wine-light rounded-full opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 text-shadow">
            An Enchanting
            <span className="block text-gold">Wine & Dine</span>
            Experience
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nestled among rolling vineyards, WineDine offers an intimate culinary journey where exceptional cuisine meets world-class wines in a romantic setting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={openReservationModal}
              type="button"
            >
              Reserve Your Table
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-inter font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={openMenuModal}
              type="button"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={closeReservationModal} 
      />
      
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={closeMenuModal}
        initialTab="meal"
      />
    </section>
  );
};

export default Hero;
