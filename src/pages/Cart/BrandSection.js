import React from "react";
import ProductItem from "./ProductItem";

const BrandSection = ({
  brand,
  products,
  isSelected,
  onBrandSelect,
  onProductSelect,
  selectedProducts,
  openModal,
  onConfirmDelete,
  isModalOpen,
  setModalOpen, // 추가된 부분
  handleOpenModalForSingleDelete,
}) => {
  console.log(products);

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
          isSelected={selectedProducts.includes(product.productId)} // 제품 선택 상태 전달
          onProductSelect={onProductSelect} // 제품 선택 처리 함수 전달
          handleOpenModalForSingleDelete={handleOpenModalForSingleDelete} // 수정된 부분
          openModal={openModal} // 모달 열기 함수 전달
          onConfirmDelete={onConfirmDelete} // 삭제 확인 함수 전달
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen} // 모달 상태 업데이트 함수 전달
        />
      ))}
    </div>
  );
};

export default BrandSection;
