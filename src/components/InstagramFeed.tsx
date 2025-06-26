
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Golden hour in the vineyard"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Fresh harvest season"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Scenic vineyard views"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Candlelit dinner romance"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Valley sunset views"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "Wine tasting experience"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Instagram className="mx-auto mb-4 text-wine-primary" size={48} />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Follow Our Journey
          </h2>
          <p className="font-inter text-lg text-charcoal/80 max-w-2xl mx-auto mb-6">
            Stay connected with WineDine and see the latest from our vineyard, events, and culinary creations.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-wine-primary hover:text-wine-light font-inter font-semibold transition-colors duration-300"
          >
            <Instagram size={20} />
            @winedine_vineyard
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-wine-primary/0 group-hover:bg-wine-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
