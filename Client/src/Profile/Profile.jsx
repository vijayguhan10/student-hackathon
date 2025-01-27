import React, { useState } from "react";
import {
  Star,
  MessageCircle,
  Phone,
  ArrowLeft,
  MoreHorizontal,
  Heart,
  Image,
  Video,
  Music,
  Calendar,
  Clock,
  Users,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("media");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header - Sticky on mobile, fixed on desktop */}
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>Follow</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          {/* Profile Section */}
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Vijay Guhan
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Hackathon Enthusiast
                    </span>
                    <svg
                      className="w-6 h-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mt-1">Autom Consultancy Services</p>
                <p className="mt-4 text-gray-800 text-lg">
                  Passionate about building innovative solutions and
                  collaborating with like-minded developers!
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6 sm:mt-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">projects</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xl font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-600">hackathons</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xl font-bold text-gray-900">24</div>
                    <div className="text-sm text-gray-600">Workshops</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">4.7</span>
                <span className="text-gray-600">(18 reviews)</span>
              </div>

              {/* Hackathon Info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">projects</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">8</div>
                    <div className="text-sm text-gray-600">hackathons</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24</div>
                    <div className="text-sm text-gray-600">collaborators</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Join My Team Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl py-4 mt-6 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
              Join My Team
            </button>

            {/* Media Tabs */}
            <div className="mt-8">
              <div className="flex gap-2 border-b">
                {["media", "photos", "videos", "music"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Media Grid */}
              <div className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gray-100 rounded-xl overflow-hidden group relative hover:shadow-lg transition-all duration-200"
                    >
                      <img
                        src={`https://source.unsplash.com/random/400x400/?hackathon,code,tech,${item}`}
                        alt="Media content"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Fixed on mobile, hidden on larger screens */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t sm:hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <button className="flex flex-col items-center gap-1 text-purple-600">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs">Chat</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                <span>Collaborate</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600">
                <Heart className="w-6 h-6" />
                <span className="text-xs">Follow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Actions - Fixed on right side for larger screens */}
        <div className="hidden sm:block fixed right-8 bottom-8">
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              <span>Collaborate</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
              <MessageCircle className="w-5 h-5" />
              <span>Chat Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
