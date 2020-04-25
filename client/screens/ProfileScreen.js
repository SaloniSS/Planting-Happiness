import React from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from "native-base";

const ProfileScreen = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Set Up Account</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button onPress={() => props.navigation.navigate("Feed")}>
          <Text>Continue</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate("Login")}>
          <Text>Sign Out</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
