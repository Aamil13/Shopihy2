import React from 'react'
import "./Style/cartproduct.css"
import { useSelector, useDispatch } from 'react-redux'
import { remove ,increaseprod,decreaseprod} from '../Store/cartSlice'
import { MdDeleteForever} from "react-icons/md"
import Reciept from '../Component/Reciept'

const Cartproducts = () => {

    const dispatch = useDispatch()
        const cartprod = useSelector((state)=>state.cart)

        const removep=(productId)=>{
            dispatch(remove(productId))
        }

        const increaseprodcount = (productId)=>{
            dispatch(increaseprod(productId))
        }

        const decreaseprodcount = (productId)=>{
            dispatch(decreaseprod(productId))
        }

  return (
    <div className='curtmdiv' style={{background:"#EEE9DA", padding:"8rem",}}>
        <div className='' style={{margin:"auto",background:"white",borderRadius:"2rem 0rem 0rem", boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <h3 className='p-3 text-center'>MY BAG</h3>
        <div>
            {
                cartprod.map((items,idx)=>(
                    <div key={idx} className='d-flex  align-items-center contain'>
                        <div className='d-flex flex-column  div1'>
                        <p className='deleteicon' onClick={()=>removep(items.id)}><MdDeleteForever size={30}/></p>
                        <img className='img'  src={items.picture} alt="" />
                        
                        </div>
            
            <div className='pt'>
            <p className=''>{items.name}</p>
            {/* <p className=''>{items.color}</p> */}
                {/* <p style={{fontFamily:"Poppins",fontSize: '20px'}}>Price: ${items.price}</p> */}
                
            </div>

            <div className="d-flex justify-content-between align-items-center rounded-5 px-3 border-1 shadow incdec">
            <button className='btn btn-sm' style={{border:'none'}} onClick={()=>increaseprodcount(items.id)}>+</button>
            <p className='text-center fw-light px-4 mt-3 fw-bold'>{items?.qty}</p>
            <button className='btn btn-sm' style={{border:'none'}} onClick={()=>decreaseprodcount(items.id)}>-</button>
            </div>
            
            

            <p className='prodtotal fw-bold'>${Math.trunc(items.price * items.qty)}</p>
          
            </div>
                ))
            }
        </div>
        </div>
        <Reciept/>
        <div className='d-flex justify-content-end px-5' style={{backgroundColor:"white",boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} >
        <button type="button" className="btn btn-success">Buy Now</button>
        </div>
    </div>
  )
}

export default Cartproducts