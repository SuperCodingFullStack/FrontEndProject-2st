import React from "react";

const FinalArrangement = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }} className="purchase_area">
        <div style={{ fontSize: "18px", fontWeight: "bold", padding: "4px" }}>
          결제금액
        </div>

        <div className="sort_amount">
          <div>상품금액</div>
          <div>0원</div>
          {/* <div>{totalPrice.toLocaleString()}원</div> */}
        </div>

        <div className="sort_amount">
          <div>할인 금액</div>
          <div style={{ color: "blue" }}>-0원</div>
        </div>
        <div className="sort_amount">
          <div>배송비</div>
          <div>배송비 무료</div>
        </div>

        <div className="sort_amount">
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            총 결재 금액
          </div>
          <div style={{ fontWeight: "bold" }}>
            {/* {totalPrice.toLocaleString()}원 */}
            0원
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalArrangement;
