import React from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Row,
  Grid,
  Form,
  Item,
  Input,
  Col,
  Label,
  Text,
} from "native-base";

import CircleSlider from "../components/CircleSlider";

const ProfileScreen = (props) => {
  // don't use content because it is a ScrollView
  return (
    <Container>
      <Header>
        <Body>
          <Title>Edit Your Profile</Title>
        </Body>
      </Header>
      <Form>
        <Item floatingLabel last>
          <Label>Username</Label>
          <Input />
        </Item>
        <Label>Set a daily point goal:</Label>
        <Item>
          <CircleSlider
            startGradient="#B5EAD7"
            endGradient="#C7CEEA"
            value={100}
            onValueChange={(value) => console.log(value)}
          />
        </Item>
        <Item>
          <Button
            onPress={() => props.navigation.navigate("Feed")}
            style={{ alignSelf: "flex-start" }}
          >
            <Text>Continue</Text>
          </Button>
          <Button
            onPress={() => props.navigation.navigate("Login")}
            style={{ alignSelf: "flex-start" }}
          >
            <Text>Sign Out</Text>
          </Button>
        </Item>
      </Form>
    </Container>
  );
};

export default ProfileScreen;
