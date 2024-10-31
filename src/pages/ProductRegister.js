// src/pages/ProductRegister.js
import React, { useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ProductRegister = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product); // 나중에 API 연동
  };

  return (
    <RegisterContainer>
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="상품명"
          value={product.name}
          onChange={handleChange}
        />
        <Input
          name="price"
          placeholder="가격"
          value={product.price}
          onChange={handleChange}
        />
        <Input
          name="description"
          placeholder="상품 설명"
          value={product.description}
          onChange={handleChange}
        />
        <Button type="submit">등록하기</Button>
      </form>
    </RegisterContainer>
  );
};

export default ProductRegister;
