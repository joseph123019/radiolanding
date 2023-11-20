'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  // Define your component's prop types here, if any.
}

const Hero: React.FC<HeroProps> = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      // Initial check on mount
      handleResize();

      // Listen for window resize events

      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setElementIsVisible(entry.isIntersecting),
      { threshold: 1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const bg = {
    visible: { left: '7rem' },
    hidden: { left: '19rem' },
  };

  const musicPlayer = {
    visible: { left: '300px' },
    hidden: { left: '330px' },
  };

  const rect = {
    visible: { left: '17.5rem' },
    hidden: { left: '19rem' },
  };

  const heart = {
    visible: { left: '16rem' },
    hidden: { left: '18rem' },
  };

  return (
    <div
      ref={heroRef}
      className="wrapper bg-[#081730] flex flex-col items-center justify-between px-4 sm:px-8 py-4 sm:flex-row sm:h-auto relative z-[3]"
    >
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center w-full sm:w-1/2 text-[3rem]">
        <span>Experience the in-store music that </span>
        <span>
          <b>complements your unique brand.</b>
        </span>
        <span className="text-[15px] text-[#525D6E]">
          Choose our store music solution
          <br />
          and customize it with your ads while playing in your shop or store.
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Coming soon on IOS and Android</span>
          {/* <DownloadAds /> */}
        </div>
      </div>
      {/* right side */}
      <div className="images relative w-full sm:w-1/2 mt-4 sm:mt-0">
        {isMobile ? null : (
          <>
            <motion.img
              variants={bg}
              animate={elementIsVisible ? 'visible' : 'hidden'}
              transition={{ duration: 1, type: 'ease-out' }}
              src="/img/backgraphics.png" // Use absolute path starting with /public
              alt=""
              className="absolute top-[-8rem] left-[19rem]"
            />
            <img
              src="/img/p 1.png" // Use absolute path starting with /public
              alt=""
              className="absolute top-[-20rem] h-[34rem] left-[19rem]"
            />
            <motion.img
              variants={musicPlayer}
              animate={elementIsVisible ? 'visible' : 'hidden'}
              transition={{ duration: 1, type: 'ease-out' }}
              src="/img/p 2.png" // Use absolute path starting with /public
              alt=""
              className="absolute left-[330px] top-[13px] w-[175px]"
            />
            <motion.img
              variants={rect}
              animate={elementIsVisible ? 'visible' : 'hidden'}
              transition={{ type: 'ease-out', duration: 1 }}
              src="/img/p 3.png" // Use absolute path starting with /public
              alt=""
              className="absolute w-[5rem] left-[19rem] top-[7rem]"
            />
            <motion.img
              variants={heart}
              animate={elementIsVisible ? 'visible' : 'hidden'}
              transition={{ type: 'ease-out', duration: 1 }}
              src="/img/p 4.png" // Use absolute path starting with /public
              alt=""
              className="absolute w-[6rem] left-[18rem] top-[6.5rem]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
