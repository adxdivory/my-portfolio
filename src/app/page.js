"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpandableMenu from "./components/expandableMenu";
import "./globals.css";
import profile from '../../public/assets/ani-profile-21.png'
import SettingsMenu from "./components/SettingsMenu.js";
import logoicon from "../../public/assets/logo.PNG"

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
       <div className="relative flex flex-col justify-center top-[30px] md:top-[50px] left-[30px] z-50">
        <Image
                src={logoicon}
                alt="adxdivory logo"
                className="object-fit w-[30px] h-[40px] md:w-[50px] md:h-[60px]"
        />
        <div className={"text-sm md:text-xl" + (darkMode ? ' text-primaryD':' text-primary')}>
        <span className=" bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
          adxd
        </span>ivory
        </div>
        <div className="">
          <SettingsMenu />
        </div>
       </div>
       
      <ExpandableMenu className={styles.menu} />
      <main className={styles.main + (darkMode ? ' text-primaryD':' text-primary')}>
        <section id="home" className={styles.sections + ' ' + styles.home + '  flex flex-col items-center mt-20 ' + (darkMode ? ' bg-black':' bg-white')}>
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 pb-2 pt-5 md:px-10 md:pt-20 md:mt-20 md:pb-10  text-left">
            
            {/* Text Block */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className=" font-extrabold text-2xl md:text-4xl lg:text-5xl leading-tight">
                Hey, I'm Ivory
                <span className={darkMode ? ' text-lightVerde' : ' text-verde'}>.</span>
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text text-transparent mt-2 md:mt-6">
              Software Engineer & UX Designer
              </div>
              {/* <AdxdIntro /> */}
              <p className="text-sm md:text-base lg:text-lg max-w-xl mt-6">
                I have 6+ years of experience crafting thoughtful systems, AI-powered tools, and inclusive interfaces. I specialize in UX engineering, design systems, motion design, and human-centered problem solving that scales with clarity—not complexity.
              </p>
            </motion.div>

            {/* Image Block */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src={profile}
                alt="Profile Photo"
                className="object-cover w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] "
              />
            </motion.div>

          </div>
          {/* Tile Carousel Marquee */}
          <div className="w-full md:mt-10 lg:mt-32 pb-10 overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[
                'User Empathy',
                'Interaction',
                'Systems Thinker',
                'Inclusive Design',
                'Scalablility',
                'AI Exploration',
                'Product Vision',
                'Motion',
                'Design Systems',
                'Crossfunctional',
                'Prototyping',
                'Intuitive Design',
                'Curiousity',
                'Innovation',
                'Neurodivergence',
                'Problem Solver',
                'Accessibility',
                'Diversity',
                'Infinite Learning',
                'Research',
                'Tooling'

              ].map((word, index) => (
                <div
                  key={index}
                  className="rounded-full px-4 py-1 text-sm font-medium shadow-sm transition whitespace-nowrap
                    bg-gradient-to-br from-[#fce3ec] to-[#f9e0f0] text-purple-800
                    dark:from-[#6e00ff] dark:to-[#b4005f] dark:text-white"
                >
                  {word}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        

 
        
        <section id="about" className={
          styles.sections +
          ' ' +
          styles.about +
          ' relative overflow-hidden min-h-screen ' +
          (
            darkMode
              ? 'bg-gradient-to-b from-[#150a26] to-[#2a1b40] text-white sm:bg-[url("/assets/pattern-dark.svg")] sm:bg-[#0a0a0a] sm:bg-fixed sm:bg-center sm:bg-cover sm:bg-[length:120px_120px] md:bg-[length:200px_200px]'
              : 'bg-gradient-to-b from-[#ece0fa] to-[#d2b8f0] text-black sm:bg-[url("/assets/pattern-light.svg")] sm:bg-[#f9f9f9] sm:bg-fixed sm:bg-center sm:bg-cover sm:bg-[length:120px_120px] md:bg-[length:200px_200px]'
          )
        }>
          <div className="relative z-10 md:pt-12 w-full text-white text-center">
            <AboutMeConstellation />
          </div>
        </section>

        <section id="projects" className={styles.sections  + ' ' + styles.projects  + (darkMode ? ' bg-black':' bg-white')}>
          <ProjectGallery/>
        </section> 

        <section id="contact" className={
          styles.sections +
          ' ' +
          styles.contact +
          ' relative overflow-hidden bg-center bg-cover min-h-screen flex items-center justify-center ' +
          (
            darkMode
              ? 'bg-gradient-to-b from-[#150a26] to-[#2a1b40] text-white sm:bg-[url("/assets/pattern-dark.svg")] sm:bg-[#0a0a0a] sm:bg-fixed sm:bg-[length:80px_80px] sm:text-white md:bg-[length:200px_200px]'
              : 'bg-gradient-to-b from-[#ece0fa] to-[#d2b8f0] text-black sm:bg-[url("/assets/pattern-light.svg")] sm:bg-[#f9f9f9] sm:bg-fixed sm:bg-[length:80px_80px] sm:text-black md:bg-[length:200px_200px]'
          )
        }>
          <div className={"relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-md sm:max-w-3xl rounded-xl shadow-lg " + (darkMode ? " bg-black" : " bg-white")}>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text text-transparent relative z-10">
              Let's connect!
            </h2>
            <p className="text-sm md:text-base text-center mb-6 relative z-10">
              Thanks for stopping by! If you’re interested in working together or just want to chat about accessibility, AI, or great design, I’d love to hear from you. Feel free to reach out via email or connect with me on LinkedIn, and if you’d like a deeper dive into my experience, you can download my resume below. Looking forward to connecting!
            </p>
            <div className="flex justify-center gap-6 mt-4 relative z-10">
              <a href="/assets/Ivory_Brown_Resume.pdf" download target="_blank" rel="noopener noreferrer" title="Download Resume">
                <svg className="w-8 h-8 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 16l4-5h-3V4h-2v7H8l4 5zM4 18h16v2H4z"/></svg>
              </a>
              <a href="mailto:adxdivory@gmail.com" title="Email Ivory">
                <svg className="w-8 h-8 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 4H4v16h16V4zm-2.4 4.2L12 13.1 6.4 8.2l.6-.8 5 4.3 5-4.3.6.8z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/ivory-anna-brown-19b29011b/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg className="w-8 h-8 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zm7.5 0h4.7v2.3h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.3V24h-5V14.1c0-2.4-.1-5.5-3.3-5.5-3.3 0-3.8 2.5-3.8 5.3V24h-5V8z"/></svg>
              </a>
            </div>
          </div>
        </section>
        
      </main>
      <footer className={styles.footer + " text-xs text-center py-6 " + (darkMode ? "text-gray-400" : "text-gray-600")}>
        © {new Date().getFullYear()} Designed and built by Ivory Brown. All rights reserved.
      </footer>
    </div>
  );
}
