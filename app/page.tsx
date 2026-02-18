import Hero from '../components/Hero';
import Experience from '../components/Experiences';
import Projects from '../components/Projects';
import Skills from '../components/Skills'; 
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />      
      <Education />  
      <Contact />   
    </>
  );
}