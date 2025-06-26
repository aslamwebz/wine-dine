
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import WineCollection from '@/components/WineCollection';
import LuxuryWines from '@/components/LuxuryWines';
import VineyardTours from '@/components/VineyardTours';
import PrivateEvents from '@/components/PrivateEvents';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';
import FloatingReserveButton from '@/components/FloatingReserveButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <WineCollection />
      <LuxuryWines />
      <VineyardTours />
      <PrivateEvents />
      <Testimonials />
      <InstagramFeed />
      <FloatingReserveButton />
      <Footer />
    </div>
  );
};

export default Index;
