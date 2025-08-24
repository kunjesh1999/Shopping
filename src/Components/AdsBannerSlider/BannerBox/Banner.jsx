import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  return (
    <div >
        <div className='box BannerBox overflow-hidden rounded-lg group'>
        <Link to="/">

            <img src={props.img} alt="banner" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'/>
        </Link>

            {/* <img src="\img\cms-banner-2.jpg" alt="" />
            <img src="\img\cms-banner-3.jpg" alt="" /> */}
          </div>
    </div>
  )
}

export default Banner
