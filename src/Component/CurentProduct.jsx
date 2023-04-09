import React,{ useEffect, useState }  from 'react'
import axios from 'axios'
import "./Style/currproduct.css"
import{AiFillPlusSquare} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"
import { add } from '../Store/cartSlice'
import { fetchprod } from '../Store/productSlice'

const CurentProduct = () => {
    const dispatch = useDispatch()
    const prod = useSelector((state)=> state.product)

    
    const AddtoCart = (product)=>{
      let newProduct = {...product, qty:1}
      
      dispatch(add(newProduct))
    }
   


  return (
    <>
    <section className='currproduct'>
                
                <div className='d-flex justify-content-center align-items-center flex-column'> <p className='firstp'>{prod?.data?.data[7]?.category}</p> <p className='firstd'>{prod?.data?.data[7]?.description}</p> </div>
                <div className='d-flex justify-items-center flex-column align-items-center'><img className='currpimg pt-4' src={prod.data.data[7]?.picture} alt="" /> </div>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <div className='d-flex flex-column '>
                    <p className=' price bg-dark text-light text-center m-0'>{prod.data.data[7]?.name}</p>
                    <div className='price d-flex justify-content-between align-items-center bg-warning '>
                      <p className='m-0 text-center w-75 fs-3'>{`$${prod.data.data[7]?.price}`}</p>
                    <button onClick={()=>AddtoCart(prod.data.data[7])} className='pe-3 bg-black text-light'><AiFillPlusSquare  size={50}/></button>
                    </div>
                  </div></div>
                  
              </section>
              <hr />
              </>
              
  )
}

export default CurentProduct