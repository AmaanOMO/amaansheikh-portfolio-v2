import React from 'react'
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
} from 'lucide-react'

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 12, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.11V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function Sidebar({ collapsed = false }) {
  // Navigation items
  const navItems = [
    {
      icon: <HomeIcon size={18} />,
      label: 'Home',
      active: true,
    },
    {
      icon: <BriefcaseIcon size={18} />,
      label: 'Experience',
      active: false,
    },
    {
      icon: <HammerIcon size={18} />,
      label: 'Projects',
      active: false,
    },
    {
      icon: <UsersIcon size={18} />,
      label: 'Leadership',
      active: false,
    },
    {
      icon: <VideoIcon size={18} />,
      label: 'Media',
      active: false,
    },
    {
      icon: <BookOpenIcon size={18} />,
      label: 'Blogs',
      active: false,
    },
    {
      icon: <CodeIcon size={18} />,
      label: 'Tech Stack',
      active: false,
    },
  ]

  return (
    <aside className={`w-full lg:fixed lg:h-screen lg:overflow-hidden bg-accent-50 border-r-2 border-black transition-all duration-300 ${
      collapsed ? 'lg:w-16' : 'lg:w-64'
    }`}>
      <div className={`flex flex-col h-full ${collapsed ? 'p-3' : 'p-6'}`}>
        {/* Profile Section */}
        <div className={`flex flex-col items-center mb-2 ${collapsed ? 'px-0' : ''}`}>
          <div className={`${collapsed ? 'w-12 h-12' : 'w-36 h-36'} rounded-lg overflow-hidden mb-2 border border-black relative group`}>
            <img
              src="/Amaan.png"
              alt="Amaan Sheikh"
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="/cartoonmec.png"
              alt="Amaan Sheikh Cartoon"
              className="absolute inset-0 w-full h-full object-top rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          {!collapsed && (
            <>
              <h2 className="text-xl font-bold text-black text-center">
                Amaan Sheikh
              </h2>
              <p className="text-sm text-black mt-1 text-center">Full Stack Developer</p>
              <p className="text-sm text-black text-center">Software Engineer</p>
            </>
          )}
        </div>

        {/* Social Media Icons */}
        <div className={`flex justify-center gap-2 ${collapsed ? 'flex-col items-center mb-2' : 'mb-3'}`}>
          {!collapsed ? (
            // Expanded state - show all icons
            [GithubIcon, LinkedinIcon, Twitter, TikTokIcon, MailIcon].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-6 h-6 flex items-center justify-center border border-accent-500 text-accent-700 hover:bg-accent-500 hover:text-white transition-colors"
                >
                  <Icon size={12} />
                </a>
              ),
            )
          ) : (
            // Collapsed state - show only LinkedIn in blue
            <a
              href="#"
              className="h-7 w-7 flex items-center justify-center border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <LinkedinIcon size={14} />
            </a>
          )}
        </div>
        
        {/* Separator Line */}
        <div className="border-t border-accent-300 mb-3"></div>

        {/* Portfolio Section Header */}
        {!collapsed && (
          <div className="mb-3">
            <h3 className="text-base font-semibold text-gray-600">Portfolio</h3>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'} px-2 py-1.5 transition-colors ${
                    item.active 
                      ? 'bg-primary-500 text-white font-medium' 
                      : 'text-accent-700 hover:bg-accent-100'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <span className={collapsed ? '' : 'w-5'}>{item.icon}</span>
                  {!collapsed && item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Blank Space (removed newsletter) */}
        <div className="mt-auto"></div>
      </div>
    </aside>
  )
}


