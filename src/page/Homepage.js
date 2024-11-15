import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Spaces from '../components/Spaces';
export default function Homepage() {
  return (
    <div className="bg-[#2B2B2B]">
      <Header />
      <div className="min-h-[300vh] pt-24 flex flex-col ">
        <Hero />
        <Gallery />
        <Spaces />
      </div>
    </div>
  );
}
