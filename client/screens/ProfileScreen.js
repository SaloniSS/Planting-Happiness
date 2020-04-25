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

import CircleSlider from "../components/CircleSlider";

const ProfileScreen = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Set Up Account</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel last>
            <Label>Username</Label>
            <Input />
          </Item>
          <Text>Set a daily point goal:</Text>
          <Item>
            <CircleSlider
              startGradient="#01fffc"
              endGradient="#a200ff"
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
      </Content>
    </Container>
  );
};

export default ProfileScreen;
