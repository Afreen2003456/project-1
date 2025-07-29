import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Navbar: React.FC = () => {
  const location = useLocation()
  const { isDarkMode, toggleDarkMode } = useTheme()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)' 
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      padding: '1rem 2rem',
      boxShadow: isDarkMode 
        ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
        : '0 8px 32px rgba(102, 126, 234, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
      border: isDarkMode 
        ? '1px solid rgba(255, 255, 255, 0.1)' 
        : '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0 0 16px 16px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link 
          to="/" 
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
            e.target.style.background = 'rgba(255, 255, 255, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
            e.target.style.background = 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <span className="floating">✨</span>
          <span className="animated-gradient-text" style={{
            background: 'linear-gradient(-45deg, #ffffff, #e2e8f0, #cbd5e1, #94a3b8)',
            backgroundSize: '400% 400%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            React Dev Assignment
          </span>
        </Link>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.5rem',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              background: isActive('/') 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)' 
                : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              fontSize: '0.9rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isActive('/') ? '0 4px 15px rgba(255, 255, 255, 0.1)' : 'none',
              border: isActive('/') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/')) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/')) {
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
          >
            🏠 Home
          </Link>
          
          <Link
            to="/property-listing"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              background: isActive('/property-listing') 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)' 
                : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              fontSize: '0.9rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isActive('/property-listing') ? '0 4px 15px rgba(255, 255, 255, 0.1)' : 'none',
              border: isActive('/property-listing') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/property-listing')) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/property-listing')) {
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
          >
            🏢 Properties
          </Link>
          
          <Link
            to="/templates"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              background: isActive('/templates') 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)' 
                : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              fontSize: '0.9rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isActive('/templates') ? '0 4px 15px rgba(255, 255, 255, 0.1)' : 'none',
              border: isActive('/templates') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/templates')) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/templates')) {
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
          >
            🎨 Templates
          </Link>

          <Link
            to="/builder"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              background: isActive('/builder') 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)' 
                : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              fontSize: '0.9rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isActive('/builder') ? '0 4px 15px rgba(255, 255, 255, 0.1)' : 'none',
              border: isActive('/builder') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/builder')) {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/builder')) {
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
          >
            🛠️ Builder
          </Link>

          <Link
            to="/preview"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              background: isActive('/preview') 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)' 
                : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              border: '2px solid rgba(255,255,255,0.4)',
              fontSize: '0.9rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isActive('/preview') 
                ? '0 6px 20px rgba(255, 255, 255, 0.2)' 
                : '0 4px 15px rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)'
              e.target.style.transform = 'translateY(-1px) scale(1.05)'
              e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              if (!isActive('/preview')) {
                e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'
              }
              e.target.style.transform = 'translateY(0) scale(1)'
            }}
          >
            👁️ Preview
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            style={{
              padding: '0.6rem',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)'
              e.target.style.transform = 'translateY(-2px) rotate(180deg)'
              e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
              e.target.style.transform = 'translateY(0) rotate(0deg)'
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="floating" style={{ animationDelay: '1s' }}>
              {isDarkMode ? '☀️' : '🌙'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 