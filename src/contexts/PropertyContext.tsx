import React, { createContext, useContext, useState, ReactNode } from 'react'

// Property data types
export interface Property {
  id: string
  name: string
  type: 'apartment' | 'villa' | 'house' | 'condo' | 'townhouse'
  price: number
  location: string
  description: string
  shortDescription: string
  image: string
  bedrooms: number
  bathrooms: number
  sqft: number
  coordinates: { lat: number; lng: number }
  featured?: boolean
}

interface PropertyContextType {
  properties: Property[]
  addProperty: (property: Omit<Property, 'id'>) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  typeFilter: 'all' | Property['type']
  setTypeFilter: (type: 'all' | Property['type']) => void
  priceRange: { min: number; max: number }
  setPriceRange: (range: { min: number; max: number }) => void
  filteredProperties: Property[]
  selectedProperty: Property | null
  setSelectedProperty: (property: Property | null) => void
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

// Mock API data - Indian Properties
const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Luxury Sea View Apartment',
    type: 'apartment',
    price: 15000000, // ₹1.5 Crore
    location: 'Marine Drive, Mumbai, Maharashtra',
    description: 'Premium 3BHK apartment with stunning Arabian Sea views from every room. Located in the heart of South Mumbai with easy access to business districts, shopping centers, and fine dining restaurants. This luxurious property features marble flooring, modular kitchen, and premium fixtures throughout.',
    shortDescription: 'Luxury apartment with sea views in Mumbai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    coordinates: { lat: 18.9220, lng: 72.8347 },
    featured: true
  },
  {
    id: '2',
    name: 'Modern Villa with Garden',
    type: 'villa',
    price: 25000000, // ₹2.5 Crore
    location: 'Whitefield, Bangalore, Karnataka',
    description: 'Spacious 4BHK villa in premium gated community with landscaped garden, swimming pool, and modern amenities. Perfect for IT professionals with close proximity to tech parks. Features include home automation, solar panels, and rainwater harvesting.',
    shortDescription: 'Modern villa in Bangalore tech hub',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    coordinates: { lat: 12.9698, lng: 77.7500 },
    featured: true
  },
  {
    id: '3',
    name: 'Heritage Haveli Style House',
    type: 'house',
    price: 8500000, // ₹85 Lakh
    location: 'Civil Lines, Delhi',
    description: 'Beautiful heritage-style house with traditional architecture, courtyards, and modern amenities. Located in prestigious Civil Lines area with excellent connectivity to Central Delhi. Features traditional jali work and modern interiors.',
    shortDescription: 'Heritage house in prime Delhi location',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    coordinates: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: '4',
    name: 'IT Park Premium Condo',
    type: 'condo',
    price: 6500000, // ₹65 Lakh
    location: 'Hitech City, Hyderabad, Telangana',
    description: 'Ultra-modern 2BHK condo in Hitech City with smart home features, gym, swimming pool, and 24/7 security. Walking distance to major IT companies like Microsoft and Google. Perfect for young professionals.',
    shortDescription: 'Smart condo near IT companies',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    coordinates: { lat: 17.4485, lng: 78.3908 }
  },
  {
    id: '5',
    name: 'Riverside Luxury Townhouse',
    type: 'townhouse',
    price: 12000000, // ₹1.2 Crore
    location: 'Koregaon Park, Pune, Maharashtra',
    description: 'Elegant 3BHK townhouse overlooking Mula River with private terrace, parking, and club house access. Located in expat-friendly Koregaon Park with international schools nearby. Features river views and private garden.',
    shortDescription: 'Riverside townhouse in Pune',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    coordinates: { lat: 18.5362, lng: 73.8947 }
  },
  {
    id: '6',
    name: 'Penthouse with City Views',
    type: 'apartment',
    price: 35000000, // ₹3.5 Crore
    location: 'Golf Course Road, Gurgaon, Haryana',
    description: 'Exclusive penthouse with 360-degree city views, private lift, terrace garden, and premium fittings. Located on Golf Course Road with easy access to Cyber City and IGI Airport. Ultimate luxury living experience.',
    shortDescription: 'Luxury penthouse in Gurgaon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4500,
    coordinates: { lat: 28.4595, lng: 77.0266 },
    featured: true
  },
  {
    id: '7',
    name: 'Beach Side Villa',
    type: 'villa',
    price: 18000000, // ₹1.8 Crore
    location: 'Candolim, Goa',
    description: 'Stunning beach-side villa just 200 meters from Candolim beach. Features 3 bedrooms, private pool, garden, and traditional Goan architecture with modern amenities. Perfect vacation home or rental investment.',
    shortDescription: 'Beach villa in Goa paradise',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500&h=300&fit=crop',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    coordinates: { lat: 15.5146, lng: 73.7610 }
  },
  {
    id: '8',
    name: 'Tech City Smart Apartment',
    type: 'apartment',
    price: 9500000, // ₹95 Lakh
    location: 'Electronic City, Bangalore, Karnataka',
    description: 'Smart 2BHK apartment with IoT integration, energy-efficient systems, and premium amenities. Perfect for tech professionals working in Electronic City with excellent public transport connectivity.',
    shortDescription: 'Smart apartment in tech hub',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    coordinates: { lat: 12.8456, lng: 77.6603 }
  }
]

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(mockProperties)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<'all' | Property['type']>('all')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000000 })
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const addProperty = (newProperty: Omit<Property, 'id'>) => {
    const property: Property = {
      ...newProperty,
      id: Date.now().toString(),
    }
    setProperties(prev => [...prev, property])
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchTerm === '' || 
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = typeFilter === 'all' || property.type === typeFilter
    const matchesPrice = property.price >= priceRange.min && property.price <= priceRange.max
    
    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <PropertyContext.Provider value={{
      properties,
      addProperty,
      searchTerm,
      setSearchTerm,
      typeFilter,
      setTypeFilter,
      priceRange,
      setPriceRange,
      filteredProperties,
      selectedProperty,
      setSelectedProperty
    }}>
      {children}
    </PropertyContext.Provider>
  )
}

export const useProperty = () => {
  const context = useContext(PropertyContext)
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider')
  }
  return context
} 