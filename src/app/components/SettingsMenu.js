"use client";
import React, { useState, useEffect, useContext, useReducer} from 'react';
import { Settings, Sun, Moon } from 'lucide-react';

import { useSettings } from '../context/SettingsContext.js';

export default function SettingsMenu() {

    const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();
    const [menuState, toggleMenuState] = useState(false);

    const toggleMenu = () => toggleMenuState((prevState) => !prevState);

    return (
        // <div className={'absolute flex flex-col items-left p-1 left-5 md:left-10 top-10 gap-3 z-4 '}>
        //     <Settings onClick={toggleMenu} className={'stroke-2 h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] ' + (darkMode ? 'text-vibPurp' : 'text-purp') }></Settings>
        //         {menuState && (
        //             <div className={'filter z-10 drop-shadow-[0px_2px_6px_rgba(0,0,0,0.15)] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.30)] flex flex-col justify-center w-[240px] h-[140px] align-center rounded-[4px] ' + (darkMode ? 'bg-containerDark' : 'bg-containerLight') }>
        //                     <div 
        //                         onClick={toggleDarkMode} 
        //                         className={`m-auto mb-0 w-[215px] h-[44px] rounded-full cursor-pointer transition-colors duration-300 ${
        //                             darkMode ? 'bg-purp' : 'bg-lavender'
        //                         }`}
        //                     >
                            
        //                         <div 
        //                             className={`relative top-1 left-1 h-[36px] w-[105px] rounded-full transition-transform duration-300 ease-in-out ${
        //                                 darkMode ? 'translate-x-[102px] bg-black' : 'bg-white'
        //                             }`}
        //                         >
        //                             <span className={`block w-full text-center pt-1  `+ (darkMode ? 'text-primaryD' : 'text-primary')}>
        //                                 {darkMode ? 'Dark mode' : 'Light mode'}
        //                             </span>
        //                         </div>
        //                         {/* This is the text outside the button (the inactive option) */}
        //                         <span className={`absolute top-[22px] right-4 h-[36px] w-[105px] text-center pt-1 transition-transform duration-100 `+ (darkMode ? 'translate-x-[-102px] text-primaryD' : 'text-primary')}>
        //                                 {darkMode ? 'Light mode' : 'Dark mode'}
        //                         </span> 
        //                     </div>
        //                     <div 
        //                         className={`m-auto relative  flex flex-row w-[215px] h-[44px] align-center justify-center gap-[10px] rounded-full border ${
        //                             darkMode ? 'border-purp' : 'border-lavender'
        //                         }`}
        //                     >
        //                         <div className={'m-auto relative transition-colors duration-300 ease-in-out ' + (darkMode ? 'text-primaryD' : 'text-primary')}>
        //                             Reduce motion
        //                         </div>
        //                         <div 
        //                             onClick={toggleReduceMotion}
        //                             className={` m-auto h-[24px] w-[48px] rounded-full transition-transform cursor-pointer transition-colors duration-300 ease-in-out ${
        //                                 darkMode ? 'bg-vibPurp' : 'bg-purp'
        //                             }`}
        //                         >
        //                             <div
        //                             className={`relative top-[2px] left-[2px] h-[20px] w-[24px] my-auto rounded-full transition-transform cursor-pointer duration-300 ease-in-out ${
        //                                 darkMode ? 'bg-black' : 'bg-white'
        //                             } ${
        //                                 reduceMotion ? 'translate-x-[20px]' : ''
        //                             }`}
        //                             ></div>

        //                         </div>

        //                     </div>


        //             </div>
        //         )}

        // </div>

        <div className="fixed bottom-4 right-4 z-50">
            <div
                onClick={toggleDarkMode}
                className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
                {darkMode ? (
                  <Moon className="h-6 w-6 text-white" />
                ) : (
                  <Sun className="h-6 w-6 text-black" />
                )}
            </div>
        </div>
    );
}