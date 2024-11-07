import React from "react";
import styled from "styled-components";
import BottomMenu from "../../components/BottomMenu";
import "./Mypage.css";
import "../../index.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/slice/authSlice"; // userInfo를 저장하는 액션

async function fetchUserData() {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
  }
}
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
`;

const ProfileImg = styled.div`
  background-color: black;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 4px 12px 0px;
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
  const { userId, profile_img, caches } = useSelector((state) => state.auth);
  const userInfo = {
    StackResponeCash: "0원",
    CookieMoney: "원",
    Coupon: "장",
    AfterMent: "건",
    userId: 0,
    userName: "string",
    email: "string",
    referenceId: "string",
    caches: 0,
    address: "string",
    phone: "string",
    profile_img: "string",
  }; // 임시 데이터
  // 토큰
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    // 로그인된 상태에서만 API 호출 (토큰 등을 사용해서 인증)
    const fetchUserInfo = async () => {
      try {
        // 토큰이 필요한 경우, Authorization 헤더에 토큰을 추가
        const response = await axios.get(
          "http://52.78.168.169/api/myPageDetail/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // 토큰을 localStorage에서 가져오는 예시
            },
          }
        );

        // 응답에서 userId와 nickName을 받아와 Redux 상태에 저장
        const { userId, profile_img, caches } = response.data;
        dispatch(setUserInfo({ userId, profile_img, caches }));
      } catch (error) {
        console.error("User info fetch error:", error);
      }
    };

    fetchUserInfo();
  }, [dispatch]);

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
        <ProfileImg>
          <u value={profile_img}></u>
        </ProfileImg>
        <div className="PropileStatus">
          <NameLabel value={userId} />
          <ExtraLabel>Lv.3 맴버*1%적립*무료배송 </ExtraLabel>
        </div>
        <SnapProfileLapper>
          <SnapProfile> 스냅 프로필</SnapProfile>
        </SnapProfileLapper>
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
            <p className="적립금">홈페이지 money</p>
            <span className="적립금_금액" value={caches}>
              {" "}
            </span>
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

        <div className="세로정렬">
          <button className="Logout">
            <sapn>로그아웃</sapn>
          </button>
          <div className="Line" />
          <button className="탈퇴">
            <sapn>탈퇴하기</sapn>
          </button>
        </div>
      </div>

      <BottomMenu />
    </MyPageContainer>
  );
};

export default MyPage;
