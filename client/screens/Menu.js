import React from "react";
import { Container, Body, Content, Header, Title, Text } from "native-base";

const Menu = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Menu</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>buttons</Text>
      </Content>
    </Container>
  );
};

export default Menu;
