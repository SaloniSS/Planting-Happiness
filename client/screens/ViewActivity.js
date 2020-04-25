import React from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Text,
  Button,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const ViewActivity = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Menu</Title>
        </Body>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Button
            iconLeft
            rounded
            onPress={() => props.navigation.navigate("AddActivity")}
          >
            <Icon name="ios-leaf" />
            <Text>Add Activity</Text>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default ViewActivity;
