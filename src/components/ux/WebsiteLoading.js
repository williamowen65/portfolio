import React from 'react'
import styled from 'styled-components'

export default function WebsiteLoading() {
  return (
    <WebsiteLoadingStyled>WebsiteLoading</WebsiteLoadingStyled>
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
`