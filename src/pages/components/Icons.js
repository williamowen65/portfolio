import React from 'react'
import styled from 'styled-components'

import ReactLogo from '../../assets/react.png'
import ExpressLogo from '../../assets/express.png'
import VueLogo from '../../assets/vue.png'
import MongoLogo from '../../assets/mongo.png'
import ElectronLogo from '../../assets/electron.png'
import TypeScriptLogo from '../../assets/typescript.png'
import GSAPLogo from '../../assets/gsap.png'
import GimpLogo from '../../assets/gimp.png'
import NodeJSLogo from '../../assets/nodejs.png'
import JenkinsLogo from '../../assets/jenkins.png'

import { GrDocker, GrGithub } from 'react-icons/gr'
import { SiSass } from 'react-icons/si'
import configValues from '../../data/configValues.json'

import gsap from '../../../gsap/gsap.min'

const random = (arr) => {
  return Math.random() * (arr[1] - arr[0]) + arr[0]
}


export default function Icons() {

  const els = gsap.utils.toArray('span[href]')

  const easeArr = [
    'linear'
  ]

  function* DurGen() {
    return
  }

  els.forEach((el, i) => {

    const delay = Math.random()

    gsap.fromTo(el, { y: 0, x: 0, opacity: 0 }, {
      opacity: 1,
      x: 100,
      y: -550,
      rotateY: 720,
      rotateZ: 720,
      rotateX: 1080,
      duration: random([15, 17]),
      ease: easeArr[i % easeArr.length],
      delay: i * delay,
      // yoyo: true,
      repeat: -1
    });
  })

  // gsap.to(els, {
  //   y: -600, stagger: { // wrap advanced options in an object
  //     each: 0.1,
  //     from: "center",
  //     grid: "auto",
  //     ease: "power2.inOut",
  //     repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
  //   }, duration: 20
  // })

  console.log(els);

  return (
    <IconsStyled >

      <span href="https://github.com/williamowen65/project-setup">
        <GrGithub size={30} color={configValues.theme.dark.logoTint} />
      </span>
      <span href="#">
        <GrDocker size={30} color={configValues.theme.dark.logoTint} />
      </span>
      <span href="#">
        <SiSass size={30} color={configValues.theme.dark.logoTint} />
      </span>
      <span href="#">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src="https://miro.medium.com/max/2400/1*xQCjgB2DVqhtqGoGw9E6TQ.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={ReactLogo}
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={ExpressLogo}
          width="40px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={JenkinsLogo}
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={VueLogo}
          width="60px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>

      <span href="#">
        <img src={MongoLogo}
          width="15px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={ElectronLogo}
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src="https://www.lifewire.com/thmb/jDMd4fXv49vV4TBSfJWDJk22frY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Inkscape_Logo.svg-58e992d15f9b58ef7e1988a2.png"
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={GSAPLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={TypeScriptLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={GimpLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>
      <span href="#">
        <img src={NodeJSLogo}
          width="50px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>



      <span href="#">
        <img src="http://yargs.js.org/images/yargs-logo.png"
          width="50px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </span>

    </IconsStyled>
  )
}

const IconsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    span[href]{
      width: 10px;
      img {
        min-width: 32px;
      }
      /* position: absolute; */
      /* z-index: 400; */
      /* width: 10px; */
    }
`