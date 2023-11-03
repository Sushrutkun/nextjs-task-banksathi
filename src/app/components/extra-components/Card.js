import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center card_container w-[21.9375rem] h-[20.375rem] m-[2rem] bg-white rounded-3xl'>
          <div className='card_image mb-[1.88rem]'>
            <Image src={props.imgPath} width={80} height={50}></Image>
          </div>
          <div className='card_heading text-[1.375rem] font-semibold mb-[1.88rem]'>
            {props.heading}
          </div>
          <div className="text-center card_subheading font-semibold text-[0.875rem] w-[20.375rem] mx-[1rem]">
            {props.description}
          </div>
        </div>
    </>
  )
}

export default Card