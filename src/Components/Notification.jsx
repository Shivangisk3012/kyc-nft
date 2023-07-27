

import React, { useState } from 'react';

const notificationOptions = [
  { id: 'option1', label: 'New Listing, Price Changes, Auction Endings' },
  { id: 'option2', label: 'Get Emails & Messages when your favorite NFT is available' },
  { id: 'option3', label: 'Get notified about the upcoming events' },
  { id: 'option4', label: 'Real Time Updates' },
  { id: 'option5', label: 'Email Notification' },
  { id: 'option6', label: 'Bidding Notification' },
];

const Notification = () => {
  const [toggleState, setToggleState] = useState({});

  const handleToggle = (optionId) => {
    setToggleState((prevState) => ({
      ...prevState,
      [optionId]: !prevState[optionId],
    }));
  };

  return (
    <div className='mt-10 py-16 flex flex-col gap-6 w-[95%] sm:w-[80%] mx-auto'>
      {notificationOptions.map((option) => (
        <div key={option.id} className='px-3 border border-black  w-[90%] md:w-[70%]  rounded-lg flex justify-between items-center '>
          <h1 className='text-base md:font-semibold  font-semibold w-[85%] py-2'>{option.label}</h1>
          <button
            className={`w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white relative overflow-hidden 
            }`}
            onClick={() => handleToggle(option.id)}
          >
            {/* <div
              className={`absolute left-${toggleState[option.id] ? '7' : '1'} top-1 w-6 h-6 rounded-full bg-black transition-all`}
            ></div> */}

<div
              className={`absolute left top-1 w-6 h-6 rounded-full bg-black transition-all ${toggleState[option.id] ? 'left-7' : 'left-1'
                }`}
            ></div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;




 {/* <button
            type="button" // Set the button type to "button" to prevent form submission
            className='w-16 h-8 rounded-full border-2 border-[#C7F609] bg-white relative overflow-hidden'
            onClick={handleToggle}
          >
            <div htmlFor={option.id}
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-black transition-all ${isToggled ? 'left-8' : 'left-1'
                }`}
            ></div>
          </button> */}
