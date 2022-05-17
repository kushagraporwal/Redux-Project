import React from 'react'
import { useSelector } from 'react-redux'

const Productcomponent = () => {

    const products= useSelector((state) => state.allproducts.products);
    const {id, title} = products;
  return (
    <div>
    <h1>Productcomponent</h1>
    <div>
        <p>{title}</p>
    </div>
    </div>
  )
}

export default Productcomponent