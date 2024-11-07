import React from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const MyProductList = () => {
  const navigate = useNavigate();
  const handleMyProductListPrevButton = () => navigate("/mypage");

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
          <ProductList>
            <EditButton>수정</EditButton>
            <RemoveButton>삭제</RemoveButton>
          </ProductList>
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

const ProductList = styled.li``;

const EditButton = styled.button``;

const RemoveButton = styled.button``;

export default MyProductList;
