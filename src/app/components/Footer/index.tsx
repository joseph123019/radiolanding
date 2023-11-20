// Footer.tsx
import React from 'react';
import CenterMenu from '../Header/CenterMenu';
import FacebookButton from './FacebookButton';

const Footer: React.FC = () => {
  // Update your Facebook URL here
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61553602770275';

  return (
    <footer className="w-full bg-[#081730] text-white text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-20">
      <CenterMenu />
      <div className="mt-4 md:mt-14 flex justify-center">
        <div>
          <FacebookButton url={facebookUrl} />
        </div>
      </div>
      <div className="mt-4 md:mt-16 text-gray-400">
        Step into the future of retail ambiance with Instore Radio Solutions.
        Harmonize your brand's identity with our Song Selector and Genre
        Selector, designed to orchestrate a seamless audio experience. The
        Instore Radio Solutions logo symbolizes our commitment to audio
        excellence in every chord and melody.
      </div>
      <div className="mt-4 md:mt-16 text-center text-gray-400">
        © 2023 Instore Radio Solutions. All rights reserved. We're orchestrating
        retail experiences that resonate with every visit.
      </div>
    </footer>
  );
};

export default Footer;
