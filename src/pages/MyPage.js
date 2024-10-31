// src/pages/MyPage.js
import React from "react";
import styled from "styled-components";
import BottomMenu from "../components/BottomMenu";
// import "../Styles/Mypages.css";

const MyPageContainer = styled.div`
  position: fixed;
  max-width: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: calc(100% - 55px);
  background-color: #f6f6f6;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  justify-content: space-between;
  display: flex;
`;

const InfoSection = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
const Option = styled.div`
  background-position: center;
  backgroundne;
  cursor: po-size: contain;
  border: nointer;
  margin-right: 50px;
`;
const Bell = styled.div`
  background-position: center;
  border: none;
  cursor: pointer;
  margin-right: 50px;
  background-size: cover;
`;

const MyPage = () => {
  const userInfo = { name: "홍길동", StackCash: "0원" }; // 임시 데이터

  return (
    <MyPageContainer>
      <Title>
        마이
        <Bell>
          <img className="BellImg" src="/image/icons8-bell.svg" />
        </Bell>
        <Option>
          <img src="/image/icons8-cogwheel.svg" />
        </Option>
      </Title>
      <InfoSection>
        <Label>이름:</Label> {userInfo.name}
      </InfoSection>
      <InfoSection>
        <Label>이번달 받은 혜택</Label> {userInfo.StackCash}
      </InfoSection>
      <div className="CashStack">적립금</div>
      <BottomMenu />
    </MyPageContainer>
  );
};

export default MyPage;
