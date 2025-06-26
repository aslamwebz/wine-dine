
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      occasion: "Anniversary Dinner",
      text: "Our evening at WineDine was absolutely magical. The vineyard setting, exceptional wine pairings, and attentive service made our anniversary unforgettable.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      occasion: "Wine Tour",
      text: "The sunset romance tour exceeded all expectations. The private guide was knowledgeable, the champagne was perfect, and the vineyard views were breathtaking.",
      rating: 5
    },
    {
      name: "David Chen",
      occasion: "Corporate Event",
      text: "WineDine handled our company retreat flawlessly. The team building wine tasting was a hit, and the catered dinner showcased incredible local flavors.",
      rating: 5
    },
    {
      name: "Jennifer & Robert Wilson",
      occasion: "Wedding Reception",
      text: "Our wedding at WineDine was a dream come true. The vineyard backdrop, outstanding cuisine, and professional staff made our special day perfect.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 wine-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Guest Stories
          </h2>
          <p className="font-inter text-lg text-cream/90 max-w-2xl mx-auto">
            Hear from our guests about their unforgettable experiences at WineDine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-cream/95 backdrop-blur-sm border-gold/20 min-h-[300px] flex items-center">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="font-inter text-lg md:text-xl text-charcoal/90 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div>
                <h4 className="font-playfair text-xl font-bold text-wine-primary">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-inter text-charcoal/70">
                  {testimonials[currentTestimonial].occasion}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-gold' : 'bg-cream/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
