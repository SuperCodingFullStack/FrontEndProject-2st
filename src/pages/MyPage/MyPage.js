import React from "react";
import styled from "styled-components";
import BottomMenu from "../../components/BottomMenu";
import "./Mypage.css";

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
  justify-content: space-between;
  display: flex;
  padding: 12px 16px;
`;

const NameLabel = styled.p`
  font-weight: pretendard;
  margin-right: 10px;
  font-size: 14px;
`;
const ExtraLabel = styled.p`
  font-weight: pretendard;
  margin-right: 10px;
  font-size: 13px;
  width: 157.2px;
  height: 18px;
`;
const Option = styled.div`
  cursor: pointer;
  cursor: po-size: contain;
  border: nointer;
`;
const Bell = styled.div`
  background-position: center;
  border: none;
  cursor: pointer;
  background-size: cover;
`;

const Cart = styled.div`
  cursor: pointer;
`;

const Blank = styled.div`
  width: 10px;
`;
const Profile = styled.div`
  width: 600px;
  height: 40px;
  display: flex;
`;

const ProfileImg = styled.div`
  background-color: black;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const SnapProfile = styled.span`
  color: #000000;
  font-weight: pretendard;
  font-size: 13px;
  width: 60px;
  height: 18px;
  border: 2px solid #8a8a8a1a;
  border-radius: 10%;
  top: 10px;
`;
const SnapProfileLapper = styled.a`
  padding: 0px 5px;
`;
const MyPage = () => {
  const userInfo = { name: "홍길동", StackCash: "0원" }; // 임시 데이터

  return (
    <MyPageContainer>
      <Title>
        <h2 className="MyTitle">마이</h2>
        <div className="IconsBar">
          <Bell>
            <img className="BellImg" src="/image/icons8-bell.svg" />
          </Bell>
          <Blank />
          <Option>
            <img className="OptionImg" src="/image/icons8-cogwheel.svg" />
          </Option>
          <Blank />
          <Cart>
            <img className="CartImg" src="/image/icons8-cart-50.png"></img>
          </Cart>
        </div>
      </Title>
      <Profile>
        <ProfileImg />
        <div className="PropileStatus">
          <NameLabel />
          {userInfo.name}
          <ExtraLabel>Lv.3 맴버*1%적립*무료배송 </ExtraLabel>
        </div>
        <SnapProfileLapper>
          <SnapProfile> 스냅 프로필</SnapProfile>
        </SnapProfileLapper>
        {/* <SnapProfile /> */}
      </Profile>
      <div className="Line" />
      <div>{userInfo.StackCash}</div>

      <div className="CashStack">적립금</div>
      <BottomMenu />
    </MyPageContainer>
  );
};

export default MyPage;
