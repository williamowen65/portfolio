import React from 'react'
import styled from 'styled-components'
import Button from '../../components/ui/Button'
import EmbeddedLink from '../../components/ui/EmbeddedLink'
import configValues from '../../data/configValues.json'
import Icons from './Icons'

export default function Hero() {
  return (
    <HeroStyled className='hero'>

      <div className="imageContainer"></div>
      <div className='content'>

        <h2>My name is William</h2><p> and I simply love to code.</p>

        <p>Available for <EmbeddedLink type="link" href='/about'>hire & contracts</EmbeddedLink></p>
        <p>Based near Seattle & can work remotely</p>
        <p></p>

        <Button>Connect</Button>
        <Icons />
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
    position: absolute;
    top:30%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    h2 {
      font-size: 50px;
      text-shadow: 1px 1px 1px  #c193c1, -1px 1px 1px  #ad37ad,0px -1px 1px  #5fcf19;
    }
    /* p{

      color: ${configValues.theme.dark.background.color.window};
    } */
  }
`