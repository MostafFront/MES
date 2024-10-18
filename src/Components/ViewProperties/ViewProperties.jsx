import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewProperties() {
  return (
    <div className='max-w-full max-h-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-[#000000A6]'>
        <div class=" p-4 mx-auto w-[60%] max-h-full -translate-y-2/4 -translate-x-2/4 absolute top-2/4 left-2/4 bg-[#FFFFFF] rounded-md">
            <div className='flex items-center justify-between border-b-2 border-[#B2BEC3] p-2 mb-5'>
                <div className='flex gap-4 items-center '>
                    <i className="fa-solid fa-eye text-base"></i>
                    <p className='font-medium text-xs uppercase'>View Properties</p>
                </div>
                <Link to={"../MachinesInformation"}><i class="fa-solid fa-xmark"></i></Link>
            </div>
            <div className='flex justify-center items-center w-full flex-col gap-y-20 pt-7'>
                    <div className='flex justify-center items-center bg-[#FFFFFF] shadow-md shadow-[#0000001c] rounded-lg'>  
                            <button className='px-5 py-2 font-medium text-xs  bg-[#2D62ED] text-[#FFFFFF]  rounded-lg '>KPIs</button>
                            <button className='px-5 py-2 font-medium text-xs text-[#4C788D]' >Current</button>
                            <button className='px-5 py-2 font-medium text-xs text-[#4C788D]' >Comaprision</button>
                    </div>
                    <div class='w-full h-full flex justify-end items-center pr-5 pl-5 flex-wrap gap-x-2 gap-y-5'>
                    <div className='flex flex-wrap gap-y-3  justify-center items-center  w-full py-4 px-1.5 text-[#3D5161]'>
                        <div className='flex justify-center items-center flex-wrap w-[60%] gap-10'>
                                    <div className='flex gap-x-3 items-center justify-start w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        OEE
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Avalability
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Preformance
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Qualatity
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Function
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Function
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Function
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Function
                                        </p>
                                    </div>
                                    <div className='flex gap-x-3 items-center justify-start  w-[25%]'>
                                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                                        Function
                                        </p>
                                    </div>
                        </div>
                    </div> 

                        <div className='gap-4 flex pt-10'>
                            <Link to={"../MachinesInformation"} className="text-[#2D62ED] border border-[#2D62ED]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center transition-all">Cancel</Link>
                            <button type="submit" className="text-white bg-[#2D62ED] hover:bg-[#1d3164] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"><i class="fa-regular fa-floppy-disk font-medium text-sm pr-4"></i>Save Update</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
