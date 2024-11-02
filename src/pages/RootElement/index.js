import React from "react";
import MainSwiper from "../../components/Swiper/MainSwiper";
import TimeEvent from "./TimeEvent/TimeEvent";
import BrandRecom from "./BrandRecommend/BrandRecom";
import Filter from "./Filter/Filter";

const RootElement = () => {
  return (
    <main>
      <MainSwiper />
      <TimeEvent />
      <Filter />
      <BrandRecom />
    </main>
  );
};

export default RootElement;
