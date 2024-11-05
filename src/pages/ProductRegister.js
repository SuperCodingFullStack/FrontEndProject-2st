import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { productActions } from "../store/slice/productSlice";
import Inputs from "./Inputs";

const RegisterContainer = styled.div`
  > h2 {
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  > p {
    color: white;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
  }
  height: 100vh;
`;

const FormWrapper = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CategoryWrapper = styled.div`
  > h2 {
    color: white;
  }
  display: flex;
  flex-direction: column;
`;

const CategoryButton = styled.div`
  margin-top: 10px;
  position: relative;
  > button {
    padding: 10px;
    color: white;
    font-size: 12px;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
`;

const CategoryList = styled.ul`
  background-color: white;
  width: 150px;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  &.clicked {
    height: 150px;
  }
  > li {
    > button {
      width: 100%;
      padding: 8px;
      text-align: left;
      font-size: 14px;
      &:hover {
        background-color: #333;
        color: white;
      }
    }
  }
`;

const ProductWrapper = styled.div`
  margin-bottom: 30px;
  &.last {
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  > h2 {
    color: white;
  }
`;

const Upload = styled.div`
  margin-top: 10px;
  input {
    display: none;
  }
  > button {
    width: 100%;
    border: 1px dashed #fff;
    padding: 30px 0;
    color: white;
    opacity: 0.4;
  }
`;

const FileList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px dashed white;
  margin-top: 20px;
  gap: 10px;
  > li {
    width: 50px;
    height: 50px;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > button {
      position: absolute;
      top: -10px;
      left: calc(100% - 10px);
      font-size: 12px;
      border-radius: 50%;
      background-color: #333;
      color: #fff;
      padding: 4px;
    }
  }
`;

const Submits = styled.div`
  margin-top: 50px;
  margin: 50px auto;
  button {
    width: 150px;
    color: white;
    padding: 15px 0;
    border-radius: 20px;
    background-color: #e90024;
  }
`;

const ProductRegister = () => {
  const uploadInput = useRef(null);
  const dispatch = useDispatch();
  const CList = useSelector((state) => state.products.categoryList);
  const categoryClicked = useSelector(
    (state) => state.products.categoryClicked
  );
  const categorySelected = useSelector(
    (state) => state.products.categorySelected
  );
  const filesState = useSelector((state) => state.products.files);
  const all = useSelector((state) => state.products);

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(productActions.categoryClick());
  };

  const handleList = (e, i) => {
    e.preventDefault();
    dispatch(productActions.categoryFalse());
    dispatch(productActions.changeCategory(i));
  };

  const handleUploadButton = (e) => {
    e.preventDefault();
    uploadInput.current.click();
  };

  const handleButtonChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    files.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      dispatch(
        productActions.getFilesNames({
          id: i,
          fileNames: file.name,
          imageURL: url,
        })
      );
    });
  };

  const deleteButton = (e, state) => {
    e.preventDefault();
    dispatch(productActions.deleteFiles(state));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(all);

    // TODO: 백엔드로 보내기
  };

  return (
    <RegisterContainer>
      <h2>상품 등록하기</h2>
      <p>다음 양식에 따라 폼 양식을 작성해주세요.</p>
      <FormWrapper onSubmit={handleSubmit}>
        <CategoryWrapper>
          <h2>카테고리</h2>
          <CategoryButton>
            <button onClick={handleCategory}>
              {!categorySelected ? (
                <span>Select Category</span>
              ) : (
                <span>{categorySelected?.label}</span>
              )}
              <IoChevronDownSharp />
            </button>
            <CategoryList className={`${categoryClicked ? "clicked" : ""}`}>
              {CList.map((clist) => (
                <li key={clist.id}>
                  <button
                    onClick={(e) => {
                      handleList(e, clist.id);
                    }}
                  >
                    {clist.label}
                  </button>
                </li>
              ))}
            </CategoryList>
          </CategoryButton>
        </CategoryWrapper>
        <ProductWrapper>
          <h2>상품 이름</h2>
          <Inputs type="text" name="getProductName" states="productName" />
        </ProductWrapper>
        <ProductWrapper>
          <h2>상품 가격</h2>
          <Inputs type="number" name="getPrice" states="price" />
        </ProductWrapper>
        <ProductWrapper>
          <h2>상품 재고수</h2>
          <Inputs type="number" name="getAmount" states="amount" />
        </ProductWrapper>
        <ProductWrapper className="last">
          <h2>상품 업로드</h2>
          <Upload>
            <input
              type="file"
              id="file_upload"
              ref={uploadInput}
              onChange={handleButtonChange}
              multiple
            />
            <button className="file_button" onClick={handleUploadButton}>
              Upload Files
            </button>
            <FileList>
              {filesState.map((fileState, ii) => (
                <li key={ii}>
                  <img src={fileState.imageURL} alt="iURL" />
                  <button
                    className="close"
                    onClick={(e) => deleteButton(e, fileState.fileNames)}
                  >
                    <IoMdClose />
                  </button>
                </li>
              ))}
            </FileList>
          </Upload>
          <Submits>
            <button>등록하기</button>
          </Submits>
        </ProductWrapper>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default ProductRegister;
