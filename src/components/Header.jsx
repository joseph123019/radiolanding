import React from 'react';
import CenterMenu from './CenterMenu';

function Header() {
  const buttonStyle =
    'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]';

  return (
    <div className="header bg-[#081730] flex flex-col items-center justify-between px-4 sm:px-8 py-2 sm:flex-row">
      {/* LOGO */}
      <img
        src={require('../img/logo.png')}
        alt=""
        className="logo w-[100px] h-[100px]"
      />

      {/* SIDE MENU */}
      <CenterMenu />

      {/* BUTTONS */}
      <div className="buttons flex items-center justify-center sm:justify-end mt-2 sm:mt-0 hidden">
        <button
          className={`mr-2 sm:mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}
        >
          Log In
        </button>
        {/* Uncomment the following line if you want the "Sign Up" button */}
        {/* <button className={buttonStyle + ` bg-[#232A4E]`}> Sign Up </button> */}
      </div>
    </div>
  );
}

export default Header;
