import React from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

const Wrapper = styled.div`
  padding: 1rem; // Using rem for padding
  display: flex;
  justify-content: space-between;
  width: 100%; // Adjusted to be more responsive
  max-width: 600px; // Adding a max-width constraint
  background-color: white;
  box-sizing: border-box; // Ensure padding doesn't affect width
  position: fixed;
  bottom: 0px;
`;

const GoodProduct = styled.div`
  display: flex;
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  flex-direction: column;
  margin-right: 1rem; // Using rem for margin
`;

export const BuyBtn = styled.button`
  background: #000000;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 0.875rem; // Using rem for font-size
  border-radius: 10px;
  border: solid;
  width: 100%; // Full width of its container
  max-width: 500px; // Max-width constraint
  font-family: "pretendard";
  padding: 0.75rem 1rem; // Using rem for padding
`;

const DetailFooterBeta = () => {
  return (
    <Wrapper>
      <GoodProduct>
        <CiHeart size="1.5rem" /> {/* Adjust icon size if needed */}
        <span>number</span>
      </GoodProduct>
      <BuyBtn>
        <span>구매하기</span>
      </BuyBtn>
    </Wrapper>
  );
};

export default DetailFooterBeta;
