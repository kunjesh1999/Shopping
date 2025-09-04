// import { Breadcrumbs } from '@mui/material';
import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../Components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../../Components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductDetails = () => {
   const[productActionIndex,setProductActionIndex]= useState(null)
    return (
        <>

            <div className='py-5'>
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition !text-[14px]'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition !text-[14px]'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition !text-[14px]'
                        >
                            Embroidered Satin Saree
                        </Link>
                    </Breadcrumbs>
                </div>

            </div>

            <section className='bg-white py-5'>
                <div className="container flex gap-8">
                    <div className="productZoomContainer w-[40%] ">
                        <ProductZoom />
                    </div>

                    <div className="productContent w-[60%]">
                        <h1 className='text-[24px] font-[600] mb-2'>Embroidered Satin Saree</h1>
                        <div className="flex items-center gap-3">
                            <span className='text-gray-400 text-[13px]'>Brands: <span className='font-[500] text-black opacity-75'>House of Chikankari</span></span>
                            <Rating name="size-small" defaultValue={4} size="small" readOnly />
                            <span className='text-[13px] cursor-pointer'>Review(5)</span>
                        </div>

                        <div className='flex items-center gap-4 mt-4'>
                            <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>$58.00</span>
                            <span className='price text-primary font-[600] text-[20px]'>$58.00</span>
                            <span className='text-[14px]'>Available In Stock: <span className='text-green-600 text-[14px] font-bold'>147 Items</span></span>
                        </div>
                        <br/>
                        <p className='mt-3 pr-10 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="flex items-center gap-3">
                            <span className='text-[16px]'>Size:</span>
                            <div className="flex items-center gap-1 actions">
                                <Button className={`${productActionIndex ===0 ?'!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(0)}>S</Button>
                                <Button className={`${productActionIndex ===1 ?'!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(1)}>M</Button>
                                <Button className={`${productActionIndex ===2 ?'!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(2)}>L</Button>
                                <Button className={`${productActionIndex ===3 ?'!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>

                        <p className='text-[14px] mt-4 mb-2'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
                        <div className="flex items-center  gap-4">
                        <div className="qtyBoxWrapper w-[70px]">

                           <QtyBox/>
                        </div>
                       <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]'/>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
