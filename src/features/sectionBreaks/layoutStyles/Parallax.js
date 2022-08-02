import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/flower.jpg'

export default function Parallax() {
  return (
    <ParallaxStyled>
      <h3>Parallax Scroll</h3>
      <div className="parallax">
        {/* <h1>THIS IS THE PARALLAX SCROLL</h1> */}
      </div>
      <div className="content-outer">
        <div className="content-inner">
          <p>p arllasd</p>
          <p>p arllasd</p>
          <p>p arllasd</p>
          <p>p arllasd</p>
          <p>p arllasd</p>
        </div>
      </div>

    </ParallaxStyled>
  )
}

const ParallaxStyled = styled.div`
  overflow: hidden;
  width: 100%;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
	perspective: 100px;
	-webkit-perspective: 100px;
	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
  &::-webkit-scrollbar {
    display: none;
  }
  .parallax {
    width: 100vw;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    &:after {
      background-image: url(${img});
      background-repeat: no-repeat;
      /* opacity: 0.3; */
      width: 100%;
      z-index: 2;
      background-position: center;
      background-size: cover;
      position: absolute;
      top: 50%;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: -1;
      content: "";
      transform: translateZ(-1px) scale(2);
      -webkit-transform: translateZ(-1px) scale(2);
    }
  }
  .content-outer{
    z-index: 3;
    position: absolute;
    transform: translateY(-300px);
    p{
      color: black;
      z-index: 10;
      text-align: center;
      margin: auto;
      font-size: 30px;
    }
  }
`