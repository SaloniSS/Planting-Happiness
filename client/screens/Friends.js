import React from "react";
import { Container, Body, Content, Header, Title, Text } from "native-base";

const Friends = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Friends</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>friends content</Text>
      </Content>
    </Container>
  );
};

export default Friends;
