import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleInfo = ({ title, description }) => {
  const [openTask, setOpenTask] = useState(false);
  return (
    <div className="bg-containerAbout p-2 w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-between  items-center">
        <h1 className="font-bold md:ml-5">{title}</h1>
        <button onClick={() => setOpenTask(!openTask)} className=" hover:border-blue-700 hover:scale-125 rounded-full border-blue-300 border-2 p-1">
          {openTask ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <h5 className={` font-light text-xs mt-5 md:m-5 ${openTask ? 'static' : 'hidden'}`}>{description}</h5>
    </div>
  );
};

export default SingleInfo;
