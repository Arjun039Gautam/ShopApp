import React, { useState } from 'react'
import Wrapper from './style'
import axios from 'axios';

const AddProduct = ({setProducts , products}) => {
  
  const [productName, setproductName] = useState('');
  const [price, setPrice] = useState('');
  
  const addProduct = (e) => {
    e.preventDefault();
  
  
  axios.post('http://localhost:8000/api/product/add',{
    name : productName,
    price
  })
  .then(({data}) => console.log(data))
  .catch(console.log)
  .finally(_ => console.log('Post final'))
}
  return (
    <Wrapper>
        <h1>Add Product</h1>
        <input type="text" placeholder='Product Name' value={productName} onChange={e => setproductName(e.target.value)} required />
        <input type="number" min='5' max='100000' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)}/>
        <input type="submit" value='Add' onClick={addProduct} />
    </Wrapper>
  )
}

export default AddProduct
