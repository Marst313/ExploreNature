import React from 'react';
import { navbarLink } from './data';

const Modal = ({ openNav }) => {
  return (
    <div
      className={`absolute md:static  bg-white bg-opacity-80 backdrop-blur-3xl justify-center items-center  w-52    top-16 mt-3 right-16 rounded-sm flex-col md:flex md:mt-0 md:w-full md:flex-row md:bg-transparent md:backdrop-blur-none md:top-0  md:items-center md:justify-between md:px-20  ${
        openNav || ' hidden'
      }`}
    >
      <ul className="md:flex md:justify-center mx-auto">
        {navbarLink.map((link, index) => {
          return (
            <li key={index} className="text-center my-5 capitalize  md:mx-5 ">
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>
      <div className="ml-10 md:ml-0">
        <button className=" text-center rounded-xl h-10 w-32 font-Inknut  ">Login</button>
        <button className=" text-center my-5 bg-primary-btn  rounded-xl h-10 w-32   font-Inknut md:ml-10">Register</button>
      </div>
    </div>
  );
};

export default Modal;
