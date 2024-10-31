import React from 'react';

import styled from 'styled-components';

const Category = styled.ul`
  position: fixed;
  max-width: 600px;
  margin: 0 auto;
  top: 55px;
  left: 0;
  right: 0;
  height: calc(100% - 55px);
  background-color: #f6f6f6;
`;

const Menu = () => {
  return <Category>Menu</Category>;
};

export default Menu;
