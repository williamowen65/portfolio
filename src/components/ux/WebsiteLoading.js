import gsap from '../../../gsap/gsap.min'
import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import WO from '../../layouts/components/WO'
import * as d3 from 'd3'
import { useSelector } from 'react-redux'

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


    apply().then(() => {
      comp.current.remove()
    })
  }, [])


  return (
    <WebsiteLoadingStyled ref={comp}><Animation /></WebsiteLoadingStyled>
  )
}

const Animation = () => {

  const screenWidth = useSelector(state => state.app.screenWidth)

  useEffect(() => {
    const selection = d3.select('.animation')
      .selectAll('.dots')
      .data([1, 3, 4, 2])

    selection.enter()
      .append("circle")
      .attr("cx", (d, i) => 100 * i)
      .attr("cy", (d, i) => 100 * i)
      .attr("r", (d, i) => 10 * i)
      .attr("fill", 'blue')
      .call((sel) => {
        // sel._groups[0].forEach((el) => {

        gsap.to('.animation', { rotate: '360deg', duration: 5, repeat: -1, ease: 'linear' })
        // })
        const el = document.querySelector('.animation')
        console.log(window.getComputedStyle(el).transformOrigin);
      })

    selection.enter()
      .append('text').text("hi")
      .attr('fill', 'black')
      .attr('x', (d, i) => -100 * i)
      .attr('y', (d, i) => 100 * i)


  }, [])
  return (
    <span className='animation_container' >
      <svg className='animation'></svg>
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
    /* max-width: 500px;
  width: 100%;
  height: 400px; */
    svg.animation{
      width: 1px;
      height: 1px;
      overflow: visible;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      /* fill: transparent; */
      transform-origin: top center !important;
      .dot {
        width: 50px;
        height: 50px;
        overflow: visible;
        fill: blue;
      }
      .dots {
        transform: translate();
      }
    }
    /* width: 100vw; */
  }
`