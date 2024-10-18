import { Link, NavLink } from 'react-router-dom'

import React from 'react'
import { useState } from 'react';

export default function MachinesBar() {
  return (
    <div className='pb-2 px-[5%] w-[100%] bg-[#FFFFFF] shadow-md shadow-[#272D3B33] border-b border-[#272D3B33]'>
      <div className="container flex justify-between items-center ">
        <NavLink
          to="/MachinesInformation"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Information</p>
        </NavLink>
        <NavLink
          to="/MachinesStatistics"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center  ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Statistics</p>
        </NavLink>
        <NavLink
          to="/MachinesHistory"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>History</p>
        </NavLink>
        <NavLink
          to="0"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? '' : ''
            }`
          }
        >
          <p>Digital Twin</p>
        </NavLink>
      </div>
    </div>
  )
}
