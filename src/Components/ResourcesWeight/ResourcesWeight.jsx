import DashboardBar from '../DashboardBar/DashboardBar';
import React, { useState } from 'react'
import ResourcesBar from '../ResourcesBar/ResourcesBar';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';
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

const barDataHistory = {
    today: [
        { bgColor: '#CDD5E1', contentColor: '#2E4A79', height: '12vh', contentHeight: '10vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D3BE', height: '8vh', contentHeight: '7vh' },
        { bgColor: '#CDD5E1', contentColor: '#994F90', height: '10vh', contentHeight: '5vh' },
        { bgColor: '#CDD5E1', contentColor: '#CA4E82', height: '8vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#EC5967', height: '4vh', contentHeight: '2vh' },
        { bgColor: '#CDD5E1', contentColor: '#FB7644', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#FFA600', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#26D395', height: '10vh', contentHeight: '6vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D1DE', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#A0C73A', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#FF2366', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#CDD5E1', height: '12vh', contentHeight: '8vh' },
    ],
    yesterday: [
        { bgColor: '#CDD5E1', contentColor: '#2E4A79', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D3BE', height: '8vh', contentHeight: '6vh' },
        { bgColor: '#CDD5E1', contentColor: '#994F90', height: '10vh', contentHeight: '4vh' },
        { bgColor: '#CDD5E1', contentColor: '#CA4E82', height: '8vh', contentHeight: '5vh' },
        { bgColor: '#CDD5E1', contentColor: '#EC5967', height: '4vh', contentHeight: '3vh' },
        { bgColor: '#CDD5E1', contentColor: '#FB7644', height: '12vh', contentHeight: '9vh' },
        { bgColor: '#CDD5E1', contentColor: '#FFA600', height: '12vh', contentHeight: '10vh' },
        { bgColor: '#CDD5E1', contentColor: '#26D395', height: '10vh', contentHeight: '7vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D1DE', height: '12vh', contentHeight: '10vh' },
        { bgColor: '#CDD5E1', contentColor: '#A0C73A', height: '12vh', contentHeight: '9vh' },
        { bgColor: '#CDD5E1', contentColor: '#FF2366', height: '12vh', contentHeight: '7vh' },
        { bgColor: '#CDD5E1', contentColor: '#CDD5E1', height: '12vh', contentHeight: '8vh' },
    ],
    lastWeek: [
        { bgColor: '#CDD5E1', contentColor: '#2E4A79', height: '12vh', contentHeight: '7vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D3BE', height: '8vh', contentHeight: '5vh' },
        { bgColor: '#CDD5E1', contentColor: '#994F90', height: '10vh', contentHeight: '6vh' },
        { bgColor: '#CDD5E1', contentColor: '#CA4E82', height: '8vh', contentHeight: '7vh' },
        { bgColor: '#CDD5E1', contentColor: '#EC5967', height: '4vh', contentHeight: '4vh' },
        { bgColor: '#CDD5E1', contentColor: '#FB7644', height: '12vh', contentHeight: '11vh' },
        { bgColor: '#CDD5E1', contentColor: '#FFA600', height: '12vh', contentHeight: '9vh' },
        { bgColor: '#CDD5E1', contentColor: '#26D395', height: '10vh', contentHeight: '5vh' },
        { bgColor: '#CDD5E1', contentColor: '#00D1DE', height: '12vh', contentHeight: '6vh' },
        { bgColor: '#CDD5E1', contentColor: '#A0C73A', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#FF2366', height: '12vh', contentHeight: '8vh' },
        { bgColor: '#CDD5E1', contentColor: '#CDD5E1', height: '12vh', contentHeight: '9vh' },
    ],
};

const scaleData = {
    today: [
        { scaleID: 'SCALE001', lastScaleType: 'Digital', lastMaterial: 'Aluminum', lastOrderDateTime: '09:00 | 10-15-2024' },
        { scaleID: 'SCALE002', lastScaleType: 'Analog', lastMaterial: 'Steel', lastOrderDateTime: '11:30 | 10-15-2024' },
    ],
    yesterday: [
        { scaleID: 'SCALE003', lastScaleType: 'Digital', lastMaterial: 'Copper', lastOrderDateTime: '14:45 | 10-14-2024' },
        { scaleID: 'SCALE004', lastScaleType: 'Analog', lastMaterial: 'Plastic', lastOrderDateTime: '16:15 | 10-14-2024' },
    ],
    lastWeek: [
        { scaleID: 'SCALE005', lastScaleType: 'Digital', lastMaterial: 'Wood', lastOrderDateTime: '09:30 | 10-08-2024' },
        { scaleID: 'SCALE006', lastScaleType: 'Analog', lastMaterial: 'Concrete', lastOrderDateTime: '10:00 | 10-09-2024' },
    ],
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



export default function ResourcesWeight() {


    const [activeButton, setActiveButton] = useState('today');
    const [searchScale, setSearchScale] = useState('');
    const [searchAlerts, setSearchAlerts] = useState('');
    const [data, setData] = useState({ ...buttonData.today });

    const handleButtonClick = (button) => {
        if (buttonData.hasOwnProperty(button)) {
            setActiveButton(button);
            setData(buttonData[button]);
        } else {
            console.error(`Button "${button}" not found in buttonData.`);
        }
    };
    const filteredData = scaleData[activeButton].filter(item =>
        item.scaleID.toLowerCase().includes(searchScale.toLowerCase())
    );
    const filteredAlerts = alertsData[activeButton].filter((alert) =>
        `${alert.id} ${alert.type} ${alert.description}`.toLowerCase().includes(searchAlerts.toLowerCase())
    );

    return (
        <>

            <SideBar />
            <div className='absolute top-0 right-0 min-h-full w-[90%] bg-[#F4F7FE] flex flex-col'>

                <ResourcesBar />
                <DashboardBar activeButton={activeButton} onButtonClick={handleButtonClick} />

                <div className='p-4 mx-auto w-full h-full flex justify-start items-center  rounded-md'>
                    <div className='flex items-center justify-start flex-col pl-[2%] gap-7 w-full h-full '>
                        <div className='flex items-start justify-between h-auto gap-5 w-full'>
                            <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[90%] '>
                                <div className='w-full flex items-start justify-between min-h-[5%]'>
                                    <p className=' font-medium text-[#003F5C]'>Resources \ Materials \ Weight</p>
                                    <Link to={'/AddCataloge'} className='text-[#FFFFFF] bg-[#2D62ED] font-medium uppercase text-xs px-5 py-2  rounded-xl'>
                                        <i class="fa-solid fa-plus pr-4 "></i>
                                        add new
                                    </Link>
                                </div>
                                <div className='flex items-center justify-between w-full gap-10 h-auto '>
                                    <div className='flex  justify-between items-start gap-5 h-full w-full'>
                                        <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md shadow-[#0000001A] w-[30%]'>
                                            <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                                <i class="fa-solid fa-leaf text-[#000000] text-ms"></i>
                                                <p className='text-[#000000] font-medium text-xs capitalize'>Total Material Consumption</p>
                                            </div>
                                            <div className='flex flex-col items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-10'>
                                                <div className='flex  justify-start items-center text-[#3D5161] font-bold gap-x-8  text-center'>
                                                    <div className='flex flex-col items-start'>
                                                        <p className='font-medium text-lg text-[#000000]'>{data.production} <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                        <p className='font-medium text-xs text-[#2D62ED] text-start'>Actual Material Weight</p>
                                                    </div>
                                                    <div className='flex flex-col items-start'>
                                                        <p className='font-medium text-lg text-[#000000]'>{data.productionSupply}<span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                        <p className='font-medium text-xs text-[#9D9D9D] text-start'>Planned Material Weight</p>
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
                                                <p className='text-[#000000] font-medium text-xs capitalize'>Material Weights Planned Vs Actual</p>
                                            </div>
                                            <div className='flex justify-center items-end bg-[#FFFFFF] my-1 h-fu11 p-5 w-full gap-x-10'>
                                                {barDataHistory[activeButton].map((bar, index) => (
                                                    <div
                                                        key={index}
                                                        className={`h-[${bar.height}] bg-[${bar.bgColor}] rounded-full w-1.5 -rotate-180`}
                                                    >
                                                        <div
                                                            className={`bg-[${bar.contentColor}] w-1.5 rounded-full`}
                                                            style={{ height: bar.contentHeight }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-auto shadow-md shadow-[#0000001A] flex p-3 flex-col items-center justify-start w-full rounded-md max-h-full bg-[#FFFFFF]'>
                                    <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full '>
                                        <div className='flex items-center gap-2'>
                                            <i class="fa-solid fa-leaf text-[#000000] text-sm"></i>
                                            <p className='font-medium text-[#000000] text-xs'>Material Supplier Records</p>
                                        </div>
                                        <div className='flex justify-center items-center gap-10 pr-20 w-[50%]'>
                                            <div className='flex items-center gap-5 border-b-2 border-[#2D62ED] pb-2'>
                                                <i class="fa-solid fa-list text-[#2D62ED] text-sm"></i>
                                                <p className='font-medium text-[#2D62ED] text-xs'>Scales List</p>
                                            </div>
                                            <div className='flex gap-5'>
                                                <i class="fa-solid items-center fa-chart-gantt text-[#8D9192] text-sm"></i>
                                                <p className='font-medium text-[#8D9192] text-xs'>Scale Records</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center flex-col p-5 w-full gap-4'>
                                        <div className='flex justify-start items-start  w-full gap-16 pb-2 mt-2'>
                                            <div class="relative border-b">
                                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <i class="fa-solid fa-magnifying-glass w-4 h-4 text-gray-400 text-xs"></i>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="bg-[#FFFFFF] border-b border-transparent text-gray-900 text-xs focus:border-b-blue-500 w-full ps-10 p-2.5"
                                                    placeholder="Search by Material Type"
                                                    value={searchScale}
                                                    onChange={(e) => setSearchScale(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <table class="w-full text-sm text-left rtl:text-right bg-[#FFFFFF]">
                                            <thead class="text-xs text-[#707070] border-b border-[#B2BEC3] py-4 px-20">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Scale ID
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Last scale type
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        last Material
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        last order date time
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData.length > 0 ? (
                                                    filteredData.map((item, index) => (
                                                        <tr key={index} className="border-b text-[#EFEFEF]">
                                                            <div className='flex justify-start items-center  py-4 '>
                                                                <i class="fa-solid fa-angles-down  rounded-full "></i>
                                                                <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center w-full">
                                                                    {item.scaleID}
                                                                </td>
                                                            </div>
                                                            <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                                                                {item.lastScaleType}
                                                            </td>
                                                            <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                                                                {item.lastMaterial}
                                                            </td>
                                                            <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                                                                {item.lastOrderDateTime}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center py-4 text-[#707070]">
                                                            No results found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-center w-[25%] rounded-lg h-full gap-y-10'>
                                <div className='relative w-full'>
                                    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                        <i className='fa-solid fa-magnifying-glass w-4 h-4 text-gray-400'></i>
                                    </div>
                                    <input
                                        type='text'
                                        className='bg-[#FFFFFF] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5'
                                        placeholder='Search by Material Name - Type'
                                        value={searchAlerts}
                                        onChange={(e) => setSearchAlerts(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='w-full bg-[#FFFFFF] rounded-lg'>
                                    <div className='flex justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-[100%]'>
                                        <div className='flex justify-start items-center px-6 py-4'>
                                            <span className='p-1 mr-5 rounded-full bg-[#EC5967]'></span>
                                            <p className='text-[#EC5967] text-sm font-medium uppercase'>Alerts</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-start items-center gap-3 w-[100%] px-1.5 text-[#3D5161] overscroll-contain'>
                                        {filteredAlerts.length > 0 ? (
                                            filteredAlerts.map((alert, index) => (
                                                <div
                                                    key={index}
                                                    className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'
                                                >
                                                    <div className='flex flex-col items-center justify-center w-[20%]'>
                                                        <i className={`fa-solid ${alert.icon} text-lg text-[#0000001A]`}></i>
                                                        <p className='text-xs text-[#0000001A]'>{alert.type}</p>
                                                    </div>
                                                    <div className='flex flex-col items-start w-[80%]'>
                                                        <p className='text-sm text-[#464646]'>{alert.description}</p>
                                                        <div className='flex items-center justify-between w-full'>
                                                            <p className='font-medium text-[#464646] text-xs uppercase'>ID</p>
                                                            <p className='font-medium text-[#464646] text-xs'>{alert.id}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className='text-sm text-[#464646] p-4'>No alerts found</p>
                                        )}
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
