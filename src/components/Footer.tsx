import React from 'react'
import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-16 px-4\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12\">
          {/* Brand Section */}
          <div className=\"lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white\">
              Portfolio VERY Maxime
            </h3>
            <p className=\"text-gray-300 mb-6 leading-relaxed">
              Développeur passionné spécialisé dans les technologies modernes. 
              Créateur de solutions innovantes et performantes.
            </p>
            <div className="flex space-x-4\">
              <a
                href=\"https://www.linkedin.com/in/maxime-very/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#007acc] p-3 rounded-full transition-colors duration-300\"
                aria-label=\"LinkedIn de Maxime VÉRY"
              >
                <Linkedin className="w-5 h-5\" />
              </a>
              <a
                href=\"https://github.com/ryvexam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#007acc] p-3 rounded-full transition-colors duration-300\"
                aria-label=\"GitHub de ryvexam"
              >
                <Github className="w-5 h-5\" />
              </a>
              <a
                href=\"mailto:maximevery@ryvexam.fr"
                className="bg-gray-800 hover:bg-[#007acc] p-3 rounded-full transition-colors duration-300\"
                aria-label=\"Email professionnel"
              >
                <Mail className="w-5 h-5\" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className=\"text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3\">
              <li>
                <a
                  href=\"#about"
                  className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href=\"#services"
                  className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href=\"#portfolio"
                  className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href=\"#contact"
                  className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className=\"text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3\">
              <div className=\"flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#007acc] mt-0.5 flex-shrink-0\" />
                <a
                  href=\"mailto:maximevery@ryvexam.fr"
                  className="text-gray-300 hover:text-[#007acc] transition-colors duration-300 break-all\"
                >
                  maximevery@ryvexam.fr
                </a>
              </div>
              <div className=\"flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#007acc] mt-0.5 flex-shrink-0\" />
                <span className=\"text-gray-300">
                  Pérignat les Sarlièves,<br />
                  Auvergne-Rhône-Alpes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-800 pt-8 mb-8\">
          <div className=\"flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/maxime-very/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
            >
              LinkedIn
            </a>
            <a
              href=\"https://github.com/ryvexam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
            >
              GitHub
            </a>
            <a
              href=\"mailto:maximevery@ryvexam.fr"
              className="text-gray-300 hover:text-[#007acc] transition-colors duration-300\"
            >
              Email Professionnel
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className=\"border-t border-gray-800 pt-8">
          <div className="text-center\">
            <p className=\"text-gray-400 text-sm">
              © 2025 Ryveweb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}