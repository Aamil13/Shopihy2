import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSingleprod } from '../Store/productSlice';
import { add } from '../Store/cartSlice';
import {AiOutlineShoppingCart} from "react-icons/ai"
import './Singleprod.css'

const SingleProduct = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    // const state = useLocation()



    const getSingleProduct = async()=>{
        let prod = await dispatch(fetchSingleprod(id))
        // console.log('prod')
        setProduct(prod?.payload?.[0])
    }
    useEffect(()=>{
        getSingleProduct()
    },[id])

    const AddtoCart = (product)=>{
        let newProduct = {...product, qty:1}
        
        dispatch(add(newProduct))
      }

  return (

    <div className='singleprodmaindiv mx-0 px-0 d-flex justify-content-between align-content-center'>
        <div className='imagesingleprod w-50  p-4' style={{height:"500px"}}>
            <img className='w-100 h-100' src={product.picture} alt="" />
        </div>
        <div key={product.id} className='w-50 ps-1  d-flex flex-column justify-content-center'>
            
            <p style={{width:"150px"}} className=' bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>NAME: </span> {product.name}</p>
            <p style={{width:"100px"}} className=' bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>PRICE: </span> ${product.price}</p>
            <p style={{width:"110px"}} className=' bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>COLOR: </span> {product.color}</p>
            <p style={{width:"350px",maxWidth:"450px"}} className='mediaAbout bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>ABOUT: </span> {product.description}</p>
            <p style={{width:"110px"}} className=' bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>RATING: </span> {product.rating}</p>
            <p style={{width:"150px"}} className=' bg-warning fw-semibold'><span className='fw-bold bg-dark text-light'>SIZE: </span> {`[${product.size}]`}</p>
            <div onClick={()=>AddtoCart(product)} className='bg-warning text-light d-flex ps-3 pt-1' style={{width:"100px",height:'30px',cursor:"pointer"}}>
               Add To {<AiOutlineShoppingCart className='m-1 ' size={20}/>}
            </div>
            
        </div>

    </div>

 
  )
}

export default SingleProduct