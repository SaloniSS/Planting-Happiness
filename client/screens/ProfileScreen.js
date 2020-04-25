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
        <Text>Set a daily point goal:</Text>
        <Item>
          <CircleSlider
            startGradient="#B5EAD7"
            endGradient="#C7CEEA"
            value={100}
            onValueChange={(value) => console.log(value)}
          />
        </Item>
      </Form>
      <Button
        onPress={() => props.navigation.navigate("Feed")}
        style={{ alignSelf: "flex-start" }}
      >
        <Text>Continue</Text>
      </Button>
      <Button
        title="Sign out"
        onPress={() => props.navigation.navigate("Login")}
      />
    </Container>
  );
};

export default ProfileScreen;
