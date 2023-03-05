import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleInfo = ({ title, description }) => {
  const [openTask, setOpenTask] = useState(false);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={() => setOpenTask(!openTask)}>{openTask ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>

      <h5 className={`${openTask ? 'static' : 'hidden'}`}>{description}</h5>
    </div>
  );
};

export default SingleInfo;
