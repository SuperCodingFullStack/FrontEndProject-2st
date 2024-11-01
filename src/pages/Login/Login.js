import React from "react";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <LoginHeader />
      <LoginBody />
    </Container>
  );
};

const Container = styled.div``;
export default Login;
