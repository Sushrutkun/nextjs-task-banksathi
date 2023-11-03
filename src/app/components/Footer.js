import React from 'react'
import Image from 'next/image'
import { BsWhatsapp, BsTwitter, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#212529] text-white'>
      <div style={{ background: "linear-gradient(90deg, #49D49D 31.94%, rgba(73, 212, 157, 0.00) 100%)" }} className='flex font-faktum px-20 py-10 text-[2.25rem] gap-5 items-center conn_footer text-semibold'>
        <p style={{ gridArea: "text" }}>Having trouble choosing a product? Let’s connect</p>
        <p style={{ gridArea: "arrow" }} className='text-5xl font-extralight'> →</p>
      </div>
      <div className='flex justify-between font-faktum  px-20 py-10 items-center br_footer font-semibold text-[2.5rem]'>
        <div className='logo flex justify-between items-center'>
          <Image width={52.5} height={37.5} src="/logo.png" alt="Bank sathi" className='logo_footer' />
          <div className='ml-2'>BankSathi</div>
        </div>
        <div className='social_icons flex justify-center text-black'>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <FaFacebookF className='h-[1.25rem]' />
          </div>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <BsInstagram className='h-[1.25rem]' />
          </div>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <FaLinkedinIn className='h-[1.25rem]' />
          </div>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <GrMail className='h-[1.25rem]' />
          </div>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <BsWhatsapp className='h-[1.25rem]' />
          </div>
          <div className=' flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-[#A29FAD] mx-1'>
            <BsTwitter className='h-[1.25rem]' />
          </div>
        </div>
      </div>
      <div className='flex justify-between font-poppins text-[0.9375rem] px-20 py-10 info_footer '>
        <div style={{ gridArea: "add" }} className='flex flex-col w-1/4 add_footer gap-3'>
          <p className='text-[1.125rem]  font-bold py-1 '> Address </p>
          <p> First Floor, Plot No 3/1, Attic Smart Square Complex, Above 3M Care & LBB, 100 Feet Rd, Binnamangala, Stage 1, Indiranagar, Bengaluru, Karnataka - 560038, India</p>
          <p> <b> Phone : </b> +91 7026833933 </p>
          <p> <b> Mail : </b> customer@banksathi.com </p>
        </div>
        <div style={{ gridArea: "pro" }} className='flex flex-col gap-3'>
          <p className='text-[1.125rem] font-bold py-1'> Products </p>
          <p> Credit Card </p>
          <p> Personal Loan </p>
          <p> Insurance </p>
          <p> Banking </p>
          <p> Investment </p>
          <p> Demat Account </p>
        </div>
        <div style={{ gridArea: "res" }} className='flex flex-col gap-3'>
          <p className=' text-[1.125rem] font-bold py-1'> Resources </p>
          <p> EMI Calculator </p>
          <p> CIBIL Score Calculator </p>
          <p> Insurance Calculator </p>
        </div>
        <div style={{ gridArea: "tools" }} className='flex flex-col gap-3'>
          <p className='text-[1.125rem] font-bold py-1' > Tools </p>
          <p> Articles </p>
          <p> Blogs </p>
          <p> Videos </p>
        </div>
        <div style={{ gridArea: "comp" }} className='flex flex-col gap-3'>
          <p className='text-[1.125rem] font-bold py-1' > Company </p>
          <p> About BanksSathi </p>
          <p> Contact Us </p>
          <p> Career </p>
          <p> Privacy and Policy </p>
        </div>
      </div>
      <div className='social_icons flex justify-center pt-10 pb-5 text-[0.9375rem]'>
        © Copyright 2023. All Rights Reserved. BankSathi
      </div>
    </div>
  )
}

export default Footer