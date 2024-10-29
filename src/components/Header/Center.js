import React from 'react';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

import Inputs from './Inputs';

const Centers = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  width: 100%;
  position: relative;
`;

const Btns = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 25px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  svg {
    font-size: 18px;
  }
`;

const Center = () => {
  return (
    <Centers>
      <Inputs placeholder="노스페이스 한정 판매 및 결제 혜택" />
      <Btns>
        <MdOutlineSearch />
      </Btns>
    </Centers>
  );
};

export default Center;
