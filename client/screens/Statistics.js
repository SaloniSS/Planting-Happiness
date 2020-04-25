import React from "react";
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

const Statistics = (props) => {
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
        <Content padder>
          <Text>content</Text>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Statistics;
