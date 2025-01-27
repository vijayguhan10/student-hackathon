import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className=" mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrvijYrDuBPt4kOom7hizf5YKzW9Jdofgiw&s"
              alt="Sri Eshwar"
              className="h-12"
            />
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything here..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900">
                Events
              </button>
            </div>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4">
                Streamline <span className="text-blue-600">Events</span>.<br />
                Empower <span className="text-yellow-400">Innovation</span>.
              </h1>
              <p className="text-gray-600 mb-8 max-w-xl">
                Effortlessly organize hackathons, workshops, and internships
                with our all-in-one platform. Empower students, mentors, and
                administrators to connect, collaborate, and achieve excellence.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get started now
                </button>
                <button className="px-6 py-3 text-gray-700 hover:text-gray-900">
                  Learn more
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Stats Cards */}
              <div className="absolute top-0 right-0 bg-blue-600 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-sm">Registered Events</div>
              </div>

              <div className="absolute bottom-0 left-0 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600">1000+</div>
                <div className="text-sm">Ongoing Events</div>
              </div>

              {/* Decorative Images */}
              <div className="bg-yellow-400 w-64 h-64 rounded-lg absolute top-1/4 right-1/4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Student"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-black w-64 h-64 rounded-lg absolute bottom-0 right-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Student"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-gray-600">All © copyrights received.</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Follow us:</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
