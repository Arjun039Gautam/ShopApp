import React, { useEffect, useState } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import About from "./components/about"
import Contact from "./components/contact"
import Login from "./components/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./components/products"
import Addproduct from "./components/addproduct"
import Register from "./components/register"


const App = () => {

    const [loggedInUser, setLoggedInUser] = useState(null)

    const [user, setUser] = useState(window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : [])

    const [products, setProducts] = useState(window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')) : [])

    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return(
        <BrowserRouter>
            <Header loggedInUser = {loggedInUser}/>
            <Routes>
                <Route path="/about" element = {<About/>} />
                <Route path="/contact" element = {<Contact/>} />
                <Route path="/register" element = {<Register user = {user} setUser = {setUser}/>} />
                <Route path="/products" element = {<Products products = {products} setProducts={setProducts}/>} />
                <Route path="/addproduct" element = {<Addproduct setProducts = {setProducts} products = {products} />} />
                <Route path="/*" element = {loggedInUser ? <h1>Welcome User</h1> : <Login setLoggedInUser={setLoggedInUser}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App