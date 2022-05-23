import React, {useEffect} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setproducts } from "../redux/actions/productactions"
import Productcomponent from './Productcomponent'

const Productlist = () => {

  const products= useSelector((state)=> state);
  const dispatch= useDispatch();

  const fetchproducts= async() =>{

    const response= await axios.get('https://fakestoreapi.com/products').catch((err) =>{
    console.log("Err", err);
    });
    
    dispatch(setproducts(response.data));
  };

  useEffect(() =>{
    fetchproducts();
  }, []);

  console.log("Products ", products);
  
  return (
    <div>
        <h1>Product list</h1>
        <Productcomponent />
    </div>
  )
}

export default Productlist;