import '../MachinesInformation/style.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React, { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';
import DashboardBar from '../DashboardBar/DashboardBar';
import MachinesBar from '../MachinesBar/MachinesBar';
import SideBar from '../SideBar/SideBar';
import Slider from 'react-slider';

export default function MachinesStatistics() {

  const [values, setValues] = useState([20, 60]);
  const handleChange = (newValues) => setValues(newValues);

  const percentage = 45;





  return (
    <>

      <SideBar />
      <div className='absolute top-0 right-0 h-full w-[90%] bg-[#F4F7FE] flex flex-col'>

        <MachinesBar />
        <DashboardBar />

        <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
          <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
            <div className='flex items-start justify-between h-auto gap-5 w-full'>
              <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[80%] '>
                <div className='w-full flex items-start justify-between min-h-[5%]'>
                  <p className=' font-medium text-[#003F5C] capitalize'>machines \ Statistics </p>
                </div>
                <div className='flex flex-col items-center justify-start h-full gap-y-10 w-full'>
                  <div className='flex items-center justify-between w-full gap-10 h-auto '>
                    <div className='flex  justify-between items-start gap-5 h-full  '>
                      <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-1/4'>
                        <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                          <i class="fa-solid fa-qrcode text-[#000000] text-ms"></i>
                          <p className='text-[#000000] font-medium text-xs capitalize'>Total Production</p>
                        </div>
                        <div className='flex flex-col items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-5'>
                          <div className='flex  justify-start items-start text-[#3D5161] font-bold gap-x-5  text-center'>
                            <div className='flex flex-col items-start'>
                              <p className='font-medium text-lg text-[#000000]'>5,000 <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                              <p className='font-medium text-xs text-[#2D62ED]'>Total Production</p>
                            </div>
                            <div className='flex flex-col items-start'>
                              <p className='font-medium text-lg text-[#000000]'>7,000 <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                              <p className='font-medium text-xs text-[#9D9D9D]'>Planned Supply</p>
                            </div>
                          </div>
                          <div className='flex  justify-start items-center  font-bold gap-x-4 text-center w-full'>
                            <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                              <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <p className='font-bold text-xl text-[#000000]'>75%</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col p-3  bg-[#FFFFFF] rounded-md gap-y-1 h-full shadow-md shadow-[#0000001A] w-2/4'>
                        <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                          <i class="fa-solid fa-sliders text-[#000000] text-ms"></i>
                          <p className='text-[#000000] font-medium text-xs capitalize'>Performance Indicator KPI</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-4'>
                          <div className='flex  justify-center items-center gap-2'>
                            <div className='flex justify-center items-center gap-1'>
                              {<CircularProgressbar className='w-[40%]'
                                value={76}

                                styles={{


                                  root: {},

                                  path: {

                                    stroke: `#00D1DE`,

                                    strokeLinecap: 'butt',

                                    transition: 'stroke-dashoffset 0.5s ease 0s',

                                    transform: 'rotate(1turn)',
                                    transformOrigin: 'center center',
                                    display: 'flex',
                                    justifyContent: 'ceter',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                  },

                                  trail: {

                                    stroke: '#d6d6d6',

                                    strokeLinecap: 'butt',

                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                  },



                                  background: {
                                    fill: '#3e98c7',
                                  },
                                }}
                              />}
                              <div className='text-[#000000] text-xs font-medium'>
                                <p>Avalability</p>
                                <p>76%</p>
                              </div>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                              {<CircularProgressbar className='w-[40%]'
                                value={68}

                                styles={{


                                  root: {},

                                  path: {

                                    stroke: `#00D1DE`,

                                    strokeLinecap: 'butt',

                                    transition: 'stroke-dashoffset 0.5s ease 0s',

                                    transform: 'rotate(1turn)',
                                    transformOrigin: 'center center',
                                    display: 'flex',
                                    justifyContent: 'ceter',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                  },

                                  trail: {

                                    stroke: '#d6d6d6',

                                    strokeLinecap: 'butt',

                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                  },

                                  text: {

                                    fill: '#000000',

                                    fontSize: '22px',


                                  },

                                  background: {
                                    fill: '#3e98c7',
                                  },
                                }}
                              />}
                              <div className='text-[#000000] text-xs font-medium'>
                                <p>Preformance</p>
                                <p>60%</p>
                              </div>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                              {<CircularProgressbar className='w-[40%]'
                                value={20}

                                styles={{


                                  root: {},

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

                                  text: {

                                    fill: '#000000',

                                    fontSize: '22px',


                                  },

                                  background: {
                                    fill: '#3e98c7',
                                  },
                                }}
                              />}
                              <div className='text-[#000000] text-xs font-medium'>
                                <p>Quality</p>
                                <p>20%</p>
                              </div>
                            </div>
                          </div>
                          <div className='flex justify-start items-center w-full gap-1'>
                            <p className='text-[#000000] text-sm font-medium uppercase'>eeo</p>
                            <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                              <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <p className='text-[#000000] text-sm font-medium uppercase'>75%</p>

                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-1/4'>
                        <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                          <i class="fa-solid fa-leaf text-[#000000] text-ms"></i>
                          <p className='text-[#000000] font-medium text-xs capitalize'>Material Consumption</p>
                        </div>
                        <div className='flex flex-col items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-5'>
                          <div className='flex  justify-start items-start text-[#3D5161] font-bold gap-x-5  text-center'>
                            <div className='flex flex-col items-start'>
                              <p className='font-medium text-lg text-[#000000]'>5,000 <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                              <p className='font-medium text-xs text-[#2D62ED]'>Planned Consumption</p>
                            </div>
                            <div className='flex flex-col items-start'>
                              <p className='font-medium text-lg text-[#000000]'>7,000 <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                              <p className='font-medium text-xs text-[#9D9D9D]'>Planned Supply</p>
                            </div>
                          </div>
                          <div className='flex  justify-start items-center  font-bold gap-x-4 text-center w-full'>
                            <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                              <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <p className='font-bold text-xl text-[#000000]'>75%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='h-auto shadow-md shadow-[#0000001A] flex p-3 flex-col items-center justify-start w-full rounded-md max-h-full bg-[#FFFFFF]'>
                    <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full '>
                      <div className='flex items-center gap-2'>
                        <i class="fa-solid fa-sliders text-[#000000] text-sm"></i>
                        <p className='font-medium text-[#000000] text-xs'>Machines Statistics</p>
                      </div>
                      <div className='flex justify-center items-center gap-10 pr-20 w-[50%]'>
                        <div className='flex items-center gap-5 border-b-2 border-[#2D62ED] pb-2'>
                          <p className='font-medium text-[#2D62ED] text-xs'>Over Time</p>
                        </div>
                        <div className='flex gap-5'>
                          <p className='font-medium text-[#8D9192] text-xs'>Down Time</p>
                        </div>
                        <div className='flex gap-5'>
                          <p className='font-medium text-[#8D9192] text-xs'>Good Vs. Scrap</p>
                        </div>
                      </div>
                    </div>


                    <div className='w-[100%]'>

                      <Chart
                        type='line'
                        height={400}
                        series={[
                          {
                            name: "Quality",
                            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                          },
                          {
                            name: "Performance",
                            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                          },
                          {
                            name: 'Availability',
                            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                          }
                        ]}
                        options={{
                          chart: {
                            height: '10vh',
                            toolbar: {
                              show: false
                            }
                          },
                          xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            title: {
                              text: 'Months',
                              style: {
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: '#333'
                              }
                            }
                          },
                          yaxis: {
                            title: {
                              text: 'Percentage',
                              style: {
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: '#333'
                              }
                            }
                          },
                          tooltip: {
                            shared: true,
                            intersect: false
                          },
                          legend: {
                            position: 'top',
                            horizontalAlign: 'center'
                          }
                        }}
                      >
                      </Chart>
                    </div>


                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start items-center w-[20%] rounded-lg h-full gap-y-10'>
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
