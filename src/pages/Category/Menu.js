import React, { useState } from 'react';

import styled from 'styled-components';
import BigMenu from './BigMenu';
import BottomMenu from './BottomMenu';

const Category = styled.div`
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
  const [idx, setIdx] = useState(0);

  return (
    <Category>
      <BigMenu idx={idx} setIdx={setIdx} />
      <BottomMenu idx={idx} setIdx={setIdx} />
    </Category>
  );
};

export default Menu;
