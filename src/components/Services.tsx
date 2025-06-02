import React from 'react'
import { Code, Palette, Smartphone, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies\"
    },
    {
      icon: Palette,
      title: \"UI/UX Design",
      description: "User-centered design solutions that deliver exceptional experiences\"
    },
    {
      icon: Smartphone,
      title: \"Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android\"
    },
    {
      icon: Globe,
      title: \"Digital Solutions",
      description: "Comprehensive digital strategies tailored to your needs\"
    }
  ]

  return (
    <section id=\"services" className="py-16 px-4 bg-gray-50\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto\"></div>
        </div>
        
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group\"
              >
                <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300\" />
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}