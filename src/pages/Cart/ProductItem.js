import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedProducts } from "../../store/slice/cartSlice";

const ProductItem = ({
  product,
  isSelected,
  onProductSelect,
  handleOpenModalForSingleDelete,
  fetchCartItems, // 장바구니 항목을 다시 가져오는 함수
  userId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState(product.amount);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  // 모달 열기/닫기
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(""); // 모달을 닫을 때 에러 메시지 초기화
  };

  // 수량 변경 요청 함수
  const handleQuantityChange = async () => {
    const payload = {
      productId: product.productId,
      quantity: newQuantity,
      userIdx: userId,
    };

    console.log("수량 변경 요청 데이터:", payload); // 요청 데이터 확인

    try {
      const response = await fetch(
        `http://52.78.168.169/cart/item/${product.cartItemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        // 서버 오류 처리
        const errorData = await response.json();
        console.error("수량 업데이트 실패:", errorData);
        setErrorMessage("수량 업데이트에 실패했습니다. 다시 시도해 주세요.");
      } else {
        console.log("수량 업데이트 성공!");
        fetchCartItems(); // 장바구니 항목을 새로 고침
        closeModal(); // 수량 변경 후 모달 닫기
      }
    } catch (error) {
      console.error("요청 중 오류 발생:", error);
      setErrorMessage("수량 업데이트 요청 중 오류가 발생했습니다.");
    }
  };

  // 단일 삭제 모달 열기
  const handleDeleteClick = (product) => {
    dispatch(setSelectedProducts([product])); // Redux 상태에 선택된 제품을 업데이트
    handleOpenModalForSingleDelete(product);
  };

  return (
    <div className="전체영역 세로정렬">
      {/* 제품 표시 UI */}
      <div className="세부 조정이 필요한 영역 가로정렬">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onProductSelect(product.productId)}
        />
        <div className="cart_content_img">
          <img src={product.mainImg} alt="제품 이미지" />
        </div>
        <div className="cart_content_list">
          <div className="product_name">
            <div>{product.name}</div>
            <div
              style={{ color: "rgb(190,191,190)", cursor: "pointer" }}
              onClick={() => handleDeleteClick(product)} // 삭제 클릭 시 처리 함수 호출
            >
              ×
            </div>
          </div>
          <span style={{ color: "#6d747b" }}>{product.price}원</span>
          <span style={{ fontWeight: "bold" }}>{product.amount}개</span>
        </div>
      </div>

      {/* 옵션 변경 버튼 */}
      <div className="cart_bts">
        <button className="cart_option_btn" onClick={openModal}>
          옵션변경
        </button>
        <button className="cart_cupon_btn">쿠폰사용</button>
      </div>

      {/* 옵션 변경 모달 */}
      {isModalOpen && (
        <div className="modal">
          <h2>수량 변경</h2>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
          <button onClick={handleQuantityChange}>수량 업데이트</button>
          <button onClick={closeModal}>취소</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default ProductItem;
