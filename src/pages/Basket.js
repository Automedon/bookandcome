import React from "react";
import { useRecoilValue } from "recoil";
import { Button, Typography } from "antd";
import Header from "../components/Header";
import Basket from "../components/Basket";
import { foodCardsAtom } from "../atoms/atom";
import { hasPositiveValue } from "../utils/utils";
import { useQuery } from "react-query";
import { fetchProducts } from "../api";

const { Text } = Typography;

const BasketPage = () => {
  const { data, isLoading } = useQuery("products", fetchProducts, {
    keepPreviousData: true,
    staleTime: Infinity,
  });
  const state = useRecoilValue(foodCardsAtom);
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
      {hasPositiveValue(state) && (
        <div
          style={{
            position: "fixed",
            bottom: 15,
            width: "300px",
          }}
        >
          <Button danger href="/complete" block shape={"round"}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
