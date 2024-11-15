
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Spaces() {
  const spacesRef = useRef(null);

  const spaces = [
    {
      id: 1,
      name: "LA SALAMANDRE",
      type: "CINÉMA",
      description: "3 salles de projection",
      image: "img/sew.jpg",
      color: "#FF2E63"
    },
    {
      id: 2,
      name: "LE KLUB",
      type: "CONCERTS",
      description: "Salle de musiques actuelles",
      image: "img/sew.jpg",
      color: "#1F51FF"
    },
    {
      id: 3,
      name: "LES MOYENS DU BORD",
      type: "ARTS VISUELS",
      description: "Espace d'exposition",
      image: "img/sew.jpg",
      color: "#6A0DAD"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-10 bg-[#2B2B2B]" ref={spacesRef}>
      <h2 className="text-6xl font-spinc text-[#1F51FF] mb-16 text-center">
        Les Espaces
      </h2>
      
      <div className="grid grid-cols-1 gap-32">
        {spaces.map((space, index) => (
          <div 
            key={space.id}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-16`}
          >
            <div className="w-1/2 space-y-6">
              <p className="font-spinc text-2xl" style={{color: space.color}}>
                {space.type}
              </p>
              <h3 className="font-gothic text-white text-7xl">
                {space.name}
              </h3>
              <p className="font-gothic text-white/60 text-xl">
                {space.description}
              </p>
              <button className="font-gothic text-white border border-white/20 px-8 py-4 hover:bg-white/10 transition-colors">
                DÉCOUVRIR
              </button>
            </div>
            
            <div className="w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B] to-transparent z-10" />
                <img 
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover clip-path-diagonal"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}