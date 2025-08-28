// import React, { useState } from 'react'
// // import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox'
// import "../Sidebar/style.css"
// import { Collapse } from 'react-collapse';
// import { FaAngleDown } from "react-icons/fa6";
// import { Button } from '@mui/material';

// const Sidebar = () => {
//   const[isopenCategoryFilter,setisopenCategoryFilter]= useState(true)
//   return (
//     <aside className='sidebar py-5'>
//       <div className="box">
//         <h3 className='mb-3 text-[16px] font-[600] flex items-center'>Shop by Category
//         <Button onClick={() => setisopenCategoryFilter(!isopenCategoryFilter)}><FaAngleDown/></Button>
//         </h3>
//         <Collapse isOpened={isopenCategoryFilter}></Collapse>
//         <div className="scroll px-3 relative -left-[10px]">
//           <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Jewllery" className='w-full' />
//           <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />

//         </div>
//         <Collapse/>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar


import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import "../Sidebar/style.css"
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { Button } from '@mui/material';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import Rating from '@mui/material/Rating';

import 'react-range-slider-input/dist/style.css';
const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] = useState(true);
  const [isOpenSizeFilter, setisOpenSizeFilter] = useState(true);

  return (
    <aside className='sidebar py-5'>
      <div className="box">
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center justify-between pr-5 '>
          Shop by Category
          <Button
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
            className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto'
          >
            {
              isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>

        {/* Collapse Wrap Start */}
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className='w-full' />
          </div>
        </Collapse>
        {/* Collapse Wrap End */}
      </div>

      <div className="box">
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center justify-between pr-5 '>
          Availability
          <Button
            onClick={() => setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)}
            className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto'
          >
            {
              isOpenAvailabilityFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>

        {/* Collapse Wrap Start */}
        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="In stock (10)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Not available" className='w-full' />
          </div>
        </Collapse>
        {/* Collapse Wrap End */}
      </div>

      <div className="box mt-3">
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center justify-between pr-5 '>
          Size
          <Button
            onClick={() => setisOpenSizeFilter(!isOpenSizeFilter)}
            className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto'
          >
            {
              isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>

        {/* Collapse Wrap Start */}
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Small (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Medium (10)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Large (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="XL (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="XXL (17)" className='w-full' />
          </div>
        </Collapse>
        {/* Collapse Wrap End */}
      </div>

      <div className="box mt-4">
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center justify-between pr-5 '>
          Filter By Price

        </h3>

        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className='text-[13px]'>
            From:<strong className='text-dark'>Rs:{100}</strong>
          </span>
          <span className='ml-auto text-[13px]'>
            From:<strong className='text-dark'>Rs:{5000}</strong>
          </span>
        </div>
      </div>

        <div className="box mt-4">
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center justify-between pr-5 '>
          Filter By Rating

        </h3>
        <div className='w-full'>
                <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className='w-full'>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className='w-full'>
                <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className='w-full'>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className='w-full'>
                <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
               

      </div>
    </aside>
  )
}

export default Sidebar;

