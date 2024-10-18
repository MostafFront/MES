import { Link, NavLink } from 'react-router-dom'

import React from 'react'
import { useState } from 'react';

export default function ResourcesBar() {
  
  return (
    <div className='pb-2 px-[5%] w-[100%] bg-[#FFFFFF] shadow-md shadow-[#272D3B33] border-b border-[#272D3B33]'>
      <div className="container flex justify-between items-center ">
        <NavLink
          to="/ResourcesTimeLine"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Time Line</p>
        </NavLink>
        <NavLink
          to="/ResourcesSupply"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center  ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Supply</p>
        </NavLink>
        <NavLink
          to="/ResourcesWeight"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Weight</p>
        </NavLink>
        <NavLink
          to="/ResourcesConsumption"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Consumption</p>
        </NavLink>
        <NavLink
          to="/ResourcesProduct"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Product & Scrap</p>
        </NavLink>
      </div>
    </div>
  );
};
