import React, { useState } from "react";
import styled from "styled-components";
import { RxEyeClosed } from "react-icons/rx";
import { PiEye } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import useFormFields from "../hooks/useFormFields";
import useLogin from "../hooks/useLogin";

const LoginBody = () => {
  const { error, handleLogin } = useLogin();

  const {
    id,
    password,
    showPassword,
    handleIdChange,
    handlePasswordChange,
    handleRemoveId,
    handleRemovePassword,
    clickPasswordVisibility,
    handleSignUpClick,
  } = useFormFields();

  const [isIdValid, setIsIdValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleLoginClick = (e) => {
    e.preventDefault();
    const idValid = id !== "";
    const passwordValid = password !== "";

    setIsIdValid(idValid);
    setIsPasswordValid(passwordValid);

    if (idValid && passwordValid) {
      handleLogin(id, password); // Login.js의 handleLogin 호출
    }
  };

  return (
    <Container>
      <Form>
        <IdBox>
          <Id
            type="text"
            required
            placeholder="아이디"
            value={id}
            onChange={(e) => {
              handleIdChange(e);
              if (!isIdValid) setIsIdValid(true);
            }}
            isValid={isIdValid}
          />
          {id && (
            <RemoveIdIcon onClick={handleRemoveId}>
              <IoMdCloseCircle />
            </RemoveIdIcon>
          )}
          {!isIdValid && (
            <IdErrorMessage>아이디를 입력해주세요.</IdErrorMessage>
          )}
        </IdBox>

        <PasswordBox>
          <Password
            type={showPassword ? "text" : "password"}
            required
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              handlePasswordChange(e);
              if (!isPasswordValid) setIsPasswordValid(true);
            }}
            isValid={isPasswordValid}
          />
          {password && (
            <RemovePwIcon onClick={handleRemovePassword}>
              <IoMdCloseCircle />
            </RemovePwIcon>
          )}
          <VisibleIcon
            isValid={isPasswordValid}
            onClick={clickPasswordVisibility}
          >
            {showPassword ? <PiEye /> : <RxEyeClosed />}
          </VisibleIcon>
          {!isPasswordValid && (
            <PasswordErrorMessage>
              비밀번호를 입력해주세요.
            </PasswordErrorMessage>
          )}
        </PasswordBox>

        <LoginBtn onClick={handleLoginClick}>로그인</LoginBtn>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SignUpContainer>
          <Message>가입만 해도 즉시 20% 할인</Message>
          <SignUpBtn onClick={handleSignUpClick}>회원가입</SignUpBtn>
        </SignUpContainer>
      </Form>
    </Container>
  );
};

// 스타일 정의
const Container = styled.div`
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Form = styled.form`
  width: 100%;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdBox = styled.div`
  width: 35rem;
  position: relative;
  border: none;
`;

const Id = styled.input`
  border: 1px solid ${({ isValid }) => (isValid ? "#e0e0e0" : "#f40103")};
  border-radius: 0.3rem;
  width: 100%;
  height: 2.3rem;
  text-align: start;
  padding-left: 0.5rem;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? "gray" : "#f40103")};
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 0.88rem;
  }
`;

const RemoveIdIcon = styled.span`
  position: absolute;
  right: 0.7rem;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const IdErrorMessage = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #f40103;
`;

const PasswordBox = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 1rem;
  border: none;
`;

const Password = styled.input`
  border: 1px solid ${({ isValid }) => (isValid ? "#e0e0e0" : "#f40103")};
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 2.3rem;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? "gray" : "#f40103")};
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 0.88rem;
  }
`;

const RemovePwIcon = styled.span`
  position: absolute;
  right: 2.5rem;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const VisibleIcon = styled.span`
  position: absolute;
  right: 0.7rem;
  top: ${({ isValid }) => (isValid ? "55%" : "40%")};
  transform: translateY(-50%);
  cursor: pointer;
  color: #949494;
  font-size: 1.18rem;
`;

const PasswordErrorMessage = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #f40103;
`;

const LoginBtn = styled.button`
  margin-top: 1rem;
  background-color: black;
  border-radius: 0.3rem;
  border: none;
  color: white;
  width: 35rem;
  height: 2.9rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #f40103;
`;

const SignUpContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Message = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 1rem;
`;
const SignUpBtn = styled.button`
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
`;
export default LoginBody;
