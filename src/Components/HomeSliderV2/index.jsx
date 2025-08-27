import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';
function HomeBannerV2() {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">

          {/* <img src="img/sample-1.jpg" /> */}
          <img src="\img\Banner.png" />
          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] justify-center z-50 p-8 flex items-center flex-col transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
            <h2 className='text-[30px] font-[700] w-full relative -right-[100%] opacity-0'>Women Soild Round Green T-Shirt</h2>
            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only<span className='text-primary text-[30px] font-[700]'>$59.00</span></h3>
            <div className="w-full relative -right-[100%] opacity-0 btn_">

              <Button className='btn-org '>SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden">

          <img src="\img\Banner2.png" />
          <div className="info absolute top-10 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
            <h2 className='text-[30px] font-[700] w-full relative -right-[100%] opacity-0'>Buy Modern Chair In Black Color</h2>
            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only<span className='text-primary text-[30px] font-[700]'>$99.00</span></h3>
            <div className="w-full relative -right-[100%] opacity-0 btn_">

              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>


          {/* 
           <div className="info absolute top-10 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-5'>Big Saving Days Sale</h4>
            <h2 className='text-[30px] font-[700] w-full'>Buy Modern Chair In Black Color</h2>
            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-5'>Starting At Only<span className='text-primary text-[30px] font-[700]'>$99.00</span></h3>
            <div className="w-full">

            <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div> */}
        </div>
      </SwiperSlide>


    </Swiper>
  )
}

export default HomeBannerV2
