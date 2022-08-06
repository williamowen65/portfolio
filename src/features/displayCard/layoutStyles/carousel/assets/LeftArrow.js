import React from "react";

const LeftArrow = ({ scroll }) => {
  return (
    <svg
      className='left_arrow'
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='10'
      viewBox='5 15 20 20'
      overflow='visible'
      strokeLinecap='round'
    >
      <rect
        onClick={(e) => scroll(-1, e)}
        id='Rectangle_2'
        data-name='Rectangle 2'
        width='60'
        height='61'
        rx='6'
        x='-15'
        y='-11'
        fill='rgba(0,0,0,0)'
      />
      <path
        onClick={(e) => scroll(-1, e)}
        d='M20 5 L0 20 L20 35'
        fill='transparent'
        stroke='rgba(0,0,0,1)'
        strokeWidth='3'
      />
    </svg>
  );
};

export default LeftArrow;
