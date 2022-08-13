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
  // const [state, setState] = useState(0)
  // useEffect(() => {
  //   if (state) {
  //     setState(screenWidth)
  //   } else {
  //     setState(1)
  //   }
  // }, [screenWidth, state])

  useLayoutEffect(() => {
    const svg = d3.select(".animation_container")
      .append("svg")

    // .attr('transform', 'translate(-50%,-50%)')

    svg
      .append('circle')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 250)
      .attr('fill', 'transparent')
      .attr('stroke', 'black')



    // var path = svg.append('path')
    //   .data(data)
    //   .attr({
    //     'd': line,
    //     'stroke-dasharray': '385 385',
    //     'stroke-dashoffset': 385
    //   })
    // .transition()
    // .duration(1500)
    // .attr('stroke-dashoffset', 0)


    return () => {
      svg.exit().remove()
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
    /* max-width: 500px;
  width: 100%;
  height: 400px; */
    svg{
      width: 500px;
      height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      /* fill: transparent; */
    }
    /* width: 100vw; */
  }
`