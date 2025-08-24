import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Banner from './BannerBox/Banner';
import { height } from '@mui/system';
const BannerSlider = (props) => {
  return (
    <div className='py-5 w-full custom-slide'>
      <Swiper

        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide >
          <Banner img='/img/cms-banner-1.jpg' alt="banner" />
          {/* <span>S22 Samsung</span> */}
        </SwiperSlide>
        <SwiperSlide>
          <Banner img='\img\cms-banner-2.jpg' alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img='\img\cms-banner-3.jpg' alt="banner" />
        </SwiperSlide>
        <SwiperSlide  >
          <Banner img='\img\Footwear.jpg' alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img='\img\keybord.jpeg' alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img='\img\caps.jpeg' alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSlider
