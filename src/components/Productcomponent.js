import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Productcomponent = () => {

    const products= useSelector((state) => state.allproducts.product);
    
    const renderlist= products.map((product)=>{
        const {id, title, image, price, category} = product;
      return (
        <Link to={`/products/${id}`}>
      <div>
        <h1>Productcomponent</h1>
        <div>
            {title}
        </div>
        <div>
            ${price}
        </div>
        <div>
            {category}
        </div>
        </div>
        </Link>
        );
    })
    return <>{renderlist}</>
};

export default Productcomponent