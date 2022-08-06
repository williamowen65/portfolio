import React from "react";

const RightArrow = ({ scroll }) => {
  return (
    <svg
      className='left_arrow'
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='10'
      viewBox='0 15 20 20'
      overflow='visible'
      strokeLinecap='round'
      // onClick={(e) => console.log("hi")}
    >
      <rect
        onClick={(e) => scroll(1, e)}
        id='Rectangle_2'
        data-name='Rectangle 2'
        width='60'
        height='61'
        rx='6'
        x='-20'
        y='-11'
        fill='transparent'
      />
      <path
        onClick={(e) => scroll(1, e)}
        d='M0 5 L20 20 L00 35'
        fill='transparent'
        stroke='rgba(0,0,0,1)'
        strokeWidth='3'
      />
    </svg>
  );
};

export default RightArrow;
