import React, {useEffect} from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import Productcomponent from './Productcomponent'

const Productlist = () => {

  const products= useSelector((state)=> state);

  const fetchproducts= async() =>{

    const response= await axios.get('https://fakestoreapi.com/products').catch((err) =>{

    console.log("Err", err);
    });
    console.log(response.data);
  };

  useEffect(() =>{
    fetchproducts();
  }, []);

  return (
    <div>
        <h1>Product list</h1>
        <Productcomponent />
    </div>
  )
}

export default Productlist;