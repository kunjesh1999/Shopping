import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className='blogItem group'>
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img src="img/Adobe Express - file (1).svg" alt="blog img" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'/>
        <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
          <IoMdTime className='text-[16px]'/>5 APRIL 2023
        </span>
      </div>

      <div className='info py-4'>
<h2 className='text-[16px] font-[600] text-black'>Nullam ullamcorper ornare molestiek</h2>
<p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Living room, cozy, furniture, table, chairs, decor, modern, plants, light, stylish....</p>
<Link className='link font-[500] text-[14px] flex items-center gap-1'>Read More <IoIosArrowForward/></Link>

      </div>
    </div>
  )
}

export default BlogItem
