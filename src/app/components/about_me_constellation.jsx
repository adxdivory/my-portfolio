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
];

export default function AboutMeConstellation() {
  const [selected, setSelected] = useState('ai');

  const radius = 200; // desktop radius

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Floating Bubbles Container Wrapper */}
      <div className="relative w-full flex justify-center items-center">
        <div className="hidden  md:block relative mx-auto w-[500px] h-[500px] flex items-center justify-center">
          {/* Center Bubble */}
          <div
            className={"z-10 bg-opacity-80 rounded-full shadow-md w-[150px] h-[150px] flex items-center justify-center text-center font-bold text-lg" + (darkMode ? "white bg-black":"text-primary bg-white")}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            About me
          </div>

          {/* Outer Bubbles */}
          {bubbles.map((bubble, index) => {
            const angle = (360 / bubbles.length) * index;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isSelected = selected === bubble.id;

            return (
              <motion.div
                key={bubble.id}
                onClick={() => setSelected(bubble.id)}
                className={`absolute bg-opacity-80 cursor-pointer w-[150px] h-[150px] flex items-center justify-center rounded-full text-sm text-center shadow-md z-20 transition-all duration-300 ${
                  isSelected ? 'ring-4 ring-green-400' : ''
                } ${darkMode ? ' white bg-black':' text-primary bg-white'}`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  translateX: `${x - 75}px`,
                  translateY: `${y - 75}px`
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span role="img" aria-label={bubble.label} className="text-40">
                  {bubble.icon}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Description Box */}
      {selected && (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={"hidden md:block mt-8 w-full max-w-lg rounded-lg shadow-lg p-5 text-center" + (darkMode ? " white bg-black":" text-primary bg-white")}
        >
          <h3 className={"font-semibold text-md mb-2" + (darkMode ? " text-lightRoyal":" text-royal")}>
            {bubbles.find(b => b.id === selected)?.label}
          </h3>
          <p className="text-sm">
            {bubbles.find(b => b.id === selected)?.description}
          </p>
        </motion.div>
      )}

      {/* Mobile Fallback: Stacked bubbles */}
      <div className="md:hidden mt-8 w-full max-w-sm space-y-4">
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
