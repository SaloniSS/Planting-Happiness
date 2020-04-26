import React, { useEffect, useState } from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Right,
  Text,
  Left,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
GLOBAL = require("../global");
const axios = require("axios").default;

import CircleSlider from "../components/CircleSlider";

const Statistics = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://earthxhacks2020.wl.r.appspot.com/users/${GLOBAL.id}`
      );
      setUser(result.data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>Statistics</Title>
        </Body>
        <Right>
          <Icon name="md-stats" />
        </Right>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Text>Percent of daily goal accomplished:</Text>
        <CircleSlider
          disabled
          value={user.points}
          //value={360 - (user.points / user.goal) * 360}
          dialRadius={100}
          dialWidth={20}
        />
      </LinearGradient>
    </Container>
  );
};

export default Statistics;
