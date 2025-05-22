
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sampleAnnouncements from '../data/Announcements.json'

// Sample announcement data if you don't have backend data

export default function AnnouncementSlider({ announcements = sampleAnnouncements }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [announcements.length]);
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? announcements.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === announcements.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  // If no announcements, don't render anything
  if (!announcements || announcements.length === 0) {
    return null;
  }
  
  const currentAnnouncement = announcements[currentIndex];
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main announcement banner */}
      <div className={`py-3 px-4 bg-white transition-all duration-500 ease-in-out text-black`}>
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-bold text-lg md:text-xl">{currentAnnouncement.title}</h3>
            <p className="text-sm md:text-base">{currentAnnouncement.description}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-1 text-white hover:bg-opacity-50 transition-all"
        aria-label="Previous announcement"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-1 text-white hover:bg-opacity-50 transition-all"
        aria-label="Next announcement"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots for navigation */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
