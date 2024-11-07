import React from "react";
import DetailHeader from "./DetailHeader";
import DetailBody from "./DetailBody";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ProductDetail", params.id],
    queryFn: async () =>
      await axios.get(`http://52.78.168.169/products/${params.id}`),
  });

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;

  console.log(data.data);

  return (
    <main className="m-auto relative bg-white w-full h-96">
      <DetailHeader />
      <DetailBody filteredProducts={data.data} />
    </main>
  );
};

export default Details;
