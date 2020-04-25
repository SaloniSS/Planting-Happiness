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

const Friends = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>Friends</Title>
        </Body>
        <Right>
          <Icon name="people" />
        </Right>
      </Header>
      <Content padder>
        <Text>list</Text>
      </Content>
    </Container>
  );
};

export default Friends;
