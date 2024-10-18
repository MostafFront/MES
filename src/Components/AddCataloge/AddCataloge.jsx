import AddItem from '../AddItem/AddItem';
import AddProduct from '../AddProduct/AddProduct';
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCataloge() {

    const [activeSection, setActiveSection] = useState('iteamcataloge'); 
    const navigate = useNavigate();

    const handleButtonClick = (section) => {
      setActiveSection(section);
    };


  return (
    <div className='max-w-full max-h-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-[#000000A6]'>
        <div class=" p-4 mx-auto w-[60%] max-h-full -translate-y-2/4 -translate-x-2/4 absolute top-2/4 left-2/4 bg-[#FFFFFF] rounded-md">
            <div className='flex items-center justify-between border-b-2 border-[#B2BEC3] p-2 mb-5'>
                <div className='flex gap-4 items-center '>
                    <i className="fa-solid fa-leaf text-base"></i>
                    <p className='font-medium text-xs uppercase'>add new cataloge</p>
                </div>
                <Link onClick={() => navigate(-1)}><i class="fa-solid fa-xmark"></i></Link>
            </div>
            <div className='flex justify-center items-center w-full flex-col gap-y-20 pt-7'>
                    <div className='flex justify-center items-center bg-[#FFFFFF] shadow-sm shadow-[#0000001c] rounded-lg'>
                            
                            <button
                            className={`px-5 py-2 font-medium text-xs ${
                                activeSection === 'iteamcataloge' ? 'bg-[#2D62ED] text-[#FFFFFF]  rounded-lg ' : 'text-[#B2BEC3]'
                            }`}
                            onClick={() => handleButtonClick('iteamcataloge')}
                            >
                            iteam cataloge
                            </button>
                            <button
                            className={`px-5 py-2 font-medium text-xs ${
                                activeSection === 'productcataloge' ? 'bg-[#2D62ED] text-[#FFFFFF]  rounded-lg ' : 'text-[#B2BEC3]'
                            }`}
                            onClick={() => handleButtonClick('productcataloge')}
                            >
                            product cataloge
                            </button>
                            

                    </div>
                    {activeSection === 'iteamcataloge' && <AddItem/>} 
                    {activeSection === 'productcataloge' && <AddProduct/>}
                    
            </div>
        </div>
    </div>
  )
}
