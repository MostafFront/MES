import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddItem() {
    const navigate = useNavigate();
    return (
        <div class='w-full h-full flex justify-end items-center pr-5 pl-5 flex-wrap gap-x-2 gap-y-5'>
            <div class="w-[50%]">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">item code</label>
                <input type="text" id="name" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div class="w-[49%]">
                <label for="channel" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">supplier code</label>
                <input type="text" id="channel" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div class="w-[50%]">
                <label for="Station" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">material name</label>
                <input type="text" id="Station" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div class="w-[49%]">
                <label for="Station" className="block mb-2 text-sm font-medium text-gray-900 capitalize ">category</label>
                <input type="text" id="Station" className="bg-gray-50 border border-[#3D5161] text-gray-900 text-sm rounded-lg focus:ring-[#3D5161] focus:border-[#3D5161] block w-full p-2.5" placeholder="Placeholder..." />
            </div>
            <div className='gap-4 flex pt-10'>
                <Link onClick={() => navigate(-1)} className="text-[#2D62ED] border border-[#2D62ED]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center transition-all">Cancel</Link>
                <button  type="submit" className="text-white bg-[#2D62ED] hover:bg-[#1d3164] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"><i class="fa-regular fa-floppy-disk font-medium text-sm pr-4"></i>Submit</button>
            </div>
        </div>
    )
}
