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

const Redeem = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>Redeem Points</Title>
        </Body>
        <Right>
          <Icon name="md-card" />
        </Right>
      </Header>
      <Content padder>
        <Text>content</Text>
      </Content>
    </Container>
  );
};

export default Redeem;
