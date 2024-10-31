import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import styled from "styled-components";

// TODO: 뒤로가기 버튼을 눌렀을 때 마이페이지로 이동

const LoginHeader = () => {
  return (
    <Header>
      <BackButton>
        <SlArrowLeft />
      </BackButton>
      <Title>로그인/회원가입</Title>
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

export default LoginHeader;
