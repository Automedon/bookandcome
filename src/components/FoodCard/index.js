import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Row, Col, Card, Image, Typography, Button } from "antd";
import { capitalize, formatterMoney } from "../../utils/utils";
import { foodCardsAtom } from "../../atoms/atom";
const { Text } = Typography;

const FoodCard = ({ food }) => {
  const { results } = food;
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
    if (results.length > 0) {
      results.map(({ masterData }) => {
        const name = masterData.current.name[`en-US`];
        return typeof state[name] !== "number"
          ? setState((val) => ({ ...val, [name]: 0 }))
          : null;
      });
    }
  }, [setState, state, results]);
  return (
    <Row gutter={[8, 8]} type="flex">
      {results.map(({ masterData: { current }, id }) => {
        const name = current.name[`en-US`];
        const srcImg = current.masterVariant.images[0].url;
        const price = current.masterVariant.prices[0].value.centAmount / 100;
        return (
          <Col span={12} key={id}>
            <Card
              hoverable
              style={{ width: 142, height: "100%", borderRadius: 15 }}
              cover={
                <Image
                  style={{
                    height: "142px",
                    width: "142px",
                    objectFit: "cover",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
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
                  <Text>{formatterMoney.format(price)}</Text>
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
          </Col>
        );
      })}
    </Row>
  );
};

export default FoodCard;
