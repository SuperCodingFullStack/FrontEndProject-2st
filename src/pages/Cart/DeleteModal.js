import React from "react";
import "./Cart.css";

const DeleteModal = ({ isOpen, onClose, onConfirm, selectedProducts }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {selectedProducts.length > 0 ? (
          <p>선택한 상품을 삭제하시겠습니까?</p>
        ) : (
          <p>삭제할 상품을 선택해주세요.</p>
        )}
        {selectedProducts.length > 0 ? (
          <>
            <button onClick={onConfirm}>확인</button>
            <button onClick={onClose}>취소</button>
          </>
        ) : (
          <button onClick={onClose}>확인</button>
        )}
      </div>
    </div>
  );
};

export default DeleteModal;
