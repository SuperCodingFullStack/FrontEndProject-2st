import React from 'react';
import Top from './Top';
import styled from 'styled-components';
import Center from './Center';
import { useSelector } from 'react-redux';

const MainHeader = styled.header`
  &.foots {
    display: flex;
    flex-direction: row-reverse;
    height: 55px;
    align-items: center;
    background-color: #f6f6f6;
  }
`;

const Header = () => {
  const isFootMenu = useSelector((state) => state.footMenu.isFootMenu);

  return (
    <MainHeader className={`${isFootMenu ? 'foots' : ''}`}>
      <Top />
      <Center />
    </MainHeader>
  );
};

export default Header;
