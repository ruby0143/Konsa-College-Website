import React from 'react'
import { FaSearch } from 'react-icons/fa'
import style from './home.module.css'

const HomeHeader = () => {
  return (
    <div className='w-full'>
        <div className={` ${style.backgroundContainer} flex flex-col items-center justify-center w-full`}>
            <div className='text-2xl text-center font-semibold mb-[35px] text-white'>
                FIND BEST COLLEGES FOR YOURSELF
            </div>    
            <button className='bg-[#EE7C00] text-white h-[40px] w-[185px] rounded-full font-medium flex justify-center items-center' >
                Need Counselling
            </button>
        </div>
        <div className='flex items-center justify-center relative' >
            <div className='flex items-center shadow-md py-[8px] px-[16px] rounded-md absolute bg-white' >
                <FaSearch className='text-[#A7A7A7] ml-2 cursor-pointer text-lg' />
                <input type='search' placeholder='Search your Colleges, Exams, Counsellings, etc' className={`px-3 text-[13px] outline-none border-none rounded-sm leading-7 w-[280px]`} />
            </div>
        </div>
    </div>
  )
}

export default HomeHeader
