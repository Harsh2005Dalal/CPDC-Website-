import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sampleAnnouncements from '../data/Announcements.json'

// Sample announcement data
export default function AnnouncementSlider({ announcements = sampleAnnouncements }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-slide functionality that pauses on hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [announcements.length, isHovered]);
  
  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? announcements.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isLastSlide = currentIndex === announcements.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  if (!announcements || announcements.length === 0) {
    return null;
  }
  
  const currentAnnouncement = announcements[currentIndex];
  
  return (
    <div 
      className="relative w-full overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Plain background */}
      <div className="absolute inset-0 bg-gray-100" />
      
      {/* Main announcement content with smooth transitions */}
      <div className="relative z-10 py-6 px-8 text-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-center text-center">
            {/* Content with smooth fade transitions */}
            <div className="flex-1 min-w-0 transition-all duration-500 ease-in-out">
              <h3 className="font-bold text-xl md:text-2xl mb-2 leading-tight transition-all duration-500 ease-in-out transform">
                {currentAnnouncement.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed transition-all duration-500 ease-in-out transform">
                {currentAnnouncement.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 text-gray-700 hover:bg-opacity-100 hover:scale-110 transition-all duration-300 shadow-md z-20 hover:cursor-pointer"
        aria-label="Previous announcement"
        type="button"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 text-gray-700 hover:bg-opacity-100 hover:scale-110 transition-all duration-300 shadow-md z-20 hover:cursor-pointer"
        aria-label="Next announcement"
        type="button"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Dot navigation with highlight instead of extension */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-gray-700 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600 hover:scale-110'
            }`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
        <div 
          className="h-full bg-gray-600 transition-all duration-300 ease-linear"
          style={{
            width: isHovered ? '0%' : `${((currentIndex + 1) / announcements.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}