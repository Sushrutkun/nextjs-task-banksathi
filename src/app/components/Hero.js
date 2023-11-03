import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="hero-root text-black h-[85vh] w-screen bg-[#844FCF] relative font-faktum">
      <div className="hero-root-bg h-[85vh] w-screen absolute z-10">
        <Image className='fill-inherit absolute bottom-0 w-screen' src='img/v-1.svg' width={1440} height={451} />
      </div>
      <div className="hero-root-bg h-[85vh] w-screen absolute z-20">
        <Image className='fill-inherit absolute bottom-0 w-screen' src='img/v-2.svg' width={1440} height={451} />
      </div>
      <div className="hero-root-bg h-[85vh] w-screen absolute z-30">
        <Image className='fill-inherit absolute bottom-0 w-screen' src='img/v-3.svg' width={1440} height={451} />
      </div>
      <div className="h-40 w-screen absolute z-40 flex flex-col top-[8vh] items-center justify-between">
        <div className='hero-content-primary font-semibold text-4xl text-white w-[588px] text-center'>
          Collaborate, Thrive & Succeed Explore Our Partnerships
        </div>
        <div className='hero-content-secondary font-semibold text-sm text-white w-[530px] text-center'>
          You provide the product, we connect it with eager customers. Together let’s educate 50Cr+ Indians on financial products.
        </div>
      </div>

      <div className="btn absolute z-40 top-[43vh] left-2/4 origin-center -translate-x-2/4 flex flex-col justify-center items-center ">
        <Image src='/img/hand_shake.svg' className='origin-center absolute translate-x-[150%] -translate-y-[140%]' width={47} height={47} />
        <div className="ui-btn text-[#8C5AD6] bg-white p-1.5 rounded-full w-[159px] h-[54px] flex flex-col items-center">
          <div>
            <div className="font-Poppins font-semibold text-[8px] px-0.5 pt-0.5">
              LET'S TALK
            </div>
            <div className="font-faktum font-semibold text-[16px] p-0.5">
              Be Our Partner
            </div>
          </div>
        </div>
        <div className='py-6 font-Poppins text-white font-medium text-sm text-center'>
          Your Trusted Partner in Finance
        </div>
      </div>

      <div className='partner-list w-screen h-8 px-[8rem] min-w-[50%] absolute z-40 bottom-[4vw] '>
        <Image src='/img/partners.svg' className='w-full h-full' width={0} height={0} />
      </div>

    </div>
  )
}

export default HeroSection