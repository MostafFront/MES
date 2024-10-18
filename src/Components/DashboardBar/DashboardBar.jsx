import React from 'react';

export default function DashboardBar({ activeButton, onButtonClick }) {
  return (
    <div className='py-1 pl-[2%] w-[100%] bg-[#FFFFFF] shadow-md shadow-[#272D3B33]'>
      <div className='container flex justify-between items-center'>
        <div className='flex justify-center items-center gap-5'>
          <div className='relative'>
            <div className='text-[#2D62ED] absolute inset-y-0 start-0 flex items-center ps-3.5 pr-5 pointer-events-none'>
              <i className='fa-solid fa-building'></i>
            </div>
            <select
              id='countries'
              className='bg-[#2D62ED4D] text-[#2D62ED] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 border border-[#2D62ED]'
            >
              <option selected>Factory Name</option>
              <option value='US'>Name</option>
              <option value='CA'>Name</option>
              <option value='FR'>Name</option>
              <option value='DE'>Name</option>
            </select>
          </div>
          <i className='fa-solid fa-sliders bg-[#2D62ED4D] text-[#2D62ED] p-2.5 rounded-lg'></i>
          <i className='fa-solid fa-rocket text-[#B2BEC3]'></i>
        </div>
        <div className='flex justify-center items-center gap-2'>
          {['today', 'yesterday', 'lastWeek'].map((btn) => (
            <button
              key={btn}
              onClick={() => onButtonClick(btn)} // Use the handler from props
              className={`px-5 py-2 rounded-lg font-medium text-sm capitalize ${
                activeButton === btn
                  ? 'bg-[#2D62ED4D] text-[#2D62ED]'
                  : 'text-[#B2BEC3]'
              }`}
            >
              {btn}
            </button>
          ))}
          <i className='fa-solid fa-calendar-day text-[#B2BEC3]'></i>
        </div>
      </div>
    </div>
  );
}
