import React from 'react'
import styled from 'styled-components'
import Input from '../../../components/form/Input'

export default function SignUp() {
  return (
    <SignUpStyled>

      <div className="fields">

        <Input config={{
          type: "text",
          placeholder: "username",
        }} />
        <Input config={{
          type: "password",
          placeholder: "password",
        }} />
        <Input config={{
          type: "password",
          placeholder: "password confirm",
        }} />
      </div>
    </SignUpStyled>
  )
}

const SignUpStyled = styled.div`

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