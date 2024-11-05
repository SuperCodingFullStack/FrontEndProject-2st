import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart_bottom = () => {
  const [logged, isLogged] = useState(true);
  // const login = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  const moveHomePage = () => {
    console.log("홈페이지 이동");
    navigate("/");
  };
  return (
    <>
      <div className="cart_page_bottom_area">
        <div className={`${!logged ? "비로그인 시 출력" : "hide"}`}>
          <div className="continu_btn" onClick={moveHomePage}>
            쇼핑계속하기
          </div>
        </div>
        <div className={`${logged ? "로그인 시 출력" : "hide"} `}>
          <div className="혜택표시 영역">
            <div className="alignment">
              지금 구매하면{"   "}
              <span
                style={{ color: "blue", marginLeft: "3px", marginRight: "3px" }}
              >
                {" "}
                0% 적립 · 무료배송
              </span>{" "}
              혜택
              <div className="modal_arrow_amount">
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="purchase_btn">아래 구매하기(0개)</div>
        </div>
      </div>
    </>
  );
};

export default Cart_bottom;
