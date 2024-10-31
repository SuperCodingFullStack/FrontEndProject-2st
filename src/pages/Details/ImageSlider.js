import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = styled.div``;

const ImageSlider = () => {
  return (
    <Slider>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Slider>
  );
};

export default ImageSlider;
