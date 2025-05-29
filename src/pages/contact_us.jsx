import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const PlacementContact = () => {
  // Load Font Awesome dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    
    // Check if the stylesheet is already loaded
    if (!document.querySelector(`link[href="${link.href}"]`)) {
      document.head.appendChild(link);
    }
    
    // Cleanup function to remove the link when component unmounts
    return () => {
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-university text-white text-xl"></i>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">College Placement Cell</h1>
              <p className="text-blue-600 font-medium">Building Bridges to Your Future</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our placement team. We're here to connect talent with opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Placement Cell Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Placement Cell</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-500 w-6 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-800">placement@college.edu</p>
                    <p className="text-gray-600 text-sm">General Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-phone text-blue-500 w-6 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-800">+91-XXXXX-XXXXX</p>
                    <p className="text-gray-600 text-sm">Office Hours: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-fax text-blue-500 w-6 mr-4"></i>
                  <div>
                    <p className="font-semibold text-gray-800">+91-XXXXX-XXXXX</p>
                    <p className="text-gray-600 text-sm">Fax Number</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Personnel */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Key Personnel</h3>
              </div>
              
              <div className="space-y-6">
                {/* Placement Officer */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">Dr. John Smith</h4>
                  <p className="text-blue-600 font-medium">Chief Placement Officer</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-envelope text-blue-500 w-4 mr-2 text-sm"></i>
                      john.smith@college.edu
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-phone text-blue-500 w-4 mr-2 text-sm"></i>
                      +91-XXXXX-12345
                    </p>
                  </div>
                </div>
                
                {/* Assistant Placement Officer */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">Ms. Sarah Johnson</h4>
                  <p className="text-blue-600 font-medium">Assistant Placement Officer</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-envelope text-blue-500 w-4 mr-2 text-sm"></i>
                      sarah.johnson@college.edu
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-phone text-blue-500 w-4 mr-2 text-sm"></i>
                      +91-XXXXX-67890
                    </p>
                  </div>
                </div>
                
                {/* Training & Development */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">Mr. David Wilson</h4>
                  <p className="text-blue-600 font-medium">Training & Development Head</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-envelope text-blue-500 w-4 mr-2 text-sm"></i>
                      david.wilson@college.edu
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <i className="fas fa-phone text-blue-500 w-4 mr-2 text-sm"></i>
                      +91-XXXXX-54321
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Statistics & Office Hours */}
          <div className="space-y-8">
            
            {/* Placement Statistics */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Placement Statistics</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Placement Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-700 font-medium">Partner Companies</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹8.5L</div>
                  <div className="text-gray-700 font-medium">Average Package</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹25L</div>
                  <div className="text-gray-700 font-medium">Highest Package</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link to='/placement-stats'>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold">
                    <i className="fas fa-chart-bar mr-2"></i>
                    View Detailed Stats
                  </button>
                </Link>
              </div>
            </div>

            {/* Office Hours & Important Dates */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-clock text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-blue-600 font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Important Notice</h4>
                <p className="text-gray-600 text-sm">
                  Placement drives are conducted from August to April. 
                  Companies interested in campus recruitment should contact us by July.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Simplified */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-file-download text-white text-2xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-xl">Download Brochure</h4>
            <p className="text-gray-600 mb-6">Get our comprehensive placement brochure with student profiles and placement statistics</p>
            <Link to='/resources'>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold">
                <i className="fas fa-download mr-2"></i>
                Download PDF
              </button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-building text-white text-2xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-xl">Recruiter Portal</h4>
            <p className="text-gray-600 mb-6">Access our dedicated portal for company registration and recruitment process management</p>
            <Link to='/recruiters-portal'>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold">
                <i className="fas fa-sign-in-alt mr-2"></i>
                Access Portal
              </button>
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            For urgent placement-related queries, contact our helpline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <i className="fas fa-phone-alt mr-3 text-xl"></i>
              <span className="text-xl font-semibold">+91-XXXXX-HELPLINE</span>
            </div>
            <div className="hidden sm:block text-2xl opacity-50">|</div>
            <div className="flex items-center">
              <i className="fas fa-clock mr-3 text-xl"></i>
              <span className="text-lg">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementContact;