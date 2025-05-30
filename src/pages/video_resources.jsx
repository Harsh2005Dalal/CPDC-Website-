import React, { useState, useEffect } from 'react';
import { Play, Clock, User, Eye, Filter, ArrowRight, PlayCircle } from 'lucide-react';

const VideoResources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load videos data
  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Try to import the JSON file
        const videosModule = await import('../data/video_resources.json');
        setVideos(videosModule.default || videosModule);
        setLoading(false);
      } catch (err) {
        console.error('Error loading videos:', err);
        // Fallback to sample data if JSON file is not found
        const sampleVideos = [
          {
            id: 1,
            title: "System Design Interview Preparation",
            description: "Complete guide to system design interviews with real-world examples",
            instructor: "John Doe",
            duration: "45:30",
            views: "12.5K",
            category: "System Design",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=sample1"
          },
          {
            id: 2,
            title: "Technical Interview Deep Dive",
            description: "Advanced algorithms and data structures for technical interviews",
            instructor: "Jane Smith",
            duration: "62:15",
            views: "8.3K",
            category: "Technical Interview",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=sample2"
          },
          {
            id: 3,
            title: "Leadership and Management Skills",
            description: "Essential management techniques for tech leaders",
            instructor: "Mike Johnson",
            duration: "38:45",
            views: "15.7K",
            category: "Management",
            thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=sample3"
          },
          {
            id: 4,
            title: "Effective Communication in Tech",
            description: "Master communication skills for technical professionals",
            instructor: "Sarah Wilson",
            duration: "29:20",
            views: "6.9K",
            category: "Communication",
            thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=225&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=sample4"
          }
        ];
        setVideos(sampleVideos);
        setError("Using sample data - please check video_resources.json file");
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const categories = ['All', 'Technical Interview', 'System Design', 'Management', 'Communication'];
  
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (video) => {
    window.open(video.videoUrl, '_blank');
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Technical Interview': return 'bg-blue-100 text-blue-700';
      case 'System Design': return 'bg-green-100 text-green-700';
      case 'Management': return 'bg-purple-100 text-purple-700';
      case 'Communication': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Error message */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 mb-4">
          <p className="text-yellow-800 text-sm">{error}</p>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-3">
              Video Resources
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Curated video lectures for placement preparation and professional development
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <PlayCircle className="w-4 h-4 mr-2" />
                {filteredVideos.length} Videos
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Expert Instructors
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Categories */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-700">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span>{video.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{video.views}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Click to watch</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <PlayCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No videos found</h3>
            <p className="text-gray-500">No videos available in the selected category.</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              How to Access Videos
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Filter className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Filter Videos</h4>
                <p className="text-sm text-gray-600">Browse by category to find relevant content</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Watch Videos</h4>
                <p className="text-sm text-gray-600">Click on any video to start learning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Learn from Experts</h4>
                <p className="text-sm text-gray-600">All content from industry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResources;