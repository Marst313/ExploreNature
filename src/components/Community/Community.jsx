import React from 'react';
import Social from './Social';

const Community = () => {
  return (
    <section id="Community" className="w-full container mt-40  xl:mt-96 ">
      <div className="flex justify-center items-center flex-col">
        <div className=" title-section w-full flex flex-col  lg:justify-start lg:items-start lg:pl-32 ">
          <h1 className="text-center font-bold text-3xl text-secondary lg:text-6xl ">Community</h1>
          <h2 className="text-center font-bold text-2xl text-secondary/70 mr-10 -mt-5 lg:text-5xl">Community</h2>
        </div>

        <div className="w-full justify-center flex-col md:flex-row flex items-center mt-20 lg:justify-start lg:pl-32  ">
          <div className="book md:w-80 md:h-96">
            <p>This is the example of image</p>
            <div className="cover">
              <img src="./img/community-img.webp " loading="lazy" alt="eagle-eye-view" />
            </div>
          </div>

          <div className="w-full  mt-10  md:max-w-md   lg:max-w-lg xl:max-w-4xl md:ml-10 lg:ml-20 ">
            <div className="flex flex-col items-center justify-center mx-5 ">
              <h1 className="font-bold text-xl text-secondary lg:text-4xl md:self-start ">
                Join <span className="text-sm">Our Community</span>
              </h1>
              <p className="text-xs text-justify leading-normal lg:leading-7 font-Inknut font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur. Non nulla diam aenean egestas dapibus vitae suspendisse nisl. Est feugiat lacus vulputate amet a amet aliquet amet sit. Dis tortor eget sit cras tristique lorem imperdiet malesuad
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo totam laborum at fugit debitis sint quidem nemo, obcaecati id!
              </p>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
