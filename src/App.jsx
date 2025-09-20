
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
import Login from './Pages/Login'
import Register from './Pages/Register'
import CartPage from './Pages/Cart'
import Verify from './Pages/Verify'

// import Drawer from '@mui/material/Drawer';
// import CartPanel from './Components/CartPanel'
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword'
import Checkout from './Pages/Checkout'
import MyAccount from './Pages/MyAccount'
import MyList from './Pages/MyList'
import Orders from './Pages/Orders'

const MyContext = createContext();
function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [fullWidth, setFullWidth] = useState(true);
  const [isLogin,setIsLogin]= useState(true)

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };


  const handleCloseopenProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };
  const openAlertBox = (status,msg) => {
    if(status==="success"){
    toast.success(msg)
    }
    if(status==="error"){
    toast.error(msg)
    }
    
  }
  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
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
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-Orders"} exact={true} element={<Orders />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

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
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' onClick={handleCloseopenProductDetailsModal}><IoClose className='text-[20px]' /></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponents />
            </div>
          </div>
        </DialogContent>

      </Dialog>

      {/* { cart Panel} */}
      {/* <Drawer open={openCartPanel} onClose={toggleCartPanel(false)} anchor={"right"} className='cartPanel '>
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden" >
          <h4>Shopping Cart 1 </h4>
          <IoClose className='text-[20px] cursor-pointer' onClick={toggleCartPanel(false)} />
        </div>
        <CartPanel />

      </Drawer> */}

    </>
  )
}

export default App
export { MyContext }