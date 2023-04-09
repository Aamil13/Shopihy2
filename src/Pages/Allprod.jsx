import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchprod } from '../Store/productSlice'
import Form from 'react-bootstrap/Form';
import "./Allprod.css"
import {GrFormClose} from "react-icons/gr"
import {GoThreeBars} from "react-icons/go"
import {AiOutlineArrowDown , AiOutlineArrowUp} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';



const Allprod = () => {
  const prod = useSelector((state)=> state.product)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(false)
  const [selectValue, setSelectValue] = useState("");
  const [selectPrice, setSelectPrice] = useState("");
  const [selectRate, setSelectRate] = useState("");
  const [page, setPage] = useState(1)
  const [sear, setSear] = useState(false)

  useEffect(()=>{
    dispatch(fetchprod(`?page=1`))
  },[])

  const Onsearch = (event) => {
    const value = event.target.value;
    
    setSear(true)
    dispatch(fetchprod(`?name=${value}`))
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    dispatch(fetchprod(`?category=${value}`))
  };

  const onChangeprice = (event) => {
    const value = event.target.value;
    setSelectPrice(value);
    dispatch(fetchprod(`?rating=${selectRate}&category=${selectValue}&price=${value}`))
  };

  const onChangerate= (event) => {
    const value = event.target.value;
    setSelectRate(value);
    dispatch(fetchprod(`?rating=${value}&category=${selectValue}&price=${selectPrice}`))
  };

  const onChangestock= (event) => {
    const value = event.target.value;
    // setSelectRate(value);
    dispatch(fetchprod(`?inStock=${value}rating=${value}&category=${selectValue}&price=${selectPrice}`))
  };



  
  

  const sortlowtohigh= async()=>{
    dispatch(fetchprod(`?category=${selectValue}&rating=${selectRate}&price=${selectPrice}&page=${page}&sort=lowtohigh`))
  }
  const sorthightolow= async()=>{
    dispatch(fetchprod(`?category=${selectValue}&rating=${selectRate}&price=${selectPrice}&page=${page}&sort=hightolow`))
  }

  

  const changePage= async(val)=>{
    setPage(val)
    dispatch(fetchprod(`?category=${selectValue}&price=${selectPrice}&page=${val}`))
  }

  // const openproduct = async(prod)=>{
  //  let newprod = `https://fakestore-api-seven.vercel.app/${prod}`
  //  console.log(newprod);
  //  return window.open(newprod, '_blank');
  // //  navigate('/product',{state:{prod:newprod}})
  // }

  return (
    <div className='d-flex w-100'>
      {!expanded ?  <GoThreeBars className='sd' onClick={()=>setExpanded(!expanded)} size={40}/> : <GrFormClose className='sd' onClick={()=>setExpanded(!expanded)} size={40}/>}
      {/* //filter */}
      <div className='bg-light filterrs' style={ expanded ? {left:"0", height:'100vh'} : {left:"-100%"} } >
          
          <h5 className='text-center' style={{overflowY:"hidden"}}>Filters</h5>

          <div onChange={(e)=>Onsearch(e)} className='d-flex justify-content-center pt-5'>
          <InputGroup  className="mb-3 w-75">
        
        <Form.Control 
        placeholder='Search'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
          </div>

          <div className='w-100 d-flex gap-3 px-3 py-3'>
            <h6 className='pt-1'>Category</h6>
          <Form.Select onChange={onChange} >
      <option value={""}>All Products</option>
      <option  value="Shirt">Shirt</option>
      <option value="Tshirt">T-Shirt</option>
      <option value="Jeans">Jeans</option>
      <option value="Watch">Watches</option>
      <option value="Shoes">Shoes</option>
    </Form.Select>
          </div>

          <div onChange={onChangeprice} className=' px-3 py-3'>
            <p className='fw-bold'>Price</p>
          <Form.Check name="group1" type='radio' value='500' id='1' label='Under 500' />
          <Form.Check name="group1" type='radio' value='1000' id='2' label='Under 1000' />
          <Form.Check name="group1" type='radio' value='1500' id='3' label='Under 1500' />
          <Form.Check name="group1" type='radio' value='2000' id='4' label='Under 2000' />
          </div>

          <div onChange={onChangerate} className=' px-3 py-3' >
          <p className='fw-bold'>Rating</p>
          <Form.Check name="group1" type='radio' id='1' value='4' label='4 Star & Above' />
          <Form.Check name="group1" type='radio' id='2' value='4.3' label='4.3 Star & Above' />
          <Form.Check name="group1" type='radio' id='3' value='4.5' label='4.5 Star & Above' />
          <Form.Check name="group1" type='radio' id='4' value='4.9' label='4.9 Star' />
          </div>

          <div className=' px-3 py-3'>
          <Form.Check onChange={onChangestock}
          value={true}
        type="switch"
        id="custom-switch"
        label="InStock"
      />
          </div>

      </div>
          {/* //filter */}
      <div className={`${expanded} ? gap-2 w-75 : w-100 p-2`}>
        <div  className='d-flex gap-4 ms-5 '>
          <h5>Sort: </h5>
          <h6 className='pt-1' style={{overflowY:"hidden",cursor:"pointer"}} onClick={()=>sortlowtohigh()}>Low to High <AiOutlineArrowDown/></h6>
          <h6 className='pt-1' style={{overflowY:"hidden",cursor:"pointer"}} onClick={()=>sorthightolow()}>High to Low<AiOutlineArrowUp/></h6>
        </div>
        <div className='row px-0 mx-0'>
        {
          prod?.data?.data?.map((item,idx)=>(
            <div key={idx} onClick={()=>navigate(`/product/${item?.id}`)} className='py-3 col-lg-3 col-md-4'>
            <img  className='p-1 mobimage' style={{width:'100%', height:'300px',objectFit:"cover"}} src={item.picture} alt="" />
            <div className='d-flex justify-content-between'>
            <p className='text-start fw-bold'>{item.name}</p>
            <p className='fw-semibold'>${item.price}</p>
            </div>
            </div>
          ))
        }
        </div>

        <div className='d-flex justify-content-center'>
          { 
          prod?.data?.data?.length < 6 && sear || selectValue || selectPrice ? "" :
            [1,2,3].map((item,idx)=>(
              <button className={`btn shadow mx-2 ${page === item ? 'btn-success' : "btn-secondary"}`} key={idx}
                onClick={()=>changePage(item)}
              >{item}</button>
            ))
          }
          
           
        </div>
      </div>


      </div>
  )
}

export default Allprod