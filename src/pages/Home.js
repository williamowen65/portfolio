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
import Contributions from './components/Contributions'
import Contact from './components/Contact'

export default function Home() {



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
      <Contributions />
      <Section className='sectionBreak' />
      <DisplayCard type='carousel' title={"What I've been up to..."} data={allCards} />
      <Contact />
    </>

  )
}


const Section = styled.section`
  height: 100px;
`

// const H


