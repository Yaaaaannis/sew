import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRefs = useRef([]);
  const cursorRef = useRef(null);
  const imageContainerRef = useRef(null);
  const circularTextRef = useRef(null);

 
  useEffect(() => {
    // Initialisation du curseur
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0
    });

    // Animation de rotation continue
    gsap.to(cursorRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 8,
      ease: "none"
    });

    // Gestion du mouvement du curseur
    const moveCircle = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    // Gestion de l'apparition/disparition
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };
    

    const container = imageContainerRef.current;
    container.addEventListener('mousemove', moveCircle);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', moveCircle);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
 


  useEffect(() => {
    const cursor = circularTextRef.current;
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX - 75 + 'px';
        cursor.style.top = e.clientY - 75 + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" }});
    
    textRefs.current.forEach((text, index) => {
      tl.fromTo(text, 
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          filter: 'blur(0px)',
          delay: index * 0.1
        }
      );
    });
  }, []);

  const words = [
    'Bienvenue',
    'au SEW !',
    'Lieu',
    'culturel',
    'à Morlaix'
  ];



  return (
    <div className="min-h-screen pt-32 bg-[#2B2B2B] text-white flex">
      {/* Partie gauche avec le texte */}
      <div className="w-1/2 pl-10">
        <div className="flex flex-col items-start gap-4">
          {words.map((word, index) => (
            <span
              key={index}
              ref={el => textRefs.current[index] = el}
              className={`
                font-spinc text-7xl opacity-0
                ${word === 'au SEW !' ? 'text-[#1F51FF]' : ''}
              `}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

    
     
         {/* Partie droite */}
         <div className="w-1/2 h-[calc(100vh-8rem)] relative overflow-hidden" ref={imageContainerRef}>
         <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t to-transparent mb-16">
    <h2 className="font-spinc text-2xl mb-2 text-[#6A0DAD]">
      Concert
    </h2>
    <p className="font-gothic text-lg opacity-80">Aujourd'hui</p>
    <p className="font-gothic  max-w-xl opacity-80 mb-8 font-bold text-8xl">
      Baguarre
    </p>
  </div>
        <img 
          src="https://sew-morlaix.com/media/pages/images/d09e6ccfe0-1716368058/magnific-web-gigapixel-standard-scale-2_00xnb-2000x.webp" 
          alt="Inputs"
          className="h-full w-full object-cover relative blur-[1px] cursor-none  rounded-xl"
        />
        

        {/* Curseur personnalisé - déplacé en dehors du conteneur d'image */}
        <div 
          ref={cursorRef}
          className="fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-[100] mix-blend-difference"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="textPath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
              className="text-white"
            />
            <text className="text-[14px] fill-white font-gothic uppercase">
              <textPath href="#textPath" startOffset="0%">
                En savoir plus • En savoir plus •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}