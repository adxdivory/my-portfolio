import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSettings } from '../context/SettingsContext.js';

const bubbles = [
  { id: 'ai', label: 'AI for a better life', icon: '🤖', description: 'Exploring how AI can enhance everyday tasks and human well-being.' },
  { id: 'inclusion', label: 'Accessible & Inclusive Design', icon: '🧩', description: 'I specialize in accessibility-first design, ensuring digital experiences work for all users. I believe inclusive design leads to more intuitive solutions for everyone.' },
  { id: 'neuro', label: 'Neuro-spicy Warrior', icon: '🌶', description: 'A proud advocate for neurodivergent voices in tech, design, and everyday life.' },
  { id: 'bigpicture', label: 'The Big Picture', icon: '👩🏽‍💻', description: 'Zooming out to understand systems, structures, and long-term impact.' },
  { id: 'personal', label: 'Flying + Travel + Family', icon: '🌎🌱👩🏽‍🍼', description: 'Life beyond work: adventure, growth, and raising a kind human.' },
  { id: 'dog', label: 'Furry Coworker', icon: '🐶', description: 'Always nearby for a snuggle or a walk break.' },
  { id: 'mom', label: 'Mom Mode', icon: '🧑🏽‍🍼', description: 'Balancing late-night feedings with big ideas.' },
  { id: 'bridge', label: 'Bridging Worlds', icon: '🌉', description: 'Connecting design, tech, people, and perspectives.' },
];

export default function AboutMeConstellation() {
  const [selected, setSelected] = useState('ai');

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Title for large screens */}
      <h2 className={"hidden md:block text-3xl font-bold text-center mb-12 mt-8" + (darkMode ? " text-lightRoyal" : " text-royal")}>
        About me
      </h2>
      {/* Floating Bubbles Container Wrapper */}
      <div className="relative w-full flex justify-center items-center">
        <div className="hidden md:flex relative w-[800px] h-[800px] items-center justify-center p-4">
          {/* Central Rectangle */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={"absolute inset-0 m-auto z-30 rounded-xl shadow-lg px-6 py-4 text-center w-72 h-fit" + (darkMode ? " white bg-black":" text-primary bg-white")}
          >
            <h3 className={"font-semibold text-md mb-2" + (darkMode ? " text-lightRoyal":" text-royal")}>
              {selected ? bubbles.find(b => b.id === selected)?.label : "About me"}
            </h3>
            {selected && (
              <p className="text-sm">
                {bubbles.find(b => b.id === selected)?.description}
              </p>
            )}
          </motion.div>

          {/* Orbiting Bubbles */}
          {bubbles.map((bubble, index) => {
            const angle = (360 / bubbles.length) * index;
            const baseRadius = 260;
            const radius = baseRadius + (index % 2 === 0 ? 20 : -20);
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isSelected = selected === bubble.id;

            return (
              <motion.div
                key={bubble.id}
                onClick={() => setSelected(bubble.id)}
                className={`absolute cursor-pointer w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center rounded-full text-sm text-center shadow-md transition-all duration-300 ${
                  isSelected ? 'ring-4 ring-green-400' : ''
                } ${
                  darkMode
                    ? 'bg-black text-white hover:ring-2 hover:ring-lightRoyal hover:shadow-lg'
                    : 'bg-white text-primary hover:ring-2 hover:ring-royal hover:shadow-lg'
                }`}
                style={{ top: `calc(50% + ${y}px - 70px)`, left: `calc(50% + ${x}px - 70px)` }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -12, 0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              >
                <div className="absolute inset-0 rounded-full blur-sm bg-white/5 dark:bg-white/5 z-[-1]" />
                <span role="img" aria-label={bubble.label} className="text-4xl relative z-10">
                  {bubble.icon}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Fallback: Stacked bubbles */}
      <div className="md:hidden mt-8 w-full max-w-sm space-y-4">
        <h2 className={"text-2xl font-bold text-center mb-4" + (darkMode ? " text-lightRoyal" : " text-royal")}>
          About me
        </h2>
        {bubbles.map((bubble, index) => {
          const isActive = selected === bubble.id;
          return (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className={`transition-all duration-500 ease-in-out rounded-md shadow-sm  overflow-hidden ${
                  isActive ? 'max-h-[300px]' : 'max-h-[60px]'
                } ${darkMode ? ' white bg-black' :' text-primary bg-white'}`}
              >
                <button
                  onClick={() => setSelected(bubble.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:animate-pulse ${
                    isActive ? 'ring-2 ring-green-400' : ''
                  }`}
                >
                  <span className="text-lg">{bubble.icon}</span>
                  <span className="text-sm font-medium">{bubble.label}</span>
                </button>
                <div
                  className={`px-4 pb-4 pt-2 text-sm transition-opacity duration-500 ease-in-out ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {bubble.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
