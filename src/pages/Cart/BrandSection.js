import React from "react";
import ProductItem from "./ProductItem";

const BrandSection = ({
  brand,
  products,
  isSelected,
  onBrandSelect,
  onProductSelect,
  selectedProducts,
}) => {
  return (
    <div className="brand-section">
      <div className="brand_name_area">
        <input
          type="checkbox"
          id={brand}
          checked={isSelected}
          onChange={onBrandSelect} // 브랜드 체크박스 상태 변경 처리
        />
        <label htmlFor={brand}>{brand}</label>
        <a href={`/brand/${brand}`} className="brandShop">
          브랜드 숍
        </a>
      </div>
      {products.map((product, index) => (
        <ProductItem
          key={`${product.username}_${index}`}
          product={product}
          isSelected={selectedProducts.includes(product.id)} // 제품 선택 상태 전달
          onProductSelect={onProductSelect} // 제품 선택 처리 함수 전달
        />
      ))}
    </div>
  );
};

export default BrandSection;
