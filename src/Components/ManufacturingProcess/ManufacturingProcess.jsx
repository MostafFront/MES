import DashboardBar from '../DashboardBar/DashboardBar';
import ManufacturingBar from '../ManufacturingBar/ManufacturingBar';
import React from 'react'
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

const buttonData = {
    today: {
        production: 6800,
        productionSupply: 5300,
        productionRange: 65,
    },
    yesterday: {
        production: 5900,
        productionSupply: 4700,
        productionRange: 80,
    },
    lastWeek: {
        production: 36000,
        productionSupply: 6100,
        productionRange: 88,
    },
};
const alertsData = {
    today: [
        {
            id: '40127737',
            icon: 'fa-warehouse',
            type: 'Warehouse',
            description: 'Stock inventory checked',
        },
        {
            id: '40127738',
            icon: 'fa-rocket',
            type: 'Machine',
            description: 'Machine operating at optimal levels',
        },
    ],
    yesterday: [
        {
            id: '40127739',
            icon: 'fa-warehouse',
            type: 'Warehouse',
            description: 'Order shipment dispatched',
        },
        {
            id: '40127740',
            icon: 'fa-rocket',
            type: 'Machine',
            description: 'Machine fault detected',
        },
    ],
    lastWeek: [
        {
            id: '40127741',
            icon: 'fa-warehouse',
            type: 'Warehouse',
            description: 'New storage location added',
        },
        {
            id: '40127742',
            icon: 'fa-rocket',
            type: 'Machine',
            description: 'Machine usage report generated',
        },
    ],
};
const dataByPeriod = {
    today: [
        {
            jobOrderId: 101,
            startingDate: '10-15-2024',
            client: 'Client A',
            sales: 1000,
            product: 'Aluminum',
            routeId: 'R-01'
        },
        {
            jobOrderId: 102,
            startingDate: '10-15-2024',
            client: 'Client B',
            sales: 700,
            product: 'Copper',
            routeId: 'R-02'
        },

    ],
    yesterday: [
        {
            jobOrderId: 103,
            startingDate: '10-14-2024',
            client: 'Client C',
            sales: 1500,
            product: 'Steel',
            routeId: 'R-03'
        },
        {
            jobOrderId: 104,
            startingDate: '10-14-2024',
            client: 'Client D',
            sales: 300,
            product: 'Polyethylene',
            routeId: 'R-04'
        },
    ],
    lastWeek: [
        {
            jobOrderId: 105,
            startingDate: '10-08-2024',
            client: 'Client E',
            sales: 250,
            product: 'Fiberglass',
            routeId: 'R-05'
        },
        {
            jobOrderId: 106,
            startingDate: '10-08-2024',
            client: 'Client F',
            sales: 400,
            product: 'Polypropylene',
            routeId: 'R-06'
        }
    ],
};
const barData = {
    today: [
        { baseHeight: 10, fillHeight: 10, fillColor: "#FF5733" },
        { baseHeight: 6, fillHeight: 3, fillColor: "#33FFBD" },  
        { baseHeight: 8, fillHeight: 0, fillColor: "#CDD5E1" },  
        { baseHeight: 5, fillHeight: 5, fillColor: "#FFC300" },  
        { baseHeight: 9, fillHeight: 6, fillColor: "#DAF7A6" },  
        { baseHeight: 4, fillHeight: 2, fillColor: "#C70039" },  
        { baseHeight: 7, fillHeight: 7, fillColor: "#900C3F" },  
        { baseHeight: 3, fillHeight: 0, fillColor: "#581845" },   
        { baseHeight: 8, fillHeight: 4, fillColor: "#2ECC71" },   
        { baseHeight: 2, fillHeight: 2, fillColor: "#3498DB" },


    ],
    yesterday: [
        { baseHeight: 9, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 5, fillHeight: 5, fillColor: "#2E4A79" },
        { baseHeight: 7, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 5, fillHeight: 5, fillColor: "#00D1DE" },
        { baseHeight: 10, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 8, fillHeight: 8, fillColor: "#CA4E82" },
        { baseHeight: 2, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 2, fillHeight: 2, fillColor: "#00CCF2" },
        { baseHeight: 6, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 4, fillHeight: 4, fillColor: "#634F8D" },
        { baseHeight: 5, fillHeight: 0, fillColor: "#CDD5E1" },
    ],
    lastWeek: [
        { baseHeight: 8, fillHeight: 4, fillColor: "#4A90E2" },
        { baseHeight: 3, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 6, fillHeight: 6, fillColor: "#50E3C2" },
        { baseHeight: 9, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 7, fillHeight: 3, fillColor: "#F8E71C" },
        { baseHeight: 5, fillHeight: 5, fillColor: "#B8E986" },
        { baseHeight: 10, fillHeight: 2, fillColor: "#D0021B" },
        { baseHeight: 4, fillHeight: 0, fillColor: "#CDD5E1" },
        { baseHeight: 8, fillHeight: 8, fillColor: "#F5A623" },
        { baseHeight: 2, fillHeight: 0, fillColor: "#CDD5E1" },
    ],
};

export default function ManufacturingProcess() {
    const [activeButton, setActiveButton] = useState('today');
    const [searchAlerts, setSearchAlerts] = useState('');
    const [data, setData] = useState({ ...buttonData.today });
    const filteredData = dataByPeriod[activeButton]
    const filteredBars = barData[activeButton]
    const handleButtonClick = (button) => {
        if (buttonData.hasOwnProperty(button)) {
            setActiveButton(button);
            setData(buttonData[button]);
        } else {
            console.error(`Button "${button}" not found in buttonData.`);
        }
    };
    const filteredAlerts = alertsData[activeButton].filter((alert) =>
        `${alert.id} ${alert.type} ${alert.description}`.toLowerCase().includes(searchAlerts.toLowerCase())
    );
    return (
        <>

            <SideBar />
            <div className='absolute top-0 right-0 h-full w-[90%] bg-[#F4F7FE] flex flex-col'>

                <ManufacturingBar />
                <DashboardBar activeButton={activeButton} onButtonClick={handleButtonClick} />

                <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
                    <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
                        <div className='flex items-start justify-between h-auto gap-5 w-full'>
                            <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                                <div className='w-full flex items-start justify-between min-h-[5%]'>
                                    <p className=' font-medium text-[#003F5C]'>Manufacturing \ Process </p>
                                    <button className='text-[#2E4A79] bg-[#FFFFFF] font-medium uppercase text-xs py-1.5 px-5 rounded-md shadow-lg shadow-[#0000001A]'>
                                        <i class="fa-solid fa-chevron-down pr-4 "></i>

                                        Process
                                    </button>
                                </div>
                                <div className='flex items-center justify-between w-full gap-10 h-auto '>
                                    <div className='flex  justify-between items-start gap-5 h-full w-full'>
                                        <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-[30%] h-full'>
                                            <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                                <i class="fa-solid fa-sliders text-[#000000] text-ms"></i>
                                                <p className='text-[#000000] font-medium text-xs capitalize'>Total Process Production</p>
                                            </div>
                                            <div className='flex flex-col items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-10'>
                                                <div className='flex  justify-start items-start text-[#3D5161] font-bold gap-x-8  text-center'>
                                                    <div className='flex flex-col items-start'>
                                                        <p className='font-medium text-lg text-[#000000]'>{data.production}<span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                        <p className='font-medium text-xs text-[#2D62ED]'>Actual Production</p>
                                                    </div>
                                                    <div className='flex flex-col items-start'>
                                                        <p className='font-medium text-lg text-[#000000]'>{data.productionSupply}<span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                        <p className='font-medium text-xs text-[#9D9D9D]'>Planned Production</p>
                                                    </div>
                                                </div>
                                                <div className='flex  justify-start items-center  font-bold gap-x-4 text-center w-full'>
                                                    <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                                                        <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: `${data.productionRange}%` }} />
                                                    </div>
                                                    <p className='font-bold text-xl text-[#000000]'>{data.productionRange}%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-[70%]'>
                                            <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                                <i class="fa-solid fa-signal text-[#000000] text-ms"></i>
                                                <p className='text-[#000000] font-medium text-xs capitalize'>Process Actual Vs. Planned Production</p>
                                            </div>
                                            <div className='flex justify-center items-end bg-[#FFFFFF] my-1 h-fu11 p-5 w-full gap-x-10'>
                                                {filteredBars.map((bar, index) => (
                                                    <div key={index} className="flex justify-center items-center flex-col gap-1">
                                                        <div className="flex justify-center items-end gap-1">
                                                            <div
                                                                className={`h-[${bar.baseHeight}vh] bg-[#CDD5E1] rounded-sm w-1.5 -rotate-180`}
                                                            >
                                                                <div
                                                                    className="w-1.5 rounded-sm"
                                                                    style={{
                                                                        height: `${bar.fillHeight}vh`,
                                                                        backgroundColor: bar.fillColor,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-auto shadow-md shadow-[#0000001A] flex p-3 flex-col items-center justify-start w-full rounded-md max-h-full bg-[#FFFFFF]'>
                                    <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full '>
                                        <div className='flex items-center gap-2'>
                                            <i class="fa-solid fa-sliders text-[#000000] text-sm"></i>
                                            <p className='font-medium text-[#000000] text-xs'>Processes</p>
                                        </div>
                                        <div className='flex justify-center items-center gap-10 pr-10'>
                                            <div className='flex items-center gap-5 border-b-2 border-[#2D62ED] pb-2'>
                                                <i class="fa-solid fa-list text-[#2D62ED] text-sm"></i>
                                                <p className='font-medium text-[#2D62ED] text-xs'>List</p>
                                            </div>
                                            <div className='flex gap-5'>
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
                                                        Process
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Function
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Route ID
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Job Order ID
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Starting Date
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">

                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class=" border-b font-medium text-[#707070] text-[10px]  uppercase text-center border-[#EFEFEF] ">
                                                    <td>
                                                        938840
                                                    </td>
                                                    <div className='flex justify-center items-center '>
                                                        <span className='p-1 mr-2 rounded-full bg-[#634F8D]'></span>
                                                        <p class=" font-medium text-xs text-[#707070]">
                                                            Function Name
                                                        </p>
                                                    </div>
                                                    <td>
                                                        02-02-3000
                                                    </td>
                                                    <td class="py-3">
                                                        938840
                                                    </td>
                                                    <td>
                                                        456677
                                                    </td>
                                                    <div className='flex justify-end items-center px-6 py-4 gap-5 '>
                                                        <button><i class="fa-solid fa-leaf text-base"></i></button>
                                                        <button><i class="fa-solid fa-qrcode text-base"></i></button>
                                                    </div>
                                                </tr>

                                            </tbody>
                                        </table>
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
                                <div className='w-full bg-[#FFFFFF] rounded-lg p-2'>
                                    <div className='flex  justify-start items-center border-[#EFEFEF] border-b w-[100%]'>
                                        <div className='flex justify-start items-center px-6 py-4 border-b border-[#EC5967] w-1/2'>
                                            <span className='p-1 mr-5 rounded-full bg-[#EC5967]'></span>
                                            <p class="text-[#EC5967] text-sm font-medium uppercase">
                                                Alerts
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-center px-6 py-4 w-1/2'>
                                            <span className='p-1 mr-5 rounded-full bg-[#D0D7DA]'></span>
                                            <p class="text-[#D0D7DA] text-sm font-medium uppercase">
                                                Notifications
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col  justify-start items-center gap-3  w-[100%] px-1.5 text-[#3D5161] overscroll-contain  '>
                                        <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'>
                                            <div className='flex flex-col items-center justify-center w-[20%]'>
                                                <i class="fa-solid fa-warehouse text-lg text-[#0000001A]"></i>
                                                <p className='text-xs text-[#0000001A]'>Warehouse</p>
                                            </div>
                                            <div className='flex flex-col items-start w-[80%]'>
                                                <p className='text-sm text-[#464646]'>Confirm mass on machine</p>
                                                <div className='flex items-center justify-between w-full'>
                                                    <p className='font-medium text-[#464646] text-xs uppercase'>id</p>
                                                    <p className='font-medium text-[#464646] text-xs'>40127725</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'>
                                            <div className='flex flex-col items-center justify-center w-[20%]'>
                                                <i class="fa-solid fa-leaf text-lg text-[#0000001A]"></i>
                                                <p className='text-xs text-[#0000001A]'>Material</p>
                                            </div>
                                            <div className='flex flex-col items-start w-[80%]'>
                                                <p className='text-sm text-[#464646]'>Material in demand</p>
                                                <div className='flex items-center justify-between w-full'>
                                                    <p className='font-medium text-[#464646] text-xs uppercase'>id</p>
                                                    <p className='font-medium text-[#464646] text-xs'>40127725</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'>
                                            <div className='flex flex-col items-center justify-center w-[20%]'>
                                                <i class="fa-solid fa-rocket text-lg text-[#0000001A]"></i>
                                                <p className='text-xs text-[#0000001A]'>machine</p>
                                            </div>
                                            <div className='flex flex-col items-start w-[80%]'>
                                                <p className='text-sm text-[#464646]'>Machine stoppage</p>
                                                <div className='flex items-center justify-between w-full'>
                                                    <p className='font-medium text-[#464646] text-xs uppercase'>id</p>
                                                    <p className='font-medium text-[#464646] text-xs'>40127725</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full bg-[#FFFFFF] rounded-lg p-2'>
                                    <div className='flex  justify-start items-center border-[#EFEFEF] border-b w-full'>
                                        <div className='flex justify-start items-center px-6 py-4 '>
                                            <i class="fa-solid fa-backward p-1 mr-5 text-[#003F5C]"></i>
                                            <p class="text-[#003F5C] text-sm font-medium uppercase">
                                                Recent processes
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col  justify-start items-center gap-3  w-[100%] px-1.5 text-[#3D5161] overscroll-contain  '>
                                        <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-5 gap-5'>
                                            <div className='flex flex-col justify-center items-center'>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <div className="bg-[#2E4A79] p-1 rounded-full" />
                                                    <div className="h-[10vh] bg-[#CDD5E1] rounded-sm w-[1px]  -rotate-180  ">
                                                        <div className="bg-[#2E4A79] w-[1px] rounded-sm" style={{ height: '10vh' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-start items-center w-full gap-2'>
                                                <div className='flex flex-col justify-start items-center w-full gap-1'>
                                                    <div className='flex flex-col items-start w-full'>
                                                        <div className='flex justify-between w-full items-start'>
                                                            <p className='text-[#4C788D] text-sm font-medium capitalize'>Function Id</p>
                                                            <p className='text-[#4C788D] text-sm font-medium '>364787</p>
                                                        </div>
                                                        <div className='flex justify-between w-full items-start'>
                                                            <p className='text-[#4C788D80] text-xs  capitalize'>Starting Date</p>
                                                            <p className='text-[#4C788D80] text-sm font-medium '>01-10-2020</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-start w-full'>
                                                        <div className='flex justify-between w-full items-start'>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium capitalize'>Client</p>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium '>Client Name</p>
                                                        </div>
                                                        <div className='flex justify-between w-full items-start'>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium capitalize'>Products</p>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium '>30kg Aluminum</p>
                                                        </div>
                                                        <div className='flex justify-between w-full items-start'>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium capitalize'>Routes</p>
                                                            <p className='text-[#4C788D80] text-[7px] font-medium '>4256457</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
