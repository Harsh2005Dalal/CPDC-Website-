import React, { useState, useEffect } from 'react';
import {Link} from 'react-router'
import documents from '../data/resources.json'

const PlacementDocuments = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Animate cards on mount
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = (doc) => {
    // Handle PDF download for first 4 documents
    const link = document.createElement('a');
    link.href = doc.filePath;
    link.download = `${doc.downloadName}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBulkDownload = () => {
    // Download complete package (only downloadable documents)
    const link = document.createElement('a');
    link.href = '/documents/complete-package.zip';
    link.download = 'placement-documents-complete.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🎓 Placement Cell Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access all important documents, forms, and resources for your placement journey. 
            Download individual documents or get the complete package below.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-white rounded-2xl p-6 mb-8 border-l-4 border-orange-400 shadow-lg border">
          <h3 className="text-orange-500 font-semibold text-xl mb-2">📋 Important Notice</h3>
          <p className="text-gray-700">
            Please ensure you have the latest versions of all forms and documents. 
            Check the download dates and update your files regularly for the most current information.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className={`
                bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ease-out
                hover:transform hover:scale-105 hover:shadow-xl flex flex-col h-full
                ${visibleCards.includes(doc.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${doc.isImportant 
                  ? 'border-l-4 border-red-500 bg-gradient-to-br from-white to-red-50' 
                  : 'border-l-4 border-blue-500'
                }
              `}
            >
              {/* Important Tag */}
              {doc.isImportant && (
                <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  IMPORTANT FORM
                </div>
              )}

              {/* Card Header */}
              <div className="flex items-center mb-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4
                  ${doc.isImportant ? 'bg-red-500' : 'bg-blue-500'} text-white
                `}>
                  {doc.icon}
                </div>
                <h3 className={`
                  text-xl font-semibold
                  ${doc.isImportant ? 'text-red-600' : 'text-gray-800'}
                `}>
                  {doc.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {doc.description}
              </p>

              {/* Action Button */}
              <div className="mt-auto">
                {doc.actionType === 'download' ? (
                  <button
                    onClick={() => handleDownload(doc)}
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium text-sm
                             bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                             hover:from-blue-600 hover:to-blue-700
                             transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:cursor-pointer"
                  >
                    <span className="mr-2">📄</span>
                    Download {doc.title}
                  </button>
                ) : (
                  <Link
                    to={doc.navigateUrl}
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium text-sm
                             bg-gradient-to-r from-green-500 to-green-600 text-white 
                             hover:from-green-600 hover:to-green-700
                             transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg
                             no-underline"
                  >
                    <span className="mr-2">🔗</span>
                    Access {doc.title}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Download Section */}
        <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Download All Documents</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Get all the important documents in one convenient package. 
            Perfect for offline access and complete preparation.
          </p>
          <button
            onClick={handleBulkDownload}
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 
                     text-white px-8 py-4 rounded-full font-semibold text-lg
                     hover:from-green-600 hover:to-green-700 hover:transform hover:scale-105
                     transition-all duration-300 hover:shadow-xl hover:cursor-pointer"
          >
            <span className="mr-3">📦</span>
            Download Complete Package
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            For technical support or document updates, contact the Placement Cell office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementDocuments;