import React from 'react';

const Arrow = ({ nextSlide, prevSlide }) => {
  return (
    <div className="absolute bottom-0 left-20 mt-20 flex w-32 justify-evenly gap-5 md:bottom-40 md:left-[29rem] lg:left-[38rem]  ">
      <img src="./img/leftArrow.png" alt="previous-review" onClick={prevSlide} className="cursor-pointer hover:opacity-50 " />
      <img src="./img/leftArrow.png" alt="next-review" onClick={nextSlide} className=" rotate-180 cursor-pointer hover:opacity-50" />
    </div>
  );
};

export default Arrow;
