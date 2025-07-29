import React from 'react'
import { PortfolioData } from '../../../contexts/PortfolioContext'
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Globe, Calendar, MessageSquare } from 'lucide-react'

interface Template2Props {
  data: PortfolioData
}

const Template2: React.FC<Template2Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  {data.hero.name.split(' ').map((word, index) => (
                    <div key={index}>{word}</div>
                  ))}
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-6 text-purple-100">
                  {data.hero.title}
                </h2>
                <p className="text-lg text-purple-50 max-w-md">
                  {data.hero.tagline}
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-100">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{data.about.email}</span>
                </div>
                <div className="flex items-center gap-3 text-purple-100">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{data.about.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-purple-100">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{data.about.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {data.about.socials.linkedin && (
                  <a
                    href={data.about.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.github && (
                  <a
                    href={data.about.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.twitter && (
                  <a
                    href={data.about.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.website && (
                  <a
                    href={data.about.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#portfolio"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Side - Image & Skills */}
            <div className="space-y-8">
              <div className="text-center">
                <img
                  src={data.hero.profileImage}
                  alt={data.hero.name}
                  className="w-80 h-80 rounded-2xl mx-auto object-cover shadow-2xl"
                />
              </div>
              
              {/* Skills Preview */}
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.slice(0, 6).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {data.about.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span><strong>Email:</strong> {data.about.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span><strong>Phone:</strong> {data.about.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span><strong>Location:</strong> {data.about.location}</span>
                </div>
              </div>
            </div>

            {/* Timeline Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Technologies</h3>
              <div className="space-y-6">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center px-4 text-white font-medium shadow-md`}
                        style={{ width: `${Math.max(60, 100 - index * 10)}%` }}
                      >
                        {skill}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Services I offer to bring your ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 h-full border border-purple-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Masonry Grid */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent projects and achievements
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.portfolio.map((project, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                      index % 3 === 0 ? 'h-64' : index % 3 === 1 ? 'h-48' : 'h-56'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-6">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {data.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What people say about working with me
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
                >
                  <MessageSquare className="w-8 h-8 text-purple-500 mb-6" />
                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-purple-600 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {data.blog?.title && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.blog.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {data.blog.summary}
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all inline-flex items-center gap-2"
            >
              Read My Blog
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              {data.contact.message}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-purple-100">{data.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-purple-100">{data.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-purple-100">{data.about.location}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                {data.about.socials.linkedin && (
                  <a
                    href={data.about.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.github && (
                  <a
                    href={data.about.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.twitter && (
                  <a
                    href={data.about.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.website && (
                  <a
                    href={data.about.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {data.hero.name}
              </h3>
              <p className="text-gray-400 mt-2">{data.hero.title}</p>
            </div>
            
            <div className="flex gap-6">
              {data.about.socials.linkedin && (
                <a
                  href={data.about.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {data.about.socials.github && (
                <a
                  href={data.about.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {data.about.socials.twitter && (
                <a
                  href={data.about.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {data.about.socials.website && (
                <a
                  href={data.about.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Globe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {data.hero.name}. All rights reserved. Made with ❤️ using React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Template2 