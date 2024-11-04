import React from "react";
import styled from "styled-components";

const Sliders = styled.div``;

const ImageSlider = ({ filteredProducts }) => {
  return (
    <Sliders>
      <img src={filteredProducts.image} alt="fitleredImage" />
    </Sliders>
  );
};

export default ImageSlider;
