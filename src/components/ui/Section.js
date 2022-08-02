import React from 'react'
import styled from 'styled-components'
import configValues from '../../data/configValues.json'

export default function Section({ children }) {
  return (
    <SectionStyled>{children}</SectionStyled>
  )
}

const SectionStyled = styled.div`
  margin: 50px 0;
  h2 {
    color: ${configValues.theme.dark.color.main}
  }
`