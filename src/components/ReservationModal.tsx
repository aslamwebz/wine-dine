import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-cream border-gold/50 max-w-md md:max-w-lg rounded-lg">
        <DialogHeader className="relative">
          <DialogTitle className="font-playfair text-2xl text-charcoal text-center">
            Reserve Your Table
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
        
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-charcoal/80 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-3 py-2 border border-charcoal/20 rounded-md focus:ring-wine-primary focus:border-wine-primary"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-charcoal/80 mb-1">
                Time
              </label>
              <select
                id="time"
                className="w-full px-3 py-2 border border-charcoal/20 rounded-md focus:ring-wine-primary focus:border-wine-primary"
              >
                <option value="">Select a time</option>
                {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="party-size" className="block text-sm font-medium text-charcoal/80 mb-1">
                Party Size
              </label>
              <select
                id="party-size"
                className="w-full px-3 py-2 border border-charcoal/20 rounded-md focus:ring-wine-primary focus:border-wine-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((size) => (
                  <option key={size} value={size}>{size} {size === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="occasion" className="block text-sm font-medium text-charcoal/80 mb-1">
                Occasion (Optional)
              </label>
              <select
                id="occasion"
                className="w-full px-3 py-2 border border-charcoal/20 rounded-md focus:ring-wine-primary focus:border-wine-primary"
              >
                <option value="">Select an occasion</option>
                <option value="anniversary">Anniversary</option>
                <option value="birthday">Birthday</option>
                <option value="date">Date Night</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <Button 
              className="w-full bg-wine-primary hover:bg-wine-light text-cream font-inter font-medium py-3 text-base"
              onClick={() => {
                // Handle reservation submission
                onClose();
              }}
            >
              Reserve Now
            </Button>
          </div>
          
          <p className="text-xs text-charcoal/60 text-center mt-4">
            By making a reservation, you agree to our cancellation policy. A credit card may be required to hold your table.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
