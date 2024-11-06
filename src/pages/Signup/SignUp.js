import SignUpHeader from "./SignUpHeader";
import SignUpBody from "./SignUpBody";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <SignUpHeader />
      <SignUpBody />
    </Container>
  );
};

const Container = styled.div``;
export default SignUp;
