import React from 'react'
import { ExternalLink, Globe, Chrome, Firefox } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: "Qroissantage.fr",
      description: "Un site web éducatif conçu pour sensibiliser les professionnels aux dangers des QR codes malveillants. Le projet simule un 'croissantage' (tradition de bureau d'apporter des croissants) en incitant les utilisateurs à scanner un QR code, démontrant ainsi les risques potentiels.\",
      tags: [\"Cybersécurité", "Sensibilisation", "React", "QR Codes"],
      image: "/assets/images/qroissantage.png",
      url: "https://qroissantage.fr"
    },
    {
      title: "Tert.io",
      description: "Mon premier projet d'envergure avec Symfony, réalisé pour Tertio Informatique à Moulins. Ce site représentait un défi technique significatif qui m'a permis d'approfondir mes compétences en développement PHP/Symfony tout en livrant une interface moderne et responsive pour valoriser les services de l'entreprise.\",
      tags: [\"Symfony", "PHP", "Challenge technique", "Responsive"],
      image: "/assets/images/tertio.webp",
      url: "https://tert.io"
    },
    {
      title: "RyveIT",
      description: "Blog d'actualité informatique développé avec WordPress, proposant des astuces, des bons plans et des tutoriels pour aider les lecteurs à rester informés des dernières tendances technologiques et à améliorer leurs compétences informatiques.\",
      tags: [\"WordPress", "Blog Tech", "Tutoriels", "Bons Plans"],
      image: "/assets/images/ryveit.png",
      url: "https://ryveit.com"
    },
    {
      title: "HelloAsso No Donation",
      description: "Une extension de navigateur qui supprime automatiquement le don par défaut sur HelloAsso, conçue pour aider les étudiants en période difficile.\",
      tags: [\"Firefox Add-on", "Chrome Web Store"],
      image: "/assets/images/helloassonodonation.png",
      url: ""
    }
  ]

  return (
    <section id="portfolio" className="py-16 px-4 bg-white\">
      <div className=\"container mx-auto max-w-6xl">
        <div className="text-center mb-12\">
          <h2 className=\"text-3xl md:text-4xl font-bold text-black mb-4">
            Projets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8\">
          {projects.map((project, index) => (
            <div
              key={index}
              className=\"bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-100\">
                <img
                  src={project.image}
                  alt={project.title}
                  className=\"w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300\"></div>
              </div>

              <div className=\"p-6">
                <div className="flex items-center justify-between mb-3\">
                  <h3 className=\"text-xl font-bold text-black">
                    {project.title}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007acc] hover:text-black transition-colors duration-200\"
                      aria-label={`Visiter ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className=\"text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4\">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className=\"px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <div className="flex items-center justify-between\">
                    <a
                      href={project.url}
                      target=\"_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded-lg hover:bg-black transition-colors duration-200\"
                    >
                      <Globe size={16} />
                      Visiter le site
                    </a>
                    
                    {project.title === \"HelloAsso No Donation" && (
                      <div className="flex gap-2\">
                        <div className=\"flex items-center gap-1 text-gray-600">
                          <Firefox size={16} />
                          <span className="text-sm\">Firefox</span>
                        </div>
                        <div className=\"flex items-center gap-1 text-gray-600">
                          <Chrome size={16} />
                          <span className="text-sm">Chrome</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}