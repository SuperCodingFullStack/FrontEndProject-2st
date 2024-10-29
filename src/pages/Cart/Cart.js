import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { useOur } from "./OurContext";

function Cart() {
  //전역에서 필요한 값들을 가져오기?
  //const { products, setProducts, calculateTotal } = useCart();
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  /*
  useEffect(() => {
    // 해당 페이지 최초 랜더링시 로그인 된 상태면? 바로 비동기적으로 제품정보들을 가져온다?
    
    const fetchData = async () => {
      const response = await fetch("/api/products"); // 예시 API
      const data = await response.json();
      setProducts(data);
    };
    if(logged){
    fetchData();
}}, [setProducts]);
  */

  const moveHomePage = () => {
    console.log("홈페이지 이동");
    navigate("/");
  };

  return (
    <div className="all">
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
        <div> 장바구니</div>
        <div
          style={{ marginRight: "4px", cursor: "pointer" }}
          onClick={moveHomePage}
        >
          {" "}
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

      <div className="장바구니 영역">
        <div className={`${!logged ? "비로그인 시 출력" : "hide"}`}>
          <li>장바구니에 담은 상품이 없어요</li>
          <li>상품을 추가해보세요.</li>
          <div className="로그인창 이동 버튼">로그인하러 가기</div>
        </div>

        <div className={`${logged ? "로그인 시 출력" : "hide"}`}></div>
      </div>

      <div className="cart_page_bottom_area">
        <div className={`${!logged ? "비로그인 시 출력" : "hide"}`}>
          <div className="(메인이동)">쇼핑계속하기</div>
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
          <div className="purchase_btn">구매하기(0개)</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
