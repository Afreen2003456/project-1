import React from 'react'
import { ArrowLeft, Check, Star, Layout, Grid, Clock, MessageSquare } from 'lucide-react'

interface TemplateSelectionProps {
  onTemplateSelect: (template: 'template1' | 'template2') => void
  onCancel: () => void
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({ onTemplateSelect, onCancel }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onCancel}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio List
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Choose Your Template
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Select a professional template that best represents your style and customize it to your needs
          </p>
        </div>

        {/* Template Options */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Template 1 - Modern Yellow Theme */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Template Preview */}
            <div className="relative h-80 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-6">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-white">
                    <div className="h-3 bg-white bg-opacity-80 rounded w-24 mb-2"></div>
                    <div className="h-2 bg-white bg-opacity-60 rounded w-32"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-16 bg-white bg-opacity-20 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Template 1
                </h3>
                <div className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium">
                  Modern
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modern and clean design with yellow hero section and professional layout
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-3 h-3 mr-2 text-yellow-500" />
                    Yellow Hero Section
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Grid className="w-3 h-3 mr-2 text-yellow-500" />
                    Grid Portfolio
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MessageSquare className="w-3 h-3 mr-2 text-yellow-500" />
                    Testimonials Carousel
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Layout className="w-3 h-3 mr-2 text-yellow-500" />
                    Contact Form
                  </div>
                </div>
              </div>

              <button
                onClick={() => onTemplateSelect('template1')}
                className="w-full bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Customize This Template
              </button>
            </div>
          </div>

          {/* Template 2 - Split Screen Design */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Template Preview */}
            <div className="relative h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Left side */}
                  <div className="space-y-4">
                    <div className="h-4 bg-white bg-opacity-80 rounded w-3/4"></div>
                    <div className="h-3 bg-white bg-opacity-60 rounded w-full"></div>
                    <div className="h-3 bg-white bg-opacity-60 rounded w-5/6"></div>
                    <div className="space-y-2 mt-6">
                      <div className="h-2 bg-white bg-opacity-50 rounded w-1/2"></div>
                      <div className="h-2 bg-white bg-opacity-50 rounded w-2/3"></div>
                      <div className="h-2 bg-white bg-opacity-50 rounded w-1/3"></div>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className="space-y-3">
                    <div className="h-20 bg-white bg-opacity-20 rounded-lg"></div>
                    <div className="h-16 bg-white bg-opacity-20 rounded-lg"></div>
                    <div className="h-12 bg-white bg-opacity-20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Template 2
                </h3>
                <div className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                  Creative
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Split-screen layout with timeline skills and masonry portfolio grid
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Layout className="w-3 h-3 mr-2 text-purple-500" />
                    Split Hero Layout
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Timeline className="w-3 h-3 mr-2 text-purple-500" />
                    Timeline Skills
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Grid className="w-3 h-3 mr-2 text-purple-500" />
                    Masonry Portfolio
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Star className="w-3 h-3 mr-2 text-purple-500" />
                    Blog Section
                  </div>
                </div>
              </div>

              <button
                onClick={() => onTemplateSelect('template2')}
                className="w-full bg-purple-500 text-white hover:bg-purple-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Customize This Template
              </button>
            </div>
          </div>
        </div>

        {/* Preview Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see these templates in action?
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/portfolio/1" 
              target="_blank" 
              className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 underline"
            >
              Preview Template 1
            </a>
            <a 
              href="/portfolio/2" 
              target="_blank" 
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline"
            >
              Preview Template 2
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateSelection 