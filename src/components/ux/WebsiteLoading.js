import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import WO from '../../layouts/components/WO'

export default function WebsiteLoading() {

  const comp = useRef()

  useEffect(() => {
    setTimeout(() => {

      comp.current.remove()
    }, 4000)
  }, [])

  return (
    <WebsiteLoadingStyled ref={comp}><WO /></WebsiteLoadingStyled>
  )
}

const WebsiteLoadingStyled = styled.div`
  position: absolute;
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