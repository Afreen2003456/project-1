import React from 'react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../contexts/PortfolioContext'

interface Template {
  id: string
  name: string
  description: string
  preview: string
  features: string[]
  color: string
}

const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean, minimalist design perfect for developers and designers',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    features: ['Clean Layout', 'Dark Mode', 'Animated Sections', 'Mobile First'],
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'creative',
    name: 'Creative Showcase',
    description: 'Bold and colorful design for creative professionals',
    preview: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=300&fit=crop',
    features: ['Bold Colors', 'Portfolio Grid', 'Hover Effects', 'Typography Focus'],
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    id: 'minimal',
    name: 'Minimal Elegance',
    description: 'Simple and elegant design focusing on content',
    preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    features: ['Typography', 'White Space', 'Subtle Animations', 'Content Focus'],
    color: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  },
  {
    id: 'corporate',
    name: 'Corporate Professional',
    description: 'Professional design suitable for business and consulting',
    preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    features: ['Professional', 'Trust Building', 'Service Focus', 'Contact Forms'],
    color: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)'
  },
  {
    id: 'tech',
    name: 'Tech Innovator',
    description: 'Modern tech-focused design with futuristic elements',
    preview: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    features: ['Tech Theme', 'Code Snippets', 'GitHub Integration', 'Dark UI'],
    color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  },
  {
    id: 'artistic',
    name: 'Artistic Portfolio',
    description: 'Perfect for artists, photographers, and creative professionals',
    preview: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    features: ['Image Gallery', 'Lightbox', 'Artistic Layout', 'Visual Focus'],
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
]

const TemplateSelector: React.FC = () => {
  const { portfolioData, setSelectedTemplate } = usePortfolio()

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            Choose Your Template
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Select a professional template that matches your style and industry. 
            You can customize everything later!
          </p>

          {portfolioData.selectedTemplate && (
            <div style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              borderRadius: '20px',
              display: 'inline-block'
            }}>
              ✅ Selected: {templates.find(t => t.id === portfolioData.selectedTemplate)?.name}
            </div>
          )}
        </div>

        {/* Templates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {templates.map((template) => (
            <div
              key={template.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: portfolioData.selectedTemplate === template.id 
                  ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
                  : '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: portfolioData.selectedTemplate === template.id 
                  ? '3px solid #667eea' 
                  : '3px solid transparent',
                cursor: 'pointer'
              }}
              onClick={() => handleTemplateSelect(template.id)}
              onMouseEnter={(e) => {
                if (portfolioData.selectedTemplate !== template.id) {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'
                }
              }}
              onMouseLeave={(e) => {
                if (portfolioData.selectedTemplate !== template.id) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'
                }
              }}
            >
              {/* Template Preview */}
              <div style={{
                height: '200px',
                background: template.color,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={template.preview}
                  alt={template.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {template.name}
                </div>
                
                {portfolioData.selectedTemplate === template.id && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}>
                    ✓
                  </div>
                )}
              </div>

              {/* Template Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}>
                  {template.name}
                </h3>
                
                <p style={{
                  color: '#666',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {template.description}
                </p>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {template.features.map((feature, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: '#f0f0f0',
                        color: '#666',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: portfolioData.selectedTemplate === template.id ? '#4caf50' : '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'backgroundColor 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleTemplateSelect(template.id)
                  }}
                >
                  {portfolioData.selectedTemplate === template.id ? '✓ Selected' : 'Select Template'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {portfolioData.selectedTemplate && (
          <div style={{
            textAlign: 'center',
            padding: '2rem'
          }}>
            <Link
              to="/builder"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              🛠️ Customize Your Portfolio
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default TemplateSelector 