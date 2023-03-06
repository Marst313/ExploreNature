import React, { useEffect, useState } from 'react';
import Arrow from './Arrow';
import { Reviews } from './dataReview';
import SingleImage from './SingleImage';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(Reviews);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        let newIndex = index + 1;
        if (newIndex > people.length - 1) newIndex = 0;

        return newIndex;
      });
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) newIndex = 0;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) newIndex = people.length - 1;
      return newIndex;
    });
  };

  return (
    <section id="Review">
      <div className="center-target ">
        <div className=" title-section">
          <h1>Review</h1>
          <h2>Review</h2>
        </div>

        <div className="relative mt-5 flex h-[600px] w-[300px] items-center overflow-hidden md:w-full   md:pl-10 lg:pl-32 ">
          {Reviews.map((review, personIndex) => {
            let position = 'next-review ';
            if (personIndex === index) position = 'active-review';
            if ((index === 0 && personIndex === people.length - 1) || personIndex === index - 1) {
              position = 'previous-review';
            }

            return <SingleImage key={review.id} {...review} position={position} />;
          })}
          <Arrow nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
      </div>
    </section>
  );
};

export default Review;
