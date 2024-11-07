import React from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import "../Details/Detail.css";
import { CiStar } from "react-icons/ci";
import { BuyBtn } from "./DetailFooterBeta";
import { IoIosArrowDown } from "react-icons/io";
import { TbExclamationMark } from "react-icons/tb";

const Wrapper = styled.div`
  background-color: white;
`;

const Py2 = styled.div`
  margin: 8px 0px;
  height: 1px;
  width: 600px;
  background: #8a8a8a1a;
`;
const Py3 = styled.div`
  width: 580px;
  height: 1px;
  background: #8a8a8a1a;
  margin: 12px 0px;
`;
const Px4 = styled.div`
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;

const SmallFont = styled.span`
  font-size: 13px;
  font-family: "Pretendard";
`;
const DetailMainBeta = () => {
  return (
    <Wrapper>
      <img className="main_img"></img>
      <Px4>
        <a className="CLickBrand">
          <div>브랜드 이미지</div>
          <div>
            <span>브랜드 명</span>
          </div>
        </a>
        <button className="HeartBtn">
          <CiHeart />
          <span>하트 수</span>
        </button>
      </Px4>
      <Py2 />

      <Px4>
        <span className="productname"> 상품명 </span>
      </Px4>
      <div className="px4_pt4">
        <CiStar />
        <SmallFont className="StarPoint">별점</SmallFont>
        <SmallFont className="Reviews">후기 *개</SmallFont>
      </div>
      <div className="Price">
        <span className="OriginPrice">원가격</span>
        <div>
          <span className="DiscountPer">할인율%</span>
          <span className="DiscountPrice">할인가격</span>
        </div>
      </div>
      <Py2 />
      <div className="TotalPrice">
        <div className="WrraperHighDisCountPrice">
          <div className="Prices">
            <span>60,743원</span>
            <div className="Divpadding">
              <span>최대혜택가</span>
            </div>
            <TbExclamationMark />
          </div>
          <div className="MoreBtn">
            <span>자세히</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="WrraperHighDisCountPrice">
          <span>적립금액</span>
          <span>최대적립</span>
        </div>
        <div className="CashStackList">
          <div className="CashStack">
            <span>등급 적립(LV.3맴버 *n%)</span>
            <span>등급적립금</span>
          </div>
          <div className="CashStack">
            <span>구매추가 적립</span>
            <span>구매추가 적립금</span>
          </div>
          <div className="CashStack">
            <span>후기적립</span>
            <span>후기적립금</span>
          </div>
        </div>
      </div>
      <div className="BuyBtn">
        <BuyBtn style={{ margin: "0 auto" }}>
          <span>구매하기</span>
        </BuyBtn>
      </div>
      <Py3 />
      <div className="amoano">
        <span className="Delevery">무신사 회원은 전 품목 무료배송</span>
        <span className="DeleveryExtra">(일부상품 및 도서 산간 지역 제외)</span>
      </div>
    </Wrapper>
  );
};

export default DetailMainBeta;
