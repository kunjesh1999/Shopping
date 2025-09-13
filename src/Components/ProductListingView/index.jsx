import React, { useContext } from 'react'
import "../ProductItem/Style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import "../ProductItem/Style.css"

import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';


const ProductItem = () => {
    const contex = useContext(MyContext)

    return (
        <div className='productItem rounded-md shadow-lg overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center'>
            <div className='group imgWrapper w-[25%] h-[auto] overflow-hidden rounded-md relative'>
                <Link to="">
                    <div className='img h-[220px] overflow-hidden'>

                        <img src='img\pic-1.svg' className='w-full ' />
                        <img src='img\pic-1.1.jpg' className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                    </div>



                </Link>


                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 !bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>
                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group' onClick={() => contex.setOpenProductDetailsModal(true)}><MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:text-white' /></Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'><IoIosGitCompare className='text-[18px] !text-black group-hover:text-white hover:text-white' /></Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'><FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:text-white' /></Button>

                </div>

            </div>
            <div className='info p-3 px-8 py-4 w-[75%] '>
                <h6 className='text-[15px]'><Link to="/" className='link transition-all'>CLAFOUTIS</Link></h6>
                <h3 className='text-[18px] title mt-3 font-[500] text-[#000] mb-3'><Link to="/" className='link transition-all'>Men Opaque Casual Shirt...</Link></h3>
                <p className='text-[14px] mb-3'>This premium quality half-sleeve shirt is a stylish and comfortable choice for your wardrobe. With soft fabric and modern design, it is a perfect fit for both daily wear and special occasions. </p>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
                    <span className='price text-primary font-[600] text-[15px]'>$58.00</span>
                </div>
                <div className='mt-3'>
                    <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[20px]' />Add to Cart</Button>
                </div>
            </div>


        </div>
    )
}

export default ProductItem
