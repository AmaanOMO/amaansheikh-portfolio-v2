import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import geoData from '../../public/world-countries.json'

export function WorldMapSection() {
  const [hoveredCountry, setHoveredCountry] = useState(null)
  
  // Countries you've visited (using numeric IDs from the GeoJSON file)
  const visitedCountries = ["586", "124", "840", "784", "044"]
  
  return (
    <section className="py-8 border-t border-gray-200 mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">World Map</h2>
        <p className="text-lg text-gray-600">Countries I've visited and want to visit</p>
      </div>

      {/* World Map Visualization */}
      <div className="mb-8">
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="w-full h-96 bg-white rounded-lg border border-gray-300 relative overflow-hidden">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 150,
              }}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isVisited = visitedCountries.includes(geo.id)
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isVisited ? '#0D5D56' : '#d1d5db',
                            outline: 'none',
                            stroke: '#ffffff',
                            strokeWidth: 0.5,
                          },
                          hover: {
                            fill: '#72A98F',
                            outline: 'none',
                            stroke: '#ffffff',
                            strokeWidth: 0.5,
                          },
                        }}
                        onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>
            
            {/* Tooltip */}
            {hoveredCountry && (
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow border border-gray-200 z-10">
                {hoveredCountry}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary-500 rounded"></div>
          <span className="text-sm text-gray-700">Visited</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <span className="text-sm text-gray-700">Not Yet Visited</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent-500 rounded"></div>
          <span className="text-sm text-gray-700">Hover</span>
        </div>
      </div>

      {/* Countries Visited List */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Countries Visited</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-primary-500 mb-2">North America</h4>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700">United States (Home)</li>
              <li className="text-sm text-gray-700">Canada</li>
              <li className="text-sm text-gray-700">Bahamas</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-primary-500 mb-2">Asia</h4>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700">Pakistan</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-primary-500 mb-2">Middle East</h4>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700">United Arab Emirates (Dubai)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
