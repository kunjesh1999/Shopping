
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductListing from './Pages/productListing'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'

function App() {


  return (
   <>
   <BrowserRouter>
     <Header/>
   <Routes>
    <Route path={'/'} exact={true} element={<Home/>}/>
    <Route path={"/ProductListing"} exact={true} element={<ProductListing/>}/>
    <Route path={"/Product/:id"} exact={true} element={<ProductDetails/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
