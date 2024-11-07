import React, { useState } from "react";
// import React from "react";
import styled from "styled-components";
import BottomMenu from "../../components/BottomMenu";
import "./Mypage.css";
import "../../index.css";
import Login from "../../pages/Login/Login";
import { Link } from "react-router-dom";

const MyPageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: 1045px;
  background-color: #f6f6f6;
  padding-left: 1px solid gray;
`;

const Title = styled.h2`
  font-size: 24px;
  justify-content: space-between;
  display: flex;
  padding: 12px 16px;
  align-items: center;
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

const CookieMoney = styled.div`
  background: #ffffffff;
  padding: 5px;
  width: 200px;
  height: 39px;
  border: #f5f5f5f5 solid 1px;
`;
const Menuitem_MenuitemBtn = styled.button`
  margin: 0px 16px;
  padding: 12px 0px;
  width: 568px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const Menuitem_MenuitemBtn2 = styled.button`
  width: 584px;
  height: 67px;
  display: flex;
  justify-content: space-between;
  padding-left: 0%;
  cursor: pointer;
`;
const ArrowImg = styled.img`
  width: 16px;
  display: flex;
  justify-content: center;
`;

const MyPage = () => {
  const userInfo = {
    name: "홍길동",
    StackResponeCash: "0원",
    CookieMoney: "원",
    Coupon: "장",
    AfterMent: "건",
  }; // 임시 데이터.
  const [active, setActive] = useState({
    boolean: false,
    idx: 0,
  });

  return (
    <MyPageContainer className="Rapper">
      <Title>
        <div className="MyTitle">
          <h2>마이</h2>
        </div>
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
        <Link to="/login">
          <div>
            <u className="LoginButton">로그인</u>
          </div>
        </Link>

        {/* <SnapProfile /> */}
      </Profile>
      <div className="Line" />

      <div className="StackResponeCash">
        <span> 가입 후 받은 혜택 </span>
        <span className="SpanStackResponeCash">
          <u>{userInfo.StackResponeCash}</u>
        </span>
      </div>
      <div className="CookieLabel_세로정렬">
        <div className="CookieLabel">
          <CookieMoney>
            <p className="적립금">적립금</p>
            <span className="적립금_금액">{userInfo.CookieMoney} </span>
          </CookieMoney>
          <CookieMoney>
            <p>쿠폰</p>
            <sapn> {userInfo.Coupon} </sapn>
          </CookieMoney>
          <CookieMoney>
            <p>후기작성</p>
            <sapn> {userInfo.AfterMent} </sapn>
          </CookieMoney>
        </div>
        <a>
          <div className="BrandLanking">내가 자주산 브랜드, 랭킹은?</div>
        </a>
      </div>
      <div className="MenualList">
        <div className="OrderList">취소/반품/교환</div>
        <li className="Orderitem_OrderitemWrrap">
          <div className="Orderitem_Img">이미지</div>
          <div className="Orderitem">
            <span>교환 유무</span>
            <span>브랜드</span>
            <span>제품명</span>
            <span>카테고리</span>
            <button></button>
          </div>
        </li>

        <div className="Banner_Container">
          <a className="Banner_ContainerWrappe">
            <div className="Orderitem_Img">
              <img></img>
            </div>
            <div className="Banner_BnnerTextConte">
              <span>설명</span>
              <span>설명</span>
            </div>
          </a>
        </div>
        <div className="OrderList">주문내역</div>
        <Menuitem_MenuitemBtn>
          <div>취소/반품/교환 내역</div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn>
        <Menuitem_MenuitemBtn>
          <div>매장 결제내역</div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn>
        <Menuitem_MenuitemBtn>
          <div>재입고 알림 내역</div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn>
        <Menuitem_MenuitemBtn>
          <div>최즌 본 상품</div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn>
        <Menuitem_MenuitemBtn2>
          <div className="MyImpormation">
            <div className="TextLeft">나의 브랜드 리스트</div>
            <div className="MyImpormation_text">
              자주 구매한 브랜드 모아보기
            </div>
          </div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn2>
        <Menuitem_MenuitemBtn2>
          <div className="MyImpormation">
            <div className="TextLeft">나의 맞춤 정보</div>
            <div className="MyImpormation_text">
              체형,피부,취향 정보 입력하고 상품 추천받기
            </div>
          </div>
          <ArrowImg src="/image/icons8-arrow-50.png" />
        </Menuitem_MenuitemBtn2>
        <div className="Line" />
      </div>

      <BottomMenu />
    </MyPageContainer>
  );
};

export default MyPage;
