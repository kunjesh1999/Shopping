import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BsBagCheckFill } from "react-icons/bs";

const Checkout = () => {
    return (
        <section className='py-10'>
            <div className="container flex gap-5">
                <div className="leftCol w-[70%]">
                    <div className="card bg-white shadow-md p-5 rounded-md w-full">
                        <h1>Billing Details</h1>
                        <form className='w-full mt-5'>
                            <div className="flex items-center gap-5 pb-5 pt-2">
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Full Name" variant="outlined" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Email" type='email' variant="outlined" />
                                </div>
                            </div>
                            <h6 className='text-[14px] font-[500] mb-3'>Street address *</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className="col w-[100%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="House No. and Street Name" variant="outlined" />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 pb-5">
                                <div className="col w-[100%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Apartment, suite, unit, etc. (optional)" variant="outlined" />
                                </div>
                            </div>


                            <div className="flex items-center gap-5 pb-5 pt-2">
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Town / City *" variant="outlined" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="State / County *" type='text' variant="outlined" />
                                </div>
                            </div>

                            <h6 className='text-[14px] font-[500] mb-3'>Postcode / ZIP *</h6>
                            <div className="flex items-center gap-5 pb-5 pt-2">
                                <div className="col w-[100%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Zip Code *" variant="outlined" />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 pb-5 pt-2">
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Phone Number" variant="outlined" />
                                </div>
                                <div className="col w-[50%]">
                                    <TextField id="outlined-basic" className="w-full" size='small' label="Email Address " type='text' variant="outlined" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="rightCol w-[30%]">
                    <div className="card shadow-md bg-white p-5 rounded-md">
                        <h2 className='mb-4'>Your Order</h2>

                        <div className="flex justify-between items-center py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                            <span className='text-[14px] font-[600]'>Product</span>
                            <span className='text-[14px] font-[600]'>Subtotal</span>
                        </div>

                        <div className=" mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="\img\pic-1.2.jpg" alt="" className='w-full transition-all group-hover:scale-105 ' />
                                    </div>

                                    <div className="info">
                                        <h4 className='text-[14px]'>Men Opaque Casual Shirt...</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>₹1,300.00</span>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="\img\pic-1.2.jpg" alt="" className='w-full transition-all group-hover:scale-105 ' />
                                    </div>

                                    <div className="info">
                                        <h4 className='text-[14px]'>Men Opaque Casual Shirt...</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>₹1,300.00</span>
                            </div>

                               <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="\img\pic-1.2.jpg" alt="" className='w-full transition-all group-hover:scale-105 ' />
                                    </div>

                                    <div className="info">
                                        <h4 className='text-[14px]'>Men Opaque Casual Shirt...</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>₹1,300.00</span>
                            </div>

                               <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="\img\pic-1.2.jpg" alt="" className='w-full transition-all group-hover:scale-105 ' />
                                    </div>

                                    <div className="info">
                                        <h4 className='text-[14px]'>Men Opaque Casual Shirt...</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>₹1,300.00</span>
                            </div>

                               <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="\img\pic-1.2.jpg" alt="" className='w-full transition-all group-hover:scale-105 ' />
                                    </div>

                                    <div className="info">
                                        <h4 className='text-[14px]'>Men Opaque Casual Shirt...</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>

                                <span className='text-[14px] font-[500]'>₹1,300.00</span>
                            </div>
                        </div>

                        <Button className='btn-org btn-lg w-full flex gap-2 items-center'><BsBagCheckFill className='text-[20px]'/>Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
