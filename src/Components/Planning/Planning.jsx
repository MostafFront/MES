
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import DashboardBar from '../DashboardBar/DashboardBar';
import MachinesBar from '../MachinesBar/MachinesBar';
import React from 'react'
import SideBar from '../SideBar/SideBar';
import Slider from 'react-slider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Planning() {
    

    const rows = Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='flex  justify-between items-center w-full p-3 text-[#003F5C] font-medium gap-2 border-[#EFEFEF] border-b'>
                                    <div className='flex flex-col justify-center items-center w-1/2 gap-y-1'>
                                        <p className='text-sm'>Operation Name</p>
                                        <p className='text-[10px]'>Resources</p>
                                        <p className='text-[10px]'>Machine</p>
                                    </div>
                                    <div className='flex flex-col justify-start items-start w-1/2 gap-y-1'>
                                        <p className='text-[12px]'>Function Name</p>
                                        <p className='text-[10px]'>Resources Names</p>
                                        <p className='text-[10px]'>Machine</p>
                                    </div>
                            </div>
      ));

  return (
    <>
    
    <SideBar/>
    <div className='absolute top-0 right-0 min-h-full w-[90%] bg-[#F4F7FE] flex flex-col'>


        <div className=' py-1 pl-[2%] w-[100%] bg-[#FFFFFF] shadow-md shadow-[#272D3B33]'>
            <div className="container flex justify-between items-center">
                <div className='flex justify-center items-center gap-5'>
                    <div className='relative'>
                        <div className="text-[#2D62ED] absolute inset-y-0 start-0 flex items-center ps-3.5 pr-5 pointer-events-none">
                            <i class="fa-solid fa-building"></i>
                        </div>
                        <select id="countries" class="bg-[#2D62ED4D] text-[#2D62ED] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10 border border-[#2D62ED]">
                            <option selected>Factory Name</option>
                            <option value="US">Name</option>
                            <option value="CA">Name</option>
                            <option value="FR">Name</option>
                            <option value="DE">Name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-10 py-28 mx-auto w-full h-full flex justify-center items-center rounded-md'>
            <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
                <div className='flex items-start justify-between h-auto gap-5 w-full'>
                    <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                        <div className='w-full flex items-start justify-between min-h-[5%]'>
                            <p className=' font-medium text-[#003F5C] capitalize'>planning</p>
                            <div className='flex justify-center items-center bg-[#FFFFFF] shadow-md shadow-[#0000001c] rounded-lg'>  
                                <button className='px-10 py-2 font-medium text-xs  bg-[#2D62ED] text-[#FFFFFF]  rounded-lg '>Set Time</button>
                                <button className='px-10 py-2 font-medium text-xs text-[#4C788D]' >Avalability</button>                          
                            </div>
                        </div>
                        <div className='flex items-start justify-center w-full gap-5 '>
                            <div className='flex justify-center items-center gap-4 w-[10%]'>
                                <p className='text-[#4C788DCC] text-sm font-medium -rotate-90'>Operation</p>
                                <ol className="relative text-[#4C788DCC] border-s border-[#4C788DCC]">                  
                                    <li className="mb-10 ms-6 pb-14">            
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#2D62ED] text-[#FFFFFF] rounded-full -start-4 shadow-md shadow-[#0000001c] p-4">
                                            <i class="fa-solid fa-sliders text-xs"></i>
                                        </span>
                                        
                                    </li>
                                    <li className="mb-10 ms-6 pb-14">
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-5  shadow-md shadow-[#0000001c] p-5">
                                        <i class="fa-regular fa-clock"></i>
                                        </span>
                                        
                                    </li>
                                    <li className="mb-10 ms-6 pb-14">
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-5 shadow-md shadow-[#0000001c] p-5">
                                        <i class="fa-solid fa-rocket"></i>
                                        </span>
                                        
                                    </li>
                                    <li className="ms-6">
                                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full  -start-5 shadow-md shadow-[#0000001c] p-5">
                                        <i class="fa-solid fa-warehouse"></i>
                                        </span>
                                        
                                    </li>
                                </ol>
                            </div>
                            <div className='w-[90%] flex flex-col justify-center items-center' >
                                <div className='w-full'>
                                    <div className='flex flex-col justify-center items-center gap-4'>
                                        <ol className="flex items-center w-full text-sm font-medium text-center sm:text-base">
                                            <li className="flex md:w-[40%] items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b-4 after:border-[#4C788DCC] after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 ">
                                                <span className="flex items-center py-2 px-4 text-[#FFFFFF] bg-[#2D62ED] rounded-full">
                                                    1
                                                </span>
                                            </li>
                                            <div className='flex flex-col justify-center items-center gapy-4 w-full relative'>
                                                <p className=' absolute -top-5 text-[#4C788D] font-medium text-sm'>ROUTE</p>
                                                <div className='flex justify-center items-center w-full'>
                                                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:border-dashed after:h-1 after:border-b-4 after:border-[#4C788DCC] after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 ">
                                                        <span className="flex items-center py-2 px-4 text-[#4C788DCC] bg-[#FFFFFF] rounded-full">
                                                            2
                                                        </span>
                                                        </li>
                                                        <li className="flex items-center w-[40%]">
                                                            <button className='text-[#4C788DCC] bg-[#FFFFFF] font-medium capitalize text-xs py-2 px-7 rounded-xl shadow-lg shadow-[#0000001c]'>
                                                                <i class="fa-solid fa-plus pr-4 "></i>
                                                                Add Operation
                                                            </button>
                                                        </li>
                                                </div>
                                            </div>
                                        </ol>
                                        <div className='flex justify-center items-center flex-col w-[40%] pt-10 gap-10'>
                                            <div class="relative w-full  ">
                                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <i class="fa-solid fa-magnifying-glass w-4 h-4 text-gray-400"></i>
                                                </div>
                                                <input type="text" class="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 shadow-sm shadow-[#00000029]" placeholder="Operation Name" required />
                                            </div>
                                            <select id="countries" class="bg-[#FFFFFF] border-gray-300 text-[#00000061] text-sm rounded-lg  block w-full px-10 border shadow-sm shadow-[#00000029] ">
                                                <option selected>Function</option>
                                                <option value="US">Function</option>
                                                <option value="CA">Function</option>
                                                <option value="FR">Function</option>
                                                <option value="DE">Function</option>
                                            </select>
                                        </div>
                                        <div className='w-full flex items-end justify-end pt-20'>
                                            <button type="submit" className="text-white bg-[#4C788D]   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"><i class="fa-regular fa-floppy-disk font-medium text-sm pr-4 shadow-sm shadow-[#00000029] "></i>Save Prototype</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center w-[30%] rounded-lg h-full gap-y-10'>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass w-4 h-4 text-gray-400"></i>
                            </div>
                            <input type="text" class="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Search by Process" required />
                        </div>
                        <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg shadow-[#0000001c]'>
                            <div className='flex  justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-[100%]'>
                                <div className='flex justify-start items-center px-6 py-4 text-xs text-[#2C3E50] gap-2'>
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    <p class="  font-medium capitalize">
                                        Pre Defined Processes
                                    </p>
                                </div>
                            </div>
                            {rows}
                        </div>
                        
                        
                    </div>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}
