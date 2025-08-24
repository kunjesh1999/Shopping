// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// import 'swiper/css/navigation';
// // import ProductItem from '../ProductItem/ProductItem';
// const ProductSlider = (props) => {
//   return (
//     <div className='ProductSlider'>
//       <Swiper
//           slidesPerView={props.items}
//           spaceBetween={10}
//           navigation={true}
//           modules={[Navigation]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             {/* <ProductItem/> */}
//           </SwiperSlide>
//           </Swiper>
//     </div>
//   )
// }

// export default ProductSlider
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';


const ProductSlider = (props) => {
  return (
    <div className='productSlider py-3'>
        <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem/>
                </SwiperSlide>

              </Swiper>
    </div>
  )
}

export default ProductSlider
