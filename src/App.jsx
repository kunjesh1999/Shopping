
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductListing from './Pages/productListing'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import { createContext, useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './Components/ProductZoom'
import { IoClose } from "react-icons/io5";
import ProductDetailsComponents from './Components/ProductDetails'

const MyContext = createContext();
function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);



  const handleCloseopenProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
setOpenProductDetailsModal
  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={'/'} exact={true} element={<Home />} />
            <Route path={"/ProductListing"} exact={true} element={<ProductListing />} />
            <Route path={"/Product/:id"} exact={true} element={<ProductDetails />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseopenProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >

        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' onClick={handleCloseopenProductDetailsModal}><IoClose className='text-[20px]'/></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
           <ProductDetailsComponents/>
            </div>
          </div>
        </DialogContent>

      </Dialog>
    </>
  )
}

export default App
export {MyContext}