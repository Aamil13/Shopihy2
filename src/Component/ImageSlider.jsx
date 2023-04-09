import React, { useEffect, useState } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import "./Style/currproduct.css"

const ImageSlider = () => {
  const navigate = useNavigate()


  const prod = useSelector((state)=> state.product)
  // let rateprod = prod?.data

  

  return (
  
    <div style={{height:"400px", }} className='d-flex flex-column align-content-center'>
    <h3>Top Rated</h3>

    <Carousel className='my-5' responsive='true' leftArrow='' rightArrow='' show={3.2} slide={1} swiping={true}>
        {prod?.data?.data?.filter(rate => rate.rating > 4.5).map((item,idx)=>(
          <>
         <img onClick={()=>navigate(`/product/${item?.id}`)} key={idx} className='w-50' style={{height:"150px"}} src={item.picture} alt="" />
         <p className='ps-5 imgname'>{item.name}</p>
      
         
         
         
         </>
       ))} 

     {/* <img className='w-50' src="https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_960_720.png" alt="" /> */}
     
    </Carousel>
   
    </div>
    
  )
}

export default ImageSlider