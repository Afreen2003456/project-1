import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../contexts/PortfolioContext'

const PortfolioBuilder: React.FC = () => {
  const { 
    portfolioData, 
    updatePersonalInfo, 
    addSkill, 
    updateSkill, 
    removeSkill,
    addProject,
    updateProject,
    removeProject
  } = usePortfolio()

  const [activeTab, setActiveTab] = useState('personal')
  const [newSkill, setNewSkill] = useState({ name: '', level: 80, category: 'technical' as const })
  const [editingProject, setEditingProject] = useState<string | null>(null)

  const tabs = [
    { id: 'personal', label: '👤 Personal Info', icon: '👤' },
    { id: 'skills', label: '🎯 Skills', icon: '🎯' },
    { id: 'projects', label: '💼 Projects', icon: '💼' },
    { id: 'experience', label: '🏢 Experience', icon: '🏢' }
  ]

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      addSkill({
        id: Date.now().toString(),
        ...newSkill
      })
      setNewSkill({ name: '', level: 80, category: 'technical' })
    }
  }

  const renderPersonalInfo = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Personal Information</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Full Name</label>
          <input
            type="text"
            value={portfolioData.personalInfo.name}
            onChange={(e) => updatePersonalInfo({ name: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Professional Title</label>
          <input
            type="text"
            value={portfolioData.personalInfo.title}
            onChange={(e) => updatePersonalInfo({ title: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Email</label>
          <input
            type="email"
            value={portfolioData.personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Phone</label>
          <input
            type="tel"
            value={portfolioData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Location</label>
          <input
            type="text"
            value={portfolioData.personalInfo.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Website</label>
          <input
            type="url"
            value={portfolioData.personalInfo.website}
            onChange={(e) => updatePersonalInfo({ website: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Bio</label>
        <textarea
          value={portfolioData.personalInfo.bio}
          onChange={(e) => updatePersonalInfo({ bio: e.target.value })}
          rows={4}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '2px solid #e1e5e9',
            borderRadius: '8px',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
      </div>
    </div>
  )

  const renderSkills = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Skills & Expertise</h3>
      
      {/* Add New Skill */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '1.5rem', 
        borderRadius: '10px', 
        marginBottom: '2rem',
        border: '2px dashed #667eea'
      }}>
        <h4 style={{ marginBottom: '1rem', color: '#667eea' }}>Add New Skill</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Skill Name</label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              placeholder="e.g., React, Python, Leadership"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Level ({newSkill.level}%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>Category</label>
            <select
              value={newSkill.category}
              onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as any })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="technical">Technical</option>
              <option value="soft">Soft Skills</option>
              <option value="language">Language</option>
            </select>
          </div>
          
          <button
            onClick={handleAddSkill}
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Existing Skills */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {portfolioData.skills.map((skill) => (
          <div key={skill.id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            gap: '1rem'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '600', color: '#333' }}>{skill.name}</span>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>{skill.level}%</span>
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
                  backgroundColor: '#667eea',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <span style={{
                fontSize: '0.8rem',
                color: '#667eea',
                backgroundColor: '#e3f2fd',
                padding: '0.2rem 0.5rem',
                borderRadius: '10px',
                marginTop: '0.5rem',
                display: 'inline-block'
              }}>
                {skill.category}
              </span>
            </div>
            <button
              onClick={() => removeSkill(skill.id)}
              style={{
                padding: '0.5rem',
                backgroundColor: '#ff4757',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProjects = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Projects & Work</h3>
      
      {portfolioData.projects.map((project) => (
        <div key={project.id} style={{
          border: '2px solid #e1e5e9',
          borderRadius: '10px',
          padding: '1.5rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
            <h4 style={{ color: '#333', fontSize: '1.2rem' }}>{project.title}</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setEditingProject(editingProject === project.id ? null : project.id)}
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {editingProject === project.id ? '✓' : '✏️'}
              </button>
              <button
                onClick={() => removeProject(project.id)}
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
          </div>
          
          {editingProject === project.id ? (
            <div style={{ display: 'grid', gap: '1rem' }}>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(project.id, { title: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
              <textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                rows={3}
                style={{
                  padding: '0.75rem',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => updateProject(project.id, { technologies: e.target.value.split(', ').filter(t => t.trim()) })}
                placeholder="Technologies (comma separated)"
                style={{
                  padding: '0.75rem',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          ) : (
            <>
              <p style={{ color: '#666', marginBottom: '1rem' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
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
              {project.featured && (
                <span style={{
                  backgroundColor: '#ffeb3b',
                  color: '#f57f17',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  ⭐ Featured
                </span>
              )}
            </>
          )}
        </div>
      ))}
      
      <button
        onClick={() => {
          const newProject = {
            id: Date.now().toString(),
            title: 'New Project',
            description: 'Project description...',
            technologies: ['React', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
            featured: false
          }
          addProject(newProject)
        }}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          color: '#667eea',
          border: '2px dashed #667eea',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600'
        }}
      >
        + Add New Project
      </button>
    </div>
  )

  const renderExperience = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Work Experience</h3>
      
      {portfolioData.experience.map((exp) => (
        <div key={exp.id} style={{
          border: '2px solid #e1e5e9',
          borderRadius: '10px',
          padding: '1.5rem',
          marginBottom: '1rem'
        }}>
          <h4 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.position}</h4>
          <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>{exp.company}</p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
          </p>
          <p style={{ color: '#666', marginBottom: '1rem' }}>{exp.description}</p>
          
          <div>
            <h5 style={{ color: '#333', marginBottom: '0.5rem' }}>Key Achievements:</h5>
            <ul style={{ paddingLeft: '1.5rem', color: '#666' }}>
              {exp.achievements.map((achievement, index) => (
                <li key={index} style={{ marginBottom: '0.3rem' }}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            Build Your Portfolio
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Customize your portfolio content and make it shine ✨
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          overflowX: 'auto'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === tab.id ? '#667eea' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#666',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ marginBottom: '2rem' }}>
          {activeTab === 'personal' && renderPersonalInfo()}
          {activeTab === 'skills' && renderSkills()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'experience' && renderExperience()}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/templates"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#f8f9fa',
              color: '#667eea',
              border: '2px solid #667eea',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            ← Change Template
          </Link>

          <Link
            to="/preview"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            👁️ Preview Portfolio →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioBuilder 