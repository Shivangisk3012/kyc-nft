import React from 'react'
import { useState } from 'react';
const Create = () => {

  const [isToggled, setIsToggled] = useState(false);


  const [isArrowUp1, setIsArrowUp1] = useState(false);
  const [isArrowUp2, setIsArrowUp2] = useState(false);
  const [isArrowUp3, setIsArrowUp3] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);

  };
  // const handleArrow = (index) => {
  //   setIsArrowUp((prevStates) => {
  //     const newStates = [...prevStates];
  //     newStates[index] = !newStates[index];
  //     return newStates;
  //   });
  // };

  const handleArrow1 = () => {
    setIsArrowUp1((prevIsArrowUp) => !prevIsArrowUp);
  };

  const handleArrow2 = () => {
    setIsArrowUp2((prevIsArrowUp) => !prevIsArrowUp);
  };

  const handleArrow3 = () => {
    setIsArrowUp3((prevIsArrowUp) => !prevIsArrowUp);
  };


  return (
    <main className='py-4 border border-black'>

      <div className='py-4 relative h-auto' >
        <img src='../src/assets/CreateImage/Rectangle1.png' className=' w-[50%] h-10 absolute right-0 top-8 border-b border-black' />

        <h1 className=' text-center pt-16 text-xl font-bold ' >Create NEW Item</h1>

        <img src='../src/assets/CreateImage/Rectangle2.png' className='w-[48%] h-10 absolute lett-0 top-32 border-t border-black' />
        <img src="../src/assets/CreateImage/girl.png" className=' w-[20%] absolute top-60 hidden sm:block md:block lg:block' />

      </div>

      <form className=' w-[95%] mt-10 sm:mt-16 sm:w-[70%] mx-auto flex flex-col gap-16'>
        <div className='  flex flex-col gap-5'>
          <h1 className='text-lg sm:text-sm'>Required Field</h1>
          <h1 className='text-xl sm:text-lg font-bold'>Image , Video , Audio , or 3D Model *</h1>
          {/* <img src='/video.png' className='h-10 w-10 mx-auto absolute  ' /> */}
          <div className='flex flex-col gap-3 relative'>
  <h1 className='text-center text-[13px] sm:text-[10px] '>
    File Type Supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF, Max size: 100MB
  </h1>

  <div className='border  border-dotted border-black w-[70%] sm:w-[40%] mx-auto h-60 flex items-center justify-center cursor-pointer'>
    <img src='/video.png' className='h-14 w-14 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' />
    <input type='file' className='opacity-0 absolute top-0 left-0 w-full h-full' />
  </div>
</div>

        </div>
        <div className='flex flex-col gap-8'>

          <label className='text-lg font-bold'> Name</label>

          <input type='text' placeholder='item name' className='border border-slate-500 rounded-md w-[80%] h-12 sm:h-8 mx-auto px-3' />
        </div>

        <div className='flex flex-col gap-8'>
          <label className='text-lg font-bold'>External Link</label>
          <input type='text' placeholder='link' className='border border-slate-500 rounded-md w-[80%] h-12 sm:h-8 mx-auto px-3 ' />
        </div>
        <div className='flex flex-col gap-4'>
          <label className='text-lg font-bold'>Description</label>
          <h1 className='text-center'>Details underneath the image </h1>
          <input type='text' placeholder='link' className='border border-slate-500 rounded-md w-[80%] h-20 mx-auto px-3' />
        </div>

        <div className='flex flex-col gap-4'>
          <label className='text-lg font-bold'>Collection</label>
          <h1 className='text-center'>Collections where your item will appear </h1>
          <input type='text' placeholder='Select collections' className='border border-slate-500 rounded-md w-[80%] h-20 mx-auto px-3' />
        </div>


        <div className='border-l border-r border-b border-[#CCCCCC] rounded-2xl py-2 px-5 w-[80%] mx-auto h-16 flex justify-between '>
          <div className='flex gap-8'>
            <img src='../src/assets/CreateImage/Property.png' className='h-8 w-10' />
            <div className='flex flex-col gap-2' >

              <h1 className='text-lg font-bold'>Properties</h1>
              <h1 className='text-xs'>Textual traits that shows as rectangles </h1>
            </div>
          </div>
          <button type='button'
            className={`border rounded-full bg-[#B6D92C] h-10 w-10 flex justify-center items-center ${isArrowUp1 ? 'transform rotate-180' : ''
              }`}
            onClick={handleArrow1}
          >
            <span>^</span>
          </button>
        </div>


        <div className='border-l border-r border-b border-[#CCCCCC] rounded-2xl py-2 px-5 w-[80%] mx-auto h-16 flex justify-between '>
          <div className='flex gap-8'>
            <img src='../src/assets/CreateImage/star.png' className='h-8 w-10' />
            <div className='flex flex-col gap-2' >

              <h1 className='text-lg font-bold'>Levels</h1>
              <h1 className='text-xs'>Numerical traits that shows as a progress bar </h1>
            </div>
          </div>
          <button type='button'
            className={`border rounded-full bg-[#B6D92C] h-10 w-10 flex justify-center items-center ${isArrowUp2 ? 'transform rotate-180' : ''
              }`}
            onClick={handleArrow2}
          >
            <span>^</span>
          </button>
        </div>


        <div className='border-l border-r border-b border-[#CCCCCC] rounded-2xl py-2 px-5 w-[80%] mx-auto h-16 flex justify-between '>
          <div className='flex gap-8'>
            <img src='../src/assets/CreateImage/stats.png' className='h-8 w-10' />
            <div className='flex flex-col gap-2' >

              <h1 className='text-lg font-bold'>Levels</h1>
              <h1 className='text-xs'>Numerical traits that shows as a progress bar </h1>
            </div>
          </div>
          <button type='button'
            className={`border rounded-full bg-[#B6D92C] h-10 w-10 flex justify-center items-center ${isArrowUp3 ? 'transform rotate-180' : ''
              }`}
            onClick={handleArrow3}
          >
            <span>^</span>
          </button>
        </div>

        <div className='border-l border-r border-b border-[#CCCCCC] rounded-2xl py-2 px-5 w-[80%] mx-auto h-16 flex justify-between '>
          <div className='flex gap-8'>
            <img src='../src/assets/CreateImage/lock1.png' className='h-8 w-10' />
            <div className='flex flex-col gap-2' >

              <h1 className='text-lg font-bold'>Unlockable Content</h1>
              <h1 className='text-xs'>Only ber revealed by the owner of the item </h1>
            </div>
          </div>
          <button
            type="button" // Set the button type to "button" to prevent form submission
            className='w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white relative overflow-hidden'
            onClick={handleToggle}
          >
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-black transition-all ${isToggled ? 'left-8' : 'left-1'
                }`}
            ></div>
          </button>
        </div>

        <div className='border-l border-r border-b border-[#CCCCCC] rounded-2xl py-2 px-5 w-[80%] mx-auto h-16 flex justify-between '>
          <div className='flex gap-8'>
            <img src='../src/assets/CreateImage/board1.png' className='h-8 w-10' />
            <div className='flex flex-col gap-2' >

              <h1 className='text-lg font-bold'>Explicit content</h1>
              <h1 className='text-xs'>Set this as explicit or sensitive content </h1>
            </div>
          </div>

          <button
            type="button" // Set the button type to "button" to prevent form submission
            className='w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white relative overflow-hidden'
            onClick={handleToggle}
          >
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-black transition-all ${isToggled ? 'left-8' : 'left-1'
                }`}
            ></div>
          </button>

        </div>


        <div className='flex flex-col gap-4'>
          <label className='text-lg font-bold'>Supply</label>
          <h1 className='text-center'>No of items that can be minted </h1>
          <input type='text' placeholder='Select collections' className='border border-slate-500 rounded-md w-[80%] h-12 sm:h-8 mx-auto px-3 ' />
        </div>



        <div className='flex flex-col gap-8 relative'>
          <label className='text-lg font-bold'>Blokchain</label>
          <img src='../src/assets/CreateImage/ethereum1.png' className=' absolute top-16 left-28  hidden  lg:block h-6 w-4' />
          <input type='text' placeholder='Etherum' className='border border-slate-500 rounded-md w-[80%] h-12 sm:h-8 mx-auto pl-12 ' />
        </div>

        <div className='flex flex-col gap-4'>
          <label >Freeze metadata</label>
          <h1 className='text-center'>Ferrzing Meta data will allow you to lock your item </h1>
          <input type='text' placeholder='To freeze you must create your meta data first ' className='border border-slate-500 rounded-md w-[80%] h-10 mx-auto ' />
        </div>
        <button className='border bg-[#C7F609] w-32 rounded-full text-lg font-bold mx-auto h-10'>Create</button>

      </form>

      <div className='py-4 relative h-auto ' >
        <img src='../src/assets/CreateImage/Rectangle1.png' className=' w-[50%] h-10 absolute right-0 top-8 border-b border-gray-500 mb-12' />



        <img src='../src/assets/CreateImage/Rectangle2.png' className='w-[48%] h-10 mt-9 absolute lett-0 top-32 border-t border-gray-500' />
        <img src='/girl.png' className=' w-[20%] absolute right-0 bottom-[-150%]' />

      </div>
      <footer>

      </footer>

    </main>
  )
}

export default Create