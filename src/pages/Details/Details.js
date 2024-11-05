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
    queryFn: async () => await axios.get("https://fakestoreapi.com/products"),
  });

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Error</div>;

  const filteredProducts = data?.data.filter(
    (item) => item.id === parseInt(params.id)
  )[0];

  return (
    <main className="m-auto relative bg-white w-full h-96">
      <DetailHeader />
      <DetailBody filteredProducts={filteredProducts} />
    </main>
  );
};

export default Details;
