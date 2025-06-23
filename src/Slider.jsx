import React from 'react'
import Sanjana from './image/Sanjana.png';
import Akash from './image/Akash.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Slider() {
    return (
        <section className="max-w-screen-xl mx-auto pb-12 place-items-center">
            <h2
        className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md mb-10"
      >
        What my clients are saying?
      </h2>
      
      {/* Slider starts*/}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-2xl  border border-black">

<div className='random mr-40 '>
        {/* Slider1 */}

        <SwiperSlide className=" px-4 ">
            <div
              className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-4 shadow-[0_0px_50px_rgba] cursor-grab"
            >
              <div className='shrink-0 md:w-[150px] md:h-[150px]'>
              <img
                className=" w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={Akash}
                alt="testimonial 3"
              />
              </div>
              <div
                className="testimonial-text md:ml-6 text-left pt-6 md:pt-16 relative"
              >
                <p className="text-sm md:text-base mb-2">
                  “Anurag is a talented, committed individual who will leave no
                  stone unturned in his pursuit to provide with the best. His
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. He has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2
                  className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl mr-5"
                >
                  Saatvik Nagpal
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg mr-5">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </SwiperSlide>
        
        {/* Slider 2 */}
        <SwiperSlide className=" px-4 ">
            <div
              className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-4 shadow-[0_0px_50px_rgba] cursor-grab"
            >
              <div>
              <img
                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={Sanjana}
                alt="testimonial 3"
              />
              </div>
              <div
                className="testimonial-text md:ml-6 text-left pt-6 md:pt-16 relative"
              >
                <p className="text-sm md:text-base mb-2">
                  Sanjana is a talented, committed individual who will leave no
                  stone unturned in her pursuit to provide with the best. Her
                  attention to detail and in-depth experience in the of web
                  development is indeed commendable. SHe has exhibited exemplary
                  skills in the field, and I hope to see all the great projects
                  coming up!”
                </p>
                <h2
                  className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl mr-5"
                >
                  Sanjana Kumari
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg mr-5">
                  Founder, EazyGrad
                </h5>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>

        </div>
      </Swiper>

      {/* Slider ends */}
      
        </section>
    )
}

export default Slider
