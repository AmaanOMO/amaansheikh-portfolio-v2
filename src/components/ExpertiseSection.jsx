import React from 'react'

export function ExpertiseSection() {
  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow hover:border-primary-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Product Engineering
          </h3>
          <p className="text-gray-600">Developing AI-powered products from concept to deployment, with a focus on user experience and business impact.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow hover:border-primary-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Growth Strategy
          </h3>
          <p className="text-gray-600">Driving user acquisition and retention through data-driven marketing and product-led growth initiatives.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow hover:border-primary-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Technical Leadership
          </h3>
          <p className="text-gray-600">Leading cross-functional teams to deliver high-quality products on time, with a focus on innovation and scalability.</p>
        </div>
      </div>
    </section>
  )
}


