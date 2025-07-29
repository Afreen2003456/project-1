import React from 'react'
import { Link } from 'react-router-dom'
import { Building, User, ChevronRight, Star, Code, Palette } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            React Developer
            <span className="text-primary-600 dark:text-primary-400"> Assignment</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of React development skills through two comprehensive tasks: 
            Property Listing Dashboard and Dynamic Portfolio Generator
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Task 1 Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <Building className="w-12 h-12 text-white mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Task 1: Property Listing</h2>
              <p className="text-blue-100">Mini Property Dashboard with advanced features</p>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Property cards with filtering</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Add new property form</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Detailed view modal</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Search & Dark mode</span>
                </div>
              </div>
              <Link
                to="/property-listing"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Property Listing
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Task 2 Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <User className="w-12 h-12 text-white mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Task 2: Portfolio Generator</h2>
              <p className="text-purple-100">Dynamic portfolio builder with templates</p>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Template selection</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Multi-section form</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Profile cards display</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Dynamic portfolio pages</span>
                </div>
              </div>
              <Link
                to="/portfolio-generator"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Try Portfolio Generator
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6">
              <Code className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                React + TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Type-safe React development with modern hooks and context
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Palette className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Beautiful, responsive design with dark mode support
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <Building className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                React Router
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Seamless navigation and routing between different views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 