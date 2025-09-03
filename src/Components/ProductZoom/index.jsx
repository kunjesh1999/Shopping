import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
const ProductZoom = () => {
    return (
        <>

            <div className='flex gap-3'>
                <div className='slider w-[15%]'>
                    <Swiper
                    direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductsSliderThumbs h-[500px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.2.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                          <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.1.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                           <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.3.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                           <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.4.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                           <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.1.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                           <SwiperSlide>
                            <div className='item rounded-md overflow-hidden cursor-pointer group'>
                                <img src="\img\pic-1.1.jpg" alt=""  className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='zoomContainer w-[85%] h-p[500px] overflow-hidden'>

                <InnerImageZoom src="\img\pic-1.2.jpg" zoomSrc="\img\pic-1.2.jpg" />
                </div>

            </div>
        </>
    )
}

export default ProductZoom
