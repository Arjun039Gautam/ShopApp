import React from 'react'
import Wrapper from './style'
import Nav from './nav'
import { Link } from 'react-router-dom'

const Header = ({message, loggedInUser}) => {
  return (
    <Wrapper>
      <Link to="/"><h1>ShoppingApp {message}</h1></Link>
      <Nav loggedInUser={loggedInUser}/>
    </Wrapper>
  )
}

export default Header 
