import React from 'react'
import { MapPin, Quote } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 to-white\">
      <div className=\"container mx-auto max-w-4xl text-center">
        {/* Main Title */}
        <div className="mb-8\">
          <h1 className=\"text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Maxime VÉRY
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-6\">
            Manager de Projet Informatique en Alternance
          </h2>
          
          {/* Location */}
          <div className=\"flex items-center justify-center text-gray-600 mb-12">
            <MapPin className="w-5 h-5 mr-2\" />
            <span className=\"text-lg">
              Pérignat-lès-Sarlièves, Auvergne-Rhône-Alpes, France
            </span>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto mb-12\">
          <div className=\"relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <Quote className="w-8 h-8 text-blue-600 mb-4 mx-auto opacity-60\" />
            
            <blockquote className=\"text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
              "Votre travail va remplir une grande partie de votre vie, et la seule façon d'être vraiment satisfait est de faire ce que vous croyez être un grand travail. Et la seule façon de faire du grand travail est d'aimer ce que vous faites"
            </blockquote>
            
            <cite className="text-gray-600 font-medium text-base\">
              - Steve Jobs
            </cite>
          </div>
        </div>

        {/* Call to Action */}
        <div className=\"flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1\"
          >
            Découvrir mon profil
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className=\"border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Me contacter
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce\">
          <div className=\"w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}