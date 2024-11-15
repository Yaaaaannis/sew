import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Neon from './Neon';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const showAnim = gsap.from(headerRef.current, {
      yPercent: -250,
      paused: true,
      duration: 0.3
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        const scrollVelocity = self.getVelocity();
        
        if (scrollVelocity < -50) {
          showAnim.play();
        } else if (scrollVelocity > 50) {
          showAnim.reverse();
        }
      }
    });
  }, []);

  return (
    <div 
      ref={headerRef}
      className='fixed top-0 left-0 w-full flex justify-between items-center p-4 font-gothic text-2xl px-20 text-[#FFFF] bg-[#2B2B2B]/80 backdrop-blur-sm z-50 transition-transform duration-300 mt-12'
    >
      <div className='flex gap-4'>
        <Link className='neon-link uppercase' to="/">évenements</Link>
        <Link className='neon-link uppercase' to="/">Agenda</Link>
        <Link className='neon-link uppercase' to="/">Billeterie</Link>
      </div>
      
      <h1 className='font-gothic absolute left-1/2 transform -translate-x-1/2'>
        <Link to="/">
          <Neon />
        </Link>
      </h1>
      
      <div className='flex gap-4'>
        <Link className='neon-link uppercase' to="/">le(s) lieu(x)</Link>
        <Link className='neon-link uppercase' to="/">Infos </Link>
      </div>
    </div>
  );
}
