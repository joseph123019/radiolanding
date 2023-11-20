import React from 'react';

interface CenterMenuProps {
  // Define your component's prop types here, if any.
}

const CenterMenu: React.FC<CenterMenuProps> = () => {
  const liStyle = 'mr-[3rem] hover:cursor-pointer';

  return (
    <div className="menu flex flex-col sm:flex-row items-center">
      <ul className="flex w-full sm:w-auto justify-between sm:justify-end">
        {/* Add your list items here */}
      </ul>
    </div>
  );
};

export default CenterMenu;
