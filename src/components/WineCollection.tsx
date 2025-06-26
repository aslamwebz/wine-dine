
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';
import MenuModal from './MenuModal';
import { useLazyLoad } from '@/hooks/useLazyLoad';

// Import local wine category images
import redWineImg from '@/assets/images/wines/red.jpg';
import whiteWineImg from '@/assets/images/wines/white.jpg';
import sparklingWineImg from '@/assets/images/wines/sparkling.jpg';

const WineCollection = () => {
  const [isWineModalOpen, setIsWineModalOpen] = useState(false);
  
  const openWineModal = () => setIsWineModalOpen(true);
  const closeWineModal = () => setIsWineModalOpen(false);
  // Preload critical images
  const preloadImages = [redWineImg, whiteWineImg, sparklingWineImg];
  
  const wineCategories = [
    {
      id: 'signature-reds',
      title: "Signature Reds",
      description: "Bold, elegant reds from our estate vineyards",
      image: redWineImg,
      placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 7'%3E%3Crect width='100%' height='100%' fill='%23f5f0e6'/%3E%3C/svg%3E",
      wines: [
        { name: "Estate Cabernet Sauvignon", year: "2023", price: "$85" },
        { name: "Reserve Pinot Noir", year: "2024", price: "$65" },
        { name: "Merlot Blend", year: "2022", price: "$55" }
      ]
    },
    {
      id: 'elegant-whites',
      title: "Elegant Whites",
      description: "Crisp, refreshing whites perfect for any occasion",
      image: whiteWineImg,
      placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 7'%3E%3Crect width='100%' height='100%' fill='%23f5f0e6'/%3E%3C/svg%3E",
      wines: [
        { name: "Chardonnay Reserve", year: "2023", price: "$45" },
        { name: "Sauvignon Blanc", year: "2024", price: "$35" },
        { name: "Riesling Late Harvest", year: "2023", price: "$40" }
      ]
    },
    {
      id: 'sparkling-selection',
      title: "Sparkling Selection",
      description: "Celebrate with our finest sparkling wines",
      image: sparklingWineImg,
      placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 7'%3E%3Crect width='100%' height='100%' fill='%23f5f0e6'/%3E%3C/svg%3E",
      wines: [
        { name: "Estate Champagne", year: "2022", price: "$120" },
        { name: "Rosé Sparkling", year: "2023", price: "$75" },
        { name: "Vintage Cuvée", year: "2021", price: "$95" }
      ]
    }
  ];
  
  // Preload images
  useEffect(() => {
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  // Add CSS for image loading
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .lazy-image {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        will-change: opacity;
      }
      .lazy-image.loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="wines" className="py-12 md:py-20 wine-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Wine className="mx-auto mb-4 text-gold" size={48} />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Wine Collection
          </h2>
          <p className="font-inter text-lg text-cream/90 max-w-2xl mx-auto">
            Discover our carefully curated selection of estate-grown wines, each bottle telling the story of our vineyard's terroir and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {wineCategories.map((category, index) => (
            <Card key={index} className="bg-cream/95 backdrop-blur-sm border-gold/20 overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl">
              <div className="relative h-[800px] overflow-hidden">
                <LazyImage 
                  src={category.image}
                  alt={category.title}
                  placeholder={category.placeholder}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  width={400}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-wine-primary mb-2">
                  {category.title}
                </h3>
                <p className="font-inter text-sm text-charcoal/80 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.wines.map((wine, wineIndex) => (
                    <div key={wineIndex} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-inter font-medium text-charcoal">{wine.name}</h4>
                        <span className="font-inter text-sm text-charcoal/60">{wine.year}</span>
                      </div>
                      <span className="font-playfair text-wine-primary font-bold">{wine.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={openWineModal}
            type="button"
            className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-3 rounded-md transition-colors duration-300 transform hover:scale-105"
          >
            Explore Full Wine Cellar
          </button>
          
          <MenuModal 
            isOpen={isWineModalOpen} 
            onClose={closeWineModal}
            initialTab="wine"
          />
        </div>
      </div>
    </section>
  );
};

// Lazy loaded image component
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder: string;
  width: number | string;
  height: number | string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  className = '',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isIntersecting] = useLazyLoad({
    rootMargin: '200px 0px',
    threshold: 0.01
  });

  return (
    <div 
      ref={ref} 
      className={`relative ${className}`} 
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    >
      {isIntersecting && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${placeholder})`,
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          backgroundColor: '#f5f0e6'
        }}
      />
    </div>
  );
};

export default WineCollection;
