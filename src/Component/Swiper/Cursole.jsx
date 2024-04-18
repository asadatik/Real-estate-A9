

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




import { EffectCoverflow, Pagination } from 'swiper/modules';







  
const Cursole = () => {
   
    return (
        <div className='grid  rounded-2xl bg-base-200 md:grid-cols-2  lg:grid-cols-3  gap-5 '  >
              <div className='   lg:pt-28 '  >
                      <p   
                            data-aos="zoom-out-left"  
                            data-aos-duration="1000"
                      className='text-center  text-2xl font-bold text-emerald-500 ' >Modern Apartment In A New Residential Complex.
                                                                             </p>
                    <p data-aos="zoom-out-right" 
                    data-aos-duration="1500"
                       
                     className='text-center  text-lg my-3  '  >Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
                      <div className='  lg:flex gap-5  justify-center '   >
                      <button  data-aos="fade-up-right"
                       data-aos-duration="3000"
                       className="btn btn-outline  btn-secondary">Get Start now</button>
                      <button data-aos="fade-up-left"
                       data-aos-duration="3000"
                      className="btn btn-outline   btn-warning">learn more</button>

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