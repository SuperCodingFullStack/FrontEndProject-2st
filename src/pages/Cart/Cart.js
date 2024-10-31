import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { useOur } from "./OurContext";
import BrandSection from "./BrandSection";

function Cart() {
  //전역에서 필요한 값들을 가져오기?
  //   const { products, setProducts, calculateTotal } = useOur();
  const navigate = useNavigate();
  const [logged, setLogged] = useState(true);
  const [selectedAll, setSelectedAll] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState(new Set()); // 선택된 브랜드
  const [selectedProducts, setSelectedProducts] = useState(new Set()); // 선택된 제품
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

  // 가짜 목데이터 서버에서 받아와요.
  const cartItems = [
    // {
    //   id: "상품 id"
    //   name: "POP α 이중직 트레이닝 팬츠_Heather Grey size: 36(90)",
    //   price: 79000,
    //   mainImg: "https://example.com/product-image1.jpg",
    //   amount: 1, //수량
    //   username: "아이더", // 판매자 이름

    // },
    {
      user_username: "아이더",
      product_item_name: "POP α 이중직 트레이닝 팬츠_Heather Black size: (95)",

      quantity: 1,
      product_price: 79000,
      imageUrl: "https://example.com/product-image1.jpg",
    },
    {
      user_username: "아이더",
      product_item_name: "POP α 이중직 트레이닝 팬츠_Heather Blue size: (100)",

      quantity: 1,
      product_price: 79000,
      imageUrl: "https://example.com/product-image1.jpg",
    },
    {
      user_username: "뉴발란스",
      product_item_name: "NBPFEF752S / MT410KM5 (SILVER) size: 235",

      quantity: 1,
      product_price: 109000,
      imageUrl: "https://example.com/product-image2.jpg",
    },
    {
      user_username: "나이키",
      product_item_name: "에어 포스 1 '07 size: 270",

      quantity: 1,
      product_price: 129000,
      imageUrl: "https://example.com/product-image3.jpg",
    },
  ];

  const groupedCartItems = cartItems.reduce((acc, item) => {
    (acc[item.user_username] = acc[item.user_username] || []).push(item);
    return acc;
  }, {});

  const moveHomePage = () => {
    console.log("홈페이지 이동");
    navigate("/");
  };
  const moveLogin = () => {
    console.log("로그인페이지 이동");
    // navigate("/login");
  };

  // 체크박스관련?
  const handleBrandSelect = (brand) => {
    const newSelectedBrands = new Set(selectedBrands);
    if (newSelectedBrands.has(brand)) {
      newSelectedBrands.delete(brand);
      // 브랜드 선택 해제 시 해당 브랜드의 모든 제품도 선택 해제
      cartItems.forEach((item) => {
        if (item.user_username === brand) {
          selectedProducts.delete(item.product_item_name);
        }
      });
    } else {
      newSelectedBrands.add(brand);
      // 브랜드 선택 시 해당 브랜드의 모든 제품 선택
      cartItems.forEach((item) => {
        if (item.user_username === brand) {
          selectedProducts.add(item.product_item_name);
        }
      });
    }
    setSelectedBrands(newSelectedBrands);
    setSelectedProducts(new Set(selectedProducts));
  };

  const handleProductSelect = (productName) => {
    const newSelectedProducts = new Set(selectedProducts);
    if (newSelectedProducts.has(productName)) {
      newSelectedProducts.delete(productName);
    } else {
      newSelectedProducts.add(productName);
    }
    setSelectedProducts(newSelectedProducts);
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

      <div className={`${!logged ? "cart_no_result" : ""} `}>
        <div className={`${!logged ? "vertical_alignment" : "hide"} `}>
          <div style={{ fontWeight: "bold", marginBottom: "7px" }}>
            장바구니에 담은 상품이 없어요
          </div>
          <div style={{ color: "#666666" }}>상품을 추가해보세요.</div>
          <div className="movelogin_btn" onClick={moveLogin}>
            로그인하러 가기
          </div>
        </div>
        <div className={`${logged ? "로그인 시 출력" : "hide"}`}>
          {Object.entries(groupedCartItems).map(([brand, products], index) => (
            <BrandSection
              key={`${brand}_${index}`}
              brand={brand}
              products={products}
              isSelected={selectedBrands.has(brand)} // 브랜드 선택 상태 전달
              onBrandSelect={() => handleBrandSelect(brand)} // 브랜드 선택 처리 함수
              onProductSelect={handleProductSelect} // 제품 선택 처리 함수
              selectedProducts={selectedProducts} // 선택된 제품들 전달
            />
          ))}
        </div>
      </div>
      <div className={`${logged ? "purchase_area" : "hide"}`}>
        <div className="purchase_btn" style={{ padding: "4px" }}>
          구매하기(0개)
        </div>

        <div style={{ fontSize: "18px", fontWeight: "bold", padding: "4px" }}>
          구매금액
        </div>

        <div className="sort_amount">
          <div>상품금액</div>
          <div>0원</div>
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
            총 구매 금액
          </div>
          <div style={{ fontWeight: "bold" }}>0원</div>
        </div>
        <div className="sort_amount">
          <div>등급적립</div>
          <div style={{ color: "blue" }}>최대 0원</div>
        </div>
      </div>

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
    </div>
  );
}

export default Cart;
