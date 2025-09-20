import { Button } from '@mui/material';
// import React from 'react'
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";

// import { BsBagCheck } from "react-icons/bs";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { IoIosLogOut } from "react-icons/io";
// import { NavLink } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import AccountSidebar from '../../Components/AccountSidebar';
const MyAccount = () => {
  return (
    <section className='py-10 w-full'>
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
        <AccountSidebar/> 
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className='pb-3'>My Profile</h2>
            <hr />

            <form className='mt-5'>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField size='small' className='w-full' label="Full Name" variant="outlined" />
                </div>
                <div className="w-[50%]">
                  <TextField size='small' className='w-full' label="Email" variant="outlined" />
                </div>

              </div>

              <div className="flex items-center gap-5 mt-4">
                <div className="w-[50%]">
                  <TextField size='small' className='w-full' label="Phone Number" variant="outlined" />
                </div>
               </div>
               <br/>
               <div className="flex items-center gap-4">
                   <Button className='btn-org btn-lg w-[100px]'>Save</Button>
                   <Button className='btn-org btn-border btn-lg w-[100px]'>cancel</Button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
