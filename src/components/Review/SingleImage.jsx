import React, { memo } from 'react';

const SingleImage = ({ name, img, description, alt, position }) => {
  return (
    <div className={`container-review ${position} `}>
      <img src={img} loading="lazy" alt={alt} />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default memo(SingleImage);
