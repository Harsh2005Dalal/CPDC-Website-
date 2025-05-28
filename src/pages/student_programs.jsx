import React from 'react';
import {Link} from 'react-router'
const IITRoparPlacement = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                IIT Ropar
              </h1>
              <p className="text-lg text-blue-600 font-semibold">Placement Cell</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Student Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bridge the gap between academia and industry through our carefully designed programs that foster innovation, learning, and professional growth
          </p>
        </div>

        {/* Programs Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* UG Internship Program */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-laptop-code text-white text-3xl mr-4"></i>
                <div>
                  <h3 className="text-2xl font-bold text-white">6-Month Internship</h3>
                  <p className="text-blue-100">Undergraduate Program</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-clock text-blue-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">Duration: 6 Months</span>
                </div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-users text-blue-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">For: Undergraduate Students</span>
                </div>
                <div className="flex items-center mb-6">
                  <i className="fas fa-calendar text-blue-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">Timing: Flexible scheduling options</span>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-800 mb-4">Program Highlights</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Hands-on industry experience with cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Mentorship from industry professionals and faculty</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Real-world project execution and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Structured learning path with measurable outcomes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Opportunity for full-time conversion post-graduation</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium text-center">
                  <i className="fas fa-lightbulb mr-2"></i>
                  Perfect for gaining practical experience while completing your degree
                </p>
              </div>
            </div>
          </div>

          {/* PG Joint Master's Thesis Program */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-microscope text-white text-3xl mr-4"></i>
                <div>
                  <h3 className="text-2xl font-bold text-white">Joint Master's Thesis</h3>
                  <p className="text-purple-100">Postgraduate Program</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-clock text-purple-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">Duration: 6-12 Months</span>
                </div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-graduate text-purple-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">For: Postgraduate Students</span>
                </div>
                <div className="flex items-center mb-6">
                  <i className="fas fa-handshake text-purple-500 mr-3"></i>
                  <span className="font-semibold text-gray-700">Type: Industry-Academia Collaboration</span>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-800 mb-4">Program Highlights</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Collaborative research between industry and academia</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Access to industry resources and datasets</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Co-supervision by faculty and industry experts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Publication opportunities in top-tier conferences</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Direct pathway to research and development roles</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800 font-medium text-center">
                  <i className="fas fa-lightbulb mr-2"></i>
                  Ideal for pursuing advanced research with industry relevance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Hire Through These Programs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Hire Through Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with IIT Ropar to access top-tier talent and drive innovation in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Talent Pool</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to rigorously selected students from one of India's premier technical institutions with strong academic credentials and problem-solving abilities.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pre-Trained & Job-Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Students come with hands-on experience, industry exposure, and practical skills developed through structured programs, reducing your training costs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation Catalyst</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh perspectives and cutting-edge knowledge that can drive innovation and bring new solutions to your business challenges.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Long-term Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Build lasting relationships with our institution for continuous talent pipeline and collaborative research opportunities.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Faster Time-to-Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured programs ensure students hit the ground running with minimal onboarding time, delivering value from day one.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous academic standards and continuous evaluation ensure you receive candidates of exceptional quality and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with IIT Ropar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading companies in accessing top engineering talent through our innovative programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/contact-us'><button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              <i className="fas fa-phone mr-2"></i>
              Contact Placement Cell
            </button></Link>
            <Link to='/resources'><button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-download mr-2"></i>
              Download Brochure
            </button></Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <i className="fas fa-envelope text-blue-600 text-xl mr-3"></i>
              <span className="text-gray-700">placement@iitrpr.ac.in</span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-phone text-blue-600 text-xl mr-3"></i>
              <span className="text-gray-700">+91-1881-242xxx</span>
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-blue-600 text-xl mr-3"></i>
              <span className="text-gray-700">IIT Ropar, Punjab</span>
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome CDN - Note: In a real React app, you'd want to install and import Font Awesome properly */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet"
      />
    </div>
  );
};

export default IITRoparPlacement;