// import React from 'react'

// const Availability = () => {
//   return (
//     <div className='flex flex-col gap-4 '>

//     <div className='border border-black flex gap-10 items-center w-[80%] mx-auto px-4 py-2 justify-between'>

    


//     <h1>Available NFT’s</h1>
    
// <img src='/image1.png' className='w-8 h-8'></img>
// <img src='/image2.png' className='w-8 h-8'></img>
// <img src='/image3.png' className='w-8 h-8'></img>
// <img src='/image4.png' className='w-8 h-8'></img>
// <img src='/image4.png' className='w-8 h-8'></img>
// <img src='/image4.png' className='w-8 h-8'></img>


//     </div>
//     <div className='border border-black flex gap-14 items-center w-[80%] mx-auto px-4 py-2 justify-between '>

// <h1>Sold NFT’s</h1>
// <img src='/image1.png' className='w-8 h-8'></img>
// <img src='/image2.png' className='w-8 h-8'></img>
// <img src='/image3.png' className='w-8 h-8'></img>


// <div className='relative w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white'>
//             <input type='radio' id="id" name='radio' className='hidden' />
//             <label               htmlFor='id'
//               className='absolute left-1 top-1 w-6 h-6 rounded-full bg-black'
//             ></label>
//           </div>

// </div>
// <div className='border border-black flex gap-10 items-center w-[80%] mx-auto px-4 py-2 '>

    


// <h1>On Auction</h1>
// <img src='/image1.png' className='w-8 h-8'></img>
// <img src='/image2.png' className='w-8 h-8'></img>
// <img src='/image3.png' className='w-8 h-8'></img>


// </div>
// <div className='border border-black flex gap-20 items-center w-[80%] mx-auto px-4 py-2 '>

    


// <h1>Reserved</h1>
// <img src='/image1.png' className='w-8 h-8'></img>
// <img src='/image2.png' className='w-8 h-8'></img>
// <img src='/image3.png' className='w-8 h-8'></img>

// </div>
// <div className='border border-black flex gap-14 items-center w-[80%] mx-auto px-4 py-2 justify-between'>

    


// <h1>Out of Stock</h1>
// <img src='/image1.png' className='w-8 h-8'></img>
// <img src='/image2.png' className='w-8 h-8'></img>
// <img src='/image3.png' className='w-8 h-8'></img>
{/* <div className='relative w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white'>
            <input type='radio' id="id" name='radio' className='hidden' />
            <label               htmlFor='id'
              className='absolute left-1 top-1 w-6 h-6 rounded-full bg-black'
            ></label>
          </div>
 */}

// </div>
//     </div>
//   )
// }

// export default Availability



import React from 'react';
import { AvailabilityData } from '../Constant/AvailabilityData';

const Availability = () => {
  return (
    <div className='mx-1 py-8 flex flex-col gap-6 md:gap-6'>
      {AvailabilityData.map((data, index) => (
        <div key={index} className='border border-black rounded-xl flex flex-row gap-[1rem] sm:gap-[3rem]  items-center w-full sm:w-[80%] mx-auto px-1 py-4 sm:px-6  sm:py-2 relative'>
          <span className='w-[18%]'>{data.label}</span>
          {index === 0 ? (
            <div className='flex gap-[0.5rem] md:gap-[3rem]'>
              <img src={data.image1} className='w-8 h-8' alt={`Image 1`} />
              <img src={data.image2} className='w-8 h-8' alt={`Image 2`} />
              <img src={data.image3} className='w-8 h-8' alt={`Image 3`} />
              <img src={data.image4} className='w-8 h-8' alt={`Image 4`} />
              <img src={data.image5} className='w-8 h-8' alt={`Image 5`} />
              <img src={data.image6} className='w-8 h-8' alt={`Image 6`} />
            </div>
          ) : (
            <div className='flex gap-[1rem] md:gap-[3rem] lg:[3rem]'>
              <img src={data.image1} className='w-8 h-8' alt={`Image 1`} />
              <img src={data.image2} className='w-8 h-8' alt={`Image 2`} />
              <img src={data.image3} className='w-8 h-8' alt={`Image 3`} />
            </div>
          )}

          {/* Add a button for index 2 */}
        {(index === 1 || index === 4) && (
          <div className='absolute right-4 w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white'>
          <input type='radio' id="id" name='radio' className='hidden' />
          <label               htmlFor='id'
            className='absolute left-1 top-1 w-6 h-6 rounded-full bg-black'
          ></label>
        </div>

          )}
        </div>
      ))}
    </div>
  );
};

export default Availability;
