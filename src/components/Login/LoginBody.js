import React, { useState } from "react";
import styled from "styled-components";
import { RxEyeClosed } from "react-icons/rx";
import { PiEye } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";

const LoginBody = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRemoveId = () => {
    setId("");
  };

  const handleRemovePassword = () => {
    setPassword("");
  };

  const [showPassword, setShowPassword] = useState(false);

  const clickPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container>
      <form>
        <IdBox>
          <Id
            type="text"
            required
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
          />
          {id && (
            <RemoveIdIcon onClick={handleRemoveId}>
              <IoMdCloseCircle />
            </RemoveIdIcon>
          )}
        </IdBox>

        <PasswordBox>
          <Password
            type={showPassword ? "text" : "password"}
            required
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <RemovePwIcon onClick={handleRemovePassword}>
              <IoMdCloseCircle />
            </RemovePwIcon>
          )}
          <VisibleIcon onClick={clickPasswordVisibility}>
            {showPassword ? <PiEye /> : <RxEyeClosed />}
          </VisibleIcon>
        </PasswordBox>
        <LoginBtn>로그인</LoginBtn>
      </form>
    </Container>
  );
};

// 스타일 정의
const Container = styled.div`
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const IdBox = styled.div`
  width: 35rem;
  position: relative;
  border: none;
`;

const Id = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  width: 100%;
  height: 1.9rem;
  text-align: start;
  padding-left: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 600;
    font-size: 0.88rem;
  }
`;

const RemoveIdIcon = styled.span`
  position: absolute;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const PasswordBox = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 1rem;
  border: none;
`;

const Password = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 600;
    font-size: 0.88rem;
  }
`;

const RemovePwIcon = styled.span`
  position: absolute;
  right: 1.7rem;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const VisibleIcon = styled.span`
  position: absolute;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #949494;
  font-size: 1.18rem;
`;

const LoginBtn = styled.button`
  margin-top: 1rem;
  background-color: black;
  border-radius: 0.3rem;
  border: none;
  color: white;
  width: 35.7rem;
  height: 2.7rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;
export default LoginBody;
