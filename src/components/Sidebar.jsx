import React, { useState, useEffect } from 'react'
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

export function Sidebar({ collapsed = false, onNavigate, mobileOpen = false, onMobileClose }) {
  const [activeItem, setActiveItem] = useState('Home')
  const [showVersionToggle, setShowVersionToggle] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleNavigation = (label) => {
    setActiveItem(label)
    if (onNavigate) {
      onNavigate(label)
    }
    // Close mobile sidebar after navigation
    if (onMobileClose) {
      onMobileClose()
    }
  }

  // Touch gesture handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50

    if (isLeftSwipe && mobileOpen && onMobileClose) {
      onMobileClose()
    }
  }

  // Reset version toggle when mobile sidebar opens/closes
  useEffect(() => {
    if (!mobileOpen) {
      setShowVersionToggle(false)
    }
  }, [mobileOpen])

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
    <>
      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-accent-50/95 backdrop-blur-sm border-r-2 border-black z-50 transform transition-all duration-500 ease-out shadow-2xl ${
        mobileOpen ? 'translate-x-0 scale-100' : '-translate-x-full scale-95'
      }`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={onMobileClose}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-accent-100 rounded-md transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Profile Section */}
          <div className="text-center mb-4 mt-14">
            <div className="relative inline-block mb-4">
              <img
                src="/Amaan.png"
                alt="Amaan Sheikh"
                className="w-28 h-28 rounded-lg border border-black object-cover transition-all duration-300"
              />
              <img
                src="/cartoonmec.png"
                alt="Cartoon Amaan"
                className="w-28 h-28 rounded-lg border border-black object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <h2 className="text-lg font-bold text-black mb-1">Amaan Sheikh</h2>
            <p className="text-xs text-black mb-1">Full Stack Developer</p>
            <p className="text-xs text-black mb-2">Software Engineer</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-2 mb-4">
            <a 
              href="https://github.com/AmaanOMO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-5 h-5 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
            >
              <GithubIcon size={10} />
            </a>
            <a 
              href="https://www.linkedin.com/in/amaansheikh-swe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-5 h-5 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
            >
              <LinkedinIcon size={10} />
            </a>
            <a 
              href="https://x.com/amaansheikhx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-5 h-5 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
            >
              <Twitter size={10} />
            </a>
            <a 
              href="https://www.tiktok.com/@amaanomo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-5 h-5 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
            >
              <TikTokIcon size={10} />
            </a>
            <a 
              href="mailto:amaansheikhme@gmail.com"
              className="w-5 h-5 flex items-center justify-center border border-black/40 text-black hover:bg-black hover:text-white transition-colors"
            >
              <MailIcon size={10} />
            </a>
          </div>
          
          <div className="border-t border-accent-300 mb-4"></div>

          {/* Portfolio Section - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Portfolio</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={item.onClick}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        item.active
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-700 hover:bg-accent-100'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Version Toggle */}
          <div className="mt-auto relative">
            <button
              onClick={() => setShowVersionToggle(!showVersionToggle)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-accent-100 transition-colors rounded-md"
            >
              <RotateCcwIcon size={16} />
              Go back in time
            </button>
            
            {/* Version Dropdown - Above Button */}
            {showVersionToggle && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
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

      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block w-full lg:fixed lg:h-screen lg:overflow-hidden bg-accent-50 border-r-2 border-black transition-all duration-300 ${
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
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={item.onClick}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        item.active
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-700 hover:bg-accent-100'
                      }`}
                    >
                      {item.icon}
                      {!collapsed && item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Version Toggle */}
          <div className="mt-auto relative">
            <button
              onClick={() => setShowVersionToggle(!showVersionToggle)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-accent-100 transition-colors rounded-md"
            >
              <RotateCcwIcon size={16} />
              {!collapsed && "Go back in time"}
            </button>
            
            {/* Version Dropdown - Above Button */}
            {showVersionToggle && !collapsed && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
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
    </>
  )
}


