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
      <h1 className="text-2xl md:text-4xl font-extrabold flex items-center">
       
        <span className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
          ADXD
        </span>
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
            <span className="text-l md:text-xl font-bold">{isDesigner ? 'esigner' : 'eveloper'}</span>
          </motion.span>
        </AnimatePresence>
      </h1>
      
      
    </div>
  );
}
