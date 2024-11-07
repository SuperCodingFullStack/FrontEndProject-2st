import React from "react";
import styled from "styled-components";
import useFetchUserInfo from "../hooks/useFetchUserInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/slice/authSlice";

const Modify = styled.div`
  background-color: #fff;
  height: 100vh;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 15px;
  font-family: "Pretendard", sans-serif;
  > h2 {
    font-weight: 500;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

const FormTarget = styled.form``;

const StyleWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Name = styled.div`
  width: 30%;
  padding: 10px 0;
  padding-left: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

const Inputer = styled.div`
  padding: 10px 0;
  padding-left: 15px;
  input {
    border: 1px solid rgba(0, 0, 0, 0.25);
    outline: none;
    font-size: 14px;
    padding: 6px;
  }
`;

const ModifyInfo = () => {
  useFetchUserInfo();

  const userInfo = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userChange = (e) => {
    dispatch(setUserInfo({ ...userInfo, userNickname: e.target.value }));
  };

  return (
    <Modify>
      <h2>기본 정보</h2>
      <FormTarget>
        <StyleWrapper>
          <Name>
            <h2>아이디</h2>
          </Name>
          <Inputer>
            <input type="text" value={userInfo.userNickname}></input>
          </Inputer>
        </StyleWrapper>
      </FormTarget>
    </Modify>
  );
};

export default ModifyInfo;
