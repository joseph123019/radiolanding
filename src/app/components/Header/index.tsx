import React from 'react';
import Link from 'next/link';
import CenterMenu from './CenterMenu';

interface HeaderProps {
  // Define your component's prop types here, if any.
}

const Header: React.FC<HeaderProps> = () => {
  const buttonStyle =
    'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]';

  return (
    <div className="header bg-[#081730] flex flex-col items-center justify-between px-4 sm:px-8 py-2 sm:flex-row">
      {/* LOGO */}
      <img src="/img/logo.png" alt="" className="logo w-[100px] h-[100px]" />

      {/* SIDE MENU */}
      <CenterMenu />

      {/* BUTTONS */}
      <div className="buttons flex items-center justify-center sm:justify-end mt-2 sm:mt-0">
        <Link href="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Header;
