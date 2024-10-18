import React from 'react'
import { useState } from 'react';

export default function ConsumptionRouteTable() {
    const [isOpen, setIsOpen] = useState(false);
  return (


                                    <div className="w-full">
                                            <table class="w-full text-sm text-left rtl:text-right bg-[#FFFFFF] transition-all" >
                                                <thead class="text-xs text-[#707070] border-b border-[#B2BEC3] py-4 px-20">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Routes ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Job Order ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        State
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Data Time
                                                        </th> 
                                                    </tr>
                                                </thead>
                                                <tbody onClick={() => setIsOpen(!isOpen)} className='w-full'>
                                                    <tr class=" border-b border-[#EFEFEF] w-full">      
                                                        <div className='flex  items-center justify-center gap-14  py-4 text-[#707070]'>
                                                            <i class="fa-solid fa-chevron-down"></i>
                                                            <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center pl-2">
                                                            Aluminum
                                                            </td>
                                                            <div className='flex relative  items-center'>
                                                                <span className='p-1 rounded-full bg-[#EC5967] absolute right-[22px]'></span>
                                                                <span className='p-1 rounded-full bg-[#CA4E82] absolute right-[16px]'></span>
                                                                <span className='p-1 rounded-full bg-[#00D1DE] absolute right-[10px]'></span> 
                                                                <span className='p-1 rounded-full bg-[#634F8D] absolute right-[4px]'></span>
                                                            </div>
                                                        </div>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        355678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        Active
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        9:00 | 3-29-2021
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                            <table  className={`w-[100%] text-sm text-center rtl:text-right bg-[#FFFFFF] ${isOpen ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'}`} onClick={() => setIsOpen(!isOpen)}>
                                                <thead class="text-xs text-[#707070] ">
                                                    <tr>
                                                        
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Material 
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Weight
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
                                                        Process ID
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
                                                        Data Time
                                                        </th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class=" text-[#EFEFEF]">      
                                                        <div className='flex  items-center justify-start gap-5'>
                                                            <span className='p-1 rounded-full bg-[#EC5967]'></span>
                                                            <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center pl-2">
                                                            Aluminum
                                                            </td>
                                                        </div>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        1000kg
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        355678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        Armoring
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        23445
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        43678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        9:00 | 3-29-2021
                                                        </td>
                                                    </tr>
                                                    <tr class=" text-[#EFEFEF]">      
                                                        <div className='flex  items-center justify-start gap-5'>
                                                            <span className='p-1 rounded-full bg-[#CA4E82]'></span>
                                                            <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center pl-2">
                                                            Aluminum
                                                            </td>
                                                        </div>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        1000kg
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        355678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        Armoring
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        23445
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        43678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        9:00 | 3-29-2021
                                                        </td>
                                                    </tr>
                                                    <tr class=" text-[#EFEFEF]">      
                                                        <div className='flex  items-center justify-start gap-5'>
                                                            <span className='p-1 rounded-full bg-[#00D1DE]'></span>
                                                            <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center pl-2">
                                                            Aluminum
                                                            </td>
                                                        </div>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        1000kg
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        355678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        Armoring
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        23445
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        43678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        9:00 | 3-29-2021
                                                        </td>
                                                    </tr>
                                                    <tr class=" text-[#EFEFEF]">      
                                                        <div className='flex  items-center justify-start gap-5'>
                                                            <span className='p-1 rounded-full bg-[#634F8D]'></span>
                                                            <td scope="row" class=" font-medium text-[#707070] text-[10px]  uppercase text-center pl-2">
                                                            Aluminum
                                                            </td>
                                                        </div>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        1000kg
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        355678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        Armoring
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        23445
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        43678
                                                        </td>
                                                        <td class="font-medium text-[#707070] text-[10px]  uppercase text-center">
                                                        9:00 | 3-29-2021
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                    </div>

                                    
  )
}
