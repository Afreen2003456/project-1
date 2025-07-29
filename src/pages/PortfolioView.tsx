import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { usePortfolio } from '../contexts/PortfolioContext'
import Template1 from '../components/portfolio/templates/Template1'
import Template2 from '../components/portfolio/templates/Template2'

const PortfolioView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { getPortfolio } = usePortfolio()

  if (!id) {
    return <Navigate to="/portfolio-generator" replace />
  }

  const portfolio = getPortfolio(id)

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/portfolio-generator"
            className="btn-primary"
          >
            Back to Portfolio Generator
          </a>
        </div>
      </div>
    )
  }

  // Render the appropriate template
  if (portfolio.template === 'template1') {
    return <Template1 data={portfolio} />
  } else if (portfolio.template === 'template2') {
    return <Template2 data={portfolio} />
  }

  return <Navigate to="/portfolio-generator" replace />
}

export default PortfolioView 