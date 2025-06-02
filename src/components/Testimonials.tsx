import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Votre travail va remplir une grande partie de votre vie, et la seule façon d'être vraiment satisfait est de faire ce que vous croyez être un grand travail. Et la seule façon de faire du grand travail est d'aimer ce que vous faites",
      author: "Steve Jobs",
      role: "",
      image: ""
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="relative\">
          {/* Main testimonial display */}
          <div className=\"bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5\">
              <Quote className=\"w-full h-full text-black" />
            </div>
            
            {/* Quote icon */}
            <div className="flex justify-center mb-8\">
              <div className=\"w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white\" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className=\"text-center relative z-10">
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-light italic\">
                \"{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex flex-col items-center\">
                <cite className=\"text-xl font-semibold text-black not-italic">
                  {testimonials[currentIndex].author}
                </cite>
                {testimonials[currentIndex].role && (
                  <p className="text-gray-600 mt-1\">
                    {testimonials[currentIndex].role}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation arrows - only show if multiple testimonials */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className=\"absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors\" />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className=\"absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors\" />
                </button>
              </>
            )}
          </div>

          {/* Dots indicator - only show if multiple testimonials */}
          {testimonials.length > 1 && (
            <div className=\"flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-black w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none\">
          <div className=\"absolute top-10 left-10 w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-gray-400 rounded-full opacity-30 animate-pulse\" style={{ animationDelay: '1s' }}></div>
          <div className=\"absolute top-1/2 left-5 w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  )
}