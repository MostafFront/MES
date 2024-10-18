import DashboardBar from '../DashboardBar/DashboardBar'
import SideBar from '../SideBar/SideBar';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChart = ({ percentage }) => {
    const [series, setSeries] = useState([percentage]);

    useEffect(() => {
        setSeries([percentage]);
    }, [percentage]);


    const getColor = (value) => {
        if (value >= 80) return '#2D62ED';
        if (value >= 50) return '#ffc107';
        return '#dc3545';
    };

    const options = {
        chart: {
            height: 200,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%',
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        colors: [getColor(percentage)],
    };

    return (
        <div className='relative flex items-center justify-center'>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="radialBar"
                    height={150}
                />
            </div>
            <p className='absolute text-xs text-center font-bold' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {series[0]}%
            </p>
        </div>
    );
};


const assemblyData = [
    {
        id: 1,
        color: '#2E4A79',
        text: 'Pourtier 2200/2 Low Voltage - Assembly',
        category: 'Low Voltage',
    },
    {
        id: 2,
        color: '#2E4A79',
        text: 'Pourtier 2600/4 - Assembly - Medium Voltage',
        category: 'Medium Voltage',
    },
    {
        id: 3,
        color: '#2E4A79',
        text: 'Assembly 2200 - Assembly/Wire Armoring',
        category: 'General',
    },
    {
        id: 4,
        color: '#D0D7DA',
        text: 'Kabmak - Armoring - Steel Tape',
        category: 'General',
    },
    {
        id: 5,
        color: '#2E4A79',
        text: 'Another Assembly Item 1',
        category: 'Low Voltage',
    },
    {
        id: 6,
        color: '#D0D7DA',
        text: 'Another Assembly Item 2',
        category: 'Medium Voltage',
    },
];

const AssemblySection = () => {
    const groupedData = assemblyData.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className='flex flex-col w-full '>
            {Object.keys(groupedData).map(category => (
                <div key={category} className='flex flex-col mb-4  pb-2 mt-2  border-b border-[#EFEFEF]'>
                    <p className='text-[#003F5C] text-sm uppercase font-medium'>{category}</p>
                    <div className='flex items-start flex-wrap gap-5'>
                        {groupedData[category].map(item => (
                            <div className='flex justify-start items-center pb-2 mt-2 ' key={item.id}>
                                <span className='p-1 mr-2 rounded-full' style={{ backgroundColor: item.color }}></span>
                                <p className='font-medium text-xs' style={{ color: item.color === '#D0D7DA' ? '#D0D7DA' : '#707070' }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


const alerts = [
    { icon: "warehouse", type: "Warehouse", message: "Confirm mass on machine", id: "40127725" },
    { icon: "rocket", type: "Machine", message: "Machine stoppage", id: "40127725" },
    { icon: "sliders", type: "Performance", message: "Low production yield count", id: "40127725" },
];

const notifications = [
    { icon: "circle-check", type: "Done", message: "Job Order is Ready", id: "40127725" },
    { icon: "qrcode", type: "Product", message: "High production scrap", id: "40127725" },
];

const NotificationItem = ({ notification }) => (
    <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'>
        <div className='flex flex-col items-center justify-center w-[20%]'>
            <i className={`fa-solid fa-${notification.icon} text-lg text-[#0000001A]`}></i>
            <p className='text-xs text-[#0000001A]'>{notification.type}</p>
        </div>
        <div className='flex flex-col items-start w-[80%]'>
            <p className='text-sm text-[#464646]'>{notification.message}</p>
            <div className='flex items-center justify-between w-full'>
                <p className='font-medium text-[#464646] text-xs uppercase'>id</p>
                <p className='font-medium text-[#464646] text-xs'>{notification.id}</p>
            </div>
        </div>
    </div>
);

const AlertItem = ({ alert }) => (
    <div className='flex justify-between items-start w-full border-[#EFEFEF] border-b p-1 gap-5'>
        <div className='flex flex-col items-center justify-center w-[20%]'>
            <i className={`fa-solid fa-${alert.icon} text-lg text-[#0000001A]`}></i>
            <p className='text-xs text-[#0000001A]'>{alert.type}</p>
        </div>
        <div className='flex flex-col items-start w-[80%]'>
            <p className='text-sm text-[#464646]'>{alert.message}</p>
            <div className='flex items-center justify-between w-full'>
                <p className='font-medium text-[#464646] text-xs uppercase'>id</p>
                <p className='font-medium text-[#464646] text-xs'>{alert.id}</p>
            </div>
        </div>
    </div>
);

const buttonData = {
    today: {
        production: 6200,
        productionSupply: 5000,
        Consumption: 7800,
        consumptionSupply: 1800,
        productionRange: 10,
        ConsumptionRange: 50,
        performance: 85,
        availability: 92,
        quality: 95
    },
    yesterday: {
        production: 5900,
        productionSupply: 4800,
        Consumption: 7500,
        consumptionSupply: 1700,
        productionRange: 80,
        ConsumptionRange: 60,
        performance: 75,
        availability: 80,
        quality: 85
    },
    lastWeek: {
        production: 34000,
        productionSupply: 6000,
        Consumption: 8200,
        consumptionSupply: 2000,
        productionRange: 90,
        ConsumptionRange: 40,
        performance: 90,
        availability: 95,
        quality: 88
    },
};

export default function Dashboard() {

    const [activeButton, setActiveButton] = useState('today');
    const [data, setData] = useState({ ...buttonData.today });



    const handleButtonClick = (button) => {
        if (buttonData.hasOwnProperty(button)) {
            setActiveButton(button);
            setData(buttonData[button]);
        } else {
            console.error(`Button "${button}" not found in buttonData.`);
        }
    };

    return (
        <>
            <SideBar />
            <div className='absolute top-0 right-0  min-h-full w-[90%] bg-[#F4F7FE] flex flex-col'>
                <DashboardBar activeButton={activeButton} onButtonClick={handleButtonClick} />
                <div className='p-4 mx-auto w-full h-full flex flex-col rounded-md'>
                    <div className='flex items-start min-h-[5%] mb-5'>
                        <p className='font-medium text-[#003F5C]'>Dashboard</p>
                    </div>
                    <div className='flex items-start justify-between h-[95%] gap-5'>
                        <div className='flex flex-col items-center justify-start h-full gap-y-10 w-[75%]'>
                            <div className='flex items-center w-full h-auto'>
                                <div className='flex justify-between items-start gap-2 h-full w-full'>

                                    <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md w-[30%]'>
                                        <div className='flex items-start justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                            <i className="fa-solid fa-qrcode text-[#000000] text-ms"></i>
                                            <p className='text-[#000000] font-medium text-xs capitalize'>Total Production</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-10'>
                                            <div className='flex justify-start items-center text-[#3D5161] font-bold gap-x-8 text-center'>
                                                <div className='flex flex-col items-start'>
                                                    <p className='font-medium text-lg text-[#000000]'>{data.production} <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                    <p className='font-medium text-xs text-[#2D62ED]'>Total Production</p>
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <p className='font-medium text-lg text-[#000000]'>{data.productionSupply} <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                    <p className='font-medium text-xs text-[#9D9D9D]'>Planned Supply</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center font-bold gap-x-4 text-center w-full'>
                                                <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                                                    <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: `${data.productionRange}%` }} />
                                                </div>
                                                <p className='font-bold text-xl text-[#000000]'>{data.productionRange}%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 h-full shadow-md w-[40%]'>
                                        <div className='flex items-center justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                            <i className="fa-solid fa-sliders text-[#000000] text-ms"></i>
                                            <p className='text-[#000000] font-medium text-xs capitalize'>Performance Indicator KPI</p>
                                        </div>
                                        <div className='flex justify-center items-center bg-[#FFFFFF] my-1 h-auto p-2 w-full'>
                                            <div className='flex justify-between items-center text-[#000000] font-bold text-center w-full'>
                                                <div className='flex flex-col items-center w-1/3'>
                                                    <ApexChart percentage={data.availability} />
                                                    <p className='font-medium text-xs'>Availability</p>
                                                </div>
                                                <div className='flex flex-col items-center w-1/3'>
                                                    <ApexChart percentage={data.performance} />
                                                    <p className='font-medium text-xs'>Performance</p>
                                                </div>
                                                <div className='flex flex-col items-center w-1/3'>
                                                    <ApexChart percentage={data.quality} />
                                                    <p className='font-medium text-xs'>Quality</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col p-3 bg-[#FFFFFF] rounded-md gap-y-1 shadow-md w-[30%]'>
                                        <div className='flex items-start justify-start gap-2 border-b-2 border-[#E0E7F1] pb-2'>
                                            <i className="fa-solid fa-leaf text-[#000000] text-ms"></i>
                                            <p className='text-[#000000] font-medium text-xs capitalize'>Material Consumption</p>
                                        </div>
                                        <div className='flex flex-col items-start bg-[#FFFFFF] my-1 h-auto p-2 w-full gap-y-10'>
                                            <div className='flex justify-start items-center text-[#3D5161] font-bold gap-x-8 text-center'>
                                                <div className='flex flex-col items-start'>
                                                    <p className='font-medium text-lg text-[#000000]'>{data.Consumption} <span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                    <p className='font-medium text-xs text-[#2D62ED]'>Planned Consumption</p>
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <p className='font-medium text-lg text-[#000000]'>{data.consumptionSupply}<span className='text-xs pl-1 text-[#000000]'>KM</span></p>
                                                    <p className='font-medium text-xs text-[#9D9D9D]'>Planned Supply</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center font-bold gap-x-4 text-center w-full'>
                                                <div className="h-3 bg-[#B2BEC39C] rounded-full w-full">
                                                    <div className="bg-[#2D62ED] h-3 rounded-full" style={{ width: `${data.ConsumptionRange}%` }} />
                                                </div>
                                                <p className='font-bold text-xl text-[#000000]'>{data.ConsumptionRange}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto shadow-md flex p-3 flex-col items-center justify-start w-full rounded-md bg-[#FFFFFF]'>
                                <div className='flex justify-between items-center border-b border-[#EFEFEF] w-full'>
                                    <div className='flex items-center gap-2'>
                                        <i className="fa-solid fa-wave-square text-[#000000] text-sm"></i>
                                        <p className='font-medium text-[#000000] text-xs'>Current Activity</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-10 pr-20 w-[50%]'>
                                        <div className='flex items-center gap-5 border-b-2 border-[#2D62ED] pb-2'>
                                            <i className="fa-solid fa-sliders text-[#2D62ED] text-sm"></i>
                                            <p className='font-medium text-[#2D62ED] text-xs'>Function</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <i className="fa-solid items-center fa-route text-[#8D9192] text-sm"></i>
                                            <p className='font-medium text-[#8D9192] text-xs'>Route</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <i className="fa-solid items-center fa-tag text-[#8D9192] text-sm"></i>
                                            <p className='font-medium text-[#8D9192] text-xs'>Job Order</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center flex-col p-12 w-full'>
                                    <AssemblySection />
                                </div>
                            </div>
                        </div>
                        {/* Alerts and Notifications Section */}
                        <div className='flex flex-col justify-start items-center w-[25%] bg-[#FFFFFF] rounded-lg h-full'>
                            <div className='w-full'>
                                <div className='flex justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-full'>
                                    <div className='flex justify-start items-center px-6 py-4'>
                                        <span className='p-1 mr-5 rounded-full bg-[#EC5967]'></span>
                                        <p className="text-[#EC5967] text-sm font-medium uppercase">Alerts</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start items-center gap-3 w-full px-1.5 text-[#3D5161]'>
                                    {alerts.map((alert, index) => (
                                        <AlertItem key={index} alert={alert} />
                                    ))}
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-start items-center gap-x-2 border-[#EFEFEF] border-b w-full'>
                                    <div className='flex justify-start items-center px-6 py-4'>
                                        <span className='p-1 mr-5 rounded-full bg-[#00D1DE]'></span>
                                        <p className="text-[#00D1DE] text-sm font-medium uppercase">Notifications</p>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start items-start gap-3 w-full px-1.5 text-[#3D5161]'>
                                    {notifications.map((notification, index) => (
                                        <NotificationItem key={index} notification={notification} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

