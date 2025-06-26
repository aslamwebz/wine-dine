
import { useState, useEffect, useCallback } from 'react';

const FloatingReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Debounce function to limit how often the scroll handler runs
  const debounce = (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout!);
        func(...args);
      };
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleScroll = useCallback(() => {
    const scrolled = window.pageYOffset > 500;
    if (scrolled !== isVisible) {
      setIsVisible(scrolled);
    }
  }, [isVisible]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [handleScroll]);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button 
        className="bg-wine-primary hover:bg-wine-light text-cream font-inter font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Reserve Table
      </button>
    </div>
  );
};

export default FloatingReserveButton;
