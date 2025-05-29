import React from "react";
import "./h.css";
import Carousel from '../components/Carousel.jsx'
import { Link } from 'react-router-dom' // Fixed: Changed from 'react-router' to 'react-router-dom'
import AnnouncementSlider from '../components/Announcements.jsx'
import bg_image from '../assets/Spiral.jpg'

const Home = () => {
  return (
    <div className="bg-image min-h-screen w-full h-full bg-cover bg-center bg-no-repeat text-black text-2xl bg-blend-lighten"  style={{
      backgroundImage: `url(${bg_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <AnnouncementSlider />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-24">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl font-light text-gray-800 mb-4 sm:mb-6 tracking-wide">
            IIT Ropar
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-4 sm:mb-6 px-2 sm:px-0">
            The Indian Institute of Technology Ropar stands as a premier institute of national importance, 
            fostering innovation and excellence in technology and research. Established with a vision to 
            create world-class engineers and researchers, IIT Ropar has emerged as a beacon of academic 
            excellence in northern India.
          </p>
          <p className="text-sm sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Our institute is committed to empowering minds to shape the future through cutting-edge education, 
            groundbreaking research, and industry collaboration. With state-of-the-art facilities and a 
            distinguished faculty, we nurture innovation and entrepreneurship while maintaining the highest 
            standards of academic rigor.
          </p>
        </div>

        {/* About CDPC Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-12 mb-8 sm:mb-16 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
              About CDPC
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-light text-center max-w-5xl mx-auto px-2 sm:px-0">
              The Career Development and Placement Cell (CDPC) at IIT Ropar serves as the vital bridge between 
              academic excellence and professional success, connecting our exceptionally talented students with 
              leading organizations across the globe. Our mission is to ensure that every graduate not only 
              finds meaningful employment but also embarks on a career path that aligns with their aspirations 
              and maximizes their potential.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-0">
                  We are committed to nurturing careers through comprehensive support, strategic industry 
                  partnerships, and innovative placement strategies. Our dedicated team works tirelessly to 
                  understand market trends, employer requirements, and student aspirations to create perfect 
                  matches that benefit all stakeholders.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-0">
                  Through continuous engagement with industry leaders, we ensure our students are equipped 
                  with not just technical knowledge but also the soft skills and professional acumen required 
                  to excel in today's competitive landscape.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">Key Services</h3>
                <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-800 font-medium block text-sm sm:text-base">Industry Partnerships</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Building strong relationships with top-tier companies</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-800 font-medium block text-sm sm:text-base">Career Guidance</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Personalized counseling and career path planning</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-800 font-medium block text-sm sm:text-base">Skill Development</span>
                      <span className="text-gray-600 text-xs sm:text-sm">Workshops and training for professional readiness</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-800 font-medium block text-sm sm:text-base">Placement Support</span>
                      <span className="text-gray-600 text-xs sm:text-sm">End-to-end assistance throughout the recruitment process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4 text-center">Our Impact</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-2 sm:px-0">
              Over the years, CDPC has successfully placed thousands of students in prestigious organizations 
              across various sectors including technology, consulting, finance, research, and entrepreneurship. 
              Our alumni continue to make significant contributions to their respective fields, upholding the 
              reputation and legacy of IIT Ropar on the global stage.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-800 mb-3 sm:mb-4">
              Campus Highlights
            </h3>
            <div className="w-10 sm:w-12 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <Carousel />
          
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link to='/past-recruiters'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:cursor-pointer text-sm sm:text-base">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;