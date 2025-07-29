import React, { useState } from 'react'
import { useProperty } from '../contexts/PropertyContext'
import { useTheme } from '../contexts/ThemeContext'
import PropertyCard from '../components/PropertyCard'
import PropertyModal from '../components/PropertyModal'
import AddPropertyForm from '../components/AddPropertyForm'

const PropertyListing: React.FC = () => {
  const { 
    filteredProperties, 
    searchTerm, 
    setSearchTerm, 
    typeFilter, 
    setTypeFilter, 
    priceRange, 
    setPriceRange,
    selectedProperty,
    setSelectedProperty 
  } = useProperty()
  
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [showAddForm, setShowAddForm] = useState(false)

  const propertyTypes = ['all', 'apartment', 'villa', 'house', 'condo', 'townhouse']

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

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
      color: isDarkMode ? '#e2e8f0' : '#1e293b',
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: isDarkMode ? '#1e293b' : 'white',
        padding: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderBottom: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              Property Listing Dashboard
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: isDarkMode ? '#94a3b8' : '#64748b',
              margin: '0.5rem 0 0'
            }}>
              Discover your perfect property in India's top cities
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                padding: '0.75rem',
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                color: isDarkMode ? '#f9fafb' : '#374151',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
              }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Add Property Button */}
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.75rem 1.5rem',
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
              + Add Property
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div style={{
        backgroundColor: isDarkMode ? '#1e293b' : 'white',
        padding: '1.5rem 2rem',
        borderBottom: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          alignItems: 'end'
        }}>
          {/* Search Bar */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: isDarkMode ? '#cbd5e1' : '#374151'
            }}>
              🔍 Search Properties
            </label>
            <input
              type="text"
              placeholder="Search by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: isDarkMode ? '#374151' : 'white',
                color: isDarkMode ? '#f1f5f9' : '#1f2937',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = isDarkMode ? '#374151' : '#e5e7eb'}
            />
          </div>

          {/* Property Type Filter */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: isDarkMode ? '#cbd5e1' : '#374151'
            }}>
              🏠 Property Type
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: isDarkMode ? '#374151' : 'white',
                color: isDarkMode ? '#f1f5f9' : '#1f2937',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: isDarkMode ? '#cbd5e1' : '#374151'
            }}>
              💰 Price Range: {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="range"
                min="0"
                max="50000000"
                step="1000000"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                style={{ flex: 1 }}
              />
              <input
                type="range"
                min="0"
                max="50000000"
                step="1000000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                style={{ flex: 1 }}
              />
            </div>
          </div>

          {/* Results Count */}
          <div style={{
            textAlign: 'center',
            padding: '0.75rem',
            backgroundColor: isDarkMode ? '#334155' : '#f1f5f9',
            borderRadius: '8px',
            border: isDarkMode ? '1px solid #475569' : '1px solid #cbd5e1'
          }}>
            <span style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: isDarkMode ? '#e2e8f0' : '#475569'
            }}>
              📊 {filteredProperties.length} Properties Found
            </span>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {filteredProperties.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: isDarkMode ? '#1e293b' : 'white',
            borderRadius: '15px',
            border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏠</div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: isDarkMode ? '#cbd5e1' : '#374151'
            }}>
              No Properties Found
            </h3>
            <p style={{
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginBottom: '2rem'
            }}>
              Try adjusting your search criteria or add a new property.
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Add Your First Property
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={(property) => setSelectedProperty(property)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Add Property Form */}
      {showAddForm && (
        <AddPropertyForm onClose={() => setShowAddForm(false)} />
      )}
    </div>
  )
}

export default PropertyListing 