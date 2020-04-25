import React from "react";
import { Container, Body, Content, Header, Title, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const AddActivity = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Add Activity</Title>
        </Body>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Text>ok got dis far omg</Text>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default AddActivity;
