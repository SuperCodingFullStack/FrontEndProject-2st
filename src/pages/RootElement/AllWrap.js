import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapping = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  background-color: rgb(26, 27, 31);
`;

const AllWrap = () => {
  return (
    <Wrapping>
      <Header />
    </Wrapping>
  );
};

export default AllWrap;
