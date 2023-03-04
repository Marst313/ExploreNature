import React from 'react';
import { ImgData } from '../Navbar/data';
import DateComponent from './DateComponent';

const Hero = () => {
  return (
    <div>
      <section className=" container w-full flex flex-col lg:flex-row-reverse lg:justify-between lg:p-20    justify-center items-center ">
        <div className="flex lg:flex-col  lg:mt-0 mt-24">
          {ImgData.map((image) => {
            const { src, name, id } = image;
            return (
              <div key={id} className="border-white border-[3px] lg:mt-5 overflow-hidden rounded-full mx-3">
                <img src={src} alt={name} className="w-20 h-20" loading="lazy" />
              </div>
            );
          })}
        </div>
        <div className="title  mt-7 p-5 container lg:w-1/2">
          <h1 className="text-xl font-Imk m-5 leading-10 text-white text-stroke text-stroke-black lg:text-4xl">EXPLORE THE BEAUTY OF INDONESIA WITH US</h1>
          <h2 className="text-xs text-[rgba(250,250,250,0.7)] leading-10 m-5 lg:text-lg lg:max-w-md">Join with our community and feel free to explore the beauty of Indonesia </h2>
        </div>
      </section>
      <DateComponent />
    </div>
  );
};

export default Hero;
