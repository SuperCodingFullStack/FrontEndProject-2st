import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Order.css";
import Delivery_destination from "./Delivery_destination";
import Order_Navigation from "./Order_Navigation";
import Order_product_list from "./Order_product_list";
import FinalArrangement from "./FinalArrangement";
import { fetchUserInfo } from "../../api/user";

const Order = () => {
  // Redux 상태에서 selectedProducts를 가져옴
  const selectedProducts = useSelector((state) => state.cart.selectedProducts);
  console.log(selectedProducts);

  const [userId, setUserId] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const token = useSelector((state) => state.auth.token);
  console.log("여기 아이디 주소 폰", userId, address, phone);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (token) {
          const userInfo = await fetchUserInfo(token);
          console.log("user info:", userInfo);
          setUserId(userInfo.userId); // userId 상태에 설정
          setAddress(userInfo.address);
          setPhone(userInfo.phone);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (token) {
      getUserInfo();
    }
  }, [token]);

  return (
    <div className="order_all">
      <Order_Navigation />
      <Delivery_destination phone={phone} address={address} />
      <div className="Order_product_details">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          주문상품 {selectedProducts.length}개
        </div>
        {selectedProducts.map((product, index) => (
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
  );
};

export default Order;
