import React, { useEffect, useState } from 'react'
import Wrapper from './style'
import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])

  const loadProducts = () => {
    axios.get(`http://localhost:8000/api/product/read`)
    .then(({data}) => setProducts(data))
    .catch(err => {console.log(err)})
    .finally(_ => {console.log('compiled !')})
  }

  useEffect(loadProducts,[])

  const remove = product => {
    axios.delete(`http://localhost:8000/api/product/remove/${product.id}`)
    .then(({data}) => {
      alert(data.message)
      loadProducts()
    })
  }

  return (
    <Wrapper>
        {
          products.map((product) =>  <div key={product.id} className='product'>{product.name} - INR {product.price}<input type='button' value='Remove' onClick={e => remove(product)} /></div>)
        }
    </Wrapper>
  )
}

export default Products