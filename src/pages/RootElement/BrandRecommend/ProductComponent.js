import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = styled.li`
  width: 13.2vw;
  a:first-child {
    width: 100%;
    height: 230px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    border-right: 1px solid rgba(0, 0, 0, 0.25);
  }
  a:last-child {
    display: block;
    background-color: #fff;
    padding: 12px 16px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin-left: -1px;
    span:first-child {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      width: 100%;
      padding-bottom: 10px;
    }
    span:last-child {
      font-weight: 5;
    }
    span {
      font-size: 14px;
    }
  }
`;

const ProductComponent = ({ datas }) => {
  return (
    <Product>
      <Link to={`/products/${datas.productId}`}>
        <img src={datas.mainImg} alt="data-image" />
      </Link>
      <Link to={`/products/${datas.productId}`}>
        <span>{datas.name}</span>
        <span>{datas.price.toLocaleString()}원</span>
      </Link>
    </Product>
  );
};

export default ProductComponent;
