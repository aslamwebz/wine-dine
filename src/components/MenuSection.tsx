
import { Card, CardContent } from '@/components/ui/card';

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Seasonal Appetizers",
      description: "Fresh, locally-sourced starters to awaken your palate",
      items: [
        { name: "Vineyard Charcuterie", description: "Artisan meats, aged cheeses, seasonal preserves", price: "$28" },
        { name: "Seared Scallops", description: "Pan-seared with cauliflower purée and pancetta", price: "$24" },
        { name: "Wine-Poached Pear", description: "With gorgonzola, candied walnuts, arugula", price: "$18" }
      ]
    },
    {
      title: "Signature Mains",
      description: "Expertly crafted dishes paired with our finest wines",
      items: [
        { name: "Wagyu Beef Tenderloin", description: "Red wine reduction, roasted vegetables, truffle oil", price: "$65" },
        { name: "Pan-Roasted Duck", description: "Cherry gastrique, wild rice, seasonal greens", price: "$48" },
        { name: "Lobster Risotto", description: "Saffron risotto, fresh herbs, white wine butter", price: "$52" }
      ]
    },
    {
      title: "Dessert Collection",
      description: "Sweet endings to complement your wine selection",
      items: [
        { name: "Dark Chocolate Tart", description: "Port wine reduction, fresh berries", price: "$16" },
        { name: "Tiramisu", description: "Coffee-soaked ladyfingers, mascarpone, cocoa", price: "$14" },
        { name: "Wine-Poached Pears", description: "Vanilla bean ice cream, almond brittle", price: "$12" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Seasonal Menu
          </h2>
          <p className="font-inter text-lg text-charcoal/80 max-w-2xl mx-auto">
            Our chef-curated menu changes with the seasons, featuring the finest local ingredients paired with exceptional wines from our cellar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-background border-wine-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-wine-primary mb-3">
                  {category.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-wine-primary/10 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-inter font-semibold text-charcoal">{item.name}</h4>
                        <span className="font-playfair text-wine-primary font-bold">{item.price}</span>
                      </div>
                      <p className="font-inter text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-charcoal/70 mb-4">
            Wine pairings available for all dishes
          </p>
          <button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300">
            View Full Menu & Wine List
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
