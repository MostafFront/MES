import DashboardBar from '../DashboardBar/DashboardBar';
import ManufacturingBar from '../ManufacturingBar/ManufacturingBar';
import React from 'react'
import ResourcesBar from '../ResourcesBar/ResourcesBar';
import SideBar from '../SideBar/SideBar';

export default function ManufacturingFlow() {
  return (
    <>
    
    <SideBar/>
    <div className='absolute top-0 right-0 min-h-full w-[90%] bg-[#F4F7FE] flex flex-col'>
        
        <ManufacturingBar/>
        <DashboardBar/> 
          
        <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
            <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
                <div className='flex items-start justify-between h-auto gap-5 w-full'>
                    <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                        <div className='w-full flex items-start justify-between min-h-[5%]'>
                            <p className=' font-medium text-[#003F5C]'>Manufacturing \ Flow Chart </p>
                            
                        </div> 
                        <div className='h-full shadow-md shadow-[#0000001A] flex p-3 flex-col items-center justify-start w-full rounded-md max-h-full bg-[#FFFFFF]'>
                                <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full '>
                                    <div className='flex items-center gap-2'>
                                        <i class="fa-solid fa-sitemap text-[#000000] text-sm"></i>
                                        <p className='font-medium text-[#000000] text-xs'>Production Flow</p>
                                    </div>
                                    
                                </div>
                                <div className='flex justify-center items-center flex-col p-5 w-full gap-4'>

                                    <div className="flex flex-col items-center">
                                      {/* Job Order Name */}
                                      <div className="bg-blue-600 text-white p-4 rounded-full mb-4">Job Order Name</div>
                                      
                                      {/* Route Name */}
                                      <div className="bg-blue-400 text-white p-4 rounded-full mb-4">Route Name</div>
                                      
                                      {/* Vertical Lines */}
                                      <div className="flex flex-col items-center">
                                        <div className="bg-gray-300 w-1 h-16"></div>
                                        <div className="flex flex-row space-x-8">
                                          {/* Left Branch */}
                                          <div className="flex flex-col items-center">
                                            <div className="bg-green-500 text-white p-4 rounded-full mb-2">Product Name</div>
                                            <div className="bg-red-500 text-white p-4 rounded-full mb-2">Scrap Name</div>
                                          </div>
                                          
                                          {/* Middle Branch */}
                                          <div className="flex flex-col items-center">
                                            <div className="bg-green-500 text-white p-4 rounded-full mb-2">Sub-Product Name</div>
                                          </div>
                                          
                                          {/* Right Branch */}
                                          <div className="flex flex-col items-center">
                                            <div className="bg-green-500 text-white p-4 rounded-full mb-2">Product Name</div>
                                            <div className="bg-red-500 text-white p-4 rounded-full mb-2">Scrap Name</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center w-[25%]  rounded-lg h-full gap-y-10'>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <i class="fa-solid fa-magnifying-glass w-4 h-4 text-gray-400"></i>
                            </div>
                            <input type="text" class="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Search by Material Name - Type" required />
                        </div>
                        <div className='w-full bg-[#FFFFFF] rounded-lg'>
                            <div className='flex  justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-[100%]'>
                                <div className='flex justify-start items-center px-6 py-4 gap-5'>
                                  <i class="fa-regular fa-eye text-[#2E4A79] text-sm"></i>
                                    <p class="text-[#2E4A79] text-sm font-medium uppercase">
                                    Layers
                                    </p>
                                </div>
                            </div> 
                            <div className='flex flex-wrap gap-y-3  justify-start items-center  w-full py-4 px-1.5 text-[#3D5161]'>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Job Order
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Sub-Product
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Route
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Product
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Done Process
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Scrap
                                  </p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-start w-1/2'>
                                  <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                                  <p class="text-[#2E4A79] text-sm font-medium text-center capitalize">
                                  Pending Process
                                  </p>
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}
