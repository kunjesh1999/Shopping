import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
const Slider = () => {
  return (
    <div className='homeSlider py-4'>
      <div className="container">
        <Swiper
         loop={true}
           spaceBetween={10} 
           navigation={true} 
           modules={[Navigation,Autoplay]} 
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="sliderHome">
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img src="\img\1739165903970_file_1734525014348_NewProject_7.jpg" alt="" className='w-full' /></div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img src="\img\1739165929706_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img src="\img\banner-sale_1920x.webp" alt="" className='w-full' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img src="\img\images.jpg" alt="" className='w-full' />
</div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src="" alt=""  className='w-full'/>
        </SwiperSlide> */}
          {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
