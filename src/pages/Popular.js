import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../api";

export default () => {
  const { data } = useQuery("products", fetchProducts);
  console.log(data);
  return (
    <div>
      <div>Popular</div>
    </div>
  );
};
