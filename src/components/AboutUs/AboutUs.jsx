import React, { useState } from 'react';
import { ImageData, InfoData } from './DataAbout';
import SingleImage from './SingleImage';
import SingleInfo from './SingleInfo';
import VideoComponent from './VideoComponent';

const AboutUs = () => {
  const [dataInfo, setDataInfo] = useState(InfoData);

  return (
    <section id="AboutUs">
      <div>
        <div className=" title-section ">
          <h1>About Us</h1>
          <h2>About Us</h2>
        </div>

        <div className="container-img   ">
          {ImageData.map((image, index) => {
            return <SingleImage key={index} {...image} />;
          })}
        </div>
      </div>

      <div>
        <VideoComponent />
        <div>
          <div className="container-info">
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
