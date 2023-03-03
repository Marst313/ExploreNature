import React from 'react';
import { navbarLink } from './data';

const Modal = ({ openNav }) => {
  return (
    <div
      className={`absolute md:static  bg-white bg-opacity-80 backdrop-blur-3xl justify-center items-center  w-52    top-16 mt-3 right-16 rounded-sm flex-col md:flex md:mt-0 md:w-full md:flex-row md:bg-transparent md:backdrop-blur-none md:top-0  md:items-center md:justify-between   ${
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
      <div className="md:flex-row flex flex-col justify-center items-center font-Inknut text-center ">
        <button className=" px-5 rounded-xl h-10  hover:bg-yellow-200 transition-all duration-500 ">Login</button>
        <button className=" my-5 md:my-0 hover:bg-yellow-200  rounded-xl h-10 px-5 transition-all duration-500  lg:mr-20">Register</button>
      </div>
    </div>
  );
};

export default Modal;
