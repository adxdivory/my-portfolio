"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Eye, Mail } from 'lucide-react';

import '../globals.css'

import './ExpandableMenu.scss'

const sections = [
  { name: 'Home', icon: <Home />, id: 'home' },
  { name: 'About me', icon: <User />, id: 'about' },
  { name: 'Projects', icon: <Eye />, id: 'projects' },
  { name: 'Contact', icon: <Mail />, id: 'contact' },
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

  useEffect(() => {
    const handleScroll = () => {
      setCurrentSection(getCurrentSection());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div 
      className="fixed right-[-150px] top-10 flex flex-col items-left space-y-2 z-50 bg-white rounded-md p-3 pr-[200px] bg-opacity-70"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: .5 }}
          animate={{ opacity: section.id === currentSection ? 1 : 1 }}
          className="flex items-center space-x-2"
        >
          <motion.div
            className={`w-3 h-3 rounded-full ${section.id === currentSection ? 'bg-verde !important' : 'bg-purp'}`}
          ></motion.div>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={` ${section.id === currentSection ? 'font-bold' : ''} text-primary`} //${((currentSection === 'about')||(currentSection === 'contact')) ? 'text-white' : 'text-primary'}
            >
              {section.name}
            </motion.span>
          )}
          {section.id === currentSection && !isHovered && (
            <motion.div className={`p-1  text-primary`}>{section.icon}</motion.div> //${((currentSection === 'about')||(currentSection === 'contact')) ? 'text-white' : 'text-primary'}
          )}
        </motion.div>
      ))}
    </div>
  );
}
