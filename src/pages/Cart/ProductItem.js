// import React from "react";
// import { useOur } from "../contexts/OurContext";

// const ProductItem = ({ product }) => {
//   //   const { toggleSelectProduct, selectedProducts } = useOur();
//   //   const isSelected = selectedProducts.has(product.id);

//   // 가짜 목데이터
//   const tests = [
//     {
//       user: "아이더",
//       productName: "POP α 이중직 트레이닝 팬츠_Heather Grey",
//       size: "36(90)",
//       quantity: 1,
//       price: 79000,
//       imageUrl: "https://example.com/product-image1.jpg",
//     },
//     {
//       user: "뉴발란스",
//       productName: "NBPFEF752S / MT410KM5 (SILVER)",
//       size: "235",
//       quantity: 1,
//       price: 109000,
//       imageUrl: "https://example.com/product-image2.jpg",
//     },
//     {
//       user: "나이키",
//       productName: "에어 포스 1 '07",
//       size: "270",
//       quantity: 1,
//       price: 129000,
//       imageUrl: "https://example.com/product-image3.jpg",
//     },
//   ];

//   const isSelected = selectedProducts.has(tests.id);

//   return (
//     <div className="product-item">
//       <input
//         type="checkbox"
//         checked={isSelected}
//         onChange={() => toggleSelectProduct(product.id)}
//       />
//       <span>{product.name}</span>
//       <a href={`/brand/${product.brand}`}>{product.brand}</a>
//       <span>
//         {product.size} / {product.quantity}개
//       </span>
//       <span>{product.price}원</span>
//       <button>옵션 변경</button>
//       <button>쿠폰 사용</button>
//     //   <button>X</button> //삭제 기능 구현 필요
//     // </div>
// //   );
// // };

// // export default ProductItem;

// // components/ProductItem.js
import React, { useState } from "react";

const ProductItem = () => {
  // 가짜 목데이터
  const tests = [
    {
      id: 1,
      user: "아이더",
      productName: "POP α 이중직 트레이닝 팬츠_Heather Grey",
      size: "36(90)",
      quantity: 1,
      price: 79000,
      imageUrl: "https://example.com/product-image1.jpg",
    },
    {
      id: 2,
      user: "뉴발란스",
      productName: "NBPFEF752S / MT410KM5 (SILVER)",
      size: "235",
      quantity: 1,
      price: 109000,
      imageUrl: "https://example.com/product-image2.jpg",
    },
    {
      id: 3,
      user: "나이키",
      productName: "에어 포스 1 '07",
      size: "270",
      quantity: 1,
      price: 129000,
      imageUrl: "https://example.com/product-image3.jpg",
    },
  ];

  // 선택된 제품들을 관리할 상태
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  // 제품 선택 토글 함수
  const toggleSelectProduct = (id) => {
    const newSelectedProducts = new Set(selectedProducts);
    if (newSelectedProducts.has(id)) {
      newSelectedProducts.delete(id);
    } else {
      newSelectedProducts.add(id);
    }
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <div className="product-list">
      {tests.map((product) => {
        const isSelected = selectedProducts.has(product.id);

        return (
          <div key={product.id} className="product-item">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelectProduct(product.id)}
            />
            <span>{product.productName}</span>
            <a href={`/brand/${product.user}`}>{product.user}</a>
            <span>
              {product.size} / {product.quantity}개
            </span>
            <span>{product.price}원</span>
            <button>옵션 변경</button>
            <button>쿠폰 사용</button>
            <button>X</button> //* 삭제 기능 구현 필요
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
