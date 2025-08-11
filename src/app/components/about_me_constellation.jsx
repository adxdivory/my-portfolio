import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSettings } from '../context/SettingsContext.js';

const bubbles = [
  { id: 'ai', label: 'AI for a More Human Experience', icon: '🤖', description: 'I see AI as more than just a tool—it’s an opportunity to give people back time for the things that truly matter. My work focuses on leveraging AI to reduce digital friction and make everyday tasks smarter, smoother, and more human.', size: 'w-32 h-32' },
  { id: 'inclusion', label: 'Accessible & Inclusive Design', icon: '🧩', description: 'I specialize in accessibility-first design, ensuring that digital experiences work for all users, not just the average user. My approach is rooted in the belief that designing with inclusivity in mind leads to better, more intuitive solutions for everyone.', size: 'w-24 h-24' },
  { id: 'neuro', label: 'ADXD.. What even is that?', icon: '🌶', description: 'It stands for “Attention Deficit Experience Designer/Developer”—my personal shorthand for how I use my ADHD superpowers to create clear, fast, and empathetic applications, design systems and tools. Fast-thinking, fast-making. Driven by instinct, curiosity and empathy. Obsessed with clarity and focus. Iterates quickly, learns faster.', size: 'w-32 h-32' },
  { id: 'personal', label: 'Flying + Travel + Family', icon: '🌎🌱🏂🏽', description: 'Life beyond work: adventure, growth, and experience. When I’m not designing or coding, you’ll find me snowboarding, exploring new places, baking or chasing other creative outlets. I believe a well-rounded life fuels better, more thoughtful design.', size: 'w-24 h-24' },
  { id: 'dog', label: 'Furry Coworker', icon: '🐶', description: 'I share my life with a gentle giant—a Great Dane named Blue Barry who reminds me daily of the importance of joy, patience, and making space for the things (and pets) we love. Update: Unfortunately, my oversized furry baby passed away on March 28th, 2025 at 7 years old. He will be forever missed.', size: 'w-24 h-24' },
  { id: 'mom', label: 'Mom Mode', icon: '🧑🏽‍🍼', description: 'Becoming a mom has given me a new lens on design, efficiency, and balance. I’m passionate about building products that simplify life, so we can spend less time on the mundane and more time being present with the people we love.', size: 'w-32 h-32' },
  { id: 'bridge', label: 'Bay Area Native', icon: '🌉', description: 'I grew up in the Bay Area, where I saw the magic of Silicon Valley up close—innovation, ambition, and world-changing ideas everywhere. But while attending high school in East Palo Alto, I also witnessed the stark gap in access and opportunity shaped by socioeconomic status. That contrast fuels my passion for tech equity and designing tools that create real opportunities for those too often left out of the conversation.', size: 'w-24 h-24' },
  { id: 'bigpicture', label: 'The Big Picture', icon: '👩🏽‍💻', description: 'I’m not just designing for today—I’m building for a future where technology feels like a helping hand, not a burden. My goal is to create meaningful, intuitive, and human-centered experiences that make life a little easier for everyone.', size: 'w-32 h-32' }
];

export default function AboutMeConstellation() {
  const [selected, setSelected] = useState('ai');

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();


  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4">
      {/* Title for large screens */}
      <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-2xl md:text-4xl font-bold  drop-shadow-lg dark:drop-shadow-md  ${darkMode ? 'text-primaryD' : 'text-primary'}`}
            >
               About me<span className={darkMode ? ' text-lightVerde' : ' text-verde'}>.</span>
            </motion.h2>
      {/* Floating Bubbles Container Wrapper */}
      <div className="relative w-full flex justify-center items-center">
        <div className="hidden md:grid grid-cols-6 grid-rows-4 gap-4 max-w-5xl p-4"
          style={{
            gridTemplateAreas: `
              "ai ai inclusion inclusion neuro neuro"
              "ai ai personal personal dog dog"
              "mom mom bridge bridge bigpicture bigpicture"
              "mom mom bridge bridge bigpicture bigpicture"
            `
          }}
        >
          {bubbles.map((bubble) => {
            const isSelected = selected === bubble.id;
            const baseSizeClasses = bubble.size;
            return (
              <motion.div
                key={bubble.id}
                layout
                onClick={() => setSelected(bubble.id)}
                initial={false}
                animate={{
                  width: isSelected ? '16rem' : undefined,
                  height: isSelected ? 'auto' : undefined,
                  zIndex: isSelected ? 20 : 10,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`cursor-pointer rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 select-none
                  ${darkMode ? 'bg-black text-white' : 'bg-white text-primary'}
                  ${isSelected ? 'ring-4 ring-green-400' : ''}
                  `}
                style={{
                  gridArea: bubble.id,
                  width: isSelected ? '16rem' : undefined,
                  height: isSelected ? 'auto' : undefined,
                  minWidth: isSelected ? '16rem' : undefined,
                  minHeight: isSelected ? '16rem' : undefined,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                <motion.span
                  role="img"
                  aria-label={bubble.label}
                  className="text-5xl mb-2"
                  layout="position"
                >
                  {bubble.icon}
                </motion.span>
                <motion.h3
                  className={`font-semibold mb-2 ${darkMode ? 'text-lightRoyal' : 'text-royal'}`}
                  layout="position"
                >
                  {bubble.label}
                </motion.h3>
                {isSelected && (
                  <motion.p
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {bubble.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

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
