import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Order.css";
import Delivery_destination from "./Delivery_destination";
import Order_Navigation from "./Order_Navigation";
import Order_product_list from "./Order_product_list";
import FinalArrangement from "./FinalArrangement";

const Order = () => {
  const products = [
    {
      id: 1,
      name: "POP α 이중직 트레이닝 팬츠_Heather Grey size: 36(90)",
      price: 79000,
      mainImg:
        "https://mymusinsabucket.s3.ap-northeast-2.amazonaws.com/14fb553c-ecat.png",
      amount: 1, //수량
      username: "아이더", // 판매자 이름
    },
  ];
  return (
    <>
      <div className="order_all">
        <Order_Navigation />
        <Delivery_destination />
        <div className="Order_product_details">
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            주문상품 {products.length}개
          </div>
          {products.map((product, index) => (
            <Order_product_list
              key={`${product.username}_${index}`}
              product={product}
            />
          ))}
        </div>

        <div className="purchase_btn">전체 구매금액원 결제하기</div>
        <FinalArrangement />
        <div className="cart_page_bottom_area">
          <div className="purchase_btn">전체 구매금액원 결제하기</div>
        </div>
      </div>
    </>
  );
};

export default Order;
