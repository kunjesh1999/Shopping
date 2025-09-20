import { useEffect, useState } from 'react'
import AccountSidebar from '../../Components/AccountSidebar'
import { Button } from '@mui/material'
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";

const Orders = () => {
    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
    const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null);
        } else {
            setIsOpenOrderProduct(index);
        }
    }


    return (
        <section className='py-10 w-full'>
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>
                <div className="col2 w-[80%]">
                    <div className="shadow-md rounded-md bg-white">
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2 >My Orders</h2>
                            <p className='mt-0'>There are <span className='font-bold text-primary'>2</span>orders</p>

                            <div className="relative overflow-x-auto mt-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                &nbsp;
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Paymant Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                PinCode
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                User Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4 font-[500]">
                                                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={() => isShowOrderProduct(0)}>
                                                    {

                                                        isOpenOrderProduct == 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                                    }
                                                </Button>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>dsf4556d5dsdfsdcds</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>Pay_DFsdsDSdsd789</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                RINKU VERMA
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                7458236485
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='block w-[400px]'>B 45 street 6 Adresh nagar Delhi </span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                36589
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                8500
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                rinkuv.planetc@gmail.com
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>
                                                    4564645jkjjijojio
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <Badge status="delivered" />
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                2024-120-04
                                            </td>
                                        </tr>
                                        {isOpenOrderProduct === 0 && (
                                            <tr>
                                                <td className='pl-20' colSpan="6">
                                                    <div className="relative overflow-x-auto">
                                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
                                                                <tr>

                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Title
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Image
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Price
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Sub Total
                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>


                                                                </tr>

                                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-600'>Men Opaque Casual Shirt...</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>


                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-[#f1f1f1]' colSpan="12">

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}


                                        {/* <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4 font-[500]">
                                                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]' onClick={() => isShowOrderProduct(1)}>
                                                    {

                                                        isOpenOrderProduct == 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                                    }
                                                </Button>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>dsf4556d5dsdfsdcds</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>Pay_DFsdsDSdsd789</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                RINKU VERMA
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                7458236485
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='block w-[400px]'>B 45 street 6 Adresh nagar Delhi </span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                36589
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                8500
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                rinkuv.planetc@gmail.com
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-primary'>
                                                    4564645jkjjijojio
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <Badge status="delivered" />
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                2024-120-04
                                            </td>
                                        </tr>
                                        {isOpenOrderProduct === 1 && (
                                            <tr>
                                                <td className='pl-20' colSpan="6">
                                                    <div className="relative overflow-x-auto">
                                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs bg-gray-50 text-gray-700 uppercase dark:text-gray-400">
                                                                <tr>

                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Title
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Image
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Price
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Sub Total
                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-primary'>Men Opaque Casual Shirt...</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>


                                                                </tr>

                                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-700'>dsf4556d5dsdfsdcds</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-primary'>Men Opaque Casual Shirt...</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        <img src="\img\pic-1.2.jpg" alt="" className='w-[40px] h-[40px] object-cover rounded-md' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span>1300</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='bg-[#f1f1f1]' colSpan="12">

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        )} */}
                                    </tbody>
                                </table>
                            </div>
</div>
</div>
                </div>
            </div>
        </section>
    )
}

export default Orders;