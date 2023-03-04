import React, { useState } from 'react';
import { ImageData, InfoData } from './DataAbout';
import SingleImage from './SingleImage';
import SingleInfo from './SingleInfo';
import VideoComponent from './VideoComponent';

const AboutUs = () => {
  const [dataInfo, setDataInfo] = useState(InfoData);

  return (
    <section id="AboutUs" className="w-full container  mt-40  xl:mt-96 ">
      <div className="flex-col flex lg:justify-start lg:items-start lg:flex-row ">
        <div className="title-section w-full xl:w-1/2 flex flex-col  lg:justify-start lg:items-start lg:pl-32 ">
          <h1 className="text-center font-bold text-3xl text-secondary lg:text-6xl  ">About Us</h1>
          <h2 className="text-center font-bold text-2xl text-secondary/70 mr-10 -mt-5 lg:text-5xl ">About Us</h2>
        </div>

        <div className="w-full xl:w-1/2 mt-10 container h-32  md:mt-20  flex justify-center items-center  lg:mt-0 xl:mr-32">
          <div className="flex justify-evenly gap-3  p-5 items-center  transition   ">
            {ImageData.map((image, index) => {
              return <SingleImage key={index} {...image} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 items-center flex-col md:mt-20  md:bg-yellow-300  lg:flex-row">
        <VideoComponent />

        <div className="w-full lg:w-1/2 flex items-center  justify-center p-5 mt-10">
          <div className="p-5 bg-white w-full  gap-5 rounded-md flex justify-evenly flex-col items-center">
            {dataInfo.map((info) => {
              return <SingleInfo key={info.id} {...info} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
