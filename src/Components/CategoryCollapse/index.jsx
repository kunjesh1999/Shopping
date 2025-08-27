import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegSquareMinus } from "react-icons/fa6"
import { FaRegPlusSquare } from "react-icons/fa";

const CategoryCollapse = () => {
      const [submenuIndex, setSubmenuIndex] = useState(null)
        const [innerSubmenuIndex, setinnerSubmenuIndex] = useState(null)
            // const [innerOuterwearIndex, setinnerOuterwearIndex] = useState(null)
        
      const openSubmenu = (index) => {

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
  return (
    <>
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
                        {/* Outerwear */}
                        {/* {
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
                        } */}
                        {/* Footwear */}
                        {/* {
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
                        } */}
                    </li>
                    {/* Jewellery */}
                    {/* <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Jewellery</Button>
                        </Link>
                    </li> */}
                    {/* Watches */}
                    {/* <li className='list-none relative'>
                        <Link to="/" className='w-full '>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Watches</Button>
                        </Link>
                    </li> */}
                    {/* Outerwear */}
                    {/* <li className='list-none flex items-center relative flex-col'>
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
                    </li> */}
                    {/* <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Cosmetics</Button>
                        </Link>
                    </li> */}
                    {/* <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Accessories</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>
                                Electronic</Button>
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
                    </li> */}
                </ul>
            </div>
    </>
  )
}

export default CategoryCollapse
