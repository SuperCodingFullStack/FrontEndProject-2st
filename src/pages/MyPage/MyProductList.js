import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "../../api/user";

const MyProductList = () => {
  const navigate = useNavigate();
  const handleMyProductListPrevButton = () => navigate("/mypage");

  const [products, setProducts] = useState([]); // API 데이터 상태
  const [userId, setUserId] = useState(null);
  const token = useSelector((state) => state.auth.token);

  // 사용자 정보를 fetch하고 userId를 상태에 설정
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (token) {
          const userInfo = await fetchUserInfo(token);
          console.log("user info:", userInfo);
          setUserId(userInfo.userId); // userId 상태에 설정
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (token) {
      getUserInfo();
    }
  }, [token]);

  // 제품 목록을 fetch
  useEffect(() => {
    const fetchProducts = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://52.78.168.169/products/user/${userId}/active`
          );
          setProducts(response.data); // 받아온 데이터를 상태에 저장
          console.log("respondata:", response);
        } catch (error) {
          console.error("Error fetching product list:", error);
        }
      } else {
        console.log("userID:", userId);
      }
    };
    fetchProducts();
  }, [userId]);

  return (
    <Container>
      <Header>
        <BackButton onClick={handleMyProductListPrevButton}>
          <SlArrowLeft />
        </BackButton>
        <Title>내가 등록한 상품 리스트</Title>
      </Header>
      <Body>
        <ProductListContainer>
          {products.map((product, index) => (
            <ProductList key={index}>
              <ProductImg src={product.imgs[0]} alt={product.itemName} />
              <ProductName>{product.itemName}</ProductName>
              <ProductPrice>{product.price}원</ProductPrice>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductAmount>수량: {product.amount}</ProductAmount>
              <EditButton>수정</EditButton>
              <RemoveButton>삭제</RemoveButton>
            </ProductList>
          ))}
        </ProductListContainer>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #eaeaea;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.3rem;
  background-color: #f5f5f5;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 0.4rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const Body = styled.div``;

const ProductListContainer = styled.div``;

const ProductList = styled.div``;

const ProductImg = styled.img``;

const ProductName = styled.div``;

const ProductPrice = styled.div``;

const ProductCategory = styled.div``;

const ProductAmount = styled.div``;

const EditButton = styled.button``;

const RemoveButton = styled.button``;

export default MyProductList;
