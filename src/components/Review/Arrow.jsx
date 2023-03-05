import React from 'react';

const Arrow = ({ nextSlide, prevSlide }) => {
  return (
    <div className="  absolute mt-20 flex w-32 justify-evenly gap-5  ">
      <img src="./img/leftArrow.png" alt="previous-review" onClick={prevSlide} className="cursor-pointer  " />
      <img src="./img/leftArrow.png" alt="next-review" onClick={nextSlide} className=" rotate-180 cursor-pointer" />
    </div>
  );
};

export default Arrow;
