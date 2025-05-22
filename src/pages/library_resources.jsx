import React, { useState } from 'react';
import { Download, BookOpen, Users, Briefcase, MessageSquare, Star } from 'lucide-react';
import books from '../data/library_resources.json'

const LibraryResources = () => {
  const [hoveredBook, setHoveredBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  

  const categories = ['All', 'Technical Interview', 'Management', 'Communication', 'System Design'];
  
  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  const handleDownload = async (book) => {
    try {
      // First check if the file exists
      const response = await fetch(book.pdfUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement('a');
        link.href = book.pdfUrl;
        link.download = `${book.title.replace(/[^a-zA-Z0-9\s]/g, '_')}.pdf`;
        link.target = '_blank'; // Open in new tab as fallback
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // File not found
        alert(`Sorry, the PDF for "${book.title}" is not available at the moment. Please contact the placement cell.`);
      }
    } catch (error) {
      // Network error or other issues
      console.error('Download error:', error);
      alert(`Error downloading "${book.title}". Please check your internet connection and try again.`);
    }
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
                {filteredBooks.length} Books {selectedCategory !== 'All' ? `in ${selectedCategory}` : 'Available'}
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg border-2 border-blue-600'
                    : 'bg-white text-gray-700 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {books.filter(book => book.category === category).length}
                  </span>
                )}
                {category === 'All' && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {books.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              {/* Book Cover */}
              <div className="relative aspect-[3/4] rounded-t-xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className={`absolute inset-0 ${book.coverColor} opacity-80`}></div>
                </div>
                
                {/* Content Layer */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 text-white">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full flex items-center border border-white/20">
                        {getCategoryIcon(book.category)}
                        <span className="ml-1 text-xs font-medium">{book.category}</span>
                      </span>
                      <div className="flex items-center bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1 font-medium">{book.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold leading-tight mb-2 drop-shadow-lg">{book.title}</h3>
                    <p className="text-sm font-medium mb-1 drop-shadow-md">{book.author}</p>
                    <p className="text-xs opacity-90 drop-shadow-md">{book.description}</p>
                  </div>
                  
                  {/* Bottom accent bar */}
                  <div className="w-full h-1 bg-white/30 rounded-full mt-4"></div>
                </div>
                
                {/* Download Button Overlay */}
                <div className={`absolute inset-0 z-20 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={() => handleDownload(book)}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
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
          ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">No books available in the selected category.</p>
            </div>
          )}
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