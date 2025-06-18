import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import "../globals.css";
import { useSettings } from '../context/SettingsContext.js';

export default function AdxdIntro() {
  const [isDesigner, setIsDesigner] = useState(true);

  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDesigner(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className={'font-roboto font-semibold text-16 lg:text-24 tracking-neg lg:leading-[20px] mr-2' + (darkMode ? ' text-lightVerde':' text-verde')}>Hey, I'm </div>
      <div className='font-extrabold  text-32 md:text-56 lg:text-80 tracking-neg lg:leading-[110px]'><span className='font-roboto'>Ivory Brown</span><span className={(darkMode ? ' text-lightVerde':' text-verde')}>.</span></div>
      <h1 className="text-left text-xl md:text-3xl font-extrabold flex items-baseline">
       
        <span>ADXD</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={isDesigner ? 'designer' : 'developer'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={"flex items-baseline gap-1"  + (isDesigner ?  (darkMode ? " text-vibPurp": " text-purp"): (darkMode ? " text-lightRoyal": " text-royal"))}
          >
            {/* <span className="text-4xl md:text-6xl font-extrabold">D</span> */}
            <span className="text-l md:text-2xl font-bold">{isDesigner ? 'esigner' : 'eveloper'}</span>
          </motion.span>
        </AnimatePresence>
      </h1>
      
      <p className={"text-left text-sm md:text-lg max-w-xl" + (darkMode ? " text-gray-500": " text-gray")} >
        Attention Deficit Experience {isDesigner ? 'Designer' : 'Developer'}.
        A creative technologist who designs and builds for brains that zig when others zag.
      </p>

      <div className="mt-8 space-y-5 text-left text-sm md:text-lg">
        {[
          { icon: '🧠', text: 'I design and build tools that work with distracted brains, not against them.' },
          { icon: '💡', text: 'From design systems to AI workflows, I specialize in frictionless clarity.' },
          { icon: '🛠️', text: 'ADHD isn’t a barrier—it’s my design superpower.' },
        ].map((line, i) => (
          <motion.div
            key={line.text}
            className="flex items-start gap-2 leading-[1.6]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg md:text-2xl">{line.icon}</span>
            <p>{line.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
