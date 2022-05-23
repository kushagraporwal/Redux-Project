import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedproducts } from "../redux/actions/productactions"

const Productdetail = () => {

  const product= useSelector((state)=> state.product);
  const { productid }= useParams();
  const dispatch= useDispatch();
  console.log("Product is" + product);

  const fetchproductdetails= async() =>{

    const response= await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) =>{
    console.log("Err", err);
    });
    
    dispatch(selectedproducts(response.data));
  };

  useEffect(() =>{
   if(productid && productid!=="") fetchproductdetails();
  }, [productid]);
  return (
    <div>
    <h1>Productdetail</h1>
    </div>
  )
}

export default Productdetail