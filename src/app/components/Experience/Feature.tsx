'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsPlayFill, BsStopFill } from 'react-icons/bs';

interface FeatureProps {
  icon: string;
  title: string;
  audioUrl: string; // URL of the audio file
}

const Feature: React.FC<FeatureProps> = ({ icon, title, audioUrl }) => {
  const variant = {
    visible: {
      transform: 'scale(1)',
    },
    hidden: {
      transform: 'scale(0.5)',
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setElementIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.src = audioUrl;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      ref={featureRef}
      className="feature flex items-center justify-center flex-col relative text-center mx-12"
    >
      {/* icon */}
      <motion.div
        variants={variant}
        transition={{
          duration: 1,
          type: 'ease-out',
        }}
        animate={elementIsVisible ? 'visible' : 'hidden'}
        className="icon bg-[#081730] rounded-2xl p-4"
      >
        <img
          src={`/img/${icon}.png`} // Use absolute path starting with /public
          alt={title}
          className="w-[3rem]"
        />
      </motion.div>

      <span className="mt-5">{title}</span>

      <span className="text-[#707070] mt-4">
        Craft a unique audio atmosphere that perfectly matches your branding by
        seamlessly blending your custom ads with branded music
      </span>

      <div className="text-3xl text-blue-500 mb-6">Instore Radio Demo</div>

      {isPlaying ? (
        <button
          onClick={togglePlayPause}
          className="text-3xl p-2 rounded-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
        >
          <BsStopFill />
        </button>
      ) : (
        <button
          onClick={togglePlayPause}
          className="text-3xl p-2 rounded-full bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
        >
          <BsPlayFill />
        </button>
      )}

      <audio ref={audioRef} src={audioUrl} preload="none" />
    </div>
  );
};

export default Feature;
