import React from 'react'
import { PortfolioData } from '../../../contexts/PortfolioContext'
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Globe, Star, ArrowRight, MessageSquare } from 'lucide-react'

interface Template1Props {
  data: PortfolioData
}

const Template1: React.FC<Template1Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {data.hero.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-6 text-yellow-100">
                {data.hero.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-yellow-50">
                {data.hero.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  View Work
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={data.hero.profileImage}
                alt={data.hero.name}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {data.about.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>{data.about.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>{data.about.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>{data.about.location}</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {data.about.socials.linkedin && (
                  <a
                    href={data.about.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.github && (
                  <a
                    href={data.about.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.twitter && (
                  <a
                    href={data.about.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {data.about.socials.website && (
                  <a
                    href={data.about.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium"
                  >
                    {skill}
                  </span>
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
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What I can do for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Some of my recent projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-yellow-500 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
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
                What People Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Testimonials from my clients
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-xl p-8 relative"
                >
                  <MessageSquare className="w-8 h-8 text-yellow-500 mb-6" />
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {data.blog.summary}
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center gap-2"
            >
              Read Blog
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              {data.contact.message}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-yellow-100">{data.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-yellow-100">{data.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-yellow-100">{data.about.location}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-yellow-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-yellow-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-yellow-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {data.about.socials.linkedin && (
              <a
                href={data.about.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {data.about.socials.github && (
              <a
                href={data.about.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {data.about.socials.twitter && (
              <a
                href={data.about.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {data.about.socials.website && (
              <a
                href={data.about.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
            )}
          </div>
          <p className="text-gray-400">
            © 2024 {data.hero.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Template1 