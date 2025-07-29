import React from 'react'
import { Property } from '../contexts/PropertyContext'
import { useTheme } from '../contexts/ThemeContext'

interface PropertyCardProps {
  property: Property
  onViewDetails: (property: Property) => void
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const { isDarkMode } = useTheme()

  const formatPrice = (price: number) => {
    // Format price in Indian Rupees with Lakh/Crore notation
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

  return (
    <div
      className="glass card-hover"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
        position: 'relative',
        background: isDarkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: isDarkMode 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
        e.currentTarget.style.boxShadow = isDarkMode 
          ? '0 25px 50px rgba(0, 0, 0, 0.4)' 
          : '0 25px 50px rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = isDarkMode 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Property Image */}
      <div style={{
        position: 'relative',
        height: '240px',
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%), url(${property.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}>
        {/* Animated overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} 
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0'}
        />

        {/* Featured Badge */}
        {property.featured && (
          <div className="floating" style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            color: '#92400e',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            animationDelay: '0.5s'
          }}>
            <span style={{ fontSize: '1rem' }}>⭐</span> Featured
          </div>
        )}

        {/* Property Type Badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          padding: '0.6rem 1rem',
          borderRadius: '25px',
          fontSize: '0.8rem',
          fontWeight: '600',
          textTransform: 'capitalize',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
        }}>
          🏠 {property.type}
        </div>

        {/* Price Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
          color: 'white',
          padding: '3rem 1.5rem 1.5rem',
          textAlign: 'left'
        }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}>
            {formatPrice(property.price)}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div style={{ padding: '2rem 1.5rem' }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          marginBottom: '0.8rem',
          color: isDarkMode ? '#f1f5f9' : '#1f2937',
          lineHeight: '1.3'
        }}>
          {property.name}
        </h3>

        <p style={{
          color: isDarkMode ? '#94a3b8' : '#6b7280',
          fontSize: '1rem',
          marginBottom: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: '500'
        }}>
          <span style={{ 
            fontSize: '1.2rem',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}>📍</span> 
          {property.location}
        </p>

        <p style={{
          color: isDarkMode ? '#cbd5e1' : '#4b5563',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          fontSize: '0.95rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {property.shortDescription}
        </p>

        {/* Property Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '2rem',
          padding: '1.2rem',
          background: isDarkMode 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
            : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
          borderRadius: '15px',
          border: isDarkMode 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(102, 126, 234, 0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: isDarkMode ? '#e2e8f0' : '#374151',
              marginBottom: '0.3rem'
            }}>
              {property.bedrooms}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ fontSize: '1rem' }}>🛏️</span> Beds
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: isDarkMode ? '#e2e8f0' : '#374151',
              marginBottom: '0.3rem'
            }}>
              {property.bathrooms}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ fontSize: '1rem' }}>🚿</span> Baths
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: isDarkMode ? '#e2e8f0' : '#374151',
              marginBottom: '0.3rem'
            }}>
              {property.sqft.toLocaleString()}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ fontSize: '1rem' }}>📏</span> Sq Ft
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(property)}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1rem 1.5rem',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px) scale(1.02)'
            e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)'
            e.target.style.background = 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)'
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)'
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <span style={{ 
            fontSize: '1.3rem',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}>👁️</span>
          View Details
          
          {/* Button shine effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.6s ease'
          }} />
        </button>
      </div>

      {/* Card border glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
        zIndex: -1
      }} />
    </div>
  )
}

export default PropertyCard 