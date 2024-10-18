import { Link, NavLink } from 'react-router-dom'

import React from 'react'
import { useState } from 'react';

export default function ManufacturingBar() {
  return (
    <div className='pb-2 px-[5%] w-[100%] bg-[#FFFFFF] shadow-md shadow-[#272D3B33] border-b border-[#272D3B33]'>
      <div className="container flex justify-between items-center ">
        <NavLink
          to="/ManufacturingFlow"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Flow Chart</p>
        </NavLink>
        <NavLink
          to="/ManufacturingJob"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center  ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Job orders</p>
        </NavLink>
        <NavLink
          to="/ManufacturingRoutes"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Routest</p>
        </NavLink>
        <NavLink
          to="/ManufacturingProcess"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? 'border-t-4 text-xl border-[#2D62ED]' : ''
            }`
          }
        >
          <p>Process</p>
        </NavLink>
        <NavLink
        to="0"
          className={({ isActive }) =>
            `text-[#272D3B] text-sm font-medium uppercase w-[15%] text-center ${
              isActive ? '' : ''
            }`
          }
        >
          <p>Output</p>
        </NavLink>
      </div>
    </div>
  )
}
