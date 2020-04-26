import React from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Text,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const ViewActivity = (props) => {
  const renderToday = () => {
    return <Text>No activities logged. Get active!</Text>;
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
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default ViewActivity;
