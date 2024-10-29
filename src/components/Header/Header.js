import React from 'react';
import Top from './Top';
import styled from 'styled-components';
import Center from './Center';

const MainHeader = styled.header``;

const Header = () => {
  return (
    <MainHeader>
      <Top />
      <Center />
    </MainHeader>
  );
};

export default Header;
