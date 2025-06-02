import React from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-gray-50\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto\">
            Professional certifications and achievements in technology and development
          </p>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder certification cards */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300\">
            <div className=\"flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4\">
                <Award className=\"w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900\">Certification Title</h3>
                <p className=\"text-sm text-gray-600">Issuing Organization</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4\">
              <Calendar className=\"w-4 h-4 mr-2" />
              <span>Issue Date</span>
            </div>
            <p className="text-gray-600 text-sm mb-4\">
              Brief description of the certification and skills validated.
            </p>
            <button className=\"flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Certificate
              <ExternalLink className="w-4 h-4 ml-1\" />
            </button>
          </div>

          <div className=\"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4\">
              <div className=\"w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-green-600\" />
              </div>
              <div>
                <h3 className=\"font-semibold text-gray-900">Certification Title</h3>
                <p className="text-sm text-gray-600\">Issuing Organization</p>
              </div>
            </div>
            <div className=\"flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2\" />
              <span>Issue Date</span>
            </div>
            <p className=\"text-gray-600 text-sm mb-4">
              Brief description of the certification and skills validated.
            </p>
            <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium\">
              View Certificate
              <ExternalLink className=\"w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300\">
            <div className=\"flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4\">
                <Award className=\"w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900\">Certification Title</h3>
                <p className=\"text-sm text-gray-600">Issuing Organization</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4\">
              <Calendar className=\"w-4 h-4 mr-2" />
              <span>Issue Date</span>
            </div>
            <p className="text-gray-600 text-sm mb-4\">
              Brief description of the certification and skills validated.
            </p>
            <button className=\"flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Certificate
              <ExternalLink className="w-4 h-4 ml-1\" />
            </button>
          </div>
        </div>

        <div className=\"text-center mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto\">
            <div className=\"flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-yellow-600 mr-2\" />
              <h3 className=\"text-lg font-semibold text-yellow-800">
                Content Needed
              </h3>
            </div>
            <p className="text-yellow-700">
              This section requires your actual certification details, including titles, 
              issuing organizations, dates, and certificate links to display your 
              professional achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}