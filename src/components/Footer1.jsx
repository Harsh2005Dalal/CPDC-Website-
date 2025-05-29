import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Mock logo for demonstration
import clogo from '../assets/logocdpc.png';

// Mock Link component (replace with your router's Link)
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="text-gray-100 relative overflow-hidden bg-slate-900">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        {/* Mobile Layout (sm and below) */}
        <div className="block md:hidden">
          {/* Logo, Title and Navigation Combined */}
          <div className="text-center mb-8">
            <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-4 shadow-md border border-slate-600">
              <img 
                src={clogo} 
                alt="CDPC IIT Ropar Logo" 
                className="w-20 h-20 object-contain invert"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-100 mb-3">CDPC, IIT Ropar</h2>
            <div className="flex items-center justify-center text-gray-300 mb-6">
              <FaMapMarkerAlt className="mr-2 text-blue-400" size={14} />
              <p className="text-sm">
                Admin Block, IIT ROPAR<br/>
                Rupnagar, Punjab - 140001, India
              </p>
            </div>
            
            {/* Navigation Buttons - More Prominent */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              <Link to="/our-team" className="group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-semibold text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:from-blue-700 group-hover:to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Our Team
                  </span>
                </div>
              </Link>

              <Link to="/contact-us" className="group">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:from-emerald-700 group-hover:to-emerald-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Contact Us
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-4 mb-8">
            {/* Dean Section */}
            <div className="bg-slate-700 rounded-lg p-5 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Dean CEOA</h4>
              <p className="text-lg mb-2 font-semibold">Dr. Sarang P. Gumfekar</p>
              <div className="space-y-2">
                <p className="text-sm flex items-center">
                  <FaPhone className="mr-3 text-green-400" size={14} />
                  +91 76200 63191
                </p>
                <p className="text-sm flex items-center">
                  <FaEnvelope className="mr-3 text-blue-400" size={14} />
                  <a href="mailto:deanceoa@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                    deanceoa@iitrpr.ac.in
                  </a>
                </p>
              </div>
            </div>

            {/* Faculty Section */}
            <div className="bg-slate-700 rounded-lg p-5 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
              <h4 className="font-bold mb-3 text-blue-400 text-lg">Faculty In-Charge</h4>
              <p className="text-lg mb-2 font-semibold">Dr. Tharamani C.N.</p>
              <div className="space-y-2">
                <p className="text-sm flex items-center">
                  <FaPhone className="mr-3 text-green-400" size={14} />
                  +91 82838 40769
                </p>
                <p className="text-sm flex items-center">
                  <FaEnvelope className="mr-3 text-blue-400" size={14} />
                  <a href="mailto:chair.cdp@iitpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                    chair.cdp@iitpr.ac.in
                  </a>
                </p>
              </div>
            </div>

            {/* Organizers Section */}
            <div className="bg-slate-700 rounded-lg p-5 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
              <h4 className="font-bold mb-4 text-blue-400 text-lg">Organizers</h4>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-600">
                  <p className="text-lg font-semibold mb-2">Nikhil Garg</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 63780 10128
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:ug.placement@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        ug.placement@iitrpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-lg font-semibold mb-2">Hardik Jain</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 90043 50656
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:cdpc.outreach@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        cdpc.outreach@iitrpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="hidden md:block">
          {/* Header Section with Logo and Navigation */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 pb-8 border-b border-slate-600">
            {/* Logo Section */}
            <div className="flex items-center space-x-6 mb-6 lg:mb-0">
              <div className="bg-white rounded-xl p-4 shadow-md border border-slate-600">
                <img 
                  src={clogo} 
                  alt="CDPC IIT Ropar Logo" 
                  className="w-16 h-16 object-contain invert"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-2">
                  CDPC, IIT Ropar
                </h2>
                <div className="flex items-start text-gray-300">
                  <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={14} />
                  <p className="text-sm leading-relaxed">
                    Admin Block, IIT ROPAR, Rupnagar, Punjab - 140001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Right Side */}
            <div className="flex space-x-4">
              <Link to="/our-team" className="group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:from-blue-700 group-hover:to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Our Team
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link to="/contact-us" className="group">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:from-emerald-700 group-hover:to-emerald-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Contact Us
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Information Section */}
            <div className="lg:col-span-12">
              {/* Dean and Faculty */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
                  <h4 className="font-bold mb-3 text-blue-400 text-xl">Dean CEOA</h4>
                  <p className="text-lg mb-3 font-semibold">Dr. Sarang P. Gumfekar</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 76200 63191
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:deanceoa@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        deanceoa@iitrpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
                  <h4 className="font-bold mb-3 text-blue-400 text-xl">Faculty In-Charge</h4>
                  <p className="text-lg mb-3 font-semibold">Dr. Tharamani C.N.</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 82838 40769
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:chair.cdp@iitpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        chair.cdp@iitpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* Organizers in separate cards */}
                <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
                  <h4 className="font-bold mb-3 text-blue-400 text-xl">Organizer</h4>
                  <p className="text-lg mb-3 font-semibold">Nikhil Garg</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 63780 10128
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:ug.placement@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        ug.placement@iitrpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 shadow-sm hover:bg-blue-100 hover:text-slate-800 transition-all duration-300">
                  <h4 className="font-bold mb-3 text-blue-400 text-xl">Organizer</h4>
                  <p className="text-lg mb-3 font-semibold">Hardik Jain</p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-center">
                      <FaPhone className="mr-3 text-green-400" size={14} />
                      +91 90043 50656
                    </p>
                    <p className="text-sm flex items-center">
                      <FaEnvelope className="mr-3 text-blue-400" size={14} />
                      <a href="mailto:cdpc.outreach@iitrpr.ac.in" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 hover:underline">
                        cdpc.outreach@iitrpr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright - Clean Design */}
        <div className="pt-8 border-t border-slate-600">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://in.linkedin.com/school/placementcelliitropar/" 
              className="bg-slate-700 p-3 rounded-full text-gray-300 hover:text-blue-400 hover:bg-blue-100 transition-all duration-200 transform hover:scale-110 shadow-sm border border-slate-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:ug.placement@iitrpr.ac.in" 
              className="bg-slate-700 p-3 rounded-full text-gray-300 hover:text-blue-400 hover:bg-blue-100 transition-all duration-200 transform hover:scale-110 shadow-sm border border-slate-600"
              aria-label="Email"
            >
              <FaMailBulk size={20} />
            </a>
            <a 
              href="https://www.instagram.com/" 
              className="bg-slate-700 p-3 rounded-full text-gray-300 hover:text-blue-400 hover:bg-blue-100 transition-all duration-200 transform hover:scale-110 shadow-sm border border-slate-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-300 font-medium">
              © 2025 IIT ROPAR. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}