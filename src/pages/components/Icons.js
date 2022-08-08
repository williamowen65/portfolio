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

import { GrDocker, GrGithub } from 'react-icons/gr'
import { SiSass } from 'react-icons/si'
import configValues from '../../data/configValues.json'

export default function Icons() {
  return (
    <IconsStyled>

      <a href="https://github.com/williamowen65/project-setup">
        <GrGithub size={30} color={configValues.theme.dark.logoTint} />
      </a>
      <a href="#">
        <GrDocker size={30} color={configValues.theme.dark.logoTint} />
      </a>
      <a href="#">
        <SiSass size={30} color={configValues.theme.dark.logoTint} />
      </a>
      <a href="#">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src="https://miro.medium.com/max/2400/1*xQCjgB2DVqhtqGoGw9E6TQ.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={ReactLogo}
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={ExpressLogo}
          width="40px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png"
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/jenkins-logo-png-transparent.png"
          width="100px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={VueLogo}
          width="60px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>

      <a href="#">
        <img src={MongoLogo}
          width="15px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={ElectronLogo}
          width="30px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src="https://www.lifewire.com/thmb/jDMd4fXv49vV4TBSfJWDJk22frY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Inkscape_Logo.svg-58e992d15f9b58ef7e1988a2.png"
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={GSAPLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={TypeScriptLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={GimpLogo}
          width="35px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>
      <a href="#">
        <img src={NodeJSLogo}
          width="50px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>



      <a href="#">
        <img src="http://yargs.js.org/images/yargs-logo.png"
          width="50px"
          alt=""
          style={{ display: 'inline-block' }}
        />
      </a>

    </IconsStyled>
  )
}

const IconsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`