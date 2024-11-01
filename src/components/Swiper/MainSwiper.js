import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperMocks from "./mocks/SwiperMocks";
import { Link } from "react-router-dom";
import "./MainSwiper.css";
import { FaChevronRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const SwiperWrapper = styled.div`
  position: relative;
`;

const SwiperButton = styled.div`
  position: absolute;
  padding-bottom: 20px;
  padding-right: 36px;
  bottom: 0;
  right: 0;
`;

const MainSwiper = () => {
  const changeIndexRef = useRef(null);

  const handleSlideChange = (swiper) => {
    if (changeIndexRef.current === null) return;
    else {
      changeIndexRef.current.textContent = swiper.realIndex + 1;
    }
  };

  return (
    <SwiperWrapper>
      <Swiper
        className="main-swiper"
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        onSlideChange={handleSlideChange}
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
              style={{
                background: `url('${v.images}') no-repeat center/cover`,
              }}
            >
              <div>
                <h2>{v.figcaption.split("|")[0]}</h2>
                <h3>{v.figcaption.split("|")[1]}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButton className="z-20 flex gap-1 items-center">
        <button className="text-white text-sm flex gap">
          <span ref={changeIndexRef}></span>
          <span>/</span>
          <span>{SwiperMocks.length}</span>
        </button>
        <button>
          <FaChevronRight
            fontSize="14px"
            color="#fff"
            style={{ marginTop: "1px" }}
          />
        </button>
      </SwiperButton>
    </SwiperWrapper>
  );
};

export default MainSwiper;
