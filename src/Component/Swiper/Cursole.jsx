

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




import { EffectCoverflow, Pagination } from 'swiper/modules';







  
const Cursole = () => {
   
    return (
        <div className='grid  rounded-2xl bg-base-200 md:grid-cols-2  lg:grid-cols-3 '  >
              <div className='  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500    lg:pt-28 '  >
                      <p   
                            data-aos="zoom-out-left"  
                            data-aos-duration="1000"
                      className='text-center  text-2xl font-bold text-white ' >Modern Apartment In A New Residential Complex.
                                                                             </p>
                    <p data-aos="zoom-out-right" 
                    data-aos-duration="1500"
                       
                     className='text-center  text-lg m-3   '  >Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
                      <div className='  lg:flex gap-5  justify-center '   >
                      <button  
                       className="btn  animate__animated animate__zoomInDown  btn-outline  btn-secondary">Get Start now</button>
                     
                     <button  
                       className="btn  animate__animated animate__zoomInUp   btn-info">Learn More</button>
                      </div>
            
              </div>
                 
            <div className='  lg:col-span-2' >
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
          <img  className='w-full  h-[500px]'  src="https://i.ibb.co/g9gT5h7/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg" />  
        </SwiperSlide>
        
            </Swiper>
            </div>
        </div>
    );
};

export default Cursole;