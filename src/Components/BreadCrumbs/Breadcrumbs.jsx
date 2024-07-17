import React from 'react'
import { FaChevronDown } from "react-icons/fa";

function Breadcrumbs() {
  return (
    <div className='flex flex-col px-5 py-5 m-auto'>
      <p className='text-sm mb-5 text-slate-900'>Home / Clothing / Shirts / <span className='font-bold'> Casual Shirts For Men</span></p>

      <p className='text-sm mb-5 text-slate-900'><span className='font-bold'>Casual Shirts For Men </span> - 107809 items</p>

      <div className='flex flex-row items-center'> 
       <p className='text-md font-bold w-[300px]'>Filters</p>

      
       <div className='flex flex-row items-center justify-between w-[1050px]'>
         {/* {options} */}
        <div className='flex flex-row items-center'>
        <div className='flex flex-row items-center px-3 py-2 rounded-full hover:bg-gray-100 hover:cursor-pointer mx-1'>
          <p className='text-sm text-slate-600'>Add Ons</p>
        <FaChevronDown className='text xs ml-2 text-gray-500'/>
      </div>

      {/* {recommended box} */}
      <div className='flex flex-row items-center justify-between border-2 border-gray-300 px-4 py-2 rounded-sm w-[300px] hover:cursor-pointer'>
        <p className='text-sm'>Sort by: <span className='font-bold'> Recommended</span></p>
        <FaChevronDown className='text-xs text-gray-600' />
        </div>

        <div className='hidden'>
        <p>Recommended</p>
        <p>What&apos; New</p>
        <p>Popularity</p>
        <p>Better Discounts</p>
        <p>Price : High to low</p>
        <p>Price : low to High</p>
        <p>Customer Rating</p>
        
          </div>
         </div>
        </div>
      </div>
     </div>
  )
}

export default Breadcrumbs
