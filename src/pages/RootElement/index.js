import React from 'react';
import MainSwiper from '../../components/Swiper/MainSwiper';
import TimeEvent from './TimeEvent/TimeEvent';
import BrandRecom from './BrandRecommend/BrandRecom';

const RootElement = () => {
  return (
    <main>
      <MainSwiper />
      <TimeEvent />
      <BrandRecom />
    </main>
  );
};

export default RootElement;
