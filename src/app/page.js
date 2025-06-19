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
import ProjectGallery from "./components/project_gallery";


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
              <div className={'font-roboto font-semibold text-14 lg:text-20 tracking-neg lg:leading-[20px] mr-2 mb-4' + (darkMode ? ' text-lightVerde':' text-verde')}>Hi, I&rsquo;m </div>
              <AdxdIntro/>
              <div className='font-extrabold  text-48 md:text-56 lg:text-96  lg:leading-[110px]'><span className='font-roboto'>Ivory</span><span className={(darkMode ? ' text-lightVerde':' text-verde')}>.</span></div>
                  <p className="text-left text-sm md:text-lg max-w-xl mt-10">
                    I’m a design technologist building thoughtful systems, AI-powered tools, and inclusive interfaces that scale with clarity—not complexity.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px]">
                
                <Image
                  src={profile}
                  alt="Profile Photo"
                  className=" object-cover w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] m-auto"
                />

              </div>
             
            </div>


            <div className={"max-w-4xl mx-auto absolute top-[85vh] z-10 py-10 px-20 rounded-full" + (darkMode? " bg-containerDark" : " bg-containerLight")}>
              <div className="text-lg md:text-xl font-bold mb-4"><span className="text-xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
                    ADXD
                  </span>... What even is that?</div>
              <p className="text-sm md:text-base mb-6 max-w-2xl">
                It stands for “Attention Deficit Experience Designer/Developer.” I coined it to describe how my neurodivergence 
                shapes how I work: fast-moving, deeply intuitive, empathy-driven, and obsessed with clarity.
              </p>
              <p className="text-sm md:text-base mb-6 max-w-2xl">I use my brain’s wiring as an asset—not a limitation—to create tools and systems that help everyone think more clearly, act more confidently, and feel less overwhelmed.</p>
              {/* <div className="space-y-5 text-left text-sm md:text-lg">
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
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-lg md:text-2xl">{line.icon}</span>
                    <p>{line.text}</p>
                  </motion.div>
                ))}
              </div> */}
            </div>
            
            {/* <div className="md:mt-12 animate-bounce" onClick={() => handleScroll('about')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={"w-8 h-8 " + (darkMode ? ' text-lightVerde':' text-verde')}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div> */}
          </div>
          
        </section>
        
        <section id="about" className={styles.sections + ' ' + styles.about + ' relative overflow-hidden'}>
          <SubtleParallaxBackground image="/assets/Blue-portfolio-beach.jpg" ></SubtleParallaxBackground>
          <div className="absolute top-[300px] md:top-[250px] w-[100vw] z-10 text-white text-center">
            <AboutMeConstellation/>
          </div>
        </section>

 
        
        <section id="projects" className={styles.sections  + ' ' + styles.projects  + (darkMode ? ' bg-black':' bg-white')}>
          <ProjectGallery/>
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
