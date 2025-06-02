'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: "À Propos", href: "#a-propos", type: "main" },
    { label: "Expérience", href: "#experience", type: "main" },
    { label: "Compétences", href: "#competences", type: "main" },
    { label: "Projets", href: "#projets", type: "main" },
    { label: "Certifications", href: "#certifications", type: "main" },
    { label: "Contact", href: "#contact", type: "main" }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100\">
      <div className=\"container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16\">
          {/* Logo and Site Name */}
          <div className=\"flex items-center space-x-3">
            <img 
              src="/assets/images/logo.png" 
              alt="Portfolio VERY Maxime Logo" 
              className="h-8 w-8 object-contain\"
            />
            <h1 className=\"text-xl font-bold text-black">
              Portfolio VERY Maxime
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8\">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className=\"text-gray-700 hover:text-black font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full\"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=\"md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700\" />
            ) : (
              <Menu className=\"h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white\">
            <nav className=\"py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-colors duration-200 rounded-md mx-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}