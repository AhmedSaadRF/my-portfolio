"use client";

import { SetStateAction, useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}onClick={() => handleNavClick('home')}>Home</a>
        <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}onClick={() => handleNavClick('projects')}>Projects</a>
        <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}onClick={() => handleNavClick('about')}>About</a>
        <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}onClick={() => handleNavClick('contact')}>Contact</a>
      </nav>
    </div>
  );
};