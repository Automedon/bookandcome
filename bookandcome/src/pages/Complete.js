import React, { useState } from "react";
import Cards from "react-credit-cards";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import { Typography, Radio, Input, TimePicker, DatePicker, Button } from "antd";
import Header from "../components/Header";
const { Text } = Typography;

const Complete = () => {
  const history = useHistory();
  const [{ focus }, setState] = useState({ focus: "" });
  const { control, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
    },
  });
  const { errors } = formState;
  const handleInputFocus = (e) => {
    setState({ focus: e.target.name });
  };

  const submit = () => {
    history.push("/success");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: 300,
        maxWidth: 300,
        margin: "auto",
        textAlign: "left",
      }}
    >
      <Header />
      <div>
        <Text
          style={{
            color: "gray",
            fontWeight: 700,
          }}
        >
          Checkout
        </Text>
      </div>
      <form onSubmit={handleSubmit}>
        <Controller
          name="place"
          control={control}
          defaultValue={"Here"}
          render={({ field }) => (
            <Radio.Group {...field} style={{ marginTop: 15 }}>
              <Radio.Button value="Here">Here</Radio.Button>
              <Radio.Button value="Takeout">Takeout</Radio.Button>
            </Radio.Group>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              {" "}
              <Input
                {...field}
                style={{ marginTop: 15 }}
                type={"email"}
                placeholder="Email example@mail.com"
                allowClear
              />
              {!!errors.email && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              <Input
                {...field}
                type={"tel"}
                placeholder="Phone Number"
                allowClear
              />
              {!!errors.phone && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />

        <Controller
          name="time"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              <TimePicker
                style={{
                  width: "100%",
                }}
                {...field}
              />
              {!!errors.time && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="date"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                {...field}
              />
              {!!errors.date && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />

        <Controller
          name="number"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              {" "}
              <Input
                maxLength={16}
                {...field}
                onFocus={handleInputFocus}
                placeholder="Card Number"
                allowClear
              />
              {!!errors.number && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              {" "}
              <Input
                maxLength={20}
                type={"text"}
                {...field}
                onFocus={handleInputFocus}
                placeholder="Card Holder Name"
                allowClear
              />{" "}
              {!!errors.name && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="expiry"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginBottom: 25,
              }}
            >
              <Input
                maxLength={4}
                {...field}
                onFocus={handleInputFocus}
                placeholder="Expiry"
                allowClear
              />{" "}
              {!!(errors && errors.expiry) && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="cvc"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <div
              style={{
                position: "relative",
                marginTop: 15,
                marginBottom: 25,
              }}
            >
              <Input
                maxLength={3}
                {...field}
                onFocus={handleInputFocus}
                placeholder="cvc"
                allowClear
              />
              {!!(errors && errors.cvc) && (
                <div style={{ position: "absolute", color: "red" }}>
                  required
                </div>
              )}
            </div>
          )}
        />

        <Cards
          preview={true}
          cvc={watch("cvc")}
          expiry={watch("expiry")}
          focused={focus}
          name={watch("name")}
          number={watch("number")}
        />
        <Button
          onClick={handleSubmit(submit)}
          style={{ marginLeft: 110, marginTop: 15 }}
          type="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Complete;
