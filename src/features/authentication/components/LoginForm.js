import React from 'react'
import styled from 'styled-components'
import Input from '../../../components/form/Input'

export default function Login() {
  return (
    <LoginStyled>

      <div className="fields">

        <Input config={{
          type: "text",
          placeholder: "username",
        }} />
        <Input config={{
          type: "password",
          placeholder: "password",
        }} />
      </div>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`

  h2 {
    text-align: center;
  }
  .fields {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
    &>*{
      margin: 10px;
    }
  }
`