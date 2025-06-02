import React from 'react'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8\" />,
      skills: [\"HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-8 h-8\" />,
      skills: [\"Node.js", "Python", "API Development", "Database Design", "Authentication", "Cloud Services"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8\" />,
      skills: [\"React Native", "iOS Development", "Android Development", "Cross-platform", "App Store", "Mobile UI/UX"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8\" />,
      skills: [\"SQL", "MongoDB", "Git", "Docker", "AWS", "Testing Frameworks"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8\" />,
      skills: [\"JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8\" />,
      skills: [\"Figma", "Adobe Creative Suite", "Responsive Design", "User Experience", "Prototyping", "Design Systems"],
      color: "bg-pink-50 border-pink-200"
    }
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto\">
            A comprehensive overview of my technical expertise and capabilities across various technologies and platforms.
          </p>
          <div className=\"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800\">
              <strong>Note:</strong> This is placeholder content. Please update with your actual skills and expertise.
            </p>
          </div>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border-2 ${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4\">
                <div className=\"text-[#007acc] mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900\">
                  {category.title}
                </h3>
              </div>
              
              <div className=\"space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm\"
                  >
                    <span className=\"text-gray-700 font-medium">{skill}</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2\">
                      <div 
                        className=\"bg-[#007acc] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center\">
          <div className=\"bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4\">
              Continuous Learning
            </h3>
            <p className=\"text-gray-600 mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, frameworks, and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3\">
              {[\"Problem Solving", "Team Collaboration", "Agile Methodology", "Code Review", "Documentation", "Performance Optimization"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#007acc] text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}