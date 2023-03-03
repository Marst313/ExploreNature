import React from 'react';

const DateComponent = () => {
  return (
    <div className="container flex justify-center items-center  ">
      <div className=" flex  rounded-2xl bg-black bg-opacity-50 p-2 mx-5 h-20 lg:mr-[60%] lg:mx-0  ">
        <div className="location relative flex flex-col justify-center p-5 ">
          <img src="./img/location.png" className="absolute top-0 left-1 w-4" alt="location-icons" />

          <h4 className="text-white text-[10px] lg:-mt-5 -mt-1 font-normal   text-opacity-40 ml-1 ">Location</h4>

          <h4 className="text-white text-[10px] mt-3 ">Wonogiri, Jawa Tengah</h4>
        </div>
        <hr className="w-[2px] h-10 bg-white items-center justify-center rounded-sm my-auto" />
        <div className="date relative flex flex-col justify-center p-5 ">
          <img src="./img/date.png" className="absolute top-0 left-1 w-4" alt="location-icons" />
          <h4 className="text-white text-[10px] -mt-5 font-normal   text-opacity-40 ml-1 ">Date</h4>
          <input type="date" name="date" className="focus:outline-none bg-white bg-opacity-30 rounded-sm mt-2 pb-1 pl-1" />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
