import React from 'react'
import { useSelector } from 'react-redux'

const Productcomponent = () => {

    const products= useSelector((state) => state.allproducts.products);
    const {id, title} = products[0];
  return (
    <div>
    <h1>Productcomponent</h1>
    <div>
        {title}
    </div>
    </div>
  )
}

export default Productcomponent