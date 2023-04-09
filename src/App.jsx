import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Provider} from "react-redux"
import store from './Store/store'
import Footer from './Component/Footer'
import NavBar from './Component/NavBar'
import Main from './Pages/Main'
import Cart from './Pages/Cart'
import Allprod from './Pages/Allprod'
import SingleProduct from './Pages/SingleProduct'

function App() {

  return (
    <div className="App">
     <Provider store={store}>
     <BrowserRouter>
     <NavBar/>

     <Routes>
     <Route index path='/' element={<Main/>}></Route>
     <Route path='/product/:id' element={<SingleProduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/allproduct' element={<Allprod/>}></Route>
     </Routes>

     <Footer/>
     </BrowserRouter>
     </Provider>
    </div>
  )
}

export default App
