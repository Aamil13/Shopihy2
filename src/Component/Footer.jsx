import React from 'react'
import{AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => {
  return (
    <div style={{height:"300px"}} className="bg-light footerparent d-flex justify-content-between">
        <div className='fdev d-flex gap-5 m-5'>
            <div>
                <p className='footerp'>About Us</p>
                <p className='footerp'>NewsEvents</p>
                <p className='footerp'>FAQ</p>
                <p className='footerp'>Contact US</p>
            </div> 
            <div>
                <p className='footerp'>Shiping Info</p>
                <p className='footerp'>Return policy</p>
                <p className='footerp'>Privacy & Terms</p>
                <p className='footerp'>Support</p>
            </div>
        </div>
        <div className=' icons m-5'>
        <AiFillTwitterSquare size={50}/>
        <AiFillInstagram size={50}/>
        <AiFillFacebook size={50}/>
        </div>
        
        </div>
  )
}

export default Footer