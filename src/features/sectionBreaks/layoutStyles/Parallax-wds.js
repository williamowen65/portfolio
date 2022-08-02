import React from 'react'
import styled from 'styled-components'
import mountain from '../assets/Mountain.png'
import trees from '../assets/Trees.png'

export default function ParallaxWDS() {
  return (
    <ParallaxWDSStyled>
      <div src={mountain} alt="" className='background' />
      <div src={trees} alt="" className='foreground' />
      <h1>WELCOME</h1>
    </ParallaxWDSStyled>
  )
}

const ParallaxWDSStyled = styled.div`
 position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  /* z-index: -1; */
  /* background-color: tan ; */
  .background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* z-index: -1; */
}
.background {
  background-image: url(${mountain});
  transform: translateZ(-10px) scale(2);
  background-repeat: no-repeat;
  background-size: cover;
}

.foreground {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${trees});
  background-position: bottom;
  /* transform: translateZ(-5px) scale(1.5); */
}
h1 {
  color: white;
  text-shadow: 0 0 5px black;
}

`