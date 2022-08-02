import React from 'react'
import styled from 'styled-components'

export default function Input({ config }) {
  return (

    <InputStyled {...config} />
  )
}

const InputStyled = styled.input`
  outline: none;
  padding: 7px;
`