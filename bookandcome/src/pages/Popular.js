import React from "react";
import { useQuery } from "react-query";
import FoodCard from "../components/FoodCard";
import { Button, Spin } from "antd";
import { fetchProducts } from "../api";
import Header from "../components/Header";
import { useRecoilValue } from "recoil";
import { foodCardsAtom } from "../atoms/atom";
import { hasPositiveValue } from "../utils/utils";

const Popular = () => {
  const { data, isLoading } = useQuery(["products"], fetchProducts);
  const state = useRecoilValue(foodCardsAtom);
  if (isLoading)
    return (
      <Spin tip="Fetching Products">
        <div>Loading..</div>
      </Spin>
    );

  return (
    <div
      style={{
        height: "100vh",
        maxWidth: 300,
        margin: "auto",
      }}
    >
      <Header />
      <FoodCard food={data} />
      {hasPositiveValue(state) && (
        <div
          style={{
            position: "fixed",
            bottom: 15,
            width: "300px",
          }}
        >
          <Button danger href="/basket" block shape={"round"}>
            Complete Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default Popular;
