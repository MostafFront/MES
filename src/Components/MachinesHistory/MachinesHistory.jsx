import '../MachinesInformation/style.css'


import React,{useState} from 'react';
import Chart from 'react-apexcharts';
import DashboardBar from '../DashboardBar/DashboardBar';
import MachinesBar from '../MachinesBar/MachinesBar';
import SideBar from '../SideBar/SideBar';
import Slider from 'react-slider';

export default function MachinesHistory() {
  const [values, setValues] = useState([20, 60]);
  const handleChange = (newValues) => setValues(newValues);

  const rows = Array.from({ length: 5 }).map((_, index) => (
    <tr key={index} className="border-b font-medium text-[#707070] text-[10px] uppercase text-center border-[#EFEFEF]">
      <td className="flex items-center py-4">
        <i className="fa-solid fa-angles-down rounded-full"></i>
        <span className="font-medium text-[#707070] text-[10px] uppercase text-center w-full">938840</span>
      </td>
      <td>Machine Name</td>
      <td>
        <i className="fa-solid fa-wave-square text-[#2D62ED] text-base"></i>
      </td>
      <td>19.39 | 03-04-2102</td>
      <td>19.39 | 03-04-2102</td>
    </tr>
  ));

  return (
    <>
    
    <SideBar/>
    <div className='absolute top-0 right-0 h-full w-[90%] bg-[#F4F7FE] flex flex-col'>
        
        <MachinesBar/> 
        <DashboardBar/> 
          
        <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
            <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
                <div className='flex items-start justify-between h-auto gap-5 w-full'>
                    <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                      <div className='w-full flex items-start justify-between min-h-[5%]'>
                        <p className=' font-medium text-[#003F5C] capitalize'>machines \ HIstory </p>
                      </div> 
                      <div className='flex flex-col items-center justify-start h-full gap-y-10 w-full'>
                      <div className='h-auto shadow-md shadow-[#0000001A] flex p-3 flex-col items-center justify-start w-full rounded-md max-h-full bg-[#FFFFFF]'>
                                <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full '>
                                    <div className='flex items-center gap-2'>
                                        <i class="fa-solid fa-sliders text-[#000000] text-sm"></i>
                                        <p className='font-medium text-[#000000] text-xs'>Machines History</p>
                                    </div>
                                    <div className='flex justify-center items-center pr-10'>
                                        <div className='flex items-center gap-5 border-b-2 border-[#2D62ED] pb-2 px-5'>
                                            <i class="fa-solid fa-list text-[#2D62ED] text-sm"></i>
                                            <p className='font-medium text-[#2D62ED] text-xs'>List</p>
                                        </div>
                                        <div className='flex gap-5 px-5 items-center'>
                                            <i class="fa-solid items-center fa-chart-gantt text-[#8D9192] text-sm"></i>
                                            <p className='font-medium text-[#8D9192] text-xs'>Chart</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center flex-col p-5 w-full gap-4'>
                                    
                                    <table class="w-full text-sm text-left rtl:text-right bg-[#FFFFFF]">
                                        <thead class="text-xs text-[#707070] border-b border-[#B2BEC3] py-4 px-20">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                Machine ID
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                Machine Name
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                State
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                LAst work
                                                </th> 
                                                <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                LAst Fix
                                                </th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr class=" border-b font-medium text-[#707070] text-[10px]  uppercase text-center border-[#EFEFEF] ">
                                                <div className='flex  items-center  py-4 '>
                                                    <i class="fa-solid fa-angles-down  rounded-full "></i>
                                                    <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center w-full">
                                                    938840
                                                    </td>
                                                </div>
                                                <td>
                                                Machine Name
                                                </td>
                                                <td>
                                                  <i class="fa-solid fa-wave-square text-[#2D62ED] text-base"></i>
                                                </td>
                                                <td>
                                                19.39 | 03-04-2102
                                                </td>
                                                <td>
                                                19.39 | 03-04-2102
                                                </td>                                           
                                            </tr> */}
                                            {rows}
                                        </tbody>
                                    </table>
                                </div>
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
                                      <option  selected>Job Order</option>
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
                                    value={[50,80]}
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
