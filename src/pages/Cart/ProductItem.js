import React from "react";

const ProductItem = ({ product, isSelected, onProductSelect }) => {
  return (
    <div className="전체영역 세로정렬">
      <div className="세부 조정이 필요한 영역 가로정렬">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onProductSelect(product.id)} // 제품 체크박스 상태 변경 처리
        />
        <div className="cart_content_img">
          <img src={product.mainImg} alt="제품 이미지" />
        </div>
        <div className="cart_content_list">
          <div className="product_name">
            <div>{product.name}</div>
            <div style={{ color: "rgb(190,191,190)", cursor: "pointer" }}>
              ×
            </div>{" "}
            {/* 삭제 기능 구현 필요 */}
          </div>
          <span style={{ color: "#6d747b" }}>{product.price}원</span>
          <span style={{ fontWeight: "bold" }}>{product.amount}개</span>
        </div>
      </div>
      <div className="cart_bts">
        <button className="cart_option_btn">옵션변경</button>
        <button className="cart_cupon_btn">쿠폰사용</button>
      </div>
    </div>
  );
};

export default ProductItem;
