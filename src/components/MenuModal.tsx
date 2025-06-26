import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'meal' | 'wine';
}

const MenuModal = ({ isOpen, onClose, initialTab = 'meal' }: MenuModalProps) => {
  const [activeTab, setActiveTab] = useState<'meal' | 'wine'>(initialTab);
  const menuSections = [
    {
      title: "Seasonal Starters",
      items: [
        { name: "Vineyard Charcuterie", description: "Artisan meats, local cheeses, house preserves, grilled bread", price: "$28" },
        { name: "Seared Scallops", description: "Cauliflower purée, pancetta, brown butter vinaigrette", price: "$24" },
        { name: "Heirloom Tomato Salad", description: "Burrata, basil oil, balsamic glaze, maldon salt", price: "$18" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Filet Mignon", description: "8oz grass-fed beef, truffle mashed potatoes, roasted vegetables, red wine reduction", price: "$48" },
        { name: "Pan-Seared Salmon", description: "Lemon beurre blanc, asparagus, forbidden rice pilaf", price: "$38" },
        { name: "Mushroom Risotto", description: "Wild mushrooms, white truffle oil, aged parmesan, microgreens", price: "$32" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Soufflé", description: "Warm chocolate center, vanilla bean ice cream, raspberry coulis", price: "$14" },
        { name: "Crème Brûlée", description: "Vanilla bean custard, caramelized sugar, seasonal berries", price: "$12" },
        { name: "Cheese Selection", description: "Artisanal cheese trio, honeycomb, walnut bread, fruit compote", price: "$18" }
      ]
    }
  ];

  // Wine list data
  const wineSections = [
    {
      title: "Sparkling Wines",
      items: [
        { name: "Dom Pérignon Vintage 2013", description: "Champagne, France | Elegant bubbles with notes of brioche and citrus", price: "$350" },
        { name: "Krug Grande Cuvée", description: "Champagne, France | Rich and complex with toasted almond and honey", price: "$280" },
        { name: "Schramsberg Blanc de Blancs 2018", description: "Napa Valley, USA | Crisp apple and pear with lively acidity", price: "$120" }
      ]
    },
    {
      title: "White Wines",
      items: [
        { name: "Domaine Leflaive Puligny-Montrachet 2019", description: "Burgundy, France | Rich and buttery with citrus and mineral notes", price: "$450" },
        { name: "Kistler Chardonnay 2020", description: "Russian River Valley, USA | Vanilla, pear, and toasted oak", price: "$95" },
        { name: "Weingut Knoll Riesling Smaragd 2019", description: "Wachau, Austria | Stone fruit and floral with racy acidity", price: "$75" }
      ]
    },
    {
      title: "Red Wines",
      items: [
        { name: "Screaming Eagle Cabernet Sauvignon 2018", description: "Napa Valley, USA | Bold black fruit, dark chocolate, and spice", price: "$4,200" },
        { name: "Domaine de la Romanée-Conti La Tâche 2016", description: "Burgundy, France | Elegant red fruit, earth, and spice", price: "$6,500" },
        { name: "Sassicaia 2018", description: "Tuscany, Italy | Blackcurrant, tobacco, and cedar with firm tannins", price: "$350" }
      ]
    },
    {
      title: "Dessert Wines",
      items: [
        { name: "Château d'Yquem 2015", description: "Sauternes, France | Honey, apricot, and vanilla with perfect acidity", price: "$450" },
        { name: "Quinta do Noval Nacional Vintage Port 2017", description: "Douro, Portugal | Intense dark fruit, chocolate, and spice", price: "$850" }
      ]
    }
  ];

  // Helper function to render menu sections
  const renderMenuSection = (sections: typeof menuSections) => (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="font-playfair text-xl text-wine-primary border-b border-gold/30 pb-2 mb-4">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex justify-between">
                <div className="flex-1">
                  <h4 className="font-inter font-medium text-charcoal">{item.name}</h4>
                  <p className="text-charcoal/70 text-sm">{item.description}</p>
                </div>
                <span className="font-playfair text-wine-primary font-medium ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-cream border-gold/50 max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
        <DialogHeader className="relative">
          <DialogTitle className="font-playfair text-2xl text-charcoal text-center">
            {activeTab === 'meal' ? 'Our Menu' : 'Wine List'}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 text-charcoal hover:bg-wine-primary/10 hover:text-wine-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as 'meal' | 'wine')}
          className="mt-4"
        >
          <TabsList className="grid w-full grid-cols-2 bg-wine-primary/5 border border-wine-primary/10 p-1 h-auto rounded-lg mb-6">
            <TabsTrigger 
              value="meal" 
              className="data-[state=active]:bg-wine-primary data-[state=active]:text-cream rounded-md py-2 px-4 text-sm font-medium transition-all"
            >
              Meal Menu
            </TabsTrigger>
            <TabsTrigger 
              value="wine" 
              className="data-[state=active]:bg-wine-primary data-[state=active]:text-cream rounded-md py-2 px-4 text-sm font-medium transition-all"
            >
              Wine List
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="meal" className="mt-0">
            {renderMenuSection(menuSections)}
          </TabsContent>
          
          <TabsContent value="wine" className="mt-0">
            {renderMenuSection(wineSections)}
          </TabsContent>
        </Tabs>
        
        <div className="bg-wine-primary/5 p-4 rounded-lg border border-wine-primary/10 mt-6">
          <p className="text-center text-charcoal/80 text-sm">
            {activeTab === 'meal' 
              ? 'Please inform your server of any dietary restrictions or allergies. Our kitchen can accommodate most dietary needs with advance notice.'
              : 'Our sommelier is available to assist with wine pairings and recommendations. Please ask your server for assistance.'}
          </p>
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              className="border-wine-primary text-wine-primary hover:bg-wine-primary hover:text-cream"
              onClick={onClose}
            >
              Close {activeTab === 'meal' ? 'Menu' : 'Wine List'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
