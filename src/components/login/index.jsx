import React, { useState } from 'react'
import Wrapper from './style'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google';

const Login = ({setLoggedInUser}) => {

  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const login = (e) => {
    e.target.value = "logging in ..."
    e.target.disabled = true
    e.preventDefault()
    axios.post(`http://localhost:8000/api/user/login`, {contact, password})
    .then(({data}) => {
      setLoggedInUser(data)
      console.log('Successfully login')
    })
    .catch(console.log)
    .finally(_ => {
      setContact('')
      setPassword('')
      e.target.value = "Login"
      e.target.disabled = false
    })
  }
  return (
  
    <Wrapper>
        <GoogleOAuthProvider clientId="147251101361-vt6niaj889nllv209jllitujj14glam8.apps.googleusercontent.com">...
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
        </GoogleOAuthProvider>;
      <h1>Login</h1>
      <input type="text" placeholder='Contact*' pattern='[0-9]{10}' required  value={contact} onChange={e => setContact(e.target.value)}/>
      <input type="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
      <input type="submit" value='Login' onClick={login}/>
    </Wrapper>
  )
}

export default Login
