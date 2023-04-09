import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai"
import {GiShipWheel} from "react-icons/gi"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const NavBar = () => {
 
  const cartitems = useSelector((state)=> state.cart)

  return (
    <Navbar className='d-flex justify-content-between' collapseOnSelect expand="sm" bg="dark" variant="dark">
    
    <div className=' ps-2 d-flex justify-content-center align-items-center'>
      <Link to="/" style={{textDecoration:"none"}}>
      <GiShipWheel className='me-2' color="white" size={18} />
      <span className='text-light text-center '>Shopihy</span>
      </Link>
    </div>
    
    <div  className=' position-relative '>

      <Link to='/cart'>
      <AiOutlineShoppingCart  className='me-3 ' color="white" size={25}/>
      <span style={{width:"20px",height:'20px'}} className=" text-center position-absolute top-25 start-50  badge rounded-pill bg-danger">
    {cartitems.length}  
  </span>
  </Link>
    </div>
  </Navbar>
  );
}





export default NavBar