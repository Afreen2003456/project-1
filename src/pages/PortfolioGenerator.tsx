import React, { useState } from 'react'
import { usePortfolio } from '../contexts/PortfolioContext'
import TemplateSelection from '../components/portfolio/TemplateSelection'
import PortfolioForm from '../components/portfolio/PortfolioForm'
import PortfolioList from '../components/portfolio/PortfolioList'
import { User, Search, Filter, Plus } from 'lucide-react'

type ViewMode = 'list' | 'template-selection' | 'form'

const PortfolioGenerator: React.FC = () => {
  const { 
    filteredPortfolios, 
    searchTerm, 
    setSearchTerm, 
    skillFilter, 
    setSkillFilter,
    portfolios 
  } = usePortfolio()
  
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [selectedTemplate, setSelectedTemplate] = useState<'template1' | 'template2' | null>(null)

  const handleCreateNew = () => {
    setViewMode('template-selection')
  }

  const handleTemplateSelect = (template: 'template1' | 'template2') => {
    setSelectedTemplate(template)
    setViewMode('form')
  }

  const handleFormComplete = () => {
    setViewMode('list')
    setSelectedTemplate(null)
  }

  const handleCancel = () => {
    setViewMode('list')
    setSelectedTemplate(null)
  }

  // Get all unique skills for filter
  const allSkills = Array.from(
    new Set(portfolios.flatMap(p => p.skills))
  ).sort()

  if (viewMode === 'template-selection') {
    return (
      <TemplateSelection 
        onTemplateSelect={handleTemplateSelect}
        onCancel={handleCancel}
      />
    )
  }

  if (viewMode === 'form' && selectedTemplate) {
    return (
      <PortfolioForm 
        template={selectedTemplate}
        onComplete={handleFormComplete}
        onCancel={handleCancel}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Portfolio Generator
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Create and manage professional portfolios with custom templates
              </p>
            </div>
            <button
              onClick={handleCreateNew}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Portfolio
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search portfolios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10 w-full"
                />
              </div>
              
              {/* Skill Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                  className="input pl-10 pr-8 min-w-[150px]"
                >
                  <option value="all">All Skills</option>
                  {allSkills.map(skill => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredPortfolios.length} portfolios
            {searchTerm && ` for "${searchTerm}"`}
            {skillFilter !== 'all' && ` with skill "${skillFilter}"`}
          </p>
        </div>

        {/* Portfolio List */}
        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No portfolios found</h3>
              <p className="mb-6">
                {portfolios.length === 0 
                  ? "Get started by creating your first portfolio" 
                  : "Try adjusting your search criteria or create a new portfolio"
                }
              </p>
              <button
                onClick={handleCreateNew}
                className="btn-primary"
              >
                Create Your First Portfolio
              </button>
            </div>
          </div>
        ) : (
          <PortfolioList portfolios={filteredPortfolios} />
        )}
      </div>
    </div>
  )
}

export default PortfolioGenerator 