import React from "react";

const Hamburger = () => {
  return (
    <svg
      className='menu'
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='10'
      viewBox='0 -10 20 20'
      overflow='visible'
      stroke='rgba(0,0,0,1)'
      strokeWidth='3'
      strokeLinecap='round'
    >
      <line x1='2' x2='40' y2='0' />
      <line x1='2' x2='40' y2='10' y1='10' />
      <line x1='2' x2='40' y2='20' y1='20' />
      <rect
        width='41'
        height='20'
        x='0'
        y='0'
        fill='transparent'
        stroke='transparent'
      />
    </svg>
  );
};

export default Hamburger;
