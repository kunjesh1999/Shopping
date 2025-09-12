import React from 'react'
import Slider from '../../Components/HomeSlider/Slider'
import Catslider from '../../Components/Catslider/Catslider'
import { LiaShippingFastSolid } from "react-icons/lia";
import BannerSlider from '../../Components/AdsBannerSlider/BannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';

// import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import BlogItem from '../../Components/BlogItem';
import HomeBannerV2 from '../../Components/HomeSliderV2';
import BannerBoxV2 from '../../Components/bannerBoxV2';
import BannerBoxVV2 from '../../Components/BannerBoxVV2';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Slider />

      <section className='py-6'>
        <div className="container flex  gap-5">
           <div className="part1 w-[70%]">
            <HomeBannerV2/>
           </div>
 <div className="part2 w-[30%]  flex items-center gap-5 justify-between flex-col">
<BannerBoxV2 info="left" image={"img/sub-banner-1.jpg"}/>
<BannerBoxV2 info="right" image={"img/sub-banner-2.jpg"} />
 </div>

        </div>
      </section>
      <Catslider />
      <div className='bg-white py-8'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftsec'>
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>

            </div>
            <div className='rightsec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
                <Tab label="Purse" />
                <Tab label="Smart Tablet" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} />

        </div>
      </div>

      <section className='py-4 pt-2 bg-white '>
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4 ">
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[20px] font-[600] uppercase'>Free Shipping {" "}</span>
            </div>

            <div className="col2">
              <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <p className='font-bold text-[25px]'>- Only $200*</p>
          </div>


          {/* <BannerSlider items={4} /> */}
            <BannerBoxVV2 items={4}/>

        </div>
      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Latest Products</h2>

          <ProductSlider items={6} />
          <BannerSlider items={3} />
        </div>
      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>

          <ProductSlider items={6} />
          <BannerSlider items={3} />

        </div>
      </section>

      <section  className='py-5 pb-8 pt-0 bg-white blogSection'>
      <div className="container">
                <h2 className='text-[20px] font-[600] mb-4'>From The Blog</h2>

  <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="blogSlider"
        >
          <SwiperSlide>
            <BlogItem/>
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem/>
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem/>
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem/>
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem/>
          </SwiperSlide>
          </Swiper>
      </div>
      </section>

      

    </div>

  )
}

export default Home
