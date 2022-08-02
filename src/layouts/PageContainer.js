import React from 'react'
import styled from 'styled-components'

export default function PageContainer({ children }) {
  return (
    <Div>{children}</Div>
  )
}

const Div = styled.div`
   max-width: 1200px;
   margin: auto;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
`