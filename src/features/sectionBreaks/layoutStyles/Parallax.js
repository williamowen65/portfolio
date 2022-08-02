import React, { useEffect } from 'react'
import styled from 'styled-components'
import img from '../../../assets/flower.jpg'
import gsap from '../../../../gsap/gsap.min'
import ScrollTrigger from '../../../../gsap/ScrollTrigger.min'
import parallaxRip from '../assets/parallaxRips.png'


export default function Parallax() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#parallax_1",
        start: "00% 0%",
        end: "100% 0%",
        scrub: true,
        toggleActions: "play none none reverse",
        markers: true
      },
    })
    gsap.utils.toArray(".parallax_1").forEach(layer => {
      const depth = +layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth * 3)
      console.log(layer, layer.offsetHeight, +layer.dataset.depth, movement);
      tl.to(layer, { y: movement, ease: "ease" }, 0)
    })


  }, [])

  return (
    <>
      <ParallaxStyled id="parallax_1">
        <div className='borderBack'></div>
        <div className='parallax_1 layer layer_1' data-depth='0.1'>border front</div>
        <div className='parallax_1 layer layer_2' data-depth='0.2'>div arllasd</div>
        <div className='parallax_1 layer layer_3' data-depth='0.5'>div arllasd</div>
        <div className='parallax_1 layer layer_5' data-depth='0.85'>div arllasd</div>
        <div className='parallax_1 layer layer_4 borderFront' data-depth='0.8'>border back</div>

      </ParallaxStyled>
      <div className="spacer" styles="height: 100vh"></div>
    </>
  )
}

const ParallaxStyled = styled.div`
  overflow: hidden;
  position: relative;
  /* transform: scale(1.2); */
  height: 800px;
  margin-top: -50%;
  /* width: 100%; */
  &::after{
    background-image: url(${parallaxRip});
    content: "";
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    z-index: 6;
    height: 253px;
    transform: scale(1.05);
  }
  /* width: 100%;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
	perspective: 100px;
	-webkit-perspective: 100px;
	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d; */
  /* border: 1px solid black; */
  &::-webkit-scrollbar {
    display: none;
  }
  img{
    position: absolute;
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
div.borderBack {
  background-image: url(${parallaxRip});
  width: 100%;
  height: 345px;
  transform: rotate(180deg);
  z-index: 5;
  
   position: absolute;
    top: 50%;
}
div.borderFront {
  /* background-image: url(${parallaxRip}); */
  width: 100%;
  /* height: 345px !important; */
  /* transform: rotate(180deg); */
  /* z-index: 5; */
  position: absolute !important;
  bottom: 0;
  
}
  .layer{
    transition: all 0.5s;
    color: white;
    z-index: 1;
    position: absolute;
    top: 100%;
    height: 20vh;
    &.layer_1 {
      background-image: url(${parallaxRip});
      /* top: 100%;
    height: 383px; */
    }
    &.borderFront {
      /* background-image: url(${parallaxRip}); */
      width: 100%;
      /* height: 345px !important; */
      /* transform: rotate(180deg); */
      /* z-index: 5; */
      
      position: absolute !important;
      bottom: 0;
    }
  }

`