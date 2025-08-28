import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import Banner from './BannerBox/Banner';
// import { height } from '@mui/system';
import BannerBoxV2 from '../bannerBoxV2';
const BannerBoxVV2 = (props) => {
  return (
    // custom-slide
    <div className='py-5 w-full '>
      <Swiper

        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide >
          {/* <Banner img='/img/cms-banner-1.jpg' alt="banner" /> */}
<BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>
          {/* <span>S22 Samsung</span> */}
        </SwiperSlide>
        
        <SwiperSlide >
          {/* <Banner img='/img/cms-banner-1.jpg' alt="banner" /> */}
<BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>
          {/* <span>S22 Samsung</span> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\cms-banner-2.jpg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\cms-banner-2.jpg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\cms-banner-3.jpg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\cms-banner-3.jpg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide  >
          {/* <Banner img='\img\Footwear.jpg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\keybord.jpeg' alt="banner" /> */}
          <BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>

        </SwiperSlide>
        <SwiperSlide>
          {/* <Banner img='\img\caps.jpeg' alt="banner" /> */}
          <BannerBoxV2 info="right" image={"img/sub-banner-2.jpg"}/>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerBoxVV2
