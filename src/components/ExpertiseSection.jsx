import React from 'react'

export function ExpertiseSection() {
  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Full-Stack Engineering
          </h3>
          <p className="text-gray-600">Building fast, scalable applications. From quick MVPs to polished, production-ready products.</p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            AI & Machine Learning
          </h3>
          <p className="text-gray-600">Experimenting with LLMs, transformers, and applied AI to create smarter products and constantly leveling up in AI/ML.</p>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Community & Leadership
          </h3>
          <p className="text-gray-600">Founded UB Forge and led in Theta Tau, helping teams ship projects, explore startups, and grow professionally. Met a lot of great people and made sure others did too.</p>
        </div>
      </div>
    </section>
  )
}


