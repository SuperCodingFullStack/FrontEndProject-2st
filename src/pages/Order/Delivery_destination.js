import React from "react";

const Delivery_destination = () => {
  return (
    <div className="destination">
      <div className="destination_top">
        <div>배송지</div>
        <div>배송지 등록</div>
      </div>
      <div className="배송지 내용">
        <div className="배송지 주소 없을 때">
          <div>등록된 배송지가 없습니다.</div>
          <div>배송지를 등록해주세요.</div>
        </div>
        <div className="배송지가 있을 때"></div>
      </div>
    </div>
  );
};

export default Delivery_destination;
