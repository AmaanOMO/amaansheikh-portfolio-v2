import React from 'react'

export function ProjectsSection() {
  const projects = [
    {
      title: "Tabia",
      status: "Ongoing",
      description: "A Chrome extension that saves, restores, and shares tab sessions for smarter collaborative browsing.",
      tags: ["Chrome Extension", "JavaScript", "Collaboration", "Productivity"],
      image: "Tabia.png"
    },
    {
      title: "Itinera",
      description: "An AI-powered travel planner that maps multi-city routes and recommends places based on mood.",
      tags: ["AI/ML", "Travel Planning", "Multi-city Routes", "Mood-based Recommendations"],
      image: "itinera.png"
    },
    {
      title: "Matchy AI (Landing Page)",
      description: "Landing page for an AI-powered job matcher that analyzes resumes and surfaces tailored listings.",
      tags: ["AI/ML", "Job Matching", "Landing Page", "Resume Analysis"],
      image: "matchyAI.png"
    },
    {
      title: "Portfolio Website",
      description: "Personal website to showcase projects and experience. Designed and developed from scratch with a clean, responsive UI.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Responsive Design"],
      image: "portfolio.png"
    },
    {
      title: "Fully Automated Catapult",
      description: "Led a 19-person team to design and build an Arduino-powered catapult. Delivered a working demo to alumni after raising $1,900.",
      tags: ["Arduino", "C++", "Hardware", "Team Leadership", "Fundraising"],
      image: "catapult.png"
    }
  ]

  return (
    <section className="py-8 mt-8">
      <div className="mb-8">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects</h3>
          <p className="text-lg text-gray-600">Showcasing my work and side projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg border border-black">
              {/* Project Image */}
              {project.image && (
                <div className="mb-4">
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg border border-gray-300"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                  {project.status && (
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
