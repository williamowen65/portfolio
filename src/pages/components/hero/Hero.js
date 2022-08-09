import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/ui/Button'
import EmbeddedLink from '../../../components/ui/EmbeddedLink'
import configValues from '../../../data/configValues.json'
import Icons from '../Icons'
// import './styles/_hero.scss'

export default function Hero() {
  return (
    <HeroStyled className='hero'>

      <div className="imageContainer"></div>
      <div className='content'>

        <div className='main'>
          <h2>My name is William</h2>
          <p>and I simply love to code.</p>
        </div>
        <div className='subInfo'>
          <p>Available for <EmbeddedLink type="link" href='/about'>hire & contracts</EmbeddedLink></p>
          <p>Based near Seattle & can work remotely</p>
          <Button className="connectBtn">Connect</Button>
        </div>

        {/* <Icons /> */}
      </div>

    </HeroStyled>
  )
}

const HeroStyled = styled.div`
  position: relative;
  height: 60vh;
  .imageContainer {
    position: absolute;
    top: 0;
    /* background-color:${configValues.theme.dark.color.white}; */
    width: 100%;
    height: 100%;
  }
  .content {
    /* position: absolute; */
    /* top:30%;
    left: 50%;
    transform: translateX(-50%); */
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    white-space: nowrap;
    
    h2 {
      font-size: 50px;
      text-shadow: 1px 1px 1px  #c193c1, -1px 1px 1px  #ad37ad,0px -1px 1px  #5fcf19;
    }
    button {
      /* position: absolute; */
    }
    .main {
      
    }
    .subInfo {

    }
  }
`