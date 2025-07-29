import React, { useState } from 'react'
import { useProperty } from '../contexts/PropertyContext'
import { useTheme } from '../contexts/ThemeContext'
import { Property } from '../contexts/PropertyContext'

interface AddPropertyFormProps {
  onClose: () => void
}

const AddPropertyForm: React.FC<AddPropertyFormProps> = ({ onClose }) => {
  const { addProperty } = useProperty()
  const { isDarkMode } = useTheme()

  const [formData, setFormData] = useState({
    name: '',
    type: 'apartment' as Property['type'],
    price: '',
    location: '',
    description: '',
    shortDescription: '',
    image: '',
    bedrooms: '2',
    bathrooms: '2',
    sqft: '',
    coordinates: {
      lat: '28.6139',
      lng: '77.2090'
    },
    featured: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const propertyTypes: Property['type'][] = ['apartment', 'villa', 'house', 'condo', 'townhouse']

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Property name is required'
    if (!formData.price) newErrors.price = 'Price is required'
    if (parseFloat(formData.price) <= 0) newErrors.price = 'Price must be greater than 0'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required'
    if (!formData.sqft) newErrors.sqft = 'Square footage is required'
    if (parseFloat(formData.sqft) <= 0) newErrors.sqft = 'Square footage must be greater than 0'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    const newProperty: Omit<Property, 'id'> = {
      name: formData.name.trim(),
      type: formData.type,
      price: parseFloat(formData.price),
      location: formData.location.trim(),
      description: formData.description.trim(),
      shortDescription: formData.shortDescription.trim(),
      image: formData.image.trim() || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      sqft: parseFloat(formData.sqft),
      coordinates: {
        lat: parseFloat(formData.coordinates.lat),
        lng: parseFloat(formData.coordinates.lng)
      },
      featured: formData.featured
    }

    addProperty(newProperty)
    onClose()
  }

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
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '2rem 2rem 1rem',
          borderBottom: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: isDarkMode ? '#f1f5f9' : '#1f2937',
            margin: 0
          }}>
            🏠 Add New Property
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              e.target.style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = isDarkMode ? '#94a3b8' : '#6b7280'
            }}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Property Name */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                🏷️ Property Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.name 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="Enter property name..."
                onFocus={(e) => !errors.name && (e.target.style.borderColor = '#667eea')}
                onBlur={(e) => !errors.name && (e.target.style.borderColor = isDarkMode ? '#374151' : '#e5e7eb')}
              />
              {errors.name && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                🏠 Property Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as Property['type'] })}
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
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                💰 Price (₹) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.price 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="e.g., 5000000"
                min="0"
              />
              {errors.price && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.price}
                </p>
              )}
            </div>

            {/* Bedrooms */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                🛏️ Bedrooms
              </label>
              <select
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
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
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num.toString()}>{num}</option>
                ))}
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                🚿 Bathrooms
              </label>
              <select
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
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
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num.toString()}>{num}</option>
                ))}
              </select>
            </div>

            {/* Square Footage */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                📏 Square Feet *
              </label>
              <input
                type="number"
                value={formData.sqft}
                onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.sqft 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="e.g., 1200"
                min="0"
              />
              {errors.sqft && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.sqft}
                </p>
              )}
            </div>

            {/* Location */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                📍 Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.location 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="e.g., Bandra West, Mumbai, Maharashtra"
              />
              {errors.location && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.location}
                </p>
              )}
            </div>

            {/* Short Description */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                📝 Short Description *
              </label>
              <input
                type="text"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.shortDescription 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="Brief description for property card..."
                maxLength={100}
              />
              {errors.shortDescription && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.shortDescription}
                </p>
              )}
            </div>

            {/* Full Description */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                📄 Full Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: errors.description 
                    ? '2px solid #ef4444' 
                    : isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="Detailed description of the property..."
              />
              {errors.description && (
                <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                  {errors.description}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                🖼️ Image URL (Optional)
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#374151' : 'white',
                  color: isDarkMode ? '#f1f5f9' : '#1f2937',
                  fontSize: '1rem'
                }}
                placeholder="https://example.com/property-image.jpg"
              />
              <p style={{
                fontSize: '0.8rem',
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                marginTop: '0.3rem'
              }}>
                Leave empty for default image
              </p>
            </div>

            {/* Featured Checkbox */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
                color: isDarkMode ? '#cbd5e1' : '#374151'
              }}>
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                  }}
                />
                ⭐ Mark as Featured Property
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                border: isDarkMode ? '2px solid #374151' : '2px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
                e.target.style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = isDarkMode ? '#94a3b8' : '#6b7280'
              }}
            >
              Cancel
            </button>
            
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.75rem 2rem',
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
              🏠 Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPropertyForm 