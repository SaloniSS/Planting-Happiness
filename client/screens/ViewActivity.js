import React, { useState, useEffect } from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Card,
  Title,
  Text,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
var _ = require("lodash");

const axios = require("axios").default;
GLOBAL = require("../global");

const ViewActivity = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://earthxhacks2020.wl.r.appspot.com/posts/${GLOBAL.id}`
      );
      setPosts(result.data.data);
      console.log(_.groupBy(result.data.data, category));
    };
    fetchData();
  }, []);

  const renderToday = () => {
    if (posts.length == 0)
      return <Text>No activities logged. Get active!</Text>;
    return <Text>ayee activities!</Text>;
  };

  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Activity</Title>
        </Body>
        <Right>
          <Button
            style={{ backgroundColor: "transparent" }}
            onPress={() => props.navigation.navigate("AddActivity")}
          >
            <Icon name="ios-add-circle-outline" />
          </Button>
        </Right>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Today</Text>
          {renderToday()}
          <Card>
            <Left>
              <Icon name="md-happy" />
            </Left>
            <Body>
              <Text>me time</Text>
            </Body>
            <Right>
              <Button>
                <Icon name="md-arrow-forward" />
              </Button>
            </Right>
          </Card>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default ViewActivity;
