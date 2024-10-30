// components/BrandSection.js
// import React from "react";
// import ProductItem from "./ProductItem";

// const BrandSection = ({ brand, products }) => {
//   return (
//     <div className="brand-section">
//       <h3>{brand}</h3>
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default BrandSection;

// components/BrandSection.js
import React from "react";
import ProductItem from "./ProductItem";

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

// 브랜드별 제품을 필터링하여 렌더링하는 BrandSection 컴포넌트
const BrandSection = ({ brand }) => {
  // 해당 브랜드에 맞는 제품들만 필터링
  const brandProducts = tests.filter((product) => product.user === brand);

  return (
    <div className="brand-section">
      <h3>{brand}</h3>
      {brandProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BrandSection;
