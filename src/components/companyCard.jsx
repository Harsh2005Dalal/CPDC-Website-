import { Users, Calendar, IndianRupee } from "lucide-react";

// Format currency in Rupees
const formatRupees = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Company Card Component
const CompanyCard = ({ company }) => {
  // Add error handling for missing company data
  if (!company) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-72 mt-5 relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
      <div className="flex items-center p-4 border-b border-gray-100">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
          <img 
            src={company.logo} 
            alt={`${company.name || 'Company'} logo`} 
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{company.name || 'Company Name'}</h3>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2 text-blue-500" />
          <span>Recruitment Year: <span className="font-medium">{company.year || 'N/A'}</span></span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <IndianRupee className="w-5 h-5 mr-2 text-green-500" />
          <span>Package Offered: <span className="font-medium">
            {company.package ? formatRupees(company.package) : 'N/A'}
          </span></span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users className="w-5 h-5 mr-2 text-purple-500" />
          <span>Students Hired: <span className="font-medium">{company.hired || 'N/A'}</span></span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;