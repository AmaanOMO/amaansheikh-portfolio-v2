import React, { useState } from 'react'
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  MailIcon,
  HomeIcon,
  BriefcaseIcon,
  NewspaperIcon,
  CodeIcon,
  HammerIcon,
  BuildingIcon,
  Twitter,
  VideoIcon,
  BookOpenIcon,
  UsersIcon,
  ClockIcon,
  RotateCcwIcon,
} from 'lucide-react'
import { TikTokIcon } from './TikTokIcon'

export function Sidebar({ collapsed = false, onNavigate }) {
  const [activeItem, setActiveItem] = useState('Home')
  const [showVersionToggle, setShowVersionToggle] = useState(false)

  const handleNavigation = (label) => {
    setActiveItem(label)
    if (onNavigate) {
      onNavigate(label)
    }
  }

  // Navigation items
  const navItems = [
    {
      icon: <HomeIcon size={18} />,
      label: 'Home',
      active: activeItem === 'Home',
      onClick: () => handleNavigation('Home')
    },
    {
      icon: <BriefcaseIcon size={18} />,
      label: 'Experience',
      active: activeItem === 'Experience',
      onClick: () => handleNavigation('Experience')
    },
    {
      icon: <HammerIcon size={18} />,
      label: 'Projects',
      active: activeItem === 'Projects',
      onClick: () => handleNavigation('Projects')
    },
    {
      icon: <UsersIcon size={18} />,
      label: 'Leadership',
      active: activeItem === 'Leadership',
      onClick: () => handleNavigation('Leadership')
    },
    {
      icon: <VideoIcon size={18} />,
      label: 'Media',
      active: activeItem === 'Media',
      onClick: () => handleNavigation('Media')
    },
    {
      icon: <BookOpenIcon size={18} />,
      label: 'Blogs',
      active: activeItem === 'Blogs',
      onClick: () => handleNavigation('Blogs')
    },
    {
      icon: <CodeIcon size={18} />,
      label: 'Tech Stack',
      active: activeItem === 'Tech Stack',
      onClick: () => handleNavigation('Tech Stack')
    },
  ]

  return (
    <aside className={`w-full lg:fixed lg:h-screen lg:overflow-hidden bg-accent-50 border-r-2 border-black transition-all duration-300 ${
      collapsed ? 'lg:w-16' : 'lg:w-64'
    }`}>
      <div className={`flex flex-col h-full ${collapsed ? 'p-3' : 'p-6'}`}>
        {/* Profile Section */}
        <div className="text-center mb-4">
          <div className="relative inline-block mb-4">
            <img
              src="/Amaan.png"
              alt="Amaan Sheikh"
              className={`${collapsed ? 'w-12 h-12' : 'w-36 h-36'} rounded-lg border border-black object-cover transition-all duration-300`}
            />
            <img
              src="/cartoonmec.png"
              alt="Cartoon Amaan"
              className={`${collapsed ? 'w-12 h-12' : 'w-36 h-36'} rounded-lg border border-black object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300`}
            />
          </div>
          
          {!collapsed && (
            <>
              <h2 className="text-xl font-bold text-black mb-1">Amaan Sheikh</h2>
              <p className="text-sm text-black mb-1">Full Stack Developer</p>
              <p className="text-sm text-black mb-2">Software Engineer</p>
            </>
          )}
        </div>

        {/* Social Media Icons */}
        <div className={`flex justify-center gap-2 ${collapsed ? 'flex-col items-center mb-4' : 'mb-4'}`}>
          {!collapsed ? (
            // Expanded state - show all icons
            <>
              <a 
                href="https://github.com/AmaanOMO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
              >
                <GithubIcon size={12} />
              </a>
              <a 
                href="https://www.linkedin.com/in/amaansheikh-swe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
              >
                <LinkedinIcon size={12} />
              </a>
              <a 
                href="https://x.com/amaansheikhx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
              >
                <Twitter size={12} />
              </a>
              <a 
                href="https://www.tiktok.com/@amaanomo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
              >
                <TikTokIcon size={12} />
              </a>
              <a 
                href="mailto:amaansheikhme@gmail.com"
                className="w-6 h-6 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
              >
                <MailIcon size={12} />
              </a>
            </>
          ) : (
            // Collapsed state - show only LinkedIn in blue
            <a
              href="https://www.linkedin.com/in/amaansheikh-swe/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 flex items-center justify-center border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <LinkedinIcon size={14} />
            </a>
          )}
        </div>
        
        {!collapsed && <div className="border-t border-accent-300 mb-4"></div>}

        {/* Portfolio Section - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-600 mb-3">Portfolio</h3>
          </div>
          
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.onClick}
                  className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'} px-2 py-1.5 transition-colors w-full text-left ${
                    item.active 
                      ? 'bg-primary-500 text-white font-medium' 
                      : 'text-accent-700 hover:bg-accent-100'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <span className={collapsed ? '' : 'w-5'}>{item.icon}</span>
                  {!collapsed && item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Go Back in Time Toggle - Fixed Bottom */}
        <div className="mt-auto pt-4 border-t border-accent-300 relative">
          <button
            onClick={() => setShowVersionToggle(!showVersionToggle)}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'} px-2 py-1.5 transition-colors w-full text-left text-accent-700 hover:bg-accent-100`}
            title={collapsed ? 'Time' : 'Go back in time'}
          >
            <RotateCcwIcon className="w-4 h-4" />
            {!collapsed && <span className="text-sm">Go back in time</span>}
          </button>
          
          {/* Version Dropdown - Above Button */}
          {showVersionToggle && !collapsed && (
            <div className="absolute bottom-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <a
                href="https://personal-portfolio-amaans-projects-695e1d8c.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-center"
              >
                v1
              </a>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}


