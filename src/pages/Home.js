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
      <img />
      <p>Lorem ipsum dolor <EmbeddedLink type="link" href='/about'>sit amet consectetur</EmbeddedLink> adipisicing elit. <EmbeddedLink type="popup" modalContent={() => (
        <p>
          dsadsadas
        </p>
      )}>Dolore quaerat sunt</EmbeddedLink> nesciunt dolorem iure porro. Illum porro quo tempore a voluptatibus doloribus aperiam quam. Minima similique ipsa ea natus harum, nulla porro. Repudiandae, labore? Mollitia dolorem, eligendi quidem asperiores nemo modi hic sequi minus ducimus dolorum quia pariatur ipsa soluta labore veniam cupiditate voluptatum iure. Vitae nisi ut eveniet dolorum voluptatum magni ducimus eaque sequi doloribus iusto suscipit minus, odio blanditiis nostrum autem, iure tempore. Amet ut voluptatibus ab, aspernatur tempore eveniet ad. Vitae velit a similique dolore debitis, magnam officiis, unde animi cupiditate aliquam, molestiae nisi autem esse earum beatae eos. Quidem nihil consectetur provident inventore amet recusandae fugit quo itaque impedit aut facere molestiae officiis reiciendis, tempora odit.</p>
      <Button>sdsad</Button>
      <Button>sdsad</Button>
      {/* <span ref={but} style={{ width: "fit-content", display: 'inline-block' }}> */}

      <Button id="testing">sdsdfdsad</Button>
      {/* </span> */}
      {/* <span ref={but}>HI THERE</span> */}


    </>
  )
}

// const Main = styled.main`


