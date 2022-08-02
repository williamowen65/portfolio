import React, { useState } from 'react'
import styled from 'styled-components'
import configValues from '../../data/configValues.json'
import Login from './components/LoginForm'
import SignUp from './components/SignupForm'

export default function Auth({ type = 'login' }) {

  const [isLogin, setIsLogin] = useState(type === 'login')

  // https://codesandbox.io/s/pure-css-material-input-cnp0e

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>

      {!isLogin ? <h2>Sign up</h2> : <h2>Welcome back</h2>}
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
      <button>{!isLogin ? "Sign up" : "Login"}</button>
      <footer>
        <p onClick={() => setIsLogin(!isLogin)}>Need to {isLogin ? "Sign up" : "Login"}?</p>
      </footer>
    </Form>
  )
}

const Form = styled.form`
max-width: 500px;
margin: auto;
margin-top: 50px;
 padding: 20px;
  border: 1px solid ${configValues.theme.dark.color.main};
  p {
    cursor: pointer;
    text-align: center;
    /* margin: auto; */
  }
  button {
    margin: 10px auto;
    display: block;
  }
  h2 {
    color: ${configValues.theme.dark.color.main};
    text-align: center;
  }
`