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
      <Content padder>
        <Text>content</Text>
      </Content>
    </Container>
  );
};

export default Statistics;
