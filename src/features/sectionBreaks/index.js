import React from 'react'
import Parallax from './layoutStyles/Parallax';

export default function SectionBreak({ type, outerConfig, innerConfig }) {

  let el;
  switch (type) {
    case 'parallax':
      el = <Parallax />
      break;
    case 'casual':
      break;
    default:
      break;
  }

  return (
    <div>
      {el}
    </div>
  )
}
