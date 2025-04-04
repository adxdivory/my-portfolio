import Image from "next/image";
import styles from "./page.module.css";
import ExpandableMenu from "./components/expandableMenu";
import "./globals.css";
import profile from '../../public/assets/profile-img-square.jpg'
import SubtleParallaxBackground from "./components/parallaxBackground";

export default function Home() {
  return (
    <div className={styles.page + ' font-spartan'}>
      
      <ExpandableMenu className={styles.menu} />
      <SubtleParallaxBackground />
      <main className={styles.main}>
        <section id="home" className={styles.sections + ' ' + styles.home}>
          <div className='lg:max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-[100px] h-[100%]'>
            <div className=' flex flex-col items-left text-left gap-[40px]'>
              
              <div className="flex flex-col text-left">
                <div className='font-spartan font-semibold lg:text-40 text-verde leading-[30px]'>Hi, I'm</div>
                <div className='font-spartan font-extrabold lg:text-96 text-primary tracking-neg leading-[110px]'>Ivory Brown</div>
                <div className="font-spartan font-regular lg:text-24 text-primary">Design Technologist / Front-end Engineer</div>
              </div>
              <div className="flex flex-row justify-center">
                
                <Image
                  src={profile}
                  alt="Profile Photo"
                  width={270}
                  height={270}
                  className=" object-cover w-[270px] h-[270px]"
                />
              
                <Image src='/assets/Tagline.svg' alt="Tagline" width={636} height={270} className="w-[636px] h-[250px]" />
              </div>

            </div>
            <div className="mt-12 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-verde">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
        </section>
        <section id="about" className={styles.sections + ' ' + styles.about + ' relative overflow-hidden'}>
          <SubtleParallaxBackground image="/assets/Blue-portfolio-beach.jpg" />
          <div className="relative z-10 text-white text-center p-20">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="text-xl mt-4">I’m a design technologist passionate about crafting intuitive, inclusive, and accessible digital experiences.</p>
          </div>
        </section>

 
        
        <section id="projects" className={styles.sections  + ' ' + styles.projects}>
          
        </section> 
        <section id="contact" className={styles.sections + ' ' + styles.contact + ' relative overflow-hidden'}>
          <SubtleParallaxBackground image="/assets/Blue-portfolio-lake.jpg" />
          <div className="relative z-10 text-white text-center p-20">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="text-xl mt-4">Get in touch with me!</p>
          </div>
        </section>
        
      </main>
      <footer className={styles.footer}>
     
      </footer>
    </div>
  );
}
