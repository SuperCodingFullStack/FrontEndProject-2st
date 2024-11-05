import React from "react";

const Order_product_list = () => {
  return (
    <div className="주문 상품 내용">
      <div>주문상품 1개</div>
      <div className="배송시간안내">
        <div>Plus 배송</div>
        <div>오늘 22시까지 결제 시 내일 도착보장</div>
      </div>
      <div className="주문 상품 리스트">
        <div className="제품 이미지"></div>
        <div className="이미지빼고 다른 세부내용">
          <div className="제품브랜드">푸마</div>
          <div className="제품명">스피드캣 OG-블랙/398846-01 235</div>
          <div className="제품수량">1개</div>
          <div className="제품가격">139,000</div>
        </div>
      </div>
    </div>
  );
};

export default Order_product_list;
