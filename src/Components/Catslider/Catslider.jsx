import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Catslider = () => {
  return (
    <div className='homecatslider pt-4 py-8'>
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740543133/1740543133408_fash.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkl-85HBmQ21urq2yF_I05Hk2LCdWCWMalcQ&s" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Purse</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src="https://img.freepik.com/premium-photo/pen-tablet-with-stylus-vector-icon-illustration-smart-pen-drawing-vector-tablets-screen-place-flat-cartoon-style-suitable-web-landing-page-banner-flyer-sticker-wallpaper-background_839035-1774489.jpg" alt="" className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

export default Catslider
