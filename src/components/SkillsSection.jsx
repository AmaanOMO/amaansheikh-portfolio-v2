import React from 'react'

export function SkillsSection() {
  const skills = [
    {
      title: 'Product Engineering',
      description: 'Developing AI-powered products from concept to deployment, with a focus on user experience and business impact.',
    },
    {
      title: 'Growth Strategy',
      description: 'Driving user acquisition and retention through data-driven marketing and product-led growth initiatives.',
    },
    {
      title: 'Technical Leadership',
      description: 'Leading cross-functional teams to deliver high-quality products on time, with a focus on innovation and scalability.',
    }
  ]

  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow hover:border-primary-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {skill.title}
            </h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


