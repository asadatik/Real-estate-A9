

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




import { EffectCoverflow, Pagination } from 'swiper/modules';







  
const Cursole = () => {
   
    return (
        <div>
    
         

             <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full  h-[500px] '  src="https://i.ibb.co/LNj8Dbz/3d-electric-car-building.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img  className='w-full  h-[500px]'  src="https://i.ibb.co/g9gT5h7/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img  className='w-full  h-[500px]' src="https://i.ibb.co/HXcyCpQ/3d-rendering-white-wood-living-room-near-bedroom-upstair.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='w-full  h-[500px]'  src="https://i.ibb.co/LNj8Dbz/3d-electric-car-building.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='w-full  h-[500px]' src="https://i.ibb.co/HXcyCpQ/3d-rendering-white-wood-living-room-near-bedroom-upstair.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='w-full  h-[500px]'  src="https://i.ibb.co/g9gT5h7/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg" />  />
        </SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default Cursole;