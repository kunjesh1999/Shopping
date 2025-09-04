import { Button } from '@mui/material'
import React from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

function QtyBox() {
  return (
    <div className='qtyBox flex items-center'>
      <input type="number" className='w-full h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,2) rounded-md]' defaultValue={1}/>
      <div className="flex items-center flex-col justify-between h-40px">

      <Button className="!min-w[30px] !w-[30px] !h-[10px]"><FaAngleUp/></Button>
      <Button className="!min-w[30px] !w-[30px] !h-[10px]"><FaAngleDown/></Button>
      </div>
    </div>
  )
}

export default QtyBox
