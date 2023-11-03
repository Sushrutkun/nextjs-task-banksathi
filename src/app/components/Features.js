import React from 'react'
import cardData from "./extra-components/Data"
import Card from "./extra-components/Card"
const Features = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-[2.25rem] w-screen mb-[6rem] font-semibold text_feat'>
        <div className='flex justify-center text-center'>
          Partner with us for:<p className='text-[#49D49D]'> Mutual Growth,</p>
        </div>
        <div className=' text-center'>
          Extended Reach & Collaborative Success
        </div>
      </div>
      <div className=' card_feat mx-[4rem]'>
        {
          cardData.map((item, index) => {
            return (
              <Card imgPath={item.imgPath} heading={item.heading} description={item.description} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Features