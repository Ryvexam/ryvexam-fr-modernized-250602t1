import React, { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto\"></div>
        </div>

        <div className=\"grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8\">
            <div className=\"bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6\">Informations de Contact</h3>
              
              {/* Email */}
              <div className=\"flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg\">
                  <Mail className=\"w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1\">Email Professionnel</h4>
                  <a 
                    href=\"mailto:maximevery@ryvexam.fr" 
                    className="text-blue-600 hover:text-blue-700 transition-colors\"
                  >
                    maximevery@ryvexam.fr
                  </a>
                  <p className=\"text-gray-600 text-sm mt-1">
                    Disponible pour discuter de projets et d'opportunités
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-4 mb-6\">
                <div className=\"bg-blue-100 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600\" />
                </div>
                <div>
                  <h4 className=\"font-semibold text-gray-900 mb-1">LinkedIn</h4>
                  <p className="text-gray-900 font-medium\">Maxime VÉRY</p>
                  <p className=\"text-gray-600 text-sm mt-1">
                    Connectons-nous et échangeons sur LinkedIn
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-4 mb-6\">
                <div className=\"bg-gray-100 p-3 rounded-lg">
                  <Github className="w-6 h-6 text-gray-700\" />
                </div>
                <div>
                  <h4 className=\"font-semibold text-gray-900 mb-1">GitHub</h4>
                  <p className="text-gray-900 font-medium\">ryvexam</p>
                  <p className=\"text-gray-600 text-sm mt-1">
                    Découvrez mes projets et contributions
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4\">
                <div className=\"bg-green-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600\" />
                </div>
                <div>
                  <h4 className=\"font-semibold text-gray-900 mb-1">Localisation</h4>
                  <p className="text-gray-700\">Pérignat les Sarlièves, Auvergne-Rhône-Alpes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=\"bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6\">Envoyez un message</h3>
            
            <form onSubmit={handleSubmit} className=\"space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2\">
                  Nom complet
                </label>
                <div className=\"relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400\" />
                  <input
                    type=\"text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\"
                    placeholder=\"Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2\">
                  Email
                </label>
                <div className=\"relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400\" />
                  <input
                    type=\"email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\"
                    placeholder=\"votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2\">
                  Message
                </label>
                <div className=\"relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400\" />
                  <textarea
                    id=\"message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none\"
                    placeholder=\"Décrivez votre projet ou votre demande..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2\"
              >
                {isSubmitting ? (
                  <>
                    <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5\" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className=\"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Une erreur s'est produite. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}