// import React, { useRef, useState } from 'react'
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// import 'swiper/css';

// import 'swiper/css/navigation';
// const ProductZoom = () => {
// const[slideIndex,setSlideIndex]= useState(0)
// const zoomSliderBig = useRef()
// const zoomSliderSml = useRef()
 
//  const goto = (index) => {
// setSlideIndex(index)
// zoomSliderSml.current.swiper.slideTO(index)
// zoomSliderBig.current.swiper.slideTO(index)
//  }
//     return (
//         <>

//             <div className='flex gap-3'>
//                 <div className='slider w-[15%]'>
//                     <Swiper
//                     ref={zoomSliderSml}
//                     direction={'vertical'}
//                         slidesPerView={4}
//                         spaceBetween={10}
//                         navigation={true}
//                         modules={[Navigation]}
//                         className="zoomProductsSliderThumbs h-[500px] overflow-hidden"
//                     >
//                         <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(0)}>
//                                 <img src="\img\pic-2.1.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
//                           <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(1)}>
//                                 <img src="\img\pic-2.2.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
//                            <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(2)}>
//                                 <img src="\img\pic-2.3.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
//                            <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(3)}>
//                                 <img src="\img\pic-2.4.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
//                            <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(3)}>
//                                 <img src="\img\pic-2.4.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
//                            <SwiperSlide>
//                             <div className='item rounded-md overflow-hidden cursor-pointer group' onClick={()=>goto(3)}>
//                                 <img src="\img\pic-2.4.webp" alt=""  className='w-full transition-all group-hover:scale-105' />
//                             </div>
//                         </SwiperSlide>
                      
                         
//                     </Swiper>
//                 </div>
//                 <div className='zoomContainer w-[85%] h-p[500px] overflow-hidden'>
//                       <Swiper
//                        ref={zoomSliderBig}
//                         slidesPerView={1}
//                         spaceBetween={0}
//                         navigation={false}
//                     >
//                           <SwiperSlide>

//                 <InnerImageZoom src="\img\pic-2.1.webp" zoomSrc="\img\pic-2.1.webp" />
//                           </SwiperSlide>
//                              <SwiperSlide>

//                 <InnerImageZoom src="\img\pic-2.2.webp" zoomSrc="\img\pic-2.2.webp" />
//                           </SwiperSlide>
//                              <SwiperSlide>

//                 <InnerImageZoom src="\img\pic-2.3.webp" zoomSrc="\img\pic-2.3.webp" />
//                           </SwiperSlide>
//                              <SwiperSlide>

//                 <InnerImageZoom src="\img\pic-2.4.webp" zoomSrc="\img\pic-2.4.webp" />
//                           </SwiperSlide>
                          
//                     </Swiper>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default ProductZoom

import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef(null);
  const zoomSliderSml = useRef(null);

  const goto = (index) => {
    setSlideIndex(index);
    if (zoomSliderSml.current && zoomSliderSml.current.swiper) {
      zoomSliderSml.current.swiper.slideTo(index);
    }
    if (zoomSliderBig.current && zoomSliderBig.current.swiper) {
      zoomSliderBig.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <div className="flex gap-3">
        {/* Left Thumbnail Slider */}
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={'vertical'}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductsSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(0)}
              >
                <img
                  src="/img/pic-2.1.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(1)}
              >
                <img
                  src="/img/pic-2.2.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(2)}
              >
                <img
                  src="/img/pic-2.3.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(3)}
              >
                <img
                  src="/img/pic-2.4.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="item rounded-md overflow-hidden cursor-pointer group"
                onClick={() => goto(3)}
              >
                <img
                  src="/img/pic-2.4.webp"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Big Zoom Slider */}
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper ref={zoomSliderBig} slidesPerView={1} spaceBetween={0} navigation={false}>
            <SwiperSlide>
              <InnerImageZoom src="/img/pic-2.1.webp" zoomSrc="/img/pic-2.1.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src="/img/pic-2.2.webp" zoomSrc="/img/pic-2.2.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src="/img/pic-2.3.webp" zoomSrc="/img/pic-2.3.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src="/img/pic-2.4.webp" zoomSrc="/img/pic-2.4.webp" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;

