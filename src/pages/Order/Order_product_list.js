import React from "react";

const Order_product_list = ({ product }) => {
  return (
    <div className="order_products_list">
      <img
        style={{ width: "80px", height: "90px", margin: "5px" }}
        src={product.mainImg}
        alt="제품 이미지"
      />
      <div className="products_detail">
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "5px",
            marginTop: "5px",
          }}
          className="제품브랜드"
        >
          {product.username}
        </div>
        <div style={{ marginBottom: "5px" }} className="제품명">
          {product.name}
        </div>
        <div style={{ marginBottom: "5px" }} className="제품수량">
          {product.amount}개
        </div>
        <div style={{ fontWeight: "bold" }} className="제품가격">
          {product.price}원
        </div>
      </div>
    </div>
  );
};

export default Order_product_list;
