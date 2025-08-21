import React from 'react'
import { BriefcaseIcon } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section className="py-1 mt-1">
      <div className="mb-8">
        {/* Work & Impact Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Work & Impact</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl">
            I focus on building products that shape the future and make life better for people. My goal is to create tools and technologies that reach not just a few, but whole communities, and hopefully, one day, the entire world. If your mission or vision backs this goal, feel free to reach out. I would love to connect!
          </p>
          
          {/* Tags/Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 w-full">
            {["Building what's next", "Staying ambitious", "Sharing knowledge", "Always learning", "Enjoying the journey"].map((tag, index) => (
              <span key={index} className="px-4 py-3 bg-gray-200 text-gray-800 rounded-md text-sm font-medium text-center">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Entries */}
        <div className="space-y-6">
          {/* Current Role */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Software Engineering Intern</h4>
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">Current</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">JET Worldwide Enterprises Inc.</p>
                <p className="text-gray-500 text-sm mb-3">Jun 2025 - Present</p>
                <p className="text-gray-700 mb-3">
                  Redesigned product site → 40% faster load times + better UX.
                </p>
                <p className="text-gray-700 mb-3">
                  Built public-facing LLM chatbot for fall risk/product Q&A using Groq's Mixtral API.
                </p>
                <p className="text-gray-700 mb-4">
                  Reviewed AWS infrastructure & data flow for future dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack", "AI/ML", "Next.js", "Product"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">AI Engineer</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Outlier AI</p>
                <p className="text-gray-500 text-sm mb-3">Nov 2024 - Jan 2025</p>
                <p className="text-gray-700 mb-3">
                  Improved LLM consistency by 25% through 100+ prompt designs + edge-case refinement.
                </p>
                <p className="text-gray-700 mb-3">
                  Automated evaluation pipelines → faster iteration.
                </p>
                <p className="text-gray-700 mb-4">
                  Helped optimize onboarding experience with smarter prompt flows.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI", "Prompt Engineering", "NLP", "LLMs"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Role */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Undergraduate Research Assistant</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">UB Computer Science and Engineering Department</p>
                <p className="text-gray-500 text-sm mb-3">Oct 2024 - Dec 2025</p>
                <p className="text-gray-700 mb-3">
                  Explored transformer-based HOI detection models with SONY-backed research.
                </p>
                <p className="text-gray-700 mb-4">
                  Reviewed codebase + embedding strategies for model development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Research", "Computer Vision", "Transformers"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
