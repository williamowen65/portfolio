import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ParallaxController from '../../../utils/ParallaxController.mjs'
import { useSelector } from 'react-redux'


export default function Name({ children, passAbsoluteParaElsDims }) {
  const screenWidth = useSelector(state => state.app.screenWidth)
  const test = useRef(screenWidth)

  // const [trigger, setTrigger] = useState(0)

  // useEffect(() => {
  //   setTrigger(trigger + 1)
  //   console.log(screenWidth, "SCREEEN WIDTH");
  // }, [screenWidth])

  useEffect(() => {

    const controller = new ParallaxController('parallax')
    passAbsoluteParaElsDims(controller.items)

    controller.updateInputs()
    const fn = controller.updateOutputs()
    controller.updateEachParallaxItem(fn)

  }, [])



  return (<>
    <NameStyled className='parallax'>
      {children}
    </NameStyled>
    {/* <Line className='horizon'></Line> */}
    {/* <Horizon></Horizon> */}
    {/* <Vertical></Vertical> */}
  </>
  )
}

const NameStyled = styled.div`
  background-color: transparent;
  overflow: hidden;
  top: 0;
    position: absolute;
`

const Horizon = styled.div`
width: 100vw;
border: 1px solid black;
height: 1px;
position: fixed;
left: 0;
top: 50%;
`
const Vertical = styled.div`
width: 100vw;
border: 1px solid black;
height: 1px;
position: fixed;
left: 0;
top: 50%;
transform: rotate(90deg) translateY(5px);
`

