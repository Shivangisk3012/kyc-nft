import React from 'react'
import { PricingData } from '../Constant/PricingData'

const PricingInfo = () => {
    return (
        <div className=' flex flex-col gap-10 py-10 px-1 md:px-2 md:w-[90%] mx-auto'>

            <div className=' flex gap-4 items-center justify-between font-bold  '>
        <h1>Currency</h1>
        <h1>Floor Price</h1>
        <h1>24 hr% Change</h1>
        <h1>Graph</h1>
        <h1>Items</h1>
        <h1></h1>
        

    </div>

            {/* <div className='flex gap-4 items-center justify-between '> */}
                {PricingData.map((data, index) => (
                    <div key={index} className='border border-[#CCCCCC] rounded-lg flex gap-2 md:gap-4 items-center justify-between py-3 px-1 sm:px-3 '>
                       <div className='w-16'>
                        <img src={data.currency} className=' h-10 w-10 sm:h-12 sm:w-12'  />
                        <h1 className='font-bold'>{data.currencyName}</h1>
                        </div>
                        <h1 className='text-lg font-semibold'>{data.FloorPrice}</h1>
                        <h1 className='text-[#E10000] text-lg font-bold'>{data.hrChange}%</h1>
                        <img src={data.Graph} className='h-7 md:h-14'/>
                        <h1 className='text-lg font-semibold'>{data.items}K</h1>
                        <button >...</button>
                    </div>
                ))}
            {/* </div> */}
        </div>

    )
}

export default PricingInfo