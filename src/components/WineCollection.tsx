
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';
import MenuModal from './MenuModal';

// Import local wine category images
import redWineImg from '@/assets/images/wines/red.jpg';
import whiteWineImg from '@/assets/images/wines/white.jpg';
import sparklingWineImg from '@/assets/images/wines/sparkling.jpg';

const WineCollection = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const wineCategories = [
    {
      title: "Signature Reds",
      description: "Bold, elegant reds from our estate vineyards",
      image: redWineImg,
      wines: [
        { name: "Estate Cabernet Sauvignon", year: "2023", price: "$85" },
        { name: "Reserve Pinot Noir", year: "2024", price: "$65" },
        { name: "Merlot Blend", year: "2022", price: "$55" }
      ]
    },
    {
      title: "Elegant Whites",
      description: "Crisp, refreshing whites perfect for any occasion",
      image: whiteWineImg,
      wines: [
        { name: "Chardonnay Reserve", year: "2023", price: "$45" },
        { name: "Sauvignon Blanc", year: "2024", price: "$35" },
        { name: "Riesling Late Harvest", year: "2023", price: "$40" }
      ]
    },
    {
      title: "Sparkling Selection",
      description: "Celebrate with our finest sparkling wines",
      image: sparklingWineImg,
      wines: [
        { name: "Estate Champagne", year: "2022", price: "$120" },
        { name: "Rosé Sparkling", year: "2023", price: "$75" },
        { name: "Vintage Cuvée", year: "2021", price: "$95" }
      ]
    }
  ];

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
            <Card key={index} className="bg-cream/95 border-none overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-[800px] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full border-none object-cover group-hover:scale-110 transition-transform duration-500"
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
            onClick={() => setIsMenuModalOpen(true)}
            className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-8 py-3 rounded-md transition-colors duration-300 transform hover:scale-105"
          >
            Explore Full Wine Cellar
          </button>
          
          <MenuModal 
            isOpen={isMenuModalOpen} 
            onClose={() => setIsMenuModalOpen(false)}
            initialTab="wine"
          />
        </div>
      </div>
    </section>
  );
};

export default WineCollection;
