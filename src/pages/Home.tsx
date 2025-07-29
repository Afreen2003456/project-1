import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Home: React.FC = () => {
  const { isDarkMode } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkMode 
        ? 'radial-gradient(ellipse at top, rgba(15, 23, 42, 1) 0%, rgba(2, 6, 23, 1) 100%)' 
        : 'radial-gradient(ellipse at top, rgba(245, 247, 250, 1) 0%, rgba(195, 207, 226, 1) 100%)',
      color: isDarkMode ? '#e2e8f0' : '#1e293b',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDarkMode 
          ? 'radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }} className="animate-fade-in">
        <div className="floating" style={{ animationDelay: '0.5s' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            <span className="animated-gradient-text">
              React Developer
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Assignment
            </span>
          </h1>
        </div>
        
        <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            color: isDarkMode ? '#94a3b8' : '#666',
            marginBottom: '1rem',
            maxWidth: '800px',
            margin: '0 auto 1rem',
            fontWeight: '500'
          }}>
            ✨ Complete React + TypeScript application showcasing two powerful tools
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: isDarkMode ? '#cbd5e1' : '#374151',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              padding: '0.2rem 0.8rem',
              borderRadius: '20px',
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginRight: '0.5rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}>
              🏢 Task 1
            </span>
            <strong>Property Listing Dashboard</strong> with advanced search & management
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '0.2rem 0.8rem',
              borderRadius: '20px',
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginRight: '0.5rem',
              marginTop: '0.5rem',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}>
              ✨ Task 2
            </span>
            <strong>Portfolio Generator</strong> with multiple templates & real-time preview
          </p>
        </div>

                 <div 
           className="animate-slide-in-up" 
           style={{
             display: 'flex',
             gap: '1.5rem',
             justifyContent: 'center',
             flexWrap: 'wrap',
             marginBottom: '4rem',
             animationDelay: '0.6s'
           }}>
          <Link
            to="/property-listing"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
            className="card-hover"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.transform = 'translateY(-4px) scale(1.05)'
              target.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.5)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.transform = 'translateY(0) scale(1)'
              target.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.4)'
            }}
          >
            <span style={{ marginRight: '0.5rem', fontSize: '1.3rem' }}>🏢</span>
            Property Dashboard
          </Link>

          <Link
            to="/templates"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
            className="card-hover"
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.transform = 'translateY(-4px) scale(1.05)'
              target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement
              target.style.transform = 'translateY(0) scale(1)'
              target.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.4)'
            }}
          >
            <span style={{ marginRight: '0.5rem', fontSize: '1.3rem' }}>🎨</span>
            Portfolio Generator
          </Link>
        </div>
      </section>

      {/* Task Cards Section */}
      <section style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '2rem'
        }}>
          {/* Task 1: Property Listing */}
          <div 
            className="glass card-hover animate-slide-in-left"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '24px 24px 50% 50%',
              opacity: 0.1,
              zIndex: -1
            }} />

            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="floating" style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                🏢
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'white', 
                margin: 0,
                fontWeight: '700',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                Task 1: Property Listing
              </h3>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white'
              }}>
                ✅ Complete
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1.5rem',
                color: isDarkMode ? '#f1f5f9' : '#1f2937',
                fontWeight: '600'
              }}>
                ✨ Advanced Features:
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { icon: '🔍', text: 'Smart Search & Filters' },
                  { icon: '🏠', text: 'Interactive Property Cards' },
                  { icon: '➕', text: 'Add Properties Form' },
                  { icon: '👁️', text: 'Detailed View Modal' },
                  { icon: '🌙', text: 'Dark Mode Support' },
                  { icon: '💰', text: 'Indian Currency (₹)' }
                ].map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.8rem',
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 185, 129, 0.05)',
                    borderRadius: '12px',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(16, 185, 129, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(16, 185, 129, 0.1)'
                    target.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(16, 185, 129, 0.05)'
                    target.style.transform = 'translateX(0)'
                  }}
                  >
                    <span style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                      {feature.icon}
                    </span>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '500',
                      color: isDarkMode ? '#cbd5e1' : '#4b5563'
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/property-listing"
              style={{
                display: 'block',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = 'translateY(-3px) scale(1.02)'
                target.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = 'translateY(0) scale(1)'
                target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>🚀</span>
              Launch Property Dashboard
            </Link>
          </div>

          {/* Task 2: Portfolio Generator */}
          <div 
            className="glass card-hover animate-slide-in-right"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              position: 'relative',
              overflow: 'hidden',
              animationDelay: '0.2s'
            }}
          >
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '24px 24px 50% 50%',
              opacity: 0.1,
              zIndex: -1
            }} />

            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="floating" style={{ 
                fontSize: '4rem', 
                marginBottom: '1rem',
                animationDelay: '0.5s',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                ✨
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'white', 
                margin: 0,
                fontWeight: '700',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                Task 2: Portfolio Generator
              </h3>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white'
              }}>
                ✅ Complete
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1.5rem',
                color: isDarkMode ? '#f1f5f9' : '#1f2937',
                fontWeight: '600'
              }}>
                🎨 Powerful Features:
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { icon: '🎨', text: '6 Professional Templates' },
                  { icon: '🛠️', text: 'Interactive Builder' },
                  { icon: '👁️', text: 'Real-time Preview' },
                  { icon: '💼', text: 'Skills & Projects' },
                  { icon: '📄', text: 'Export & Print' },
                  { icon: '📱', text: 'Responsive Design' }
                ].map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.8rem',
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '12px',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(102, 126, 234, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)'
                    target.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(102, 126, 234, 0.05)'
                    target.style.transform = 'translateX(0)'
                  }}
                  >
                    <span style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                      {feature.icon}
                    </span>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '500',
                      color: isDarkMode ? '#cbd5e1' : '#4b5563'
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/templates"
              style={{
                display: 'block',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = 'translateY(-3px) scale(1.02)'
                target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = 'translateY(0) scale(1)'
                target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>🎯</span>
              Start Creating Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="animate-fade-in" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="glass" style={{
          borderRadius: '24px',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            marginBottom: '3rem',
            color: isDarkMode ? '#f1f5f9' : '#333',
            fontWeight: '700'
          }}>
            <span className="floating" style={{ marginRight: '1rem' }}>🚀</span>
            Technology Stack
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            padding: '0 1rem'
          }}>
            {[
              { icon: '⚛️', name: 'React 18', desc: 'Modern hooks & context', color: 'linear-gradient(135deg, #61dafb 0%, #21b6d6 100%)' },
              { icon: '📘', name: 'TypeScript', desc: 'Type-safe development', color: 'linear-gradient(135deg, #3178c6 0%, #235a97 100%)' },
              { icon: '⚡', name: 'Vite', desc: 'Lightning fast builds', color: 'linear-gradient(135deg, #646cff 0%, #535bf2 100%)' },
              { icon: '🎨', name: 'Modern CSS', desc: 'Glass morphism & animations', color: 'linear-gradient(135deg, #ca8a04 0%, #a16207 100%)' }
            ].map((tech, index) => (
              <div key={index} 
                className="card-hover"
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '20px',
                  background: tech.color,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'rotate(45deg)',
                  transition: 'all 0.6s ease'
                }} />
                <div className="floating" style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  animationDelay: `${index * 0.2}s`,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {tech.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {tech.name}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assignment Status Section */}
      <section className="animate-fade-in" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '2rem auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="glass" style={{
          borderRadius: '24px',
          padding: '3rem 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 2.8rem)',
            marginBottom: '2rem',
            color: isDarkMode ? '#f1f5f9' : '#333',
            fontWeight: '700'
          }}>
            <span className="floating pulse">📋</span> Assignment Status
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              color: '#15803d',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 8px 25px rgba(21, 128, 61, 0.2)',
              border: '2px solid rgba(21, 128, 61, 0.2)',
              transition: 'all 0.3s ease'
            }}
            className="card-hover"
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              Task 1: Property Listing
              <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>Complete</div>
            </div>
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              color: '#15803d',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 8px 25px rgba(21, 128, 61, 0.2)',
              border: '2px solid rgba(21, 128, 61, 0.2)',
              transition: 'all 0.3s ease'
            }}
            className="card-hover"
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              Task 2: Portfolio Generator
              <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>Complete</div>
            </div>
          </div>
          
          <p style={{
            color: isDarkMode ? '#94a3b8' : '#666',
            fontSize: '1.2rem',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Both React Developer Assignment tasks completed successfully with modern UI/UX, 
            TypeScript implementation, and comprehensive feature sets! 🎉
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/property-listing"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1.2rem 2rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="card-hover"
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>🏢</span>
              Explore Properties
            </Link>

            <Link
              to="/templates"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1.2rem 2rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="card-hover"
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>✨</span>
              Create Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 