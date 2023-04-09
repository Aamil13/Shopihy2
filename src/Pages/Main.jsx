import React, { useEffect } from 'react'
import CurentProduct from '../Component/CurentProduct'
import ImageSlider from '../Component/ImageSlider'
import Morepro from '../Component/Morepro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchprod } from '../Store/productSlice'
import Spinner from 'react-bootstrap/Spinner';

const Main = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchprod())
  },[])

  const {data, isError, isLoading} = useSelector((state)=> state.product)
  return (
    
    <>
    {isLoading ?  <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center'>  <Spinner animation="border" variant="warning" /> </div>
  :
  data?.data?.length ?
<>
   <CurentProduct/>
    <ImageSlider/>
    <Morepro/>
</>
  :
  null

  }
    
    </>
  )
}

export default Main