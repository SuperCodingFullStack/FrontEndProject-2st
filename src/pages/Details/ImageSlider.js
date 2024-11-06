import React from "react";
import styled from "styled-components";

const Sliders = styled.div``;

const ImageSlider = ({ filteredProducts }) => {
  return (
    <Sliders>
      <img src={filteredProducts.imgs[0]} alt="fitleredImage" />
    </Sliders>
  );
};

export default ImageSlider;
