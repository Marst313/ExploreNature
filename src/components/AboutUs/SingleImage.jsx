import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SingleImage = ({ src, alt, data }) => {
  return (
    <div>
      <LazyLoadImage src={src} width={800} height={400} alt={alt} placeholdersrc={data} />
    </div>
  );
};

export default SingleImage;
