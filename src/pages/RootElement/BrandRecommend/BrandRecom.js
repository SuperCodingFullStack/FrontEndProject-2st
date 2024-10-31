import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ProductPart from './ProductPart';

const BrandRecom = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await axios.get('https://fakestoreapi.com/products'),
  });

  if (isLoading) return <div>isLoading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <section
      className="pt-5"
      style={{
        backgroundColor: '#f5f5f5',
        height: '1000px',
        paddingLeft: '15px',
        paddingRight: '15px',
      }}
    >
      <h2 className="font-medium">눈에 띄는 입점 브랜드</h2>
      <ProductPart data={data.data} />
    </section>
  );
};

export default BrandRecom;
