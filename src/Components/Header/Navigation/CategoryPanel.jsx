import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegSquareMinus } from "react-icons/fa6";
// import { useState } from 'react';
import './style.css'
// import CategoryCollapse from '../../CategoryCollapse';


const CategoryPanel = (props) => {
    const [submenuIndex, setSubmenuIndex] = useState(null)
    const [innerSubmenuIndex, setinnerSubmenuIndex] = useState(null)
    const [innerOuterwearIndex, setinnerOuterwearIndex] = useState(null)
    const [innerFootwearIndex, setinnerFootwearIndex] = useState(null)
    const [OuterwearIndex, setOuterwearIndex] = useState(null)
    const toggleDrawer = (newOpen) => () => {
        props.setisOpenCatPanel(newOpen)
    }
    const openSubmenu = (index) => {
        // console.log(submenuIndex, '--', index);

        if (submenuIndex === index) {
            setSubmenuIndex(null)

        } else {
            setSubmenuIndex(index)

        }
    }
    const openinnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setinnerSubmenuIndex(null)

        } else {
            setinnerSubmenuIndex(index)

        }
    }
    const openinnerOuterwear = (index) => {
        if (innerOuterwearIndex === index) {
            setinnerOuterwearIndex(null)
        } else {
            setinnerOuterwearIndex(index)
        }
    }
    const openinnerFootwear = (index) => {
        if (innerFootwearIndex === index) {
            setinnerFootwearIndex(null)
        } else {
            setinnerFootwearIndex(index)
        }
    }
    const openOuterwear = (index) => {
        if (OuterwearIndex === index) {
            setOuterwearIndex(null)
        } else {
            setOuterwearIndex(index)
        }
    }
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel ">
            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between '>Shop By Categories <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' /></h3>

            <div className="scroll ">
                <ul className='w-full '>
                    <li className='list-none flex items-center relative flex-col '>
                        <Link to="/" className='w-full '>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>Fashion</Button></Link>
                        {
                            submenuIndex === 0 ? (
                                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer'
                                    onClick={() => openSubmenu(0)} />
                            ) : (
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                    onClick={() => openSubmenu(0)} />

                            )}
                        {
                            submenuIndex === 0 && (
                                <ul className="submenu w-full pl-3">
                                    <li className='list-none relative'>
                                        <Link to="/" className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Apparel</Button>
                                        </Link>

                                        {
                                            innerSubmenuIndex === 0 ? (
                                                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerSubmenu(0)} />
                                            ) : (
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerSubmenu(0)} />

                                            )}


                                        {
                                            innerSubmenuIndex === 0 && (
                                                <ul className="inner_submenu w-full pl-3 ">
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Smart Tablet</Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Crepe T-Shirt</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            leather watch</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Rolling Diamond</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }

                        {
                            submenuIndex === 0 && (
                                <ul className="submenu w-full pl-3">
                                    <li className='list-none relative'>
                                        <Link to="/" className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                                Outerwear</Button>
                                        </Link>

                                        {
                                            innerOuterwearIndex === 0 ? (
                                                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerOuterwear(0)} />
                                            ) : (
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerOuterwear(0)} />

                                            )}


                                        {
                                            innerOuterwearIndex === 0 && (
                                                <ul className="inner_submenu w-full pl-3 ">
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Wooden Chairt</Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Sneakers Shoes</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Purse</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Xbox Controller</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }

                        {
                            submenuIndex === 0 && (
                                <ul className="submenu w-full pl-3">
                                    <li className='list-none relative'>
                                        <Link to="/" className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                                Footwear</Button>
                                        </Link>

                                        {
                                            innerFootwearIndex === 0 ? (
                                                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerFootwear(0)} />
                                            ) : (
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                                    onClick={() => openinnerFootwear(0)} />

                                            )}


                                        {
                                            innerFootwearIndex === 0 && (
                                                <ul className="inner_submenu w-full pl-3 ">
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Leather Watch</Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Cabinet Table</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Headphones</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Sunglasses</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Jewellery</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full '>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Watches</Button>
                        </Link>
                    </li>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Outerwear</Button></Link>
                        {
                            OuterwearIndex === 1 ? (
                                <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer'
                                    onClick={() => openOuterwear(1)} />
                            ) : (
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                    onClick={() => openOuterwear(1)} />

                            )}
                        {
                            OuterwearIndex === 1 && (
                                <ul className="submenu w-full pl-3">
                                    <li className='list-none relative'>
                                        


                                        {
                                            OuterwearIndex === 1 && (
                                                <ul className="inner_submenu w-full pl-3 ">
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Smart Tablet</Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Crepe T-Shirt</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            leather watch</Link>
                                                    </li>
                                                    <li className='list-none relative  mb-1'>
                                                        <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                            Rolling Diamond</Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Cosmetics</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Accessories</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Electronics</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Furniture</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Sunglasses</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Rolling Diamond</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Xbox Controller</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Leather Watch</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Smart Tablet</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Purse</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Sunglasses</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <CategoryCollapse/> */}

        </Box>
    );
    return (
        <>

            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel












































