import React, { createContext, useContext, useState, ReactNode } from 'react'

// Portfolio data types
export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  bio: string
  profileImage: string
}

export interface Skill {
  id: string
  name: string
  level: number // 1-100
  category: 'technical' | 'soft' | 'language'
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  achievements: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  achievements: string[]
}

export interface PortfolioData {
  id?: string
  template?: string
  personalInfo: PersonalInfo
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
  selectedTemplate: string
  hero?: {
    name: string
    title: string
    subtitle?: string
    tagline?: string
    profileImage?: string
  }
  about?: {
    description: string
    bio?: string
    image?: string
    email: string
    phone: string
    location: string
    website?: string
    socials?: {
      linkedin?: string
      github?: string
      twitter?: string
      website?: string
    }
  }
  services?: Array<{
    id: string
    title: string
    description: string
    icon?: string
  }>
  portfolio?: Project[]
  testimonials?: Array<{
    id: string
    name: string
    role: string
    company: string
    content: string
    quote?: string
    image?: string
  }>
  blog?: Array<{
    id: string
    title: string
    excerpt: string
    date: string
    image?: string
    url?: string
  }> & {
    title?: string
    summary?: string
  }
  contact?: {
    email: string
    phone: string
    location: string
    website?: string
    message?: string
  }
}

interface PortfolioContextType {
  portfolioData: PortfolioData
  portfolios: PortfolioData[]
  filteredPortfolios: PortfolioData[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  skillFilter: string
  setSkillFilter: (filter: string) => void
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void
  addSkill: (skill: Skill) => void
  updateSkill: (id: string, skill: Partial<Skill>) => void
  removeSkill: (id: string) => void
  addProject: (project: Project) => void
  updateProject: (id: string, project: Partial<Project>) => void
  removeProject: (id: string) => void
  addExperience: (experience: Experience) => void
  updateExperience: (id: string, experience: Partial<Experience>) => void
  removeExperience: (id: string) => void
  addEducation: (education: Education) => void
  updateEducation: (id: string, education: Partial<Education>) => void
  removeEducation: (id: string) => void
  setSelectedTemplate: (template: string) => void
  addPortfolio: (portfolio: Omit<PortfolioData, 'id'>) => void
  getPortfolio: (id: string) => PortfolioData | undefined
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

// Default portfolio data
const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    website: 'https://johndoe.dev',
    bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
  },
  skills: [
    { id: '1', name: 'JavaScript', level: 90, category: 'technical' },
    { id: '2', name: 'React', level: 85, category: 'technical' },
    { id: '3', name: 'Node.js', level: 80, category: 'technical' },
    { id: '4', name: 'Python', level: 75, category: 'technical' },
    { id: '5', name: 'Leadership', level: 85, category: 'soft' },
    { id: '6', name: 'Communication', level: 90, category: 'soft' }
  ],
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and project tracking.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/johndoe/taskmanager',
      featured: true
    }
  ],
  experience: [
    {
      id: '1',
      company: 'Tech Solutions India',
      position: 'Senior Full Stack Developer',
      startDate: '2021-01',
      endDate: '',
      current: true,
      description: 'Leading development of enterprise web applications using modern technologies.',
      achievements: [
        'Led a team of 5 developers in building a scalable CRM system',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    }
  ],
  education: [
    {
      id: '1',
      institution: 'Indian Institute of Technology, Mumbai',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      startDate: '2016-07',
      endDate: '2020-05',
      gpa: '8.5/10',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Winner of Inter-college Coding Competition 2019'
      ]
    }
  ],
  selectedTemplate: 'modern'
}

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData)

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setPortfolioData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info }
    }))
  }

  const addSkill = (skill: Skill) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }))
  }

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, ...skill } : s)
    }))
  }

  const removeSkill = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }))
  }

  const addProject = (project: Project) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }))
  }

  const updateProject = (id: string, project: Partial<Project>) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...project } : p)
    }))
  }

  const removeProject = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }))
  }

  const addExperience = (experience: Experience) => {
    setPortfolioData(prev => ({
      ...prev,
      experience: [...prev.experience, experience]
    }))
  }

  const updateExperience = (id: string, experience: Partial<Experience>) => {
    setPortfolioData(prev => ({
      ...prev,
      experience: prev.experience.map(e => e.id === id ? { ...e, ...experience } : e)
    }))
  }

  const removeExperience = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      experience: prev.experience.filter(e => e.id !== id)
    }))
  }

  const addEducation = (education: Education) => {
    setPortfolioData(prev => ({
      ...prev,
      education: [...prev.education, education]
    }))
  }

  const updateEducation = (id: string, education: Partial<Education>) => {
    setPortfolioData(prev => ({
      ...prev,
      education: prev.education.map(e => e.id === id ? { ...e, ...education } : e)
    }))
  }

  const removeEducation = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      education: prev.education.filter(e => e.id !== id)
    }))
  }

  const setSelectedTemplate = (template: string) => {
    setPortfolioData(prev => ({
      ...prev,
      selectedTemplate: template
    }))
  }

  return (
    <PortfolioContext.Provider value={{
      portfolioData,
      updatePersonalInfo,
      addSkill,
      updateSkill,
      removeSkill,
      addProject,
      updateProject,
      removeProject,
      addExperience,
      updateExperience,
      removeExperience,
      addEducation,
      updateEducation,
      removeEducation,
      setSelectedTemplate
    }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
} 