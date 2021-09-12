import React from "react";
import { Typography } from "antd";
import Header from "../components/Header";
import Basket from "../components/Basket";
import { useQuery } from "react-query";
import { fetchProducts } from "../api";

const { Text } = Typography;

const BasketPage = () => {
  const { data, isLoading } = useQuery("products", fetchProducts, {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading..</div>;

  return (
    <div
      style={{
        height: "100vh",
        maxWidth: 300,
        margin: "auto",
      }}
    >
      <Header />
      <div
        style={{
          textAlign: "left",
        }}
      >
        <Text
          style={{
            color: "gray",
            fontWeight: 700,
          }}
        >
          Basket
        </Text>
      </div>

      <Basket food={data} />
    </div>
  );
};

export default BasketPage;
