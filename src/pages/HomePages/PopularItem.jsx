import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../pages/HomePages/item.css';

const PopuleItem = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-24 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <h3 className="text-2xl font- text-start py-3">Popular</h3>
        <p className="text-start py-3">
          <span className='text-orange-500'>AddMore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 inline-block ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </p>
      </div>

      <div className="swiper-container">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Existing Slides */}
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>

          {/* Additional Slides - Add as many as needed */}
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
          {/* ... Add more slides here */}
        </Swiper>
      </div>
    </div>
  );
};

export default PopuleItem;
