import React from "react";

const Delivery_destination = ({ phone, address }) => {
  console.log("값이 들어왔나?", phone, address);

  return (
    <div className="destination">
      <div className="destination_top">
        <div>배송지</div>
        <div className="Change_addressBtn">배송지 변경</div>
      </div>
      <div className="배송지 내용">
        <div style={{ height: "30px", fontSize: "13px" }}>{`${address}`}</div>
        <div style={{ height: "30px", fontSize: "13px" }}>{`${phone}`}</div>
      </div>
    </div>
  );
};

export default Delivery_destination;
