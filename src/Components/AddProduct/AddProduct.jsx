import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddProduct() {
    const navigate = useNavigate();

    return (
        <div class='w-full h-full flex justify-end items-center pr-5 pl-5 flex-wrap gap-x-2 gap-y-5'>
            <div class="w-[50%]">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">product id</label>
                <input type="text" id="name" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div class="w-[49%]">
                <label for="channel" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">product name</label>
                <input type="text" id="channel" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div className='flex items-start w-full flex-col gap-5'>
                <div class="w-full">
                    <label for="Station" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">bill of products</label>
                    <input type="text" id="Station" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
                </div>

                <label class="flex items-start  cursor-pointer w-auto">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-center">semi finished product</span>
                </label>
            </div>

            <div className='gap-4 flex pt-10'>
                <Link onClick={() => navigate(-1)}   className="text-[#2D62ED] border border-[#2D62ED]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center transition-all">Cancel</Link>
                <button type="submit" className="text-white bg-[#2D62ED] hover:bg-[#1d3164] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"><i class="fa-regular fa-floppy-disk font-medium text-sm pr-4"></i>Submit</button>
            </div>
        </div>
    )
}
