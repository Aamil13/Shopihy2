import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Reciept = () => {

  const cartprod = useSelector((state)=>state.cart)
  const [Tprice, setTPrice] = useState(0)

  const totalprice = ()=>{
    let price = 0
    cartprod.map((item)=>(
      
      price += item.price * Number(item.qty)
      
    ))
    setTPrice(price)
  }

  useEffect(()=>{
    totalprice()
  },[cartprod])
  return (
    <div className='d-flex justify-content-end gap-4 ' style={{backgroundColor:"white",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div>
        <h3 className='fs-5 my-1 py-1'> Sub-Total</h3>
        <p className='fw-light my-1'>{cartprod.length} Items</p>
        </div>
        <p style={{fontSize:"30px"}} className='text-dark fw-bolder pe-4'>${Tprice}</p>

    </div>
  )
}

export default Reciept