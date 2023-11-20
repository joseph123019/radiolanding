import React from 'react';
import Feature from './Feature';

interface ExperienceProps {
  // Define your component's prop types here, if any.
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-4 sm:px-8 pb-4 bg-[#020917] sm:h-auto">
      {/* title icon */}
      <img src="/img/Path 318.png" alt="" className="w-[5rem]" />

      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem] sm:text-3xl">
        <span className="text-center">
          An Amazing App Can Change Your Daily Life
        </span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>

      {/* features */}
      <div className="feature flex items-center justify-around mt-[6rem] w-full sm:w-auto">
        <Feature
          icon="music icon"
          title="InStore"
          audioUrl="https://radio.sepingel.com:8020/radio.mp3"
        />

        {/* Add more Feature components here if needed */}
      </div>
    </div>
  );
};

export default Experience;
