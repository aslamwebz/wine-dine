
const PrivateEvents = () => {
  const eventTypes = [
    {
      title: "Romantic Dinners",
      description: "Intimate dining experiences for couples in our private vineyard pavilion",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "2-8 guests"
    },
    {
      title: "Wedding Celebrations",
      description: "Unforgettable wedding receptions surrounded by rolling vineyards",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "20-150 guests"
    },
    {
      title: "Corporate Events",
      description: "Professional gatherings with wine tastings and gourmet catering",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "10-100 guests"
    }
  ];

  return (
    <section id="events" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Private Events
          </h2>
          <p className="font-inter text-lg text-charcoal/80 max-w-2xl mx-auto">
            Create lasting memories with our exclusive private event spaces, perfect for intimate celebrations and special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-wine-primary/30 group-hover:bg-wine-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-cream">
                  <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    {event.capacity}
                  </span>
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-wine-primary mb-2">
                {event.title}
              </h3>
              <p className="font-inter text-charcoal/80">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-wine-primary/10 rounded-lg p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-wine-primary mb-4">
            Let Us Plan Your Perfect Event
          </h3>
          <p className="font-inter text-charcoal/80 mb-6 max-w-2xl mx-auto">
            Our experienced event team will work with you to create a customized experience featuring our finest wines, exceptional cuisine, and breathtaking vineyard views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-wine-primary text-wine-primary hover:bg-wine-primary hover:text-cream font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300">
              Download Event Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;
