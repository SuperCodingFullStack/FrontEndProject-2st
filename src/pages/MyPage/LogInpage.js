import React from "react";
import styled from "styled-components";
import BottomMenu from "../../components/BottomMenu";
import SnapProfile from "./SnapProfile";
import "./Mypage.css";
import "../../index.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setUserInfo } from "../../store/slice/authSlice"; // userInfo를 저장하는 액션
import useFetchUserInfo from "../hooks/useFetchUserInfo";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

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
  margin-top: 5px;
`;
const Option = styled.div`
  cursor: pointer;
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
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SnapProfiles = styled.span``;

const SnapProfileLapper = styled.a`
  padding: 6px 5px;
  color: #000000;
  font-family: "Pretendard";
  font-size: 13px;
  width: 100px;
  border: 2px solid #8a8a8a1a;
  border-radius: 20px;
  text-align: center;
  display: block;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #000000;
    color: #fff;
  }
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
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useFetchUserInfo();

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("탈퇴하시겠습니까?");
    if (confirmDelete) {
      // 삭제 요청 보내기
      dispatch(logout()); // Redux에서 로그아웃 상태로 변경
      api
        .post("/api/withdraw", { token }) // 필요시, 토큰을 함께 보내기
        .then(() => {
          alert("탈퇴가 완료되었습니다.");
          navigate("/"); // 탈퇴 후 메인 페이지로 이동
        })
        .catch((error) => {
          console.error("탈퇴 오류:", error);
          alert("탈퇴 처리 중 오류가 발생했습니다.");
        });
    } else {
      alert("탈퇴가 취소되었습니다.");
    }
  };
  const { userId, profile_img, caches, userNickname } = useSelector(
    (state) => state.auth
  );

  const logoutbtn = () => {
    dispatch(logout());
  };

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("profileBoolean", "0");
  });

  let pBoolean = localStorage.getItem("profileBoolean");
  return (
    <MyPageContainer className="Rapper">
      <Title>
        <div className="MyTitle">
          <h2>마이페이지</h2>
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <ProfileImg>
            <img src={profile_img} alt="profile_img" />
          </ProfileImg>
          <div className="PropileStatus">
            <NameLabel>{userNickname} 님</NameLabel>
            <ExtraLabel>Lv.3 맴버*1%적립*무료배송 </ExtraLabel>
          </div>
        </div>
        <SnapProfileLapper
          onClick={() => {
            localStorage.setItem("profileBoolean", "1");
          }}
        >
          <SnapProfiles> 스냅 프로필</SnapProfiles>
        </SnapProfileLapper>
        <SnapProfile />
      </Profile>
      <div className="Line" />

      <div className="StackResponeCash">
        <span> 가입 후 받은 혜택 </span>
        <span className="SpanStackResponeCash">
          <u></u>
        </span>
      </div>
      <div className="CookieLabel_세로정렬">
        <div className="CookieLabel">
          <CookieMoney>
            <p className="적립금">홈페이지 money</p>
            <span className="적립금_금액" value={caches}>
              {" "}
            </span>
          </CookieMoney>
          <CookieMoney>
            <p>쿠폰</p>
            <span></span>
          </CookieMoney>
          <CookieMoney>
            <p>후기작성</p>
            <span> </span>
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

        <div className="세로정렬">
          <button className="Logout" onClick={logoutbtn}>
            <span>로그아웃</span>
          </button>
          <div className="Line" />

          <button className="탈퇴" onClick={handleDeleteAccount}>
            탈퇴하기
          </button>
        </div>
      </div>

      <BottomMenu />
    </MyPageContainer>
  );
};

export default MyPage;
