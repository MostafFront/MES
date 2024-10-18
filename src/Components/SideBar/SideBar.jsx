import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  const icons = [
    { icon: 'fa-table-cells', page: '/Dashboard', iconName: 'Dashboard' },
    { icon: 'fa-warehouse', page: '/ResourcesTimeLine', iconName: 'Resources' },
    { icon: 'fa-tractor', page: '/ManufacturingFlow', iconName: 'Manufacturing' },
    { icon: 'fa-wrench', page: '/MachinesInformation', iconName: 'Machines' },
    { icon: 'fa-code-compare', page: '/Planning', iconName: 'Planning' },
    { icon: 'fa-triangle-exclamation', page: '-', iconName: 'Issues' },
  ];

  const lastIcons = [
    { icon: 'fa-gear', page: 'g', iconName: 'Settings' },
    { icon: 'fa-arrow-right-from-bracket', page: '/', iconName: 'Logout' },
  ];

  useEffect(() => {
    // Set the active button based on the current URL
    const activePage = icons.find(icon => icon.page === location.pathname)?.page || '';
    setActiveButton(activePage);
  }, [location.pathname]);

  const handleButtonClick = (page) => {
    setActiveButton(page);
  };
  const handleLastButtonClick = (page) => {
    setActiveButton(page);
  };

  return (
    <div className='fixed top-0 left-0 h-full w-[10%]'>
      <div className="container flex items-center justify-around flex-col w-auto h-full bg-[#2D62ED]">
        <div className="flex items-center gap-x-3 text-[#FFFFFF]">
          <i className="fa-solid fa-industry transition-all text-2xl"></i>
          <p className='capitalize font-normal text-2xl'>mes</p>
        </div>
        <div className="flex items-start flex-col gap-4 w-full">
          {icons.map((icon, index) => (
            <Link
              to={icon.page}
              key={index}
              onClick={() => handleButtonClick(icon.page)}
              className={`transition-all text-xl hover:bg-[#00000029] text-[#F4F7FE] cursor-pointer rounded-r-2xl px-4 py-2 ${
                activeButton === icon.page ? 'bg-[#00000029]' : ''
              }`}
            >
              <div className='flex justify-start items-center gap-2 pr-1 w-full'>
                <i className={`fa-solid ${icon.icon}`}></i>
                <p className={`font-medium text-xs`}>{icon.iconName}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-start flex-col gap-4 w-full">
          {lastIcons.map((icon, index) => (
            <Link
              to={icon.page}
              key={index}
              onClick={() => handleLastButtonClick(icon.page)}
              className={`transition-all text-xl hover:bg-[#00000029] text-[#F4F7FE] cursor-pointer rounded-r-2xl px-4 py-2`}
            >
              <div className='flex justify-start items-center gap-2 pr-1 w-full'>
                <i className={`fa-solid ${icon.icon}`}></i>
                <p className={`font-medium text-xs`}>{icon.iconName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
