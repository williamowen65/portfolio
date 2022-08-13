import gsap from '../../../gsap/gsap.min'
import React, { useEffect, useMemo, useRef } from 'react'
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


    // apply().then(() => {
    //   comp.current.remove()
    // })
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

  useEffect(() => {
    const ref = d3.select(".animation_container")
      .append("svg")
      .attr('height', '100vh') //height="100" width="100"
      .attr('width', '100vw') //height="100" width="100"
      .attr('position', 'absolute')
      .attr('top', 0)
      .append('circle')
      .attr('fill', 'blue')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 40);

    return () => {
      ref.exit()
      // ref.call(sel => sel.remove())
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