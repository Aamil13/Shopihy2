import React from 'react'
import { Link } from 'react-router-dom';

const Morepro = () => {
  return (
    <div style={{width:"100%",height:"300px"}} className='text-center text-light bg-dark '>
      <Link to='/allproduct'>
      <h5 style={{paddingTop:"150px"}}>All Products!</h5>
      </Link>
    </div>
  )
}

export default Morepro