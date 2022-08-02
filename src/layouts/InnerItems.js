import React from 'react'
import styled from 'styled-components'

export default function Container({ children }) {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  max-width: 900px;
  margin: auto;
`