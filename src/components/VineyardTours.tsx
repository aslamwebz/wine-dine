
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users } from 'lucide-react';

const VineyardTours = () => {
  const tourOptions = [
    {
      title: "Classic Vineyard Tour",
      duration: "2 hours",
      price: "$45",
      description: "Walk through our estate vineyards, learn about our winemaking process, and enjoy tastings of 5 signature wines.",
      features: ["Guided vineyard walk", "Winemaking tour", "5 wine tastings", "Souvenir glass"]
    },
    {
      title: "Premium Wine Experience",
      duration: "3 hours",
      price: "$85",
      description: "An exclusive experience including private cellar tour, premium wine tastings, and artisan cheese pairings.",
      features: ["Private cellar tour", "Premium wine tastings", "Cheese pairings", "Take-home bottle"]
    },
    {
      title: "Sunset Romance Tour",
      duration: "2.5 hours",
      price: "$120",
      description: "Perfect for couples - enjoy a romantic sunset tour with champagne, gourmet appetizers, and vineyard views.",
      features: ["Sunset timing", "Champagne service", "Gourmet appetizers", "Private guide"]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MapPin className="mx-auto mb-4 text-wine-primary" size={48} />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Vineyard Tours
          </h2>
          <p className="font-inter text-lg text-charcoal/80 max-w-2xl mx-auto">
            Immerse yourself in the art of winemaking with our guided tours through the vineyard, from grape to glass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourOptions.map((tour, index) => (
            <Card key={index} className="border-wine-primary/20 hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-wine-primary">
                    {tour.title}
                  </h3>
                  <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    {tour.price}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} className="text-wine-primary" />
                  <span className="font-inter text-sm text-charcoal/70">{tour.duration}</span>
                </div>
                
                <p className="font-inter text-charcoal/80 mb-6">
                  {tour.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {tour.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-wine-primary rounded-full" />
                      <span className="font-inter text-sm text-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium py-3 rounded-md transition-colors duration-300 group-hover:scale-105 transform">
                  Book This Tour
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-wine-primary/5 rounded-lg p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-wine-primary mb-4">
            Private Group Tours Available
          </h3>
          <p className="font-inter text-charcoal/80 mb-6">
            Planning a special celebration? We offer customized private tours for groups of 8 or more.
          </p>
          <button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300">
            Plan Your Private Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default VineyardTours;
