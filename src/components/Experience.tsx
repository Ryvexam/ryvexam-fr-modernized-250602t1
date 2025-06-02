import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-white\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-black mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto\">
            This section is ready to showcase professional experience and career highlights.
          </p>
        </div>

        <div className=\"max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative\">
            {/* Timeline Line */}
            <div className=\"absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Placeholder Experience Items */}
            <div className="space-y-12\">
              {/* Experience Item 1 */}
              <div className=\"relative flex items-start md:justify-between md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10\">
                  <Briefcase className=\"w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-5/12 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100\">
                  <div className=\"flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4\" />
                    <span>[Date Range]</span>
                  </div>
                  <h3 className=\"text-xl font-semibold text-black mb-2">
                    [Position Title]
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3\">
                    <MapPin className=\"w-4 h-4" />
                    <span>[Company Name] • [Location]</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed\">
                    Professional experience details will be displayed here once content is provided.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className=\"relative flex items-start md:justify-between group">
                <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10\">
                  <Briefcase className=\"w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-5/12 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100\">
                  <div className=\"flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4\" />
                    <span>[Date Range]</span>
                  </div>
                  <h3 className=\"text-xl font-semibold text-black mb-2">
                    [Position Title]
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3\">
                    <MapPin className=\"w-4 h-4" />
                    <span>[Company Name] • [Location]</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed\">
                    Professional experience details will be displayed here once content is provided.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className=\"relative flex items-start md:justify-between md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10\">
                  <Briefcase className=\"w-4 h-4 text-white" />
                </div>
                <div className="ml-12 md:ml-0 md:w-5/12 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100\">
                  <div className=\"flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4\" />
                    <span>[Date Range]</span>
                  </div>
                  <h3 className=\"text-xl font-semibold text-black mb-2">
                    [Position Title]
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3\">
                    <MapPin className=\"w-4 h-4" />
                    <span>[Company Name] • [Location]</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed\">
                    Professional experience details will be displayed here once content is provided.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Notice */}
          <div className=\"mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm\">
              <Briefcase className=\"w-4 h-4" />
              <span>Experience content ready to be customized with actual professional history</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}