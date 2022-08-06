import React, { useEffect } from "react";

const Close = ({ toggleDetails, project, detail }) => {
  useEffect(() => {
    // console.log(detail);
  }, []);

  return (
    <svg
      onClick={toggleDetails}
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='10'
      viewBox='0 0 20 20'
      overflow='visible'
      stroke='rgba(0,0,0,1)'
      strokeWidth='3'
      strokeLinecap='round'
      // ref={close}
      className={
        detail.id === `${project.props.id}_${project.props.title}` &&
          detail.openDetail === true
          ? "close active"
          : "close"
      }
    >
      <line x2='30' y2='30' />
      <line x1='30' y2='30' />
      <rect
        x='0'
        y='0'
        rx='0'
        ry='0'
        className='btn'
        width='30'
        height='1'
        fillOpacity='0'
        stroke='transparent'
        strokeLinecap='round'
      ></rect>
    </svg>
  );
};



export default Close;
