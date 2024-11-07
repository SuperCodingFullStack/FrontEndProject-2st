import React from "react";
import Header from "./DetailHeader";
import styled from "styled-components";
// import "../../index.css";
import DetailFooterBeta from "./DetailFooterBeta";
import DetailMainBeta from "./DetailMainBeta";

const Center = styled.div`
  /* box-shadow: 1px 1px 0px 0px #666666; */
`;

const DetailBeta = () => {
  return (
    <Center>
      <Header />
      <DetailMainBeta />
      <DetailFooterBeta />
    </Center>
  );
};

export default DetailBeta;
