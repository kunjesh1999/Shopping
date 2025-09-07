// import { Breadcrumbs } from '@mui/material';
import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../Components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../../Components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const ProductDetails = () => {
    const [productActionIndex, setProductActionIndex] = useState(null)
    const [activeTab, setActiveTab] = useState(0)
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
                <div className="container flex gap-8 items-center">
                    <div className="productZoomContainer w-[40%] ">
                        <ProductZoom />
                    </div>

                    <div className="productContent w-[60%] pr-10">
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
                        <br />
                        <p className=' pr-10 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="flex items-center gap-3">
                            <span className='text-[16px]'>Size:</span>
                            <div className="flex items-center gap-1 actions">
                                <Button className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                                <Button className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                                <Button className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                                <Button className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                            </div>
                        </div>

                        <p className='text-[14px] mt-4 mb-2'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
                        <div className="flex items-center  gap-4">
                            <div className="qtyBoxWrapper w-[70px]">

                                <QtyBox />
                            </div>
                            <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]' />Add to Cart</Button>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><FaRegHeart className='text-[18px]' />Add to Wishlist</span>
                            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><IoIosGitCompare className='text-[18px]' />Add to Compare</span>
                        </div>


                    </div>
                </div>

                <div className="container pt-10">
                    <div className="flex items-center gap-8 mb-5">
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 && 'text-primary'}`} onClick={() => setActiveTab(0)}>Description </span>
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 && 'text-primary'}`} onClick={() => setActiveTab(1)}>Product Details </span>
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 && 'text-primary'}`} onClick={() => setActiveTab(2)}>Reviews (17)</span>
                    </div>

                    {
                        activeTab === 0 && (
                            <div className="shadow-md w-full py-5 px-8 rounded-md">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Lightweight Design</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Free Shipping & Return</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Money Back Guarantee</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Online Support</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                        )}
                    {
                        activeTab === 1 &&

                        <div className="shadow-md w-full py-5 px-8 rounded-md">

                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Stand Up
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Folded(w/o wheels)
                                            </th>
                                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Folded(w/wheels)
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Door Pass Through
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">

                                            <td class="px-6 py-4 font-[500]">
                                                35"L x 24"W x 37-45"H(front to back wheels)
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">

                                            <td class="px-6 py-4 font-[500]">
                                                35"L x 24"W x 37-45"H(front to back wheels)
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">

                                            <td class="px-6 py-4 font-[500]">
                                                35"L x 24"W x 37-45"H(front to back wheels)
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 dark:border-gray-700">

                                            <td class="px-6 py-4 font-[500]">
                                                35"L x 24"W x 37-45"H(front to back wheels)
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4 font-[500]">
                                                24
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    }
                    {
                        activeTab === 2 &&
                        <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                            <div className="w-full productReviewsContainer">
                                <h2 className='text-[18px]'>Customer question & answer</h2>
                                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4">
                                <div className="review w-full flex items-center justify-between">
                                 <div className="info w-[60%] flex items-center gap-3">
                                     <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                        <img src="\img\Customer pic-1.webp" alt="" className='w-full h-full object-cover'/>
                                     </div>
                                     <div className="w-[80%]">
                                        <h4 className='text-[16px]'>Rinku Verma</h4>
                                        <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                        <p className='mb-0 mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                     </div>

                                 </div>
                                                                 <Rating name="size-small" defaultValue={4}  readOnly />

                                </div>

                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default ProductDetails
