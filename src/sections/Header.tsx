"use client";

import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  // Scroll detection to update active section
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear timeout to debounce scroll events
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const sections = ['home', 'projects', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for better detection

        // Check if we're at the top of the page
        if (window.scrollY < 50) {
          setActiveSection('home');
          return;
        }

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i] === 'home' ? null : sections[i];
          const section = sectionId ? document.getElementById(sectionId) : null;
          
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }, 10); // Small debounce delay
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleNavClick = (section: string, href: string) => {
    // Immediately update active section
    setActiveSection(section);
    
    // Handle navigation
    if (section === 'home' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.warn(`Section ${href} not found`);
      }
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* Animated background indicator */}
        <div 
          className="absolute top-0.5 left-0.5 h-[calc(100%-4px)] bg-white rounded-full transition-all duration-700 ease-out"
          style={{
            width: `calc(${100 / sections.length}% - 2px)`,
            transform: `translateX(${sections.findIndex(s => s.id === activeSection) * 100}%)`
          }}
        />
        
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className={`
              nav-item relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-out
              ${activeSection === section.id 
                ? 'text-gray-900 scale-105' 
                : 'text-white/70 hover:text-white hover:scale-102'
              }
            `}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(section.id, section.href);
            }}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
};