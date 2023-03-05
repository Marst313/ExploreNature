import React from 'react';
import Social from './Social';

const Community = () => {
  return (
    <section id="Community">
      <div className="center-target">
        <div className="title-section">
          <h1>Community</h1>
          <h2>Community</h2>
        </div>

        <div>
          <div className="book ">
            <p>This is the example of image</p>
            <div className="cover">
              <img src="./img/community-img.webp " loading="lazy" alt="eagle-eye-view" />
            </div>
          </div>

          <div>
            <div>
              <h1>
                Join <span>Our Community</span>
              </h1>
              <p>
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
