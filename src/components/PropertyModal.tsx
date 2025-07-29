import React from 'react'
import { Property } from '../contexts/PropertyContext'
import { useTheme } from '../contexts/ThemeContext'

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const { isDarkMode } = useTheme()

  const formatPrice = (price: number) => {
    if (price >= 10000000) { // 1 Crore or more
      const crores = price / 10000000
      return `₹${crores.toFixed(1)} Cr`
    } else if (price >= 100000) { // 1 Lakh or more
      const lakhs = price / 100000
      return `₹${lakhs.toFixed(0)} L`
    } else {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(price)
    }
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          backgroundColor: isDarkMode ? '#1e293b' : 'white',
          borderRadius: '15px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
        >
          ×
        </button>

        {/* Property Image */}
        <div
          style={{
            height: '300px',
            backgroundImage: `url(${property.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            borderRadius: '15px 15px 0 0'
          }}
        >
          {/* Property Type Badge */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'capitalize'
          }}>
            {property.type}
          </div>

          {/* Featured Badge */}
          {property.featured && (
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              backgroundColor: '#fbbf24',
              color: '#92400e',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              ⭐ Featured Property
            </div>
          )}
        </div>

        {/* Property Details */}
        <div style={{ padding: '2rem' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: isDarkMode ? '#f1f5f9' : '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {property.name}
              </h2>
              <p style={{
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📍 {property.location}
              </p>
            </div>
            <div style={{
              textAlign: 'right',
              backgroundColor: isDarkMode ? '#334155' : '#f8fafc',
              padding: '1rem 1.5rem',
              borderRadius: '10px',
              border: isDarkMode ? '1px solid #475569' : '1px solid #e2e8f0'
            }}>
              <div style={{
                fontSize: '0.9rem',
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                marginBottom: '0.3rem'
              }}>
                Price
              </div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#667eea'
              }}>
                {formatPrice(property.price)}
              </div>
            </div>
          </div>

          {/* Property Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: isDarkMode ? '#334155' : '#f8fafc',
            borderRadius: '10px',
            border: isDarkMode ? '1px solid #475569' : '1px solid #e2e8f0'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: isDarkMode ? '#e2e8f0' : '#374151',
                marginBottom: '0.3rem'
              }}>
                {property.bedrooms}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: isDarkMode ? '#94a3b8' : '#6b7280'
              }}>
                🛏️ Bedrooms
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: isDarkMode ? '#e2e8f0' : '#374151',
                marginBottom: '0.3rem'
              }}>
                {property.bathrooms}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: isDarkMode ? '#94a3b8' : '#6b7280'
              }}>
                🚿 Bathrooms
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: isDarkMode ? '#e2e8f0' : '#374151',
                marginBottom: '0.3rem'
              }}>
                {property.sqft.toLocaleString()}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: isDarkMode ? '#94a3b8' : '#6b7280'
              }}>
                📏 Square Feet
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: isDarkMode ? '#f1f5f9' : '#1f2937',
              marginBottom: '1rem'
            }}>
              📝 Property Description
            </h3>
            <p style={{
              color: isDarkMode ? '#cbd5e1' : '#4b5563',
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              {property.description}
            </p>
          </div>

          {/* Map Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: isDarkMode ? '#f1f5f9' : '#1f2937',
              marginBottom: '1rem'
            }}>
              📍 Location & Map
            </h3>
            <div style={{
              backgroundColor: isDarkMode ? '#334155' : '#f8fafc',
              borderRadius: '10px',
              padding: '2rem',
              textAlign: 'center',
              border: isDarkMode ? '1px solid #475569' : '1px solid #e2e8f0'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🗺️
              </div>
              <p style={{
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                marginBottom: '1rem'
              }}>
                Coordinates: {property.coordinates.lat.toFixed(4)}, {property.coordinates.lng.toFixed(4)}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${property.coordinates.lat},${property.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                🌐 View on Google Maps
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📞 Contact Agent
            </button>
            
            <button
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              🏠 Schedule Visit
            </button>
            
            <button
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              ❤️ Save to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyModal 