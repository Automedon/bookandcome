import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Typography,
  Button,
  List,
  Carousel,
  Card,
} from "antd";
import {
  capitalize,
  formatterMoney,
  hasPositiveValue,
} from "../../utils/utils";
import { foodCardsAtom } from "../../atoms/atom";
const { Text } = Typography;

const Basket = ({ food }) => {
  const { results } = food;
  const history = useHistory();
  const [state, setState] = useRecoilState(foodCardsAtom);

  const handleAdd = useCallback(
    (name) => {
      setState((val) => ({ ...val, [name]: state[name] + 1 }));
    },
    [setState, state]
  );

  const handleSubtract = useCallback(
    (name) => {
      setState((val) => ({ ...val, [name]: state[name] - 1 }));
    },
    [setState, state]
  );
  useEffect(() => {
    if (!hasPositiveValue(state)) {
      return history.push("/popular");
    }
  }, [state, history]);

  const chosenFood = results.filter(({ masterData: { current } }) => {
    const name = current.name[`en-US`];
    return state[name];
  });

  const sumAll = chosenFood.slice().reduce((a, { masterData: { current } }) => {
    const name = current.name[`en-US`];
    const price = current.masterVariant.prices[0].value.centAmount / 100;
    return a + state[name] * price;
  }, 0);

  return (
    <>
      {" "}
      <List
        style={{ width: "300px" }}
        itemLayout="horizontal"
        dataSource={chosenFood}
        renderItem={({ masterData: { current }, id }) => {
          const name = current.name[`en-US`];
          const srcImg = current.masterVariant.images[0].url;
          const price = current.masterVariant.prices[0].value.centAmount / 100;
          return (
            <List.Item key={id}>
              <Row>
                <Image
                  style={{
                    alignSelf: "center",
                    maxWidth: "50px",
                    width: "50px",
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                  src={srcImg}
                  alt={"food"}
                />
                <Row
                  style={{ maxWidth: 200, textAlign: "left", paddingLeft: 15 }}
                  justify="start"
                >
                  <Col span={24}>
                    <Text>{capitalize(name)}</Text>
                  </Col>
                  <Col span={24}>
                    <Text>{formatterMoney.format(price)} per pcs.</Text>
                  </Col>
                  <Col span={24}>
                    {!!state[name] && (
                      <div>
                        <Button onClick={() => handleAdd(name)}>
                          <Text>+</Text>
                        </Button>
                        <Text
                          style={{
                            padding: `0 5px 0 5px`,
                          }}
                        >
                          {state[name]}
                        </Text>
                        <Button onClick={() => handleSubtract(name)}>
                          <Text>-</Text>
                        </Button>
                      </div>
                    )}
                  </Col>
                </Row>
                <Row
                  style={{
                    maxWidth: 50,
                  }}
                  align="middle"
                >
                  {!!state[name] && (
                    <Text strong>
                      {formatterMoney.format(state[name] * price)}
                    </Text>
                  )}
                </Row>
              </Row>
            </List.Item>
          );
        }}
      />
      <Carousel autoplay dotPosition="top">
        {results.map(({ masterData: { current }, id }) => {
          const name = current.name[`en-US`];
          const srcImg = current.masterVariant.images[0].url;
          const price = current.masterVariant.prices[0].value.centAmount / 100;
          return (
            <Row key={id}>
              <Card
                hoverable
                style={{ width: 300, height: 300, borderRadius: 15 }}
                cover={
                  <Image
                    style={{
                      height: "142px",
                      width: "300px",
                      objectFit: "cover",
                    }}
                    src={srcImg}
                    alt={"food"}
                  />
                }
              >
                {!!state[name] && (
                  <div>{formatterMoney.format(state[name] * price)}</div>
                )}
                <div>
                  <Text strong>{capitalize(name)}</Text>
                </div>
                {!state[name] && (
                  <Button onClick={() => handleAdd(name)}>
                    <Text>Take it {formatterMoney.format(price)}</Text>
                  </Button>
                )}
                {!!state[name] && <Text>{state[name]}</Text>}
                {!!state[name] && (
                  <div>
                    <Button onClick={() => handleAdd(name)}>
                      <Text>+</Text>
                    </Button>
                    <Button onClick={() => handleSubtract(name)}>
                      <Text>-</Text>
                    </Button>
                  </div>
                )}
              </Card>
            </Row>
          );
        })}
      </Carousel>
      {hasPositiveValue(state) && (
        <div
          style={{
            position: "fixed",
            bottom: 15,
            width: "300px",
          }}
        >
          <Button danger href="/complete" block shape={"round"}>
            Checkout | {formatterMoney.format(sumAll)}
          </Button>
        </div>
      )}
    </>
  );
};

export default Basket;
