import React, { useState } from 'react';
import Menu from './Menu';
import Modal from './Modal';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="container fixed top-0 z-10 flex w-full justify-between bg-opacity-20 backdrop-blur-sm ">
      <h2 className="m-5 items-start text-center lg:w-52 ">Navbar</h2>

      <Modal openNav={openNav} />
      <Menu openNav={openNav} setOpenNav={setOpenNav} />
    </nav>
  );
};

export default Navbar;
