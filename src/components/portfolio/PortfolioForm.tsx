import React, { useState } from 'react'
import { usePortfolio, PortfolioData } from '../../contexts/PortfolioContext'
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, User, Star, Briefcase, FolderOpen, MessageSquare, BookOpen, Send } from 'lucide-react'

interface PortfolioFormProps {
  template: 'template1' | 'template2'
  onComplete: () => void
  onCancel: () => void
}

type FormStep = 'hero' | 'about' | 'skills' | 'services' | 'portfolio' | 'testimonials' | 'blog' | 'contact'

interface FormData {
  template: 'template1' | 'template2'
  hero: {
    name: string
    title: string
    tagline: string
    profileImage: string
  }
  about: {
    bio: string
    email: string
    phone: string
    location: string
    socials: {
      linkedin: string
      github: string
      twitter: string
      website: string
    }
  }
  skills: string[]
  services: Array<{
    title: string
    description: string
  }>
  portfolio: Array<{
    title: string
    image: string
    description: string
  }>
  testimonials: Array<{
    name: string
    role: string
    company: string
    quote: string
    image: string
  }>
  blog: {
    title: string
    summary: string
  }
  contact: {
    message: string
    email: string
    phone: string
  }
}

const PortfolioForm: React.FC<PortfolioFormProps> = ({ template, onComplete, onCancel }) => {
  const { addPortfolio } = usePortfolio()
  const [currentStep, setCurrentStep] = useState<FormStep>('hero')
  const [currentSkill, setCurrentSkill] = useState('')
  
  const [formData, setFormData] = useState<FormData>({
    template,
    hero: {
      name: '',
      title: '',
      tagline: '',
      profileImage: ''
    },
    about: {
      bio: '',
      email: '',
      phone: '',
      location: '',
      socials: {
        linkedin: '',
        github: '',
        twitter: '',
        website: ''
      }
    },
    skills: [],
    services: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' }
    ],
    portfolio: [
      { title: '', image: '', description: '' },
      { title: '', image: '', description: '' },
      { title: '', image: '', description: '' }
    ],
    testimonials: [
      { name: '', role: '', company: '', quote: '', image: '' }
    ],
    blog: {
      title: '',
      summary: ''
    },
    contact: {
      message: '',
      email: '',
      phone: ''
    }
  })

  const steps: Array<{ key: FormStep; title: string; icon: React.ComponentType<any> }> = [
    { key: 'hero', title: 'Hero Section', icon: User },
    { key: 'about', title: 'About Me', icon: User },
    { key: 'skills', title: 'Skills', icon: Star },
    { key: 'services', title: 'Services', icon: Briefcase },
    { key: 'portfolio', title: 'Portfolio', icon: FolderOpen },
    { key: 'testimonials', title: 'Testimonials', icon: MessageSquare },
    { key: 'blog', title: 'Blog', icon: BookOpen },
    { key: 'contact', title: 'Contact', icon: Send }
  ]

  const currentStepIndex = steps.findIndex(step => step.key === currentStep)

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].key)
    }
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].key)
    }
  }

  const handleSubmit = () => {
    // Clean up empty entries
    const cleanedData: Omit<PortfolioData, 'id'> = {
      ...formData,
      services: formData.services.filter(service => service.title && service.description),
      portfolio: formData.portfolio.filter(item => item.title && item.image && item.description),
      testimonials: formData.testimonials.filter(testimonial => testimonial.name && testimonial.quote)
    }

    addPortfolio(cleanedData)
    onComplete()
  }

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }))
      setCurrentSkill('')
    }
  }

  const removeSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const addTestimonial = () => {
    setFormData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, { name: '', role: '', company: '', quote: '', image: '' }]
    }))
  }

  const removeTestimonial = (index: number) => {
    if (formData.testimonials.length > 1) {
      setFormData(prev => ({
        ...prev,
        testimonials: prev.testimonials.filter((_, i) => i !== index)
      }))
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 'hero':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hero Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.hero.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, hero: { ...prev.hero, name: e.target.value } }))}
                  className="input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={formData.hero.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, hero: { ...prev.hero, title: e.target.value } }))}
                  className="input"
                  placeholder="Full Stack Developer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tagline *
                </label>
                <input
                  type="text"
                  value={formData.hero.tagline}
                  onChange={(e) => setFormData(prev => ({ ...prev, hero: { ...prev.hero, tagline: e.target.value } }))}
                  className="input"
                  placeholder="Building amazing web experiences with modern technologies"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Image URL *
                </label>
                <input
                  type="url"
                  value={formData.hero.profileImage}
                  onChange={(e) => setFormData(prev => ({ ...prev, hero: { ...prev.hero, profileImage: e.target.value } }))}
                  className="input"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>
          </div>
        )

      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio *
              </label>
              <textarea
                value={formData.about.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, bio: e.target.value } }))}
                className="textarea"
                rows={4}
                placeholder="Tell us about yourself, your experience, and what drives you..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.about.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, email: e.target.value } }))}
                  className="input"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.about.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, phone: e.target.value } }))}
                  className="input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.about.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, location: e.target.value } }))}
                  className="input"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={formData.about.socials.linkedin}
                    onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, socials: { ...prev.about.socials, linkedin: e.target.value } } }))}
                    className="input"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub
                  </label>
                  <input
                    type="url"
                    value={formData.about.socials.github}
                    onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, socials: { ...prev.about.socials, github: e.target.value } } }))}
                    className="input"
                    placeholder="https://github.com/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Twitter
                  </label>
                  <input
                    type="url"
                    value={formData.about.socials.twitter}
                    onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, socials: { ...prev.about.socials, twitter: e.target.value } } }))}
                    className="input"
                    placeholder="https://twitter.com/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.about.socials.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, about: { ...prev.about, socials: { ...prev.about.socials, website: e.target.value } } }))}
                    className="input"
                    placeholder="https://johndoe.dev"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Add Skills
              </label>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  className="input flex-1"
                  placeholder="Enter a skill (e.g., React, TypeScript)"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="btn-primary flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      template === 'template1'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="hover:text-red-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )

      case 'services':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>
            {formData.services.map((service, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Service {index + 1}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        const newServices = [...formData.services]
                        newServices[index].title = e.target.value
                        setFormData(prev => ({ ...prev, services: newServices }))
                      }}
                      className="input"
                      placeholder="Web Development"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) => {
                        const newServices = [...formData.services]
                        newServices[index].description = e.target.value
                        setFormData(prev => ({ ...prev, services: newServices }))
                      }}
                      className="textarea"
                      rows={3}
                      placeholder="Custom web applications built with modern frameworks..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'portfolio':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Projects</h2>
            {formData.portfolio.map((project, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Project {index + 1}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => {
                        const newPortfolio = [...formData.portfolio]
                        newPortfolio[index].title = e.target.value
                        setFormData(prev => ({ ...prev, portfolio: newPortfolio }))
                      }}
                      className="input"
                      placeholder="E-commerce Platform"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={project.image}
                      onChange={(e) => {
                        const newPortfolio = [...formData.portfolio]
                        newPortfolio[index].image = e.target.value
                        setFormData(prev => ({ ...prev, portfolio: newPortfolio }))
                      }}
                      className="input"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const newPortfolio = [...formData.portfolio]
                        newPortfolio[index].description = e.target.value
                        setFormData(prev => ({ ...prev, portfolio: newPortfolio }))
                      }}
                      className="textarea"
                      rows={3}
                      placeholder="Full-stack e-commerce solution with React, Node.js..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'testimonials':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
              <button
                type="button"
                onClick={addTestimonial}
                className="btn-secondary flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Testimonial
              </button>
            </div>
            {formData.testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Testimonial {index + 1}
                  </h3>
                  {formData.testimonials.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTestimonial(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...formData.testimonials]
                        newTestimonials[index].name = e.target.value
                        setFormData(prev => ({ ...prev, testimonials: newTestimonials }))
                      }}
                      className="input"
                      placeholder="Sarah Wilson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      value={testimonial.role}
                      onChange={(e) => {
                        const newTestimonials = [...formData.testimonials]
                        newTestimonials[index].role = e.target.value
                        setFormData(prev => ({ ...prev, testimonials: newTestimonials }))
                      }}
                      className="input"
                      placeholder="Product Manager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={testimonial.company}
                      onChange={(e) => {
                        const newTestimonials = [...formData.testimonials]
                        newTestimonials[index].company = e.target.value
                        setFormData(prev => ({ ...prev, testimonials: newTestimonials }))
                      }}
                      className="input"
                      placeholder="TechCorp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={testimonial.image}
                      onChange={(e) => {
                        const newTestimonials = [...formData.testimonials]
                        newTestimonials[index].image = e.target.value
                        setFormData(prev => ({ ...prev, testimonials: newTestimonials }))
                      }}
                      className="input"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Quote
                    </label>
                    <textarea
                      value={testimonial.quote}
                      onChange={(e) => {
                        const newTestimonials = [...formData.testimonials]
                        newTestimonials[index].quote = e.target.value
                        setFormData(prev => ({ ...prev, testimonials: newTestimonials }))
                      }}
                      className="textarea"
                      rows={3}
                      placeholder="John delivered exceptional work on our platform..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'blog':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog (Optional)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={formData.blog.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, blog: { ...prev.blog, title: e.target.value } }))}
                  className="input"
                  placeholder="Tech Insights"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Summary
                </label>
                <textarea
                  value={formData.blog.summary}
                  onChange={(e) => setFormData(prev => ({ ...prev, blog: { ...prev.blog, summary: e.target.value } }))}
                  className="textarea"
                  rows={3}
                  placeholder="Sharing thoughts on modern web development, best practices..."
                />
              </div>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Message
                </label>
                <textarea
                  value={formData.contact.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, message: e.target.value } }))}
                  className="textarea"
                  rows={3}
                  placeholder="Let's work together to bring your ideas to life!"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))}
                    className="input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onCancel}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Your Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Fill out your information to create a professional portfolio with {template === 'template1' ? 'Template 1' : 'Template 2'}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = step.key === currentStep
              const isCompleted = index < currentStepIndex
              
              return (
                <div key={step.key} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isActive 
                      ? template === 'template1' ? 'bg-yellow-500 text-white' : 'bg-purple-500 text-white'
                      : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStepIndex === 0}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          
          {currentStepIndex === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                template === 'template1'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              <Check className="w-4 h-4" />
              Create Portfolio
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                template === 'template1'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioForm 