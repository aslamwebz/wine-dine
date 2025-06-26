
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MapPin, Users, Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface Tour {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}

interface BookingDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  tourType: 'regular' | 'private';
  message?: string;
}

const VineyardTours = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    tourType: 'regular',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPrivateTour = bookingDetails.tourType === 'private';

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would handle the booking submission here
      console.log('Booking submitted:', { 
        tour: selectedTour, 
        ...bookingDetails 
      });
      
      setBookingStep(2); // Show confirmation
    } catch (error) {
      console.error('Booking failed:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value, 10) : value
    }));
  };
  
  const openPrivateTourForm = () => {
    const privateTour: Tour = {
      title: 'Private Group Tour',
      price: 'Custom',
      duration: 'Custom',
      description: 'A personalized tour experience for your group',
      features: [
        'Customizable duration',
        'Private guide',
        'Exclusive wine tastings',
        'Personalized experience'
      ]
    };
    
    setSelectedTour(privateTour);
    setBookingDetails(prev => ({
      ...prev,
      tourType: 'private',
      guests: 8,
      message: ''
    }));
    setIsBookingOpen(true);
    setBookingStep(1);
  };
  
  const handleBookTour = (tour: Tour, isPrivate = false) => {
    setSelectedTour(tour);
    setBookingDetails(prev => ({
      ...prev,
      tourType: isPrivate ? 'private' : 'regular',
      guests: isPrivate ? 8 : 2,
      message: ''
    }));
    setIsBookingOpen(true);
    setBookingStep(1);
  };
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
                
                <button 
                  onClick={() => handleBookTour(tour)}
                  className="w-full bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium py-3 rounded-md transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-wine-primary/50 focus:ring-offset-2"
                >
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openPrivateTourForm}
              className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-wine-primary/50 focus:ring-offset-2"
            >
              Plan Your Private Tour
            </button>
            <button 
              onClick={() => {
                window.location.href = 'mailto:bookings@vineyardromance.com?subject=Wine Tasting Consultation';
              }}
              className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-[525px] bg-cream border-gold/50">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-charcoal">
              {bookingStep === 1 ? `Book ${selectedTour?.title}` : 'Booking Confirmed!'}
            </DialogTitle>
            <DialogDescription className="font-inter text-charcoal/80">
              {bookingStep === 1 
                ? 'Complete the form to secure your spot.'
                : 'Your tour has been successfully booked. We\'ll contact you shortly with the details.'
              }
            </DialogDescription>
          </DialogHeader>

          {bookingStep === 1 ? (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-inter text-sm font-medium text-charcoal/80">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={bookingDetails.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-md border border-charcoal/20 bg-white pl-10 pr-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-sm font-medium text-charcoal/80">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                    <select
                      name="time"
                      required
                      value={bookingDetails.time}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-charcoal/20 bg-white pl-10 pr-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                    >
                      <option value="">Select time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-charcoal/80">
                  Number of Guests
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                  <select
                    name="guests"
                    value={bookingDetails.guests}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-charcoal/20 bg-white pl-10 pr-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-charcoal/80">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-charcoal/80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-charcoal/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={bookingDetails.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890"
                  className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                />
              </div>
              
              {isPrivateTour && (
                <div className="space-y-2">
                  <label className="font-inter text-sm font-medium text-charcoal/80">
                    Tell us about your group and any special requests
                  </label>
                  <textarea
                    name="message"
                    value={bookingDetails.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm font-inter text-charcoal focus:outline-none focus:ring-2 focus:ring-wine-primary/50"
                    placeholder="Group size, preferred dates, special occasions, etc."
                  />
                </div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-wine-primary hover:bg-wine-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      {isPrivateTour ? 'Request Private Tour' : 'Complete Booking'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <p className="mt-3 text-center text-sm text-charcoal/60">
                  {isPrivateTour 
                    ? 'We\'ll contact you within 24 hours to confirm your private tour details.'
                    : 'You\'ll receive a confirmation email with your booking details.'}
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                Thank You for Your Booking!
              </h3>
              <p className="font-inter text-charcoal/80 mb-6">
                We've sent a confirmation to {bookingDetails.email}
              </p>
              <div className="bg-wine-primary/5 p-4 rounded-lg border border-wine-primary/10">
                <h4 className="font-inter font-semibold text-charcoal mb-2">
                  Tour Details
                </h4>
                <div className="space-y-1 text-sm text-charcoal/80">
                  <p>{selectedTour?.title}</p>
                  <p>{bookingDetails.date} at {bookingDetails.time}</p>
                  <p>{bookingDetails.guests} {bookingDetails.guests === 1 ? 'guest' : 'guests'}</p>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setIsBookingOpen(false);
                  setBookingStep(1);
                }}
                variant="outline"
                className="mt-6 border-wine-primary text-wine-primary hover:bg-wine-primary/10"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VineyardTours;
