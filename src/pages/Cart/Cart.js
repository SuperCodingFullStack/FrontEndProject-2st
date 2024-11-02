import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSelectAll,
  toggleBrand,
  toggleProduct,
  setCartItems, // 추가
} from "../../store/slice/cartSlice";
import Cart_top from "./Cart_top";
import Cart_bottom from "./Cart_bottom";
import BrandSection from "./BrandSection";
import "./Cart.css";

function Cart() {
  const [logged, isLogged] = useState(true);
  // const login = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedAll = useSelector((state) => state.cart.selectedAll); // cart 슬라이스에서 selectedAll 가져오기
  const selectedBrands = useSelector((state) => state.cart.selectedBrands);
  const selectedProducts = useSelector((state) => state.cart.selectedProducts);
  const cartItems = useSelector((state) => state.cart.cartItems); // Redux 상태에서 장바구니 아이템 가져오기
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
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

  useEffect(() => {
    // 가짜 목데이터 서버에서 받아오는 부분
    const fakeCartItems = [
      // ... (여기에 기존의 cartItems 배열)

      {
        id: 1,
        name: "POP α 이중직 트레이닝 팬츠_Heather Grey size: 36(90)",
        price: 79000,
        mainImg: "https://example.com/product-image1.jpg",
        amount: 1, //수량
        username: "아이더", // 판매자 이름
      },
      {
        id: 2,
        name: "POP α 이중직 트레이닝 팬츠_Heather Black size: (95)",
        price: 79000,
        mainImg: "https://source.unsplash.com/random/300x300",
        amount: 1,
        username: "아이더",
      },
      {
        id: 3,
        name: "POP α 이중직 트레이닝 팬츠_Heather Blue size: (100)",
        price: 79000,
        mainImg: "https://via.placeholder.com/150",
        amount: 1,
        username: "아이더",
      },
      {
        id: 4,
        name: "NBPFEF752S / MT410KM5 (SILVER) size: 235",
        price: 109000,
        mainImg: "https://example.com/product-image1.jpg",
        amount: 1,
        username: "뉴발란스",
      },
      {
        id: 5,
        name: "에어 포스 1 '07 size: 270",
        price: 129000,
        mainImg: "https://example.com/product-image3.jpg",
        amount: 1,
        username: "나이키",
      },
    ];
    dispatch(setCartItems(fakeCartItems)); // Redux 상태에 장바구니 아이템 설정
  }, [dispatch]);

  const groupedCartItems = cartItems.reduce((acc, item) => {
    (acc[item.username] = acc[item.username] || []).push(item);
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
  const handleSelectAll = () => {
    dispatch(toggleSelectAll());
  };

  const handleBrandSelect = (brand) => {
    dispatch(toggleBrand(brand));
  };

  const handleProductSelect = (productId) => {
    dispatch(toggleProduct(productId));
  };
  return (
    <div className="all">
      <Cart_top />

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
          <div className="allcheck">
            <input
              type="checkbox"
              checked={selectedAll}
              onChange={handleSelectAll}
            />
            <label htmlFor={""}>전체선택</label>
            <div>선택삭제</div>
          </div>
          {Object.entries(groupedCartItems).map(([brand, products]) => (
            <BrandSection
              key={brand}
              brand={brand}
              products={products}
              isSelected={selectedBrands.includes(brand)} // 변경
              onBrandSelect={() => handleBrandSelect(brand)}
              onProductSelect={handleProductSelect}
              selectedProducts={selectedProducts}
            />
          ))}
        </div>
      </div>
      <div className={`${logged ? "purchase_area" : "hide"}`}>
        <div className="purchase_btn" style={{ padding: "4px" }}>
          구매하기({totalQuantity}개)
        </div>

        <div style={{ fontSize: "18px", fontWeight: "bold", padding: "4px" }}>
          구매금액
        </div>

        <div className="sort_amount">
          <div>상품금액</div>
          <div>{totalPrice.toLocaleString()}원</div>
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
          <div style={{ fontWeight: "bold" }}>
            {totalPrice.toLocaleString()}원
          </div>
        </div>
        <div className="sort_amount">
          <div>등급적립</div>
          <div style={{ color: "blue" }}>최대 0원</div>
        </div>
      </div>
      <Cart_bottom />
    </div>
  );
}

export default Cart;
