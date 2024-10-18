import './style.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import DashboardBar from '../DashboardBar/DashboardBar';
import MachinesBar from '../MachinesBar/MachinesBar';
import React from 'react'
import SideBar from '../SideBar/SideBar';
import Slider from 'react-slider';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const machineData = [
  {
    id: 1,
    machineID: 'MACH001',
    machineName: 'Machine A',
    oee: 78,
    availability: 76,
    performance: 68,
    quality: 25,
    jobOrder: '123456889',
    route: 'Route 1',
    materialName: 'Material A',
    materialConsumption: 80,
    productName: 'Product A',
    production: 40,
    energyConsumption: 70,
  },
  {
    id: 2,
    machineID: 'MACH002',
    machineName: 'Machine B',
    oee: 85,
    availability: 80,
    performance: 70,
    quality: 50,
    jobOrder: '123456890',
    route: 'Route 2',
    materialName: 'Material B',
    materialConsumption: 75,
    productName: 'Product B',
    production: 60,
    energyConsumption: 65,
  },
  {
    id: 3,
    machineID: 'MACH003',
    machineName: 'Machine C',
    oee: 90,
    availability: 85,
    performance: 75,
    quality: 45,
    jobOrder: '123456891',
    route: 'Route 3',
    materialName: 'Material C',
    materialConsumption: 90,
    productName: 'Product C',
    production: 55,
    energyConsumption: 60,
  },
  {
    id: 4,
    machineID: 'MACH004',
    machineName: 'Machine D',
    oee: 92,
    availability: 88,
    performance: 80,
    quality: 60,
    jobOrder: '123456892',
    route: 'Route 4',
    materialName: 'Material D',
    materialConsumption: 85,
    productName: 'Product D',
    production: 70,
    energyConsumption: 50,
  },
  {
    id: 5,
    machineID: 'MACH005',
    machineName: 'Machine E',
    oee: 70,
    availability: 65,
    performance: 60,
    quality: 30,
    jobOrder: '123456893',
    route: 'Route 5',
    materialName: 'Material E',
    materialConsumption: 95,
    productName: 'Product E',
    production: 20,
    energyConsumption: 80,
  },
  {
    id: 6,
    machineID: 'MACH006',
    machineName: 'Machine F',
    oee: 75,
    availability: 70,
    performance: 65,
    quality: 35,
    jobOrder: '123456894',
    route: 'Route 6',
    materialName: 'Material F',
    materialConsumption: 85,
    productName: 'Product F',
    production: 45,
    energyConsumption: 75,
  },
  {
    id: 7,
    machineID: 'MACH007',
    machineName: 'Machine G',
    oee: 88,
    availability: 82,
    performance: 78,
    quality: 55,
    jobOrder: '123456895',
    route: 'Route 7',
    materialName: 'Material G',
    materialConsumption: 88,
    productName: 'Product G',
    production: 58,
    energyConsumption: 68,
  },
  {
    id: 8,
    machineID: 'MACH008',
    machineName: 'Machine H',
    oee: 80,
    availability: 75,
    performance: 72,
    quality: 40,
    jobOrder: '123456896',
    route: 'Route 8',
    materialName: 'Material H',
    materialConsumption: 76,
    productName: 'Product H',
    production: 67,
    energyConsumption: 72,
  },
];


export default function MachinesInformation() {

  const [values, setValues] = useState([20, 60]);
  const handleChange = (newValues) => setValues(newValues);


  return (
    <>

      <SideBar />
      <div className='absolute top-0 right-0 min-h-full w-[90%] bg-[#F4F7FE] flex flex-col'>

        <MachinesBar />
        <DashboardBar />

        <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
          <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
            <div className='flex items-start justify-between h-auto gap-5 w-full'>
              <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                <div className='w-full flex items-start justify-between min-h-[5%]'>
                  <p className=' font-medium text-[#003F5C] capitalize'>machines \ Information </p>
                  <Link to={'/ViewProperties'} className='text-[#FFFFFF] bg-[#2D62ED] font-medium capitalize text-xs py-1 px-5 rounded-md'>
                    <i class="fa-solid fa-eye pr-4 "></i>
                    View Properties
                  </Link>
                </div>
                <div className='flex items-center justify-center w-full gap-10 h-auto '>
                  <div className='flex  justify-start items-start gap-5 h-full w-full flex-wrap'>
                    {machineData.map((machine) => (
                      <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-[30%]' key={machine.id}>
                        <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                          <span className='p-1 mr-5 rounded-full bg-[#00D3BE]'></span>
                          <p className='text-[#000000] font-medium text-xs capitalize'>{machine.machineID}</p>
                        </div>

                        <div className='flex flex-col justify-center items-center bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-4'>
                          <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center justify-center gap-1 text-[#003F5C] text-sm'>
                              <i className="fa-solid fa-rocket"></i>
                              <p className=' font-medium capitalize'>{machine.machineName}</p>
                            </div>
                            <div className='bg-[#2D62ED] flex flex-col px-2 py-1 rounded-md items-center justify-center text-[#FFFFFF] text-xs font-medium uppercase'>
                              <p>OEE</p>
                              <p>{machine.oee}%</p>
                            </div>
                          </div>
                          <div className='flex justify-center items-center gap-2 pb-1 border-b border-[#EFEFEF]'>
                            <div className='flex flex-col justify-center items-center'>
                              <CircularProgressbar className='w-[50%]'
                                value={machine.availability}
                                styles={{
                                  path: {
                                    stroke: `#00D1DE`,
                                    strokeLinecap: 'butt',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(1turn)',
                                    transformOrigin: 'center center',
                                  },
                                  trail: {
                                    stroke: '#d6d6d6',
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                  },
                                }}
                              />
                              <p className='text-xs text-[#4C788DCC]'>Availability</p>
                              <p className='text-xs text-[#4C788D7F]'>{machine.availability}%</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                              <CircularProgressbar className='w-[50%]'
                                value={machine.performance}
                                styles={{
                                  path: {
                                    stroke: `#00D1DE`,
                                    strokeLinecap: 'butt',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(1turn)',
                                    transformOrigin: 'center center',
                                  },
                                  trail: {
                                    stroke: '#d6d6d6',
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                  },
                                }}
                              />
                              <p className='text-xs text-[#4C788DCC]'>Performance</p>
                              <p className='text-xs text-[#4C788DCC]'>{machine.performance}%</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                              <CircularProgressbar className='w-[50%]'
                                value={machine.quality}
                                styles={{
                                  path: {
                                    stroke: `#EC5967`,
                                    strokeLinecap: 'butt',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(1turn)',
                                    transformOrigin: 'center center',
                                  },
                                  trail: {
                                    stroke: '#d6d6d6',
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                  },
                                }}
                              />
                              <p className='text-xs text-[#4C788DCC]'>Quality</p>
                              <p className='text-xs text-[#4C788DCC]'>{machine.quality}%</p>
                            </div>
                          </div>
                          <div className='flex flex-col justify-start items-start gap-2 w-full'>
                            <div className='flex justify-between items-start text-[#000000] font-medium text-xs capitalize w-full'>
                              <p>Job Order</p>
                              <p>{machine.jobOrder}</p>
                            </div>
                            <div className='flex justify-between items-start text-[#000000] font-medium text-xs capitalize w-full'>
                              <p>Route</p>
                              <p>{machine.route}</p>
                            </div>
                          </div>
                          <div className='flex flex-col justify-start items-start gap-2 w-full'>
                            <div className='flex justify-between items-start text-[#000000] font-medium text-xs capitalize w-full'>
                              <p className='text-[#4C788D7F] text-[10px]'>Consumption</p>
                              <p>{machine.materialName}</p>
                            </div>
                            <div className='flex justify-between items-center text-[#000000] font-medium text-xs capitalize w-full gap-1'>
                              <p className='text-[#4C788D7F] '>{machine.materialConsumption}%</p>
                              <div className="h-1.5 bg-[#B2BEC39C] rounded-full w-full text-center">
                                <div className="bg-[#2D62ED] h-1.5 rounded-full" style={{ width: `${machine.materialConsumption}%` }} />
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col justify-start items-start gap-2 w-full'>
                            <div className='flex justify-between items-start text-[#000000] font-medium text-xs capitalize w-full'>
                              <p className='text-[#4C788D7F] text-[10px]'>Production</p>
                              <p>{machine.productName}</p>
                            </div>
                            <div className='flex justify-between items-center text-[#000000] font-medium text-xs capitalize w-full gap-1'>
                              <p className='text-[#4C788D7F] '>{machine.production}%</p>
                              <div className="h-1.5 bg-[#B2BEC39C] rounded-full w-full text-center">
                                <div className="bg-[#2D62ED] h-1.5 rounded-full" style={{ width: `${machine.production}%` }} />
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col justify-start items-start gap-2 w-full'>
                            <div className='flex justify-between items-start text-[#000000] font-medium text-xs capitalize w-full'>
                              <p className='text-[#4C788D7F] text-[10px]'>Energy Consumption</p>
                              <p></p>
                            </div>
                            <div className='flex justify-between items-center text-[#000000] font-medium text-xs capitalize w-full gap-1'>
                              <p className='text-[#4C788D7F] '>{machine.energyConsumption}%</p>
                              <div className="h-1.5 bg-[#B2BEC39C] rounded-full w-full text-center">
                                <div className="bg-[#2D62ED] h-1.5 rounded-full" style={{ width: `${machine.energyConsumption}%` }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}




                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start items-center w-[25%] rounded-lg h-full gap-y-10'>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <i class="fa-solid fa-magnifying-glass w-4 h-4 text-gray-400"></i>
                  </div>
                  <input type="text" class="bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Search by Material Name - Type" required />
                </div>
                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg shadow-[#0000001c]'>
                  <div className='flex  justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-[100%]'>
                    <div className='flex justify-start items-center px-6 py-4 text-xs text-[#2C3E50] gap-2'>
                      <i class="fa-solid fa-layer-group"></i>
                      <p class="  font-medium capitalize">
                        Layers
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col  justify-start items-center gap-3  w-[100%] px-1.5 text-[#3D5161] overscroll-contain  '>
                    <div className=' w-full border-b border-[#00000060] '>
                      <select id="countries" class="text-[#00000061]  text-xs border-transparent focus:border-transparent  w-full  ">
                        <option selected>Job Order</option>
                        <option value="US">Name</option>
                        <option value="CA">Name</option>
                        <option value="FR">Name</option>
                        <option value="DE">Name</option>
                      </select>
                    </div>
                    <div className=' w-full border-b border-[#00000060]'>
                      <select id="countries" class="text-[#00000061] text-xs border-transparent focus:border-transparent  w-full   ">
                        <option selected>Route</option>
                        <option value="US">Name</option>
                        <option value="CA">Name</option>
                        <option value="FR">Name</option>
                        <option value="DE">Name</option>
                      </select>
                    </div>
                    <div className='flex justify-center items-center bg-[#FFFFFF] shadow-md shadow-[#0000001c] rounded-lg'>
                      <button className='px-5 py-2 font-medium text-xs bg-[#2D62ED] text-[#FFFFFF]  rounded-lg '>FUNCTION</button>
                      <button className='px-5 py-2 font-medium text-xs text-[#4C788D] '>MATERIAL</button>
                      <button className='px-5 py-2 font-medium text-xs text-[#4C788D]  '>PRODUCT</button>
                    </div>
                    <div className='flex flex-wrap gap-y-3  justify-start items-center  w-full py-4 px-1.5 text-[#3D5161]'>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Job Order
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Sub-Product
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Route
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Product
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Done Process
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Scrap
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Pending Process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg shadow-[#0000001c] p-4'>
                  <div className='flex  justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-[100%]'>
                    <div className='flex justify-start items-center py-4 text-xs text-[#2C3E50] gap-2'>
                      <i class="fa-solid fa-sliders"></i>
                      <p class="  font-medium capitalize">
                        option
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col  justify-start items-center gap-3  w-[100%] px-1.5 text-[#3D5161] overscroll-contain  '>
                    <div className='flex flex-wrap gap-y-3  justify-start items-center  w-full py-4 px-1.5 text-[#3D5161]'>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Active
                        </p>
                      </div>
                      <div className='flex gap-x-3 items-center justify-start w-1/2'>
                        <span className='p-2  rounded-[4px] bg-[#2E4A79]'></span>
                        <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                          Inactive
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start items-start w-full gap-2 px-1.5'>
                      <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                        Material Consumption
                      </p>
                      <Slider
                        className="slider "
                        value={values}
                        onChange={handleChange}
                        min={0}
                        max={100}
                      />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full gap-2 px-1.5'>
                      <p class="text-[#2E4A79] text-xs font-medium text-center capitalize">
                        Energy Consumption
                      </p>
                      <Slider
                        className="slider "
                        value={[50, 80]}
                        onChange={handleChange}
                        min={0}
                        max={100}
                      />
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
