import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper relative'>
          <div className="z-50 absolute top-10 text-black left-1/2 transform -translate-x-1/2">
            <p className="font-bold text-4xl mb-5">Dive into a World of Color and Expression: Where Every Stroke Tells a Story. Unleash Your Creativity and Explore the Boundless Possibilities of Painting and Drawing.</p>
            
          </div>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl '
            src='https://i.ibb.co/GQWZZPb/digital-art-digital-painting-fantasy-art-fantasy-landscape-wallpaper-preview.jpg'
            alt='Slider-1'
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl'
            src='https://i.ibb.co/f8ZmrC6/81e821ffc9e882b03cd13296f0e14875.jpg'
            alt='Slider-2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='lg:h-[calc(100vh-130px)] w-auto lg:w-full rounded-2xl'
            src=' https://i.ibb.co/pvvYwXd/cebb31017e10b05562163b391a511450.jpg'
            alt='Slider-5'
          />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Slider;