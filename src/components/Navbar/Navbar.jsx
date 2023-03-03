import React, { useState } from 'react';
import Menu from './Menu';
import Modal from './Modal';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="container w-full flex justify-between  bg-opacity-20 backdrop-blur-sm ">
      <h2 className="items-start text-center m-5 lg:w-52 ">Navbar</h2>

      <Modal openNav={openNav} />
      <Menu openNav={openNav} setOpenNav={setOpenNav} />
    </nav>
  );
};

export default Navbar;
