import React from "react";

const Success = () => {
  return (
    <div
      style={{
        height: `100vh`,
        width: 300,
      }}
    >
      <div
        style={{
          position: "relative",
          top: 20,
          width: 200,
          height: 200,
          borderRadius: 200,
          margin: `auto`,
          border: `10px solid green`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 101,
            width: 50,
            left: 39,
            height: 10,
            borderRadius: 5,
            background: "green",
            transform: `rotate(45deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 85,
            left: 62,
            width: 100,
            height: 10,
            borderRadius: 5,
            background: "green",
            transform: `rotate(-45deg)`,
          }}
        />
      </div>
      <div
        style={{
          marginTop: 100,
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Order was successfully accepted
      </div>
    </div>
  );
};

export default Success;
