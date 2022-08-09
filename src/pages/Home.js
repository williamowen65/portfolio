import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import EmbeddedLink from '../components/ui/EmbeddedLink.js'
import Modal from '../components/ui/Modal'
import DisplayCard from '../features/displayCard/index'
import configValues from '../data/configValues.json'
// import Section from '../components/ui/Section'
import gsap from '../../gsap/gsap.min'
import GSDevTools from '../../gsap/GSDevTools.min'
import { allCards } from '../features/displayCard/layoutStyles/carousel/randomData/CardArchive.js'

// import { git } from 'react-icons/all'



import Hero from './components/hero/Hero.js'

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
      <Hero />
      <Article>
        <fieldset>
          <legend><h2>My Contributions to the <nobr>Open Source Community</nobr></h2></legend>

          <p>Automate nearly 100% of your full-stack development experience with this completely customizable development tool I made!</p>

          <button>Check it out</button>

          <p>Utilize it with any language of your choice through this Dockerized verizon...</p>

        </fieldset>
      </Article>

      <Section className='sectionBreak' />
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

const Section = styled.section`
  height: 100px;
`

// const H


