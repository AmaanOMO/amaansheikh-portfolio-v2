import React, { useState } from 'react'

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const techCategories = [
    {
      name: "Frontend",
      icon: "🏗️",
      description: "Modern frontend frameworks and libraries for building responsive, interactive web applications",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "N" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "HTML5", icon: "5" },
        { name: "CSS3", icon: "3" },
        { name: "TailwindCSS", icon: "〰️" },
        { name: "Framer Motion", icon: "⚡" },
        { name: "Redux", icon: "∞" },
        { name: "Zustand", icon: "▣" },
        { name: "GraphQL (Client)", icon: "⬡" },
        { name: "Radix UI", icon: "⚫" },
        { name: "Shadcn UI", icon: "//" }
      ]
    },
    {
      name: "Backend",
      icon: "🖥️",
      description: "Reliable server-side development and scalable APIs",
      technologies: [
        { name: "Spring Boot", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "⚡" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL (Server)", icon: "⬡" },
        { name: "WebSockets", icon: "💬" },
        { name: "Authentication", icon: "🔐" }
      ]
    },
    {
      name: "AI/ML",
      icon: "🧠",
      description: "Practical machine learning + LLM integration",
      technologies: [
        { name: "OpenAI API", icon: "🤖" },
        { name: "LangChain", icon: "⛓️" },
        { name: "Hugging Face", icon: "🤗" },
        { name: "Prompt Engineering", icon: "✍️" },
        { name: "LLM Apps", icon: "💡" },
        { name: "PyTorch", icon: "🔥" },
        { name: "TensorFlow", icon: "📊" }
      ]
    },
    {
      name: "Database",
      icon: "🗄️",
      description: "Data modeling, queries, and scalable persistence",
      technologies: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Supabase", icon: "⚡" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase", icon: "🔥" },
        { name: "Prisma ORM", icon: "🔧" }
      ]
    },
    {
      name: "Cloud/DevOps",
      icon: "☁️",
      description: "Cloud infra + deployment pipelines",
      technologies: [
        { name: "AWS", icon: "☁️" },
        { name: "Vercel", icon: "▲" },
        { name: "Netlify", icon: "🚀" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "⚡" }
      ]
    },
    {
      name: "Tools",
      icon: "🔧",
      description: "Everyday engineering tools that keep projects moving",
      technologies: [
        { name: "Git/GitHub", icon: "📚" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Notion", icon: "📝" }
      ]
    }
  ]

  const currentCategory = techCategories.find(cat => cat.name === activeCategory)

  return (
    <section className="py-0 mt-0">
      <div className="mb-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h3>
          <p className="text-lg text-gray-600">Developing skills across the tech stack (frontend, backend, AI/ML, cloud) and applying them through software and product engineering; building not just code, but usable products.</p>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row w-full mb-8">
          {techCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 transition-colors ${
                activeCategory === category.name
                  ? 'border-b-2 sm:border-b-2 border-primary-500 text-gray-900 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        {currentCategory && (
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-900">{currentCategory.name} Technologies</h4>
            </div>
            <p className="text-gray-700 mb-6">{currentCategory.description}</p>
            
            {/* Technology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {currentCategory.technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium text-gray-800">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
