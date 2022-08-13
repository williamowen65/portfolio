import gsap from '../../../gsap/gsap.min'
import React, { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import WO from '../../layouts/components/WO'
import * as d3 from 'd3'

export default function WebsiteLoading() {

  const comp = useRef()

  useEffect(() => {

    async function apply() {
      await gsap.to(comp.current, {
        opacity: 0,
        duration: 0.3,
        onUpdate: () => {

          window.scrollTo({ top: 0 })
        }
      }, "<4")
    }


    // apply().then(() => {
    //   comp.current.remove()
    // })
  }, [])

  return (
    <WebsiteLoadingStyled ref={comp}><Animation /></WebsiteLoadingStyled>
  )
}

const Animation = () => {
  const wo = useRef()
  useEffect(() => {


    // alert('hi')
    const ref = d3.select(".animation_container")
      .append("svg")
      .attr('viewBox', '0 0 100 100')
      .attr('position', 'absolute')
      .attr('top', 0)
      .append('circle')
      .attr('fill', 'blue')
      .attr('cx', 40)
      .attr('cy', 50)
      .attr('r', 40);

    return () => {
      ref.remove()
    }

  }, [])

  // useEffect(() => {
  // }, [wo.current])
  return (
    <span className='animation_container' >
      <WO />
    </span>
  )
}


const WebsiteLoadingStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .animation_container {
    svg{

      position: absolute;
      top: 0;
      left: 0;
    }
    /* width: 100vw; */
  }
`