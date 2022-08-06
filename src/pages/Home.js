import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import EmbeddedLink from '../components/ui/EmbeddedLink.js'
import Modal from '../components/ui/Modal'
import DisplayCard from '../features/displayCard/index'
import configValues from '../data/configValues.json'
import Section from '../components/ui/Section'
import gsap from '../../gsap/gsap.min'
import GSDevTools from '../../gsap/GSDevTools.min'
import { allCards } from '../features/displayCard/layoutStyles/carousel/randomData/CardArchive.js'
import { GrDocker, GrGithub } from 'react-icons/gr'
import { SiSass } from 'react-icons/si'
// import { git } from 'react-icons/all'

export default function Home() {
  const but = useRef()
  // console.log(gsap);
  useEffect(() => {
    but.current = document.getElementById('testing')
    console.log(but.current);
  }, [document])
  useEffect(() => {

    gsap.to(but.current, { x: 100, y: 100, rotate: 80 })
    // GSDevTools.create()
    // console.log(but.current);
  }, [but.current])


  // useEffect(() => {
  //   gsap.registerPlugin(GSDevTools)
  //   const tools = GSDevTools.create()
  //   console.log(tools);

  //   return () => {
  //     tools.kill()
  //   }
  // }, [])

  return (
    <>
      <div className='hero'>

        <div>

          <p>My name is William and I simply love to code.</p>

          <p>Available for <EmbeddedLink type="link" href='/about'>hire & contracts</EmbeddedLink></p>
          <p>Based near Seattle & can work remotely</p>
          <p></p>

          <Button>Connect</Button>
        </div>
        <div className="imageContainer">
          Icons lfoating by
        </div>

      </div>
      <Article>


        <fieldset>
          <legend><h2>My Contributions to the <nobr>Open Source Community</nobr></h2></legend>

          <p>Automate nearly 100% of your full-stack development experience with this completely customizable development tool I made!</p>

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
              alt="" />
          </a>

          <p>The dockerized version coming soon...</p>

        </fieldset>
      </Article>

      <DisplayCard type='carousel' title={"What I've been up to..."} data={allCards} />
    </>

  )
}

const Article = styled.article`
    fieldset {
  legend {
    text-align: left;
    color: ${configValues.theme.dark.color.main};
    h2{
      width: min-content;
    }
  }
    a {
      padding: 10px;
      margin: 10px;
    }
  }
`

// const H


