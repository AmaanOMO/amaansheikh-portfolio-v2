import React from 'react'

export function StatsSection() {
  const stats = [
    {
      number: '5+',
      label: 'Years',
    },
    {
      number: '10+',
      label: 'Projects',
    },
    {
      number: '2x',
      label: 'Growth',
    },
  ]

  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 text-center">
            <span className="block text-4xl font-bold text-primary-500 mb-2">
              {stat.number}
            </span>
            <span className="text-gray-700">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


