import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { HeroSection } from './components/HeroSection'
import { ExpertiseSection } from './components/ExpertiseSection'
import { StatsSection } from './components/StatsSection'


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white">
      <Sidebar collapsed={sidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-[64px]' : 'lg:ml-[256px]'
      }`}>
        {/* Header Bar - Full Width */}
        <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b-2 border-black sticky top-0 bg-white z-50">
          <div className="flex items-center gap-1.5 ml-0">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-7 w-7 hover:bg-primary hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
            </button>
            <div className="w-px h-6 bg-black mx-2"></div>
            <span className="text-sm font-medium text-black">Home</span>
          </div>
          <button className="h-7 px-2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-medium border border-black transition-colors">
            Contact
          </button>
        </div>
        
        {/* Main Content */}
        <main className="w-full min-h-screen overflow-y-auto bg-white">
          {/* Content Container */}
          <div className="max-w-6xl mx-auto px-6 py-10">
            <HeroSection />
            <ExpertiseSection />
            <StatsSection />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App