import React from 'react'
import Wrapper from './style'
import { Link } from 'react-router-dom'

const Nav = ({message, loggedInUser}) => {
  return (
    <Wrapper>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to = "/contact">Contact</Link></li>
        <li><Link to = "/register">Register</Link></li>
       {
          loggedInUser ?
          (<>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
          </>)
          : <li><Link to = "/">Login</Link></li>
        }
      </ul>
    </Wrapper>
  )
}

export default Nav
