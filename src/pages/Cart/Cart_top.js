import React from "react";
import { useNavigate } from "react-router-dom";

const Cart_top = () => {
  const navigate = useNavigate();
  const moveHomePage = () => {
    console.log("홈페이지 이동");
    navigate("/");
  };

  return (
    <>
      <div className="cart_page_top_area">
        <div
          style={{ marginLeft: "3px", cursor: "pointer" }}
          onClick={moveHomePage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div style={{ fontSize: "16px", marginRight: "450px" }}> 장바구니</div>
        <div
          style={{ marginRight: "4px", cursor: "pointer" }}
          onClick={moveHomePage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Cart_top;
