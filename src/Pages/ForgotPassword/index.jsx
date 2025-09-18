import React, { useContext, useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import { MdOutlineMail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { Button } from '@mui/material';
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';

const ForgotPassword = () => {
  const [isShowPassword,setIsShowPassword]=useState(false)
  const [isShowPassword2,setIsShowPassword2]=useState(false)
 
  const context= useContext(MyContext)
  const histoty= useNavigate();

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
          <h3 className='text-center text-[18px] text-black'>Forgot Password</h3>
          <form className='w-full mt-5'>
            <div className='form-group w-full mb-5 relative'>
              <TextField type={ isShowPassword === false ? 'password' : 'text'} name="name" id="password" label="New Password *" variant="outlined" className='w-full' />
               <Button  className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>
              {
                isShowPassword===false ? <IoMdEye className='text-[20px] opacity-75' />:<IoEyeOffSharp className='text-[20px] opacity-75' />
              }
              </Button>
            </div>
            <div className='form-group w-full mb-5 relative'>
              <TextField name="password" type={ isShowPassword2 ===false ? 'password' : 'text'} id="confirm_password" label="ConfirmPassword *" variant="outlined" className='w-full' />
              <Button  className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={() => setIsShowPassword2(!isShowPassword2)}>
              {
                isShowPassword2 === false ? <IoMdEye className='text-[20px] opacity-75' />:<IoEyeOffSharp className='text-[20px] opacity-75' />
              }
              </Button>
            </div>
            {/* <a className="link cursor-pointer text-[14px] font-[600]" onClick={ForgotPassword}>Forgot Password</a> */}
            <div className="flex items-center w-full mt-3 mb-3">
               <Button className='btn-org btn-lg w-full'>Change Password</Button>
                
            </div>
            {/* <p className='text-center'>Not Registered? <Link className='link text-[14px] font-[600] text-primary' to='/register'>Sign Up</Link></p>
            <p className='text-center font-[500]'>Or continue with social account</p>
            <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black !font-semibold'><FcGoogle className='text-[20px]'/>Login with Google</Button> */}
          
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword