import React, { useState } from 'react'
import { Link } from 'react-router-dom'



import { Button } from '@mui/material';
import { BsBagCheckFill } from "react-icons/bs";
import CartItems from './cartItems';


const CartPage = () => {


  return (
    <section className='section py-10 pb-10'>
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">

          <div className="shadow-md rounded-md bg-white">
            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>

              <h2 >Your Cart</h2>
              <p className='mt-0'>There are <span className='font-bold text-primary'>2</span> product in your cart</p>
            </div>
            {/* <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/7845" className='group'>
                  <img src="\img\Bag.jpeg" alt="" className='w-full group-hover:scale-105 transition-all' />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoClose className='cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all' />
                <span className='text-[13px]'>Safari Bags</span>
                <h3 className='text-[15px]'><Link className='link'>Safari Form Plus 2 32L Grey Laptop Backpack with Easy Access Pockets</Link></h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4 mt-2">
                  <div className='relative'>

                    <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer' onClick={handleClickSize}>Size: S <GoTriangleDown /></span>
                    <Menu
                      id="size-menu"
                      anchorEl={sizeanchorEl}
                      open={openSize}
                      onClose={handleCloseSize}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'basic-button',
                        },
                      }}
                    >
                      <MenuItem onClick={handleCloseSize}>S</MenuItem>
                      <MenuItem onClick={handleCloseSize}>M</MenuItem>
                      <MenuItem onClick={handleCloseSize}>L</MenuItem>
                      <MenuItem onClick={handleCloseSize}>XL</MenuItem>
                      <MenuItem onClick={handleCloseSize}>XXL</MenuItem>
                    </Menu>
                  </div>
                  <div className='relative'>

                    <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: 1  <GoTriangleDown /></span>
                  </div>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                  <span className='price  font-[600] text-[14px]'>$58.00</span>

                  <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$58.00</span>
                  <span className='price text-primary font-[600] text-[14px]'>55% OFF</span>
                </div>
              </div>
            </div> */}
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>
            <CartItems size="S" qty={1}/>

            {/* <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/7845" className='group'>
                  <img src="\img\Bag.jpeg" alt="" className='w-full group-hover:scale-105 transition-all' />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoClose className='cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all' />
                <span className='text-[13px]'>Safari Bags</span>
                <h3 className='text-[15px]'><Link className='link'>Safari Form Plus 2 32L Grey Laptop Backpack with Easy Access Pockets</Link></h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4 mt-2">
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Size: S <GoTriangleDown /></span>
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: 1  <GoTriangleDown /></span>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                  <span className='price  font-[600] text-[14px]'>$58.00</span>

                  <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$58.00</span>
                  <span className='price text-primary font-[600] text-[14px]'>55% OFF</span>
                </div>
              </div>
            </div> */}

            {/* <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/7845" className='group'>
                  <img src="\img\Bag.jpeg" alt="" className='w-full group-hover:scale-105 transition-all' />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoClose className='cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all' />
                <span className='text-[13px]'>Safari Bags</span>
                <h3 className='text-[15px]'><Link className='link'>Safari Form Plus 2 32L Grey Laptop Backpack with Easy Access Pockets</Link></h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4 mt-2">
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Size: S <GoTriangleDown /></span>
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: 1  <GoTriangleDown /></span>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                  <span className='price  font-[600] text-[14px]'>$58.00</span>

                  <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$58.00</span>
                  <span className='price text-primary font-[600] text-[14px]'>55% OFF</span>
                </div>
              </div>
            </div> */}

            {/* <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/7845" className='group'>
                  <img src="\img\Bag.jpeg" alt="" className='w-full group-hover:scale-105 transition-all' />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoClose className='cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all' />
                <span className='text-[13px]'>Safari Bags</span>
                <h3 className='text-[15px]'><Link className='link'>Safari Form Plus 2 32L Grey Laptop Backpack with Easy Access Pockets</Link></h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4 mt-2">
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Size: S <GoTriangleDown /></span>
                  <span className='flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer'>Qty: 1  <GoTriangleDown /></span>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                  <span className='price  font-[600] text-[14px]'>$58.00</span>

                  <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>$58.00</span>
                  <span className='price text-primary font-[600] text-[14px]'>55% OFF</span>
                </div>
              </div>
            </div> */}

          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className='pb-3'>Cart Totals</h3>
            <hr />

            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-[500]'>Subtotal</span>
              <span className='text-primary font-bold'>₹1,300.00</span>
            </p>
            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-[500]'>Shipping</span>
              <span className='font-bold'>Free</span>
            </p>
            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-[500]'>Estimate for</span>
              <span className='font-bold'>United Kingdom</span>
            </p>
            <p className='flex items-center justify-between'>
              <span className='text-[14px] font-[500]'>Total</span>
              <span className='text-primary font-bold'>₹1,300.00</span>
            </p>
            <br />
            <Button className="btn-org btn-lg w-full gap-2"><BsBagCheckFill className='text-[20px]' />Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
