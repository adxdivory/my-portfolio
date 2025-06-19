"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Eye, Mail } from 'lucide-react';

import '../globals.css'


import { useSettings } from "../context/SettingsContext";

const sections = [
  { name: 'Home', icon: <Home className='h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]' />, id: 'home' },
  { name: 'About me', icon: <User className='h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]' />, id: 'about' },
  { name: 'Projects', icon: <Eye className='h-[20px] w-[20px] lh:h-[30px] lg:w-[30px]' />, id: 'projects' },
  { name: 'Contact', icon: <Mail  className='h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]'/>, id: 'contact' },
];

function getCurrentSection() {
  let currentSection = 'home';
  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    }
  });
  return currentSection;
}



export default function ExpandableMenu() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setCurrentSection(getCurrentSection());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
  <div 
      className={"fixed right-[-190px] md:right-[-160px] lg:right-[-130px] top-10 flex flex-col items-left space-y-2 z-50 rounded-md p-3 pr-[200px] bg-opacity-70 " + (darkMode ? 'bg-black':'bg-white')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sections.map((section) => (
        <motion.div
          onClick={() => handleScroll(section.id)}
          key={section.id}
          initial={{ opacity: .5 }}
          animate={{ opacity: section.id === currentSection ? 1 : 1 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <motion.div
            className={` rounded-full ${section.id === currentSection ? ((darkMode ? 'w-2 h-2 lg:w-3 lg:h-3 bg-lightVerde !important':'w-2 h-2 lg:w-3 lg:h-3 bg-verde !important')) : ((darkMode ? 'w-1 h-1 lg:w-2 lg:h-2 bg-vibPurp':'w-1 h-1 lg:w-2 lg:h-2 bg-purp'))}`}
          ></motion.div>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onMouseOver={() => setIsFocused(true)}
              className={`text-14 lg:text-16 ${section.id === currentSection ? 'font-bold text-16 lg:text-20' : ''} ${darkMode ? 'text-primaryD':'text-primary'} `} //${((currentSection === 'about')||(currentSection === 'contact')) ? 'text-white' : 'text-primary'}
            >
              {section.name}
            </motion.span>
          )}
          {section.id === currentSection && !isHovered && (
            <motion.div className={`p-1 `+ (darkMode ? 'text-primaryD':'text-primary')}>{section.icon}</motion.div> //${((currentSection === 'about')||(currentSection === 'contact')) ? 'text-white' : 'text-primary'}
          )}
        </motion.div>
      ))}
    </div>
  );
}
