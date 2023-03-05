import React from 'react';
import { ImgData } from '../Navbar/data';
import DateComponent from './DateComponent';

const Hero = () => {
  return (
    <>
      <section className="center-target mt-10 lg:flex-row-reverse lg:justify-between lg:p-20 ">
        <div className="flex lg:mt-10  lg:flex-col">
          {ImgData.map((image) => {
            const { src, name, id } = image;
            return (
              <div key={id} className=" mx-3 mt-10 overflow-hidden rounded-full border-[3px] border-white lg:mt-5">
                <img src={src} alt={name} className="h-20 w-20" loading="lazy" />
              </div>
            );
          })}
        </div>
        <div className="title container lg:w-1/2">
          <h1 className="text-stroke text-stroke-black m-5 font-Imk text-xl leading-10 text-white lg:text-4xl">EXPLORE THE BEAUTY OF INDONESIA WITH US</h1>
          <h2 className="m-5 text-xs leading-10 text-[rgba(250,250,250,0.7)] lg:max-w-md lg:text-lg">Join with our community and feel free to explore the beauty of Indonesia </h2>
        </div>
      </section>
      <DateComponent />
    </>
  );
};

export default Hero;
