import { Card, CardContent } from '@/components/ui/card';
import { Gem } from 'lucide-react';

// Import local wine bottle images
import opusOneImg from '@/assets/images/wines/opes.jpg';
import chateauMargauxImg from '@/assets/images/wines/Château.jpg';
import caymusImg from '@/assets/images/wines/Caymus.jpg';

const luxuryWines = [
  {
    name: 'Opus One',
    vintage: '2018',
    price: '$450',
    description: 'A Bordeaux-style blend from Napa Valley, known for its rich, complex flavors.',
    image: opusOneImg,
  },
  {
    name: 'Château Margaux',
    vintage: '2015',
    price: '$1,200',
    description: 'A first-growth Bordeaux with exceptional elegance and depth.',
    image: chateauMargauxImg,
  },
  {
    name: 'Caymus Special Selection',
    vintage: '2018',
    price: '$250',
    description: 'A rich, powerful Cabernet Sauvignon from one of Napa\'s most iconic producers.',
    image: caymusImg,
  },
];

const LuxuryWines = () => {

  return (
    <section id="luxury-wines" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Gem className="mx-auto mb-4 text-gold" size={48} />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Luxury Collection
          </h2>
          <p className="font-inter text-lg text-cream/90 max-w-2xl mx-auto">
            Indulge in our most exclusive and sought-after wines, curated for the discerning collector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {luxuryWines.map((wine, index) => (
            <Card key={index} className="bg-cream/95 border-none overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-[580px] overflow-hidden">
                <img 
                  src={wine.image}
                  alt={wine.name}
                  className="w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-wine-primary/10" />
              </div>
              
              <CardContent className="p-6 text-center ">
                <h3 className="font-playfair text-2xl font-bold text-wine-primary mb-2">
                  {wine.name}
                </h3>
                <p className="font-inter text-sm text-charcoal/80 mb-4">
                  {wine.vintage}
                </p>
                <p className="font-inter text-lg text-charcoal/80 mb-4">
                  {wine.description}
                </p>
                <p className="font-playfair text-2xl font-bold text-gold">
                  {wine.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryWines;
