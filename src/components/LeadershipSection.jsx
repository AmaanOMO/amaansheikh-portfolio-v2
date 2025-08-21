import React, { useState } from 'react'
import { BriefcaseIcon } from 'lucide-react'

export function LeadershipSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    'speakm.png',
    'joinForge.png'
  ]

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className="py-2 mt-2">
      <div className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership & Community</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Building and leading communities is one of the most fulfilling experiences ever, and I recommend everyone find a way to do it. Through founding UB Forge and guiding my peers in Theta Tau, I've learned that real leadership truly just comes down to meeting amazing people, making lifelong friends, and growing together while pushing each other forward. When you focus on these bonds and forget about the whole "leader" title, leadership will come naturally.            </p>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative">
            {/* Image Frame */}
            <div className="bg-white p-4 rounded-lg border border-black shadow-sm">
              <div className="relative w-full h-80 overflow-hidden rounded-lg">
                <img
                  src={`/${images[currentImageIndex]}`}
                  alt={`Leadership image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? 'bg-primary-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Entries */}
        <div className="space-y-6">
          {/* Founder & Executive Director */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Founder & Executive Director</h4>
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">Current</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">UB Forge</p>
                <p className="text-gray-500 text-sm mb-3">Mar 2025 - Present</p>
                <p className="text-gray-700 mb-3">
                  Founded and scaled Forge into a 40+ member dev collective.
                </p>
                <p className="text-gray-700 mb-3">
                  Built systems for mentorship, project building, and startup exploration.
                </p>
                <p className="text-gray-700 mb-4">
                  Connected students with mentors, investors, and opportunities to ship real projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Community Building", "Leadership", "Mentorship", "Startup Ecosystem", "Student Development"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Lead */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Marketing Lead</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Theta Tau</p>
                <p className="text-gray-500 text-sm mb-3">Dec 2024 - May 2025</p>
                <p className="text-gray-700 mb-3">
                  Drove engagement with posts tailored for CS & engineering audiences.
                </p>
                <p className="text-gray-700 mb-4">
                  Designed media, tracked performance, and grew chapter presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Marketing", "Social Media", "Content Creation", "Analytics", "Brand Growth"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Director of Professional Development */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Director of Professional Development</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Theta Tau</p>
                <p className="text-gray-500 text-sm mb-3">May 2024 - Jan 2025</p>
                <p className="text-gray-700 mb-3">
                  Organized company tours + panels, connecting 100+ students with Big Tech + startup engineers.
                </p>
                <p className="text-gray-700 mb-4">
                  Built opportunities for members to grow professionally and make industry connections.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Professional Development", "Networking", "Event Planning", "Industry Connections", "Student Growth"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pledge Class President */}
          <div className="bg-gray-100 p-6 rounded-lg border border-black">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Pledge Class President</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Theta Tau</p>
                <p className="text-gray-500 text-sm mb-3">Jan 2024 - Apr 2024</p>
                <p className="text-gray-700 mb-3">
                  Led a 19-person team to design an Arduino-powered catapult. Raised $1,900, coded in C++, and demoed to alumni.
                </p>
                <p className="text-gray-700 mb-4">
                  Learned to lead peers through tight timelines and team challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Team Leadership", "Project Management", "Hardware Projects", "Arduino", "C++", "Fundraising"].map((skill, index) => (
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
