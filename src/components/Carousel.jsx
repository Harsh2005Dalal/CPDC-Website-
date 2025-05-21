import { useState, useEffect, useRef } from 'react';

// This component creates a smooth horizontal scrolling carousel
// that automatically loops through company logos
const Carousel = () => {
  // Placeholder company logos - replace with your actual company images
  const logos = [
    { id: 1, name: 'Google', src: '/api/placeholder/200/100' },
    { id: 2, name: 'Microsoft', src: '/api/placeholder/200/100' },
    { id: 3, name: 'Amazon', src: '/api/placeholder/200/100' },
    { id: 4, name: 'Apple', src: '/api/placeholder/200/100' },
    { id: 5, name: 'Meta', src: '/api/placeholder/200/100' },
    { id: 6, name: 'IBM', src: '/api/placeholder/200/100' },
    { id: 7, name: 'Oracle', src: '/api/placeholder/200/100' },
    { id: 8, name: 'Intel', src: '/api/placeholder/200/100' },
    { id: 9, name: 'Cisco', src: '/api/placeholder/200/100' },
    { id: 10, name: 'Adobe', src: '/api/placeholder/200/100' },
  ];
  
  // Clone the logos array to create a seamless infinite scroll effect
  const allLogos = [...logos, ...logos];
  
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  
  // Configuration settings
  const logoWidth = 200; // Width of each logo in pixels
  const gapWidth = 24;   // Gap between logos in pixels
  const animationDuration = 30; // Total time for one complete cycle (seconds)
  const totalWidth = logos.length * (logoWidth + gapWidth);
  
  useEffect(() => {
    // Calculate animation speed based on total width and desired duration
    const pixelsPerSecond = totalWidth / animationDuration;
    let animationId;
    let lastTimestamp = null;
    
    const animate = (timestamp) => {
      if (!isPaused) {
        if (lastTimestamp) {
          const deltaTime = timestamp - lastTimestamp;
          // Move position based on time elapsed
          const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;
          
          setPosition(prevPosition => {
            // When we've scrolled the width of all original logos, reset to beginning
            if (prevPosition >= totalWidth) {
              return 0;
            }
            return prevPosition + pixelsToMove;
          });
        }
        lastTimestamp = timestamp;
      } else {
        lastTimestamp = null;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, totalWidth, animationDuration]);
  
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Our Recruiting Partners</h2>
        <p className="text-gray-600">Top companies that recruit from our college</p>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={carouselRef}
      >
        <div 
          className="flex"
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 mx-3 transition-all duration-300"
              style={{ width: `${logoWidth}px` }}
            >
              <div className=" bg-blue-50 p-4 rounded-lg shadow-sm h-30 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <p className="text-center mt-2 text-lg text-black">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;