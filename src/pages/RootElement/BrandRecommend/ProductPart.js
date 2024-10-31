import React from 'react';
import styled from 'styled-components';
import ProductComponent from './ProductComponent';

const Part = styled.div`
  padding-top: 20px;
  overflow-x: hidden;
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
  }
`;

const ProductPart = ({ data }) => {
  return (
    <Part>
      <ul>
        {data.map((datas) => (
          <ProductComponent datas={datas} key={datas.id} />
        ))}
      </ul>
    </Part>
  );
};

export default ProductPart;
