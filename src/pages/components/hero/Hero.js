import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../../components/ui/Button'
import EmbeddedLink from '../../../components/ui/EmbeddedLink'
import InfiniteCarousel from '../../../components/ux/InfiniteCarousel'
import configValues from '../../../data/configValues.json'
import Icons from '../icons/Icons'
// import './styles/_hero.scss'

export default function Hero() {


  const containerStyles = {
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    marginRight: '60px'
  }

  const childrenStyles = {
    // height: 'px',
    marginBottom: "20px",
    width: '70px',
  }
  const animation = {
    // y is auto calculated from window
    duration: 170,
    ease: 'linear',
    repeat: -1
  }

  const bgContainerStyles = {
    ...containerStyles,
    marginRight: '170px',
    transform: 'scale(4.5)',
    transformOrigin: 'top',
    filter: 'grayscale(1) blur(0.5px)',
    zIndex: '-1',
    opacity: '0.4'
  }
  const bgChildrenStyles = {
    ...childrenStyles,
    marginBottom: '0'
  }

  const bgAnimation = {
    ...animation,
    duration: 1500
  }



  return (
    <HeroStyled className='hero'>

      <div className='content'>
        {/* <div className="imageContainer">
          <Icons />
        </div> */}
        <InfiniteCarousel
          play
          containerStyles={containerStyles}
          childrenStyles={childrenStyles}
          animation={animation}
        >
          <Icons />
        </InfiniteCarousel>

        <InfiniteCarousel
          play
          containerStyles={bgContainerStyles}
          childrenStyles={bgChildrenStyles}
          animation={bgAnimation}
        >
          <Icons />
        </InfiniteCarousel>

        <div className='main'>
          <h2>My name is William</h2>
          <p>and I simply love to code.</p>
        </div>
        <div className='subInfo'>
          <p>Available for <EmbeddedLink type="link" href='/about'>hire & contracts</EmbeddedLink></p>
          <p>Based near Seattle & can work remotely</p>
          <Button className="connectBtn">Connect</Button>
        </div>

      </div>

    </HeroStyled>
  )
}

const HeroStyled = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  .imageContainer {
    background: linear-gradient(-103deg,transparent 21%,#d9d7ce45 22%,transparent 23%);
    /* background: linear-gradient(-103deg, ${configValues.theme.dark.color.white} 3%, transparent 37%); */
    max-width: calc(100% + 99px);
      right: -49px;
      z-index: 2;
    position: absolute;
    top: -50px;
    /* background-color:${configValues.theme.dark.color.white}; */
    width: 100%;
    height: 100%;
    > * {
      position: absolute;
      right:16%;
      bottom: 0;
    }
  }
  .content {
    position: relative;
    overflow: hidden;
    /* position: absolute; */
    /* top:30%;
    left: 50%;
    transform: translateX(-50%); */
    /* padding: 5px; */
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    white-space: nowrap;
    overflow-y: hidden;
    /* &::before {
        content: '';
        position: absolute;
        /* left: -30px; */
        /* z-index: -1;  */

        padding: 0 20px;
        background: ${configValues.theme.dark.background.color.window};
        border-radius: 50px;
        width: 100%;
        height: 80%;
        filter: blur(0px);
        box-shadow: 
        1px 1px 2px  #c193c1, 
        -1px 1px 2px  #ad37ad,
        0px -1px 2px  #5fcf19;

      /* } */
    
    h2 {
      font-size: clamp(20px, 6vw, 50px);
      text-shadow: 
        1px 1px 1px  ${configValues.theme.dark.logoTint}, 
        -1px 1px 1px  ${configValues.theme.dark.logoTint},
        0px -1px 1px  ${configValues.theme.dark.logoTint}, 
        1px 0px 1px  ${configValues.theme.dark.logoTint};
      position: relative;
      width: min-content;
      color: ${configValues.theme.dark.color.main};
      color: blue;
      
    }
    button {
      /* position: absolute; */
    }
    .main, .subInfo {
      /* display: none; */
      
    }
    .subInfo {

    }
  }
`