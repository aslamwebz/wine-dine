
import { MapPin, Wine, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-playfair font-bold text-gold mb-4">
              WineDine
            </div>
            <p className="font-inter text-cream/80 mb-6 max-w-md">
              An enchanting wine and dine experience nestled among rolling vineyards, where exceptional cuisine meets world-class wines in a romantic setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors duration-300">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors duration-300">
                <Wine size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Contact</h3>
            <div className="space-y-3 font-inter text-cream/80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-wine-light" />
                <div>
                  <p>1234 Vineyard Lane</p>
                  <p>Wine Valley, CA 94558</p>
                </div>
              </div>
              <p>Phone: (707) 555-WINE</p>
              <p>Email: reservations@winedine.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Hours</h3>
            <div className="space-y-2 font-inter text-cream/80">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
              <div className="mt-4 pt-2 border-t border-wine-primary/30">
                <p className="text-sm">Tours: Daily 11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <div className="bg-wine-primary/20 rounded-lg p-8 text-center">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              Visit Our Vineyard
            </h3>
            <p className="font-inter text-cream/80 mb-4">
              Located in the heart of California's premier wine country
            </p>
            <button className="bg-gold hover:bg-gold/90 text-charcoal font-inter font-semibold px-6 py-3 rounded-md transition-colors duration-300">
              Get Directions
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-wine-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-cream/60 text-sm mb-4 md:mb-0">
            © 2025 Em@webzone. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-inter">
            <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
              Wine Club
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
