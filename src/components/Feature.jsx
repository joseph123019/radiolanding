import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import ReactPlayer from 'react-player';

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      transform: 'scale(0.5)',
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const url = 'https://radio.sepingel.com:8020/radio.mp3'; // replace with your Icecast server stream URL

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: 'ease-out',
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">
          Craft a unique audio atmosphere that perfectly matches your branding
          by seamlessly blending your custom ads with branded music
        </span>

        <span
          className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          Play Demo
        </span>

        <ReactPlayer
          url={url}
          playing={isPlaying}
          controls={true}
          volume={0.4}
          width="50%"
          height="50px"
          style={{ marginTop: '20px' }}
        />
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
