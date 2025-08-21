import React from 'react'
import { PanelLeft, HomeIcon } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative">
      
                        <div className="mb-4 pt-6">
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 font-medium tracking-wider uppercase rounded text-xs">
                      FULL STACK DEVELOPER • TECH ENTHUSIAST • PROBLEM SOLVER
                    </span>
                  </div>
      
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Hey, I'm <span className="text-primary-500">Amaan</span>
      </h1>
      
      <div className="space-y-4 max-w-4xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a passionate Full Stack Developer with expertise in modern web technologies. 
          I love building scalable applications that solve real-world problems and create 
          meaningful user experiences.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          With a strong foundation in both frontend and backend development, I specialize 
          in React, Node.js, and cloud technologies. I'm always eager to learn new 
          technologies and contribute to innovative projects.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, contributing 
          to open source projects, or sharing knowledge with the developer community.
        </p>
      </div>
    </section>
  )
}


