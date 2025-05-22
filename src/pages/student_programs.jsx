import React, { useState } from 'react';
import { Download, BookOpen, Users, Briefcase, MessageSquare, Star } from 'lucide-react';

const LibraryResources = () => {
  const [hoveredBook, setHoveredBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      category: "Technical Interview",
      rating: 4.8,
      description: "189 Programming Questions and Solutions",
      coverColor: "bg-gradient-to-br from-blue-600 to-purple-700",
      pdfUrl: "/pdfs/cracking-coding-interview.pdf"
    },
    {
      id: 2,
      title: "Elements of Programming Interviews",
      author: "Adnan Aziz, Tsung-Hsien Lee",
      category: "Technical Interview",
      rating: 4.7,
      description: "The Insiders' Guide to Programming Interviews",
      coverColor: "bg-gradient-to-br from-green-600 to-teal-700",
      pdfUrl: "/pdfs/elements-programming-interviews.pdf"
    },
    {
      id: 3,
      title: "System Design Interview",
      author: "Alex Xu",
      category: "System Design",
      rating: 4.9,
      description: "An Insider's Guide to System Design",
      coverColor: "bg-gradient-to-br from-orange-600 to-red-700",
      pdfUrl: "/pdfs/system-design-interview.pdf"
    },
    {
      id: 4,
      title: "The Complete Guide to Professional Communication",
      author: "Barbara G. Cox",
      category: "Communication",
      rating: 4.6,
      description: "Master Workplace Communication Skills",
      coverColor: "bg-gradient-to-br from-indigo-600 to-blue-700",
      pdfUrl: "/pdfs/professional-communication.pdf"
    },
    {
      id: 5,
      title: "Leadership in Organizations",
      author: "Gary Yukl",
      category: "Management",
      rating: 4.5,
      description: "Effective Leadership and Management Strategies",
      coverColor: "bg-gradient-to-br from-purple-600 to-pink-700",
      pdfUrl: "/pdfs/leadership-organizations.pdf"
    },
    {
      id: 6,
      title: "Data Structures and Algorithms Made Easy",
      author: "Narasimha Karumanchi",
      category: "Technical Interview",
      rating: 4.7,
      description: "Complete DSA Guide for Placements",
      coverColor: "bg-gradient-to-br from-cyan-600 to-blue-700",
      pdfUrl: "/pdfs/dsa-made-easy.pdf"
    },
    {
      id: 7,
      title: "Effective Team Management",
      author: "John Adair",
      category: "Management",
      rating: 4.4,
      description: "Building High-Performance Teams",
      coverColor: "bg-gradient-to-br from-emerald-600 to-green-700",
      pdfUrl: "/pdfs/effective-team-management.pdf"
    },
    {
      id: 8,
      title: "Business Communication Essentials",
      author: "Courtland Bovee, John Thill",
      category: "Communication",
      rating: 4.6,
      description: "Professional Communication in Digital Age",
      coverColor: "bg-gradient-to-br from-rose-600 to-pink-700",
      pdfUrl: "/pdfs/business-communication.pdf"
    }
  ];

  const handleDownload = (book) => {
    const link = document.createElement('a');
    link.href = book.pdfUrl;
    link.download = `${book.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Technical Interview': return <Briefcase className="w-4 h-4" />;
      case 'Management': return <Users className="w-4 h-4" />;
      case 'Communication': return <MessageSquare className="w-4 h-4" />;
      case 'System Design': return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Library Resources
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Placement Cell - Professional Development Collection
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                {books.length} Books Available
              </span>
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Free PDF Downloads
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Technical Interview', 'Management', 'Communication', 'System Design'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-700 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              {/* Book Cover */}
              <div className="relative aspect-[3/4] rounded-t-xl overflow-hidden">
                <div className={`w-full h-full ${book.coverColor} flex flex-col justify-between p-4 text-white`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center">
                        {getCategoryIcon(book.category)}
                        <span className="ml-1 text-xs">{book.category}</span>
                      </span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1">{book.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold leading-tight mb-2">{book.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{book.author}</p>
                    <p className="text-xs opacity-75">{book.description}</p>
                  </div>
                  
                  {/* Download Button Overlay */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button
                      onClick={() => handleDownload(book)}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    {getCategoryIcon(book.category)}
                    <span className="ml-1">{book.category}</span>
                  </span>
                  <button
                    onClick={() => handleDownload(book)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How to Use This Library
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Browse Books</h4>
                <p className="text-sm text-gray-600">Explore our curated collection of placement preparation books</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Download PDFs</h4>
                <p className="text-sm text-gray-600">Click on any book cover to download the PDF instantly</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Start Learning</h4>
                <p className="text-sm text-gray-600">Use these resources to ace your interviews and placements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryResources;