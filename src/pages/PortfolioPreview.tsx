import React from 'react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../contexts/PortfolioContext'

const PortfolioPreview: React.FC = () => {
  const { portfolioData } = usePortfolio()

  const getTemplateStyle = () => {
    switch (portfolioData.selectedTemplate) {
      case 'creative':
        return {
          primary: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
          secondary: '#ff6b8a',
          accent: '#ff9a9e'
        }
      case 'minimal':
        return {
          primary: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          secondary: '#8892b0',
          accent: '#64748b'
        }
      case 'corporate':
        return {
          primary: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
          secondary: '#34495e',
          accent: '#3498db'
        }
      case 'tech':
        return {
          primary: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          secondary: '#0f766e',
          accent: '#11998e'
        }
      case 'artistic':
        return {
          primary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          secondary: '#ec4899',
          accent: '#f093fb'
        }
      default: // modern
        return {
          primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          secondary: '#6366f1',
          accent: '#667eea'
        }
    }
  }

  const theme = getTemplateStyle()

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      {/* Preview Header */}
      <div style={{
        background: theme.primary,
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Portfolio Preview</h2>
          <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>
            Template: {portfolioData.selectedTemplate.charAt(0).toUpperCase() + portfolioData.selectedTemplate.slice(1)}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link
            to="/builder"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            ✏️ Edit
          </Link>
          
          <button
            onClick={() => window.print()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'white',
              color: theme.secondary,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            📄 Export
          </button>
        </div>
      </div>

      {/* Portfolio Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 100px)',
        boxShadow: '0 0 50px rgba(0,0,0,0.1)'
      }}>
        
        {/* Hero Section */}
        <section style={{
          background: theme.primary,
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundImage: `url(${portfolioData.personalInfo.profileImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '0 auto 2rem',
            border: '5px solid rgba(255,255,255,0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }} />
          
          <h1 style={{
            fontSize: '3rem',
            margin: '0 0 1rem',
            fontWeight: 'bold'
          }}>
            {portfolioData.personalInfo.name}
          </h1>
          
          <h2 style={{
            fontSize: '1.5rem',
            margin: '0 0 2rem',
            opacity: 0.9,
            fontWeight: '300'
          }}>
            {portfolioData.personalInfo.title}
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            {portfolioData.personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
            fontSize: '0.9rem'
          }}>
            <div>📧 {portfolioData.personalInfo.email}</div>
            <div>📱 {portfolioData.personalInfo.phone}</div>
            <div>📍 {portfolioData.personalInfo.location}</div>
            <div>🌐 {portfolioData.personalInfo.website}</div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ padding: '4rem 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            Skills & Expertise
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {['technical', 'soft', 'language'].map(category => {
              const categorySkills = portfolioData.skills.filter(skill => skill.category === category)
              if (categorySkills.length === 0) return null
              
              return (
                <div key={category} style={{
                  backgroundColor: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem',
                    color: theme.secondary,
                    textTransform: 'capitalize'
                  }}>
                    {category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 'Languages'}
                  </h3>
                  
                  {categorySkills.map(skill => (
                    <div key={skill.id} style={{ marginBottom: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{ fontWeight: '600', color: '#333' }}>{skill.name}</span>
                        <span style={{ color: '#666' }}>{skill.level}%</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#e1e5e9',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: theme.primary,
                          borderRadius: '4px',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            Featured Projects
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {portfolioData.projects.map(project => (
              <div key={project.id} style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#ffeb3b',
                      color: '#f57f17',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      ⭐ Featured
                    </div>
                  )}
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#333'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={{
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: theme.accent,
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        🌐 Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: theme.accent,
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        📁 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section style={{ padding: '4rem 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            Work Experience
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} style={{
                position: 'relative',
                paddingLeft: '3rem',
                paddingBottom: '3rem',
                borderLeft: index < portfolioData.experience.length - 1 ? '3px solid #e1e5e9' : 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-12px',
                  top: 0,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: theme.primary,
                  boxShadow: '0 0 0 4px white, 0 0 0 8px #e1e5e9'
                }} />
                
                <div style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.position}
                  </h3>
                  
                  <p style={{
                    color: theme.accent,
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.company}
                  </p>
                  
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {exp.description}
                  </p>
                  
                  <ul style={{
                    color: '#666',
                    paddingLeft: '1.5rem'
                  }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            Education
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {portfolioData.education.map(edu => (
              <div key={edu.id} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>
                  {edu.degree}
                </h3>
                
                <p style={{
                  color: theme.accent,
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {edu.institution}
                </p>
                
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  marginBottom: '1rem'
                }}>
                  {edu.startDate} - {edu.endDate} {edu.gpa && `• GPA: ${edu.gpa}`}
                </p>
                
                {edu.achievements.length > 0 && (
                  <ul style={{
                    color: '#666',
                    paddingLeft: '1.5rem'
                  }}>
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} style={{ marginBottom: '0.3rem' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section style={{
          background: theme.primary,
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem'
          }}>
            Let's Work Together
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              📧 Send Email
            </a>
            
            <a
              href={portfolioData.personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: theme.secondary,
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              🌐 Visit Website
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PortfolioPreview 