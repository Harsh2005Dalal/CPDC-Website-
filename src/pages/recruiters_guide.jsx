import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Award,
  Briefcase,
  ChevronDown,
  Download
} from 'lucide-react';

import processSteps from '../data/recruiters_guide.json'

const RecruiterProcess = () => {
  const [expandedStep, setExpandedStep] = useState(null);


  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quality Talent Pool",
      description: "Access to top-performing students from various engineering disciplines"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pre-screened Candidates",
      description: "Students are pre-screened based on academic performance and skills"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Streamlined Process",
      description: "Efficient recruitment process with dedicated placement team support"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Industry-Ready Graduates",
      description: "Students trained with latest industry practices and technologies"
    }
  ];

  const toggleStep = (stepId) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Recruitment Process
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Partner with us to recruit top talent from our institution. 
              Follow our streamlined process for effective campus recruitment.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span className="flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                500+ Companies Partner
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                95% Placement Rate
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Industry-Ready Graduates
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Process Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recruitment Timeline</h2>
            <p className="text-lg text-gray-600">A step-by-step guide to our recruitment process</p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-blue-200"></div>
                )}
                
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div 
                    className="flex items-center p-6 cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-6">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            Step {step.id}: {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {step.duration}
                          </span>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                              expandedStep === step.id ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedStep === step.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Process Details</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {step.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Recruit From Us?</h2>
            <p className="text-lg text-gray-600">Discover the advantages of partnering with our institution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Resources */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Placement Cell</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">placements@college.edu</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91-XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">Placement Cell, College Name<br />City, State - PIN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Download Resources</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-blue-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Company Registration Form</p>
                    <p className="text-sm text-gray-600">Required for initial registration</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-blue-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Student Database</p>
                    <p className="text-sm text-gray-600">Statistics and branch-wise details</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-blue-600 mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Placement Brochure</p>
                    <p className="text-sm text-gray-600">Complete placement information</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Recruiting?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies who trust us for their talent acquisition needs. 
            Begin your recruitment journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Register Your Company
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProcess;