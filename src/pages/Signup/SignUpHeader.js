import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import styled from "styled-components";
import useFormFields from "../hooks/useFormFields";

const SignUpHeader = () => {
  const { handleSignUpPagePrevBtnClick } = useFormFields();

  return (
    <Header>
      <BackButton onClick={handleSignUpPagePrevBtnClick}>
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
  padding: 1rem 1.3rem;
  background-color: #f5f5f5;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 0.4rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

export default SignUpHeader;
