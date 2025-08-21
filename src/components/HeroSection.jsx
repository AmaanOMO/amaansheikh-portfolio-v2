import React, { useState, useEffect } from 'react'
import { PanelLeft, HomeIcon } from 'lucide-react'

export function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Into Full-Stack and AI/ML",
    "Future bajillionaire",
    "I like cats and volleyball"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section className="relative">
      <div className="mb-4 pt-1">
        <div className="h-6 flex items-start justify-start">
          <span className="text-gray-700 font-medium tracking-wider uppercase text-xs">
            {currentText}
            <span className="inline-block w-0.5 h-4 bg-primary-500 ml-1 animate-pulse"></span>
          </span>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hey, I'm <span className="text-primary-500">Amaan</span>
          </h1>
          
          <div className="space-y-4 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Full-stack software engineer + junior at SUNY University at Buffalo studying (CS + Stats). I spend most of my time building, learning, and turning random ideas into code.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              On campus, I founded UB Forge, a student-run dev collective where builders ship real MVPs, explore startups, and connect with mentors. Basically bringing the builders enviorment to UB.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
            Right now, I'm deep-diving into AWS and AI/ML, while also starting content creation on TikTok and Instagram to share my journey, projects, and tech news. Outside of tech, I'm into volleyball, traveling, and spending time with friends and family.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
            Long term? I'm chasing bajillionaire status — with a black GT3 RS in the garage. 🏎️
            </p>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            <img
              src="/suit.png"
              alt="Amaan Sheikh in suit"
              className="w-full lg:w-48 h-48 object-cover rounded-lg border border-black mx-auto lg:mx-0"
              style={{ objectPosition: '50% 40%' }}
            />
            <img
              src="/workingme.png"
              alt="Amaan Sheikh working"
              className="w-full lg:w-48 h-48 object-cover rounded-lg border border-black mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


