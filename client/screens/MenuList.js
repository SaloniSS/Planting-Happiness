import React from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Text,
} from "native-base";

const MenuList = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Menu</Title>
        </Body>
      </Header>
      <Content padder>
        <Button
          iconLeft
          rounded
          bordered
          onPress={() => props.navigation.navigate("Profile")}
        >
          <Icon name="md-person" />
          <Text>Edit Profile</Text>
        </Button>
        <Button
          iconLeft
          rounded
          bordered
          onPress={() => props.navigation.navigate("Statistics")}
        >
          <Icon name="md-stats" />
          <Text>Statistics</Text>
        </Button>
        <Button
          iconLeft
          rounded
          bordered
          onPress={() => props.navigation.navigate("Friends")}
        >
          <Icon name="people" />
          <Text>Friends</Text>
        </Button>
        <Button
          iconLeft
          rounded
          bordered
          onPress={() => props.navigation.navigate("Redeem")}
        >
          <Icon name="md-card" />
          <Text>Redeem Points</Text>
        </Button>
        <Button rounded onPress={() => props.navigation.navigate("Login")}>
          <Text>Log Out</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default MenuList;
