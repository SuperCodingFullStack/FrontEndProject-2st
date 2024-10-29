import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperMocks from './mocks/SwiperMocks';
import { Link } from 'react-router-dom';
import './MainSwiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const MainSwiper = () => {
  return (
    <Swiper
      className="main-swiper"
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      {SwiperMocks.map((v) => (
        <SwiperSlide key={v.slider_idx.toString()}>
          <Link
            to="/"
            style={{ background: `url('${v.images}') no-repeat center/cover` }}
          >
            <div>
              <h2>{v.figcaption.split('|')[0]}</h2>
              <h3>{v.figcaption.split('|')[1]}</h3>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
