import React from "react";

import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const DBody = styled.div``;

const DetailBody = ({ filteredProducts }) => {
  return (
    <DBody>
      <ImageSlider filteredProducts={filteredProducts} />
    </DBody>
  );
};

export default DetailBody;
