import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Configuration initiale du curseur
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0
    });

    // Animation de rotation continue
    gsap.to(cursorRef.current, {
      rotation: -360,
      repeat: -1,
      duration: 5,
      ease: "none"
    });

    // Gestion du mouvement du curseur
    const moveCircle = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
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

    const cards = document.querySelectorAll('.concert-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', moveCircle);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', moveCircle);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const concerts = [
    {
      id: 1,
      image: "https://sew-morlaix.com/media/pages/images/cc3ea9b5a7-1729783202/rabia_5b3a1994_4-3omar-rammal_filmsgrandhuit-2000x.webp",
      title: "Nom Artiste 1",
      date: "12 MAI",
    },
    {
      id: 2,
      image: "https://sew-morlaix.com/media/pages/images/bbd73bf25d-1731421597/letgetlost2-2000x.webp",
      title: "Nom Artiste 2",
      date: "15 MAI",
    },
    {
      id: 3,
      image: "https://sew-morlaix.com/media/pages/images/8b1ba75d16-1731420208/l-amour-et-les-forets-2000x.webp",
      title: "Nom Artiste 3",
      date: "15 MAI",
    },
    {
        id: 1,
        image: "https://sew-morlaix.com/media/pages/images/85c4f85f9d-1730217857/baiedeslivres-vendredi-2000x.webp",
        title: "Nom Artiste 4",
        date: "12 MAI",
      },
      {
        id: 2,
        image: "https://sew-morlaix.com/media/pages/images/843de7a4fe-1729608976/idodo_1-2000x.webp",
        title: "Nom Artiste 5   ",
        date: "15 MAI",
      },
      {
        id: 3,
        image: "https://sew-morlaix.com/media/pages/images/01c6dfe058-1730711633/photo-presse-officielle_-credit-da-clement-latil-credit-photo-justin-chiron-2000x.webp",
        title: "Nom Artiste 6",
        date: "15 MAI",
      },
  ];

  return (
    <>
      <div className="py-20 px-10 bg-[#2B2B2B]" ref={galleryRef}>
        <h2 className="text-6xl font-spinc text-[#1F51FF] mb-16 text-center">
          Prochains événements
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {concerts.map((concert, index) => (
            <div 
              key={concert.id}
              className={`concert-card group relative aspect-square overflow-hidden cursor-none ${
                index % 2 === 0 ? 'clip-path-normal' : 'clip-path-inverse'
              }`}
            >
              <img
                src={concert.image}
                alt={concert.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                <div className="absolute bottom-0 w-full p-6 text-center">
                  <p className="text-[#6A0DAD] font-spinc text-xl">{concert.date}</p>
                  <h3 className="text-white font-gothic text-3xl">{concert.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curseur personnalisé */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[80px] h-[80px] pointer-events-none z-[100] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            id="galleryTextPath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            className="text-white"
          />
          <text className="text-[12px] fill-white font-gothic uppercase">
            <textPath href="#galleryTextPath" startOffset="0%">
              Voir l'événement • Voir l'événement •
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}