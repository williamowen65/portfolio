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
    <div className='hero'>
      <img />
      <p>My name is William and I simply love to code.</p>

      <p>Available for <EmbeddedLink type="link" href='/about'>hire & contracts</EmbeddedLink></p>
      <p>Based near Seattle & can work remotely</p>
      <p></p>

      <Button>sdsad</Button>

      <DisplayCard type='carousel' title={"What I've been up to..."} data={allCards} />

    </div>
  )
}

// const Main = styled.main`


