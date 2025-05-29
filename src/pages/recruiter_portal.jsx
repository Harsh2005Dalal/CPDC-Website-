import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function PlacementForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = 'service_sxpaxzb';
  const EMAILJS_TEMPLATE_ID = 'template_zci3u7e';
  const EMAILJS_PUBLIC_KEY = 'Gvdko2CV8cb1PGUJA';
  const [formData, setFormData] = useState({
    companyName: '',
    sector: '',
    hrName: '',
    hrPhone: '',
    hrEmail: '',
    hiringFor: '',
    jobTitle: '',
    jobDescription: '',
    requirements: '',
    package: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS (only needed once)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare email template parameters
      const templateParams = {
        company_name: formData.companyName,
        sector: formData.sector,
        hr_name: formData.hrName,
        hr_phone: formData.hrPhone,
        hr_email: formData.hrEmail,
        hiring_for: formData.hiringFor,
        job_title: formData.jobTitle,
        package: formData.package,
        location: formData.location,
        job_description: formData.jobDescription,
        requirements: formData.requirements,
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString()
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        companyName: '',
        sector: '',
        hrName: '',
        hrPhone: '',
        hrEmail: '',
        hiringFor: '',
        jobTitle: '',
        jobDescription: '',
        requirements: '',
        package: '',
        location: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-600 rounded-2xl shadow-md mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5M16 6H8v10.5"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Recruiter's Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our talent ecosystem and discover exceptional students ready to make an impact</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">Registration Form</h2>
            <p className="text-blue-100 mt-1">Tell us about your hiring needs</p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                
                {/* Company Section */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Company Profile</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white shadow-sm"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="sector"
                        placeholder="Industry / Sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white shadow-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* HR Contact Section */}
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">HR Representative</h3>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="hrName"
                      placeholder="Full Name"
                      value={formData.hrName}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white shadow-sm"
                      required
                    />
                    <input
                      type="tel"
                      name="hrPhone"
                      placeholder="Contact Number"
                      value={formData.hrPhone}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white shadow-sm"
                      required
                    />
                    <input
                      type="email"
                      name="hrEmail"
                      placeholder="Email Address"
                      value={formData.hrEmail}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white shadow-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Job Details Section */}
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Opportunity Details</h3>
                  </div>
                  <div className="space-y-4">
                    <select
                      name="hiringFor"
                      value={formData.hiringFor}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm text-gray-700"
                      required
                    >
                      <option value="">Select Hiring Type</option>
                      <option value="intern">🎓 Internship Program</option>
                      <option value="fulltime">💼 Full-time Positions</option>
                      <option value="both">🚀 Both Options</option>
                    </select>
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Position / Role Title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="package"
                        placeholder="Package/Stipend"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
                      />
                      <input
                        type="text"
                        name="location"
                        placeholder="Work Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
                  </div>
                  <div className="space-y-4">
                    <textarea
                      name="jobDescription"
                      placeholder="Role description and key responsibilities..."
                      value={formData.jobDescription}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white shadow-sm resize-none"
                      required
                    />
                    <textarea
                      name="requirements"
                      placeholder="Skills and qualifications required..."
                      value={formData.requirements}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white shadow-sm resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <p className="text-green-700 font-medium">Partnership request submitted successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <p className="text-red-700 font-medium">Failed to submit. Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600 text-sm">
                  We'll review your submission and get back to you within 24 hours
                </p>
                <div
                  onClick={handleSubmit}
                  className={`${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 cursor-pointer hover:shadow-xl'
                  } text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg flex items-center gap-2 min-w-fit`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Partnership Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        {/* Setup Instructions */}
      </div>
    </div>
  </div>
  );
}