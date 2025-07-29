import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioData } from '../../contexts/PortfolioContext'
import { Eye, Mail, Phone, MapPin, Edit, ExternalLink } from 'lucide-react'

interface PortfolioListProps {
  portfolios: PortfolioData[]
}

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Profile Header */}
          <div className={`relative h-32 ${
            portfolio.template === 'template1' 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
              : 'bg-gradient-to-r from-indigo-500 to-purple-500'
          }`}>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute -bottom-8 left-6">
              <img
                src={portfolio.hero.profileImage}
                alt={portfolio.hero.name}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-12 p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {portfolio.hero.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                {portfolio.hero.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {portfolio.hero.tagline}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <span className="truncate">{portfolio.about.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <span>{portfolio.about.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span>{portfolio.about.location}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {portfolio.about.bio}
            </p>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills:</h4>
              <div className="flex flex-wrap gap-1">
                {portfolio.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded-full ${
                      portfolio.template === 'template1'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
                {portfolio.skills.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    +{portfolio.skills.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link
                to={`/portfolio/${portfolio.id}`}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  portfolio.template === 'template1'
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                <Eye className="w-4 h-4" />
                View Portfolio
              </Link>
              <button
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                title="Edit Portfolio"
              >
                <Edit className="w-4 h-4" />
              </button>
              <a
                href={`/portfolio/${portfolio.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                title="Open in New Tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioList 