import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Row, Col, Card, Image, Typography, Button, List } from "antd";
import { capitalize, formatterMoney } from "../../utils/utils";
import { foodCardsAtom } from "../../atoms/atom";
const { Text } = Typography;

const Basket = ({ food }) => {
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
  const chosenFood = results.filter(({ masterData: { current } }) => {
    const name = current.name[`en-US`];
    return state[name];
  });

  return (
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
                  <Text bold>{capitalize(name)}</Text>
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
            </Row>
          </List.Item>
        );
      }}
    />
    // <Row gutter={[8, 8]} type="flex">
    //   {results.map(({ masterData: { current }, id }) => {
    //     const name = current.name[`en-US`];
    //     const srcImg = current.masterVariant.images[0].url;
    //     const price = current.masterVariant.prices[0].value.centAmount / 100;
    //     return (
    //       <Col span={12} key={id}>
    //         <Card
    //           hoverable
    //           style={{ width: 142, height: "100%", borderRadius: 15 }}
    //           cover={
    //             <Image
    //               style={{
    //                 height: "142px",
    //                 width: "142px",
    //                 objectFit: "cover",
    //                 borderTopRightRadius: 15,
    //                 borderTopLeftRadius: 15,
    //               }}
    //               src={srcImg}
    //               alt={"food"}
    //             />
    //           }
    //         >
    //           {!!state[name] && (
    //             <div>{formatterMoney.format(state[name] * price)}</div>
    //           )}
    //           <div>
    //             <Text strong>{capitalize(name)}</Text>
    //           </div>
    //           {!state[name] && (
    //             <Button onClick={() => handleAdd(name)}>
    //               <Text>{formatterMoney.format(price)}</Text>
    //             </Button>
    //           )}
    //           {!!state[name] && <Text>{state[name]}</Text>}
    //           {!!state[name] && (
    //             <div>
    //               <Button onClick={() => handleAdd(name)}>
    //                 <Text>+</Text>
    //               </Button>
    //               <Button onClick={() => handleSubtract(name)}>
    //                 <Text>-</Text>
    //               </Button>
    //             </div>
    //           )}
    //         </Card>
    //       </Col>
    //     );
    //   })}
    // </Row>
  );
};

export default Basket;
