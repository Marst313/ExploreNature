import React from 'react';

const Menu = ({ openNav, setOpenNav }) => {
  return (
    <label htmlFor="burger" className="burger m-5 md:hidden">
      <input
        id="burger"
        type="checkbox"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Menu;
