import React from 'react'
import { Users } from 'lucide-react'

export default function Team() {
  return (
    <section id="team" className="py-16 px-4\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center\">
          <div className=\"flex justify-center items-center mb-8">
            <Users className="w-12 h-12 text-gray-400\" />
          </div>
          <p className=\"text-gray-500 text-lg">
            Team information is currently being updated.
          </p>
        </div>
      </div>
    </section>
  )
}