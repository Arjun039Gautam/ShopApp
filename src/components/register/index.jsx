import React, { useState } from 'react'
import Wrapper from './style'
import axios from 'axios'

const Register = (user, setUser) => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')

  const register = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post(`http://localhost:8000/api/user/add`, {name, contact, password});
    
    console.log('Registration successful:', response.data);
  } catch (error) {
    console.log('There was an error registering!', error)
  }
};
  return (
    <Wrapper>
      <h1>Register</h1>
      <input type="text" placeholder='Name' required value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder='Contact' pattern='[0-9]{10}' required value={contact} onChange={e => setContact(e.target.value)}/>
      <input type="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)}/>
      <input type="submit" value='Register' onClick={register} />
    </Wrapper>
  );
};

export default Register;
