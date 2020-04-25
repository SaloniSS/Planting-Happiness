import React from "react";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Button,
  Card,
  Icon,
  Right,
  Text,
  Segment,
  Form,
  Left,
} from "native-base";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddActivity = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add Activity</Title>
        </Body>
        <Right>
          <Icon name="ios-leaf" />
        </Right>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Card>
            <Form>
              <Image
                source={{
                  uri:
                    "https://wp-rocket.me/wp-content/uploads/1/placeholder-feature-image.png",
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Segment>
                <Button first>
                  <Icon name="md-happy" />
                </Button>
                <Button>
                  <Icon name="md-contacts" />
                </Button>
                <Button>
                  <Icon name="md-bicycle" />
                </Button>
                <Button>
                  <Icon name="md-flower" />
                </Button>
                <Button last>
                  <Icon name="md-briefcase" />
                </Button>
              </Segment>
            </Form>
          </Card>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default AddActivity;
