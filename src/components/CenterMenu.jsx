import React from 'react';

function CenterMenu() {
  const liStyle = 'mr-[3rem] hover:cursor-pointer';
  return (
    <div className="menu flex flex-col sm:flex-row items-center">
      <ul className="flex w-full sm:w-auto justify-between sm:justify-end">
        {/* <li className={liStyle}>Home</li> */}
        {/* <li className={liStyle}>About</li>
            <li className={liStyle}>Preformer</li>
            <li className={liStyle}>Event Shedule</li> */}
      </ul>
    </div>
  );
}

export default CenterMenu;
