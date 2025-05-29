import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Code, 
  Lightbulb, 
  Target,
  Star,
  BookOpen,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Trophy,
  GraduationCap,
  Building,
  Heart,
  ChevronRight
} from 'lucide-react';

// Mock Link component for demonstration - replace with actual react-router-dom Link in your project
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

const WhyRecruitPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Companies Recruited", icon: Building },
    { number: "95%", label: "Placement Rate", icon: TrendingUp },
    { number: "₹45L", label: "Highest Package", icon: Trophy },
    { number: "₹18L", label: "Average Package", icon: Star }
  ];

  const reasons = [
    {
      icon: GraduationCap,
      title: "Premier Technical Education",
      description: "Students from one of India's top engineering institutions with rigorous academic curriculum and cutting-edge research exposure.",
      details: ["All India Rank 16 in NIRF Engineering Rankings", "World-class faculty and infrastructure", "Industry-aligned curriculum"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research Excellence",
      description: "Our students are trained in emerging technologies and have hands-on experience with real-world problem solving.",
      details: ["Active research in AI, ML, IoT, and emerging tech", "Patent filings and publications", "Innovation labs and incubation centers"]
    },
    {
      icon: Code,
      title: "Industry-Ready Skills",
      description: "Comprehensive skill development programs ensure our graduates are immediately productive in professional environments.",
      details: ["Technical workshops and certifications", "Soft skills and communication training", "Leadership development programs"]
    },
    {
      icon: Target,
      title: "Diverse Talent Pool",
      description: "Students from various engineering disciplines with interdisciplinary knowledge and collaborative mindset.",
      details: ["Multiple engineering branches", "Cross-functional project experience", "Strong analytical and problem-solving skills"]
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International exposure through exchange programs, collaborations, and global research partnerships.",
      details: ["International student exchange programs", "Global industry collaborations", "Multicultural learning environment"]
    },
    {
      icon: Heart,
      title: "Strong Work Ethics",
      description: "Our graduates are known for their integrity, dedication, and commitment to excellence in their professional careers.",
      details: ["High retention rates in companies", "Leadership roles in organizations", "Strong alumni network worldwide"]
    }
  ];

  const testimonials = [
    {
      company: "Microsoft India",
      quote: "IIT Ropar graduates consistently demonstrate exceptional technical skills and innovative thinking. They've been invaluable additions to our team.",
      recruiter: "Priya Sharma",
      role: "Senior Talent Acquisition Manager"
    },
    {
      company: "Google",
      quote: "The quality of students from IIT Ropar is outstanding. Their problem-solving abilities and fresh perspectives drive innovation in our projects.",
      recruiter: "Rajesh Kumar",
      role: "Engineering Director"
    },
    {
      company: "Amazon",
      quote: "We've had great success recruiting from IIT Ropar. The students are not just technically sound but also show great leadership potential.",
      recruiter: "Sarah Chen",
      role: "University Relations Lead"
    }
  ];

  const achievements = [
    "Ranked among top 20 engineering institutes in India",
    "100+ research publications annually",
    "Strong industry partnerships with 200+ companies",
    "Active alumni network in 50+ countries",
    "State-of-the-art research facilities and labs",
    "Regular hackathons and coding competitions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      {/* Hero Section */}
     <div className="py-16 bg-white/50 backdrop-blur-sm">
      {/* <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm"> */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-800/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9IiMxZTQwYWYiLz4KPHRleHQgeD0iNTAiIHk9IjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPklJVDwvdGV4dD4KPHRleHQgeD0iNTAiIHk9IjU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCI+Um9wYXI8L3RleHQ+Cjx0ZXh0IHg9IjUwIiB5PSI3NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTAiPkVzdC4gMjAwODwvdGV4dD4KPC9zdmc+"
                alt="IIT Ropar Logo" 
                className="w-20 h-20 mx-auto mb-4"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Recruit from
              <span className="block text-blue-800 mt-2">IIT Ropar?</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover exceptional talent from one of India's premier technological institutes. 
              Our graduates combine academic excellence with practical innovation to drive your organization forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                NIRF Ranked #16
              </span>
              <span className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                3000+ Students
              </span>
              <span className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                Est. 2008
              </span>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Statistics Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Reasons Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Excellence That Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes IIT Ropar graduates the perfect fit for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-2 ${
                    activeCard === index ? 'scale-105 border-blue-300 shadow-2xl' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{reason.description}</p>
                  
                  <div className={`space-y-2 transition-all duration-300 ${
                    activeCard === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-0 overflow-hidden'
                  }`}>
                    {reason.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievements Section - Updated with sophisticated dark theme */}
      <div className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Achievements</h2>
            <p className="text-xl text-slate-300">Recognition that validates our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-amber-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-200 group-hover:text-white transition-colors duration-300">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Recruiters Say</h2>
            <p className="text-xl text-gray-600">Hear from industry leaders who've experienced our talent firsthand</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.company}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-600 font-medium">- {testimonial.recruiter}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - Updated with elegant gradient */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-gray-800 rounded-3xl p-12 text-white shadow-2xl border border-slate-600/20">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Discover Exceptional Talent?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join the 500+ companies that have successfully recruited from IIT Ropar. 
              Experience the difference our graduates can make to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/recruiter-portal'>
                <button className="bg-white text-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-lg">
                  Start Recruiting
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to='/resources'>
                <button className="border-2 border-slate-400 text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-800 hover:border-white hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Download Brochure
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Connect with Our Placement Cell</h3>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Indian Institute of Technology Ropar
            </span>
            <span className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              placements@iitrpr.ac.in
            </span>
            <span className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              www.iitrpr.ac.in
            </span>
          </div>
          <div className="mt-6 text-gray-400 text-sm">
            © 2024 IIT Ropar. Excellence in Engineering Education since 2008.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRecruitPage;