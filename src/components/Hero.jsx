import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bg = {
    true: { left: '7rem' },
    false: { left: '19rem' },
  };

  const musicPlayer = {
    true: { left: '295px' },
    false: { left: '235px' },
  };

  const rect = {
    true: { left: '11rem' },
    false: { left: '13rem' },
  };

  const heart = {
    true: { left: '9rem' },
    false: { left: '12.5rem' },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex flex-col items-center justify-between px-4 sm:px-8 py-4 sm:flex-row sm:h-auto relative z-[3]">
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
                animate={`${elementIsVisible}`}
                transition={{ duration: 1, type: 'ease-out' }}
                src={require('../img/backgraphics.png')}
                alt=""
                className="absolute top-[-8rem] left-[19rem]"
              />
              <img
                src={require('../img/p 1.png')}
                alt=""
                className="absolute top-[-20rem] h-[34rem] left-[13rem]"
              />
              <motion.img
                variants={musicPlayer}
                animate={`${elementIsVisible}`}
                transition={{
                  duration: 1,
                  type: 'ease-out',
                }}
                src={require('../img/p 2.png')}
                alt=""
                className="absolute left-[235px] top-[19px] w-[175px]"
              />
              <motion.img
                variants={rect}
                animate={`${elementIsVisible}`}
                transition={{
                  type: 'ease-out',
                  duration: 1,
                }}
                src={require('../img/p 3.png')}
                alt=""
                className="absolute w-[5rem] left-[13rem] top-[7rem]"
              />
              <motion.img
                variants={heart}
                animate={`${elementIsVisible}`}
                transition={{
                  type: 'ease-out',
                  duration: 1,
                }}
                src={require('../img/p 4.png')}
                alt=""
                className="absolute w-[5rem] left-[12.5rem] top-[7rem]"
              />
            </>
          )}
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
