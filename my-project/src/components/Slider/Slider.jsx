import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';



function Slider() {

  
  useEffect(() => {

    const points = document.querySelectorAll('.swiper-pagination-bullets');

    points.forEach((point) => {
      point.style.display = 'flex';
    });


    document.querySelectorAll('.swiper').forEach((element) => {
      element.style.marginLeft = '0px';
    });
    
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet) => {
      bullet.style.backgroundColor = 'red'; // Change bullet color
      bullet.style.width = '12px';
      bullet.style.height = '12px';
      
    });
  }, []);
  useEffect(() => {
    const swiperNextBut = document.querySelectorAll('.swiper-button-next');
    const swiperPrevBut = document.querySelectorAll('.swiper-button-prev');
    
    swiperNextBut.forEach((button) => {
      button.style.display = 'none'; // Hide next button
    });

    swiperPrevBut.forEach((button) => {
      button.style.display = 'none'; // Hide previous button
    });


  }, []);
  return (
    <Swiper
      modules={[Pagination, Navigation]} // Enable required modules
      pagination={{ clickable: true }}   // Enable clickable pagination
      navigation                         // Add navigation buttons
      spaceBetween={30}                  // Space between slides
      slidesPerView={1}                  // Number of slides visible
      className="w-full bg-black relative h-[250px] mt-6 mr-0 mb-12 ml-0"
    >
      <SwiperSlide className="absolute  items-center justify-center bg-black text-white text-lg font-semi-bold text-[19px] leading-[22px] ">
    <p className='mb-4'> MedTrix leads the charge in pioneering world-first initiatives reshaping how pharma communicates with its stakeholders and how physicians care for their patients.</p> 
<br />
<p className='mb-4'>Our spectrum of products and services covers a wide range of capabilities with varying degrees of complexity, touching the lives of pharma experts, patients, and physicians alike.</p>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-black text-white text-lg font-semi-bold text-[19px] leading-[22px] ">
      <p className='mb-4'>Our team of industry-leading experts has extensive experience and expertise in the pharmaceutical promotional and non-promotional space, enabling us to deliver innovative solutions that are tailored to meet the unique needs of our clients.
 </p> 

      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-black text-white text-lg font-semi-bold text-[19px] leading-[22px] ">
      <p className='mb-4'>We believe that creativity, cutting-edge technology, and a deep knowledge of medical science are the key ingredients to delivering exceptional solutions. </p> 
<br />
<p className='mb-4'>By integrating Generative AI (GenAI) into all our delivery processes, we ensure the highest quality outcomes for our clients
 </p> 
<br />

<p className='mb-4'>Partner with us and experience the difference that our innovative solutions can make.</p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;


