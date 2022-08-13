import gsap from '../../../gsap/gsap.min'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import WO from '../../layouts/components/WO'

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
    <WebsiteLoadingStyled ref={comp}><WO /></WebsiteLoadingStyled>
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
`