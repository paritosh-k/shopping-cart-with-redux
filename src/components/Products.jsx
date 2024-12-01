import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer ,Bounce, Slide, Zoom, Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Products = () => {
const [products, setproducts] = useState([])
useEffect(()=>{
const getProducts = async()=>{
const res = await fetch("https://fakestoreapi.com/products")
const data = await res.json()
// console.log(data);
setproducts(data)
}
getProducts();
},[])
const dispatch = useDispatch();
const handleAdd=(product)=>{
dispatch(add(product))
toast.success('Cart Added Successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
    
    });
}
  return (
      <div className='productsWrapper'>
    
        {
        products.map((product)=>
        <div className="card" key={product.id}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button className='btn' onClick={()=>handleAdd(product)}>Add to cart</button>
        </div>
        
        )
        }
        <ToastContainer />
    </div>
  )
}
