import React from 'react';
import Image from 'next/image';
import { FiSearch, FiUser } from 'react-icons/fi';

const NavBar = () => {
  return (
    <>
      <div className='navContainer flex justify-between nav_nav items-center text-faktum mx-[4rem] my-[1rem] '>
        <div className='logo flex justify-between items-center text-[1.625rem] text-semibold'>
          <Image width={35} height={25} src="/logo.png" alt="Bank sathi" className='logo_footer logo_nav' />
          <div className='ml-2 ign_nav'>BankSathi</div>
        </div>
        <div className='hyperLinks font-semibold ign_nav'>
          <ul className='flex'>
            <li className='ml-[8rem]'>Products</li>
            <li className='ml-[4rem]'>How it works?</li>
            <li className='ml-[4rem]'>About us</li>
            <li className='ml-[4rem]'>Contact us</li>
            <li className='ml-[4rem]'>Partners</li>
          </ul>
        </div>
        <div className='ml-[8rem] ign_nav items-center justify-center'>
          <button className='text-white bg-[#49D49D] w-[9.75rem] h-[3.0625rem] rounded-lg  flex justify-center items-center'>
            <p className='text-lg mx-[1.25rem]'>Download</p>
            <p className='text-2xl'>🡥</p>
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <div className='hidden w-[2.125rem] h-[2.125rem] rounded-lg border-black border-[2px] dis_nav  ml-[1.3rem]'>
            <FiSearch className='h-[1rem] text-semibold' />
          </div>
          <div className='hidden w-[2.125rem] h-[2.125rem] bg-[#49D49D] rounded-lg text-white dis_nav  ml-[1.3rem]'>
            <FiUser className='h-[1rem] text-semibold' />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar