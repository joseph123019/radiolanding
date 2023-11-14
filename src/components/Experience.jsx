import React from 'react';
import Feature from './Feature';

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-4 sm:px-8 bg-[#020917] sm:h-auto">
      {/* title icon */}
      <img src={require('../img/Path 318.png')} alt="" className="w-[5rem]" />

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
        <Feature icon="music icon" title="InStore" />
        {/* <Feature icon='music icon' title="For Daily Music" /> */}
        {/* <Feature icon='Group 4' title="For Artist" /> */}
      </div>
    </div>
  );
}

export default Experience;
