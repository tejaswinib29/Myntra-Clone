import React from 'react'
import { SlUser } from "react-icons/sl";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {

  const numberOfItemsInBag = useSelector(state=>state.bag. noofItemsInBag)

  return (
    <div className='w-screen flex flex-row items-center xl:justify-between shadow-md'>
      {/* {left} */}
      <div className='flex flex-row items-center ml-9'>
      <Link to={'/home'}>
        <img src='public/Images/logo.png'
          alt=''
          className='w-12'
        />
        </Link>

      
        <div className='flex flex-row items-center w-[680px] ml-10'>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-red-600 transition duration-100'>MEN</p>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-pink-600 transition duration-100'>WOMEN</p>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-orange-600 transition duration-100'>KIDS</p>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-yellow-600 transition duration-100'>HOME&LIVING</p>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-green-600 transition duration-100'>BEAUTY</p>
          <p className='text-sm font-bold text-slate-700  p-5 py-8 border-b-4 border-white hover:cursor-pointer  hover:border-blue-600 transition duration-100'><sup>New</sup>STUDIO</p>
        </div>
      </div>

      {/* {right} */}
      <div className='flex flex-row items-center'>
        <div className='flex flex-row items-center mr-9'>
          <CiSearch />
          <input type="text" placeholder='Search for products brands and more'/>
        </div>

        <div className='flex flex-row items-center'>
          <div className='flex flex-col items-center p-4'>
            <SlUser />
            <p>Profile</p>
          </div>
          <div className='flex flex-col items-center p-4'>
            <CiHeart />
            <p>WishList</p>
          </div>
          <Link to={'/cart'}>
          <div className='flex flex-col items-center p-4 mr-8 relative'>
            <HiOutlineShoppingBag />
            <p>Bag</p>
            {
               numberOfItemsInBag === 0 ||
               <p className='bg-red-700 text-sm font-bold p-2 rounded-full text-white absolute left-7 top-[-10px]'>
                {numberOfItemsInBag}</p>
            }
          </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Header
