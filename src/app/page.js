"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpandableMenu from "./components/expandableMenu";
import "./globals.css";
import profile from '../../public/assets/ani-profile-21.png'
import SubtleParallaxBackground from "./components/parallaxBackground";
import SettingsMenu from "./components/SettingsMenu.js";

import { motion } from 'framer-motion';

import { useSettings } from "./context/SettingsContext";
import AboutMeConstellation from "./components/about_me_constellation";
import AdxdIntro from "./components/adxd_intro_component";


export default function Home() {
  const { darkMode, reduceMotion, toggleDarkMode, toggleReduceMotion } = useSettings();

  const handleScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <div className={styles.page + (darkMode ? ' bg-black':' bg-white')}>
      <SettingsMenu />
      <ExpandableMenu className={styles.menu} />
      <SubtleParallaxBackground />
      <main className={styles.main + (darkMode ? ' text-primaryD':' text-primary')}>
        <section id="home" className={styles.sections + ' ' + styles.home + (darkMode ? ' bg-black':' bg-white')}>
          
          <div className=' md:max-w-2xs lg:max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-[30px] md:gap-[100px] h-[100%]'>
            <div className=' mt-[150px] md:mt-[200px] flex flex-row text-left gap-[10px] md:gap-[20px]'>
              
              <div className="flex flex-col text-left">
                {/* <div className={'relative top-1 left-1 font-roboto font-semibold text-16 lg:text-24 tracking-neg lg:leading-[20px]' + (darkMode ? ' text-lightVerde':' text-verde')}>Hey, I'm</div> */}
                {/* <div className='font-extrabold  text-32 md:text-56 lg:text-64 tracking-neg lg:leading-[110px]'><span className='font-roboto'>Ivory Brown</span><span className={(darkMode ? ' text-lightVerde':' text-verde')}>.</span></div> */}
                {/* <div className=" font-roboto font-semibold text-14 lg:text-20 md:mt-[10px]"><span className={' text-14 lg:text-32 text-bold'  + (darkMode ? ' text-lightRoyal':' text-royal')}>&#123;</span> Design Technologist <span className={'text-14 lg:text-24'+ (darkMode ? ' text-lightRoyal':' text-royal')}>/</span> Product Designer <span className={'text-14 lg:text-32 text-bold '+ (darkMode ? ' text-lightRoyal':' text-royal')}>&#125;</span></div> */}
                <AdxdIntro/>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px]">
                
                <Image
                  src={profile}
                  alt="Profile Photo"
                  className=" object-cover w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] m-auto"
                />

            {/* <div className="grid gap-2 text-12 md:text-lg text-slate-800 dark:text-slate-100 h-[120px]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1.5 }}
                  className={(darkMode ? ' text-primaryD':' text-primary')}
                >
                  <span className="text-green-500 font-medium">Design Systems.</span> Thoughtfully engineered.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 1.5 }}
                  className={(darkMode ? ' text-primaryD':' text-primary')}
                >
                  <span className="text-blue-500 font-medium">Interfaces.</span> Built for clarity, speed, and accessibility.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 1.5 }}
                  className={(darkMode ? ' text-primaryD':' text-primary')}
                >
                  <span className="text-purple-500 font-medium">AI-powered tooling.</span> Designed to elevate human focus.
                </motion.div>
              </div> */}
                {/* <Image src={(darkMode ? '/assets/tagline-dark.svg': '/assets/tagline-light.svg')} alt="Tagline" width={636} height={270} className="w-[330px] lg:w-[500px] lg:h-[270px] m-auto" /> */}
              </div>

            </div>
            <div className="md:mt-12 animate-bounce" onClick={() => handleScroll('about')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={"w-8 h-8 " + (darkMode ? ' text-lightVerde':' text-verde')}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
        </section>
        <section id="about" className={styles.sections + ' ' + styles.about + ' relative overflow-hidden'}>
          <SubtleParallaxBackground image="/assets/Blue-portfolio-beach.jpg" ></SubtleParallaxBackground>
          <div className="absolute top-[0px] md:top-[100px] w-[100vw] z-10 text-white text-center">
            <AboutMeConstellation/>
          </div>
        </section>

 
        
        <section id="projects" className={styles.sections  + ' ' + styles.projects  + (darkMode ? ' bg-black':' bg-white')}>
          
        </section> 
        <section id="contact" className={styles.sections + ' ' + styles.contact + ' relative overflow-hidden'}>
          <SubtleParallaxBackground image="/assets/Blue-portfolio-lake.jpg" />
          <div className="absolute top-[100px] w-[100vw] z-10 text-white text-center">
            <div className={ "m-auto h-[200px] w-[300px] md:w-[500px] md:h-[400px] rounded-md p-3 bg-opacity-80 " + (darkMode ? 'bg-black':'bg-white')}>
              <h1 className="text-5xl font-bold">Contact</h1>
              <p className="text-xl mt-4">Get in touch with me!</p>
            </div>
          </div>
        </section>
        
      </main>
      <footer className={styles.footer}>
     
      </footer>
    </div>
  );
}
