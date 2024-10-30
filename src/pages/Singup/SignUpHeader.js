import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import styled from "styled-components";
import useFormFields from "../hooks/useFormFields";

const SignUpHeader = () => {
  const { handlePrevBtnClick } = useFormFields();

  return (
    <Header>
      <BackButton onClick={handlePrevBtnClick}>
        <SlArrowLeft />
      </BackButton>
      <Title>회원가입</Title>
    </Header>
  );
};

// 스타일 정의
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #f5f5f5;
  height: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 0.3rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

export default SignUpHeader;
