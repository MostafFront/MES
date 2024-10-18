import React from 'react';

export default function ConsumptionProcessTable({ data }) {
  return (
    <table className="w-full text-sm text-left rtl:text-right bg-[#FFFFFF]">
      <thead className="text-xs text-[#707070] border-b border-[#B2BEC3] py-4 px-20">
        <tr>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Process ID
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Material 
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Material Weight
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Function
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Route ID
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Job Order ID
          </th>
          <th scope="col" className="px-6 py-3 font-medium text-xs text-[#707070] capitalize text-center">
            Date Time
          </th> 
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index} className="border-b text-[#EFEFEF]">
              <td className="flex items-center py-4">
                <span className='p-1 rounded-full bg-[#EC5967] mr-2'></span> {/* Add margin for spacing */}
                <span className="font-medium text-[#707070] text-[10px] uppercase text-center w-full">
                  {item.processID}
                </span>
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.material}
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.materialWeight}
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.function}
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.routeID}
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.jobOrderID}
              </td>
              <td className="font-medium text-[#707070] text-[10px] uppercase text-center">
                {item.dateTime}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center py-4 text-[#707070]"> {/* Corrected colSpan to match the number of columns */}
              No results found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
