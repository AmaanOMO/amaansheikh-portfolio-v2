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
            I focus on building products that shape the future and make life better for people. My goal is to create tools and technologies that reach not just a few, but whole communities, and hopefully, one day, the entire world. If your mission or vision backs this goal, feel free to reach out. I'd love to connect!
          </p>
          
          {/* Tags/Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 w-full">
            {["Building what's next", "Staying ambitious", "Sharing knowledge", "Always learning", "Enjoying the journey"].map((tag, index) => (
              <span key={index} className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-base font-medium flex-1 min-w-0 text-center">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Entries */}
        <div className="space-y-6">
          {/* Current Role */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Founder & Executive Director</h4>
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">Current</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">UB Forge</p>
                <p className="text-gray-500 text-sm mb-3">Jan 2023 - Present</p>
                <p className="text-gray-700 mb-3">
                  Founded and launched a student-run developers collective from scratch, bringing the builders environment to UB. Built partnerships and internal infrastructure for student-led MVPs, helping ambitious students build real-world projects, explore startups, and connect with mentors.
                </p>
                <p className="text-gray-700 mb-4">
                  Established and grew the organization to support multiple student projects, creating a community where builders can ship real MVPs and develop professionally.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Venture Building", "Student Leadership", "Community Building", "Startup Ecosystem", "Mentorship"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Head of Professional Development</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Theta Tau</p>
                <p className="text-gray-500 text-sm mb-3">Sep 2022 - Dec 2023</p>
                <p className="text-gray-700 mb-3">
                  Led professional development initiatives and ran tours, panels, and built new outreach systems. Led a 10-week engineering cohort and hardware build project, helping teams ship projects and grow professionally.
                </p>
                <p className="text-gray-700 mb-4">
                  Managed professional development programs and built new outreach systems to connect engineering students with industry opportunities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Professional Development", "Team Leadership", "Engineering Education", "Outreach", "Hardware Projects"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Another Role */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <BriefcaseIcon className="h-6 w-6 text-primary-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Software Engineering Intern</h4>
                </div>
                <p className="text-gray-600 font-medium mb-2">Tech Company</p>
                <p className="text-gray-500 text-sm mb-3">May 2023 - Aug 2023</p>
                <p className="text-gray-700 mb-3">
                  Developed full-stack applications and worked on AI/ML projects. Collaborated with cross-functional teams to deliver high-quality software solutions and gained hands-on experience with modern development practices.
                </p>
                <p className="text-gray-700 mb-4">
                  Contributed to multiple projects and learned industry best practices for software development and team collaboration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack Development", "AI/ML", "Team Collaboration", "Software Engineering", "Best Practices"].map((skill, index) => (
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
