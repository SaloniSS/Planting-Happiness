import React, { useState } from "react";
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
  Textarea,
  Item,
  Text,
  Segment,
  Form,
  Toast,
  Root,
  Left,
} from "native-base";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const infoArray = [
  "Share your me time! Can include gardening, meditation, reading, movie recommendations and much more!",
  "Record your family/community experience! Can include board games, video calls, family projects, and much more!",
  "Log your workout routine! Activities include yoga, jogging, dancing, or things that get your heart pumping!",
  "Update your productivity! Activities include learning a new skill, finishing an assignment, or doing a chore!",
];

const AddActivity = (props) => {
  const [category, setCategory] = useState(0);
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitPost = () => {
    Toast.show({
      text: "You've earned () points!",
      buttonText: "Okay",
      position: "bottom",
    });
    setTimeout(() => {
      props.navigation.goBack();
    }, 1000);
  };

  return (
    <Root>
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
              <Form style={{ padding: 20 }}>
                <Image
                  source={{
                    uri:
                      "https://wp-rocket.me/wp-content/uploads/1/placeholder-feature-image.png",
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
                <Text>Select a category:</Text>
                <Segment>
                  <Button
                    active={category === 0}
                    onPress={() => setCategory(0)}
                    first
                  >
                    <Icon name="md-happy" />
                  </Button>
                  <Button
                    active={category === 1}
                    onPress={() => setCategory(1)}
                  >
                    <Icon name="md-contacts" />
                  </Button>
                  <Button
                    active={category === 2}
                    onPress={() => setCategory(2)}
                  >
                    <Icon name="md-bicycle" />
                  </Button>
                  <Button
                    active={category === 3}
                    onPress={() => setCategory(3)}
                    last
                  >
                    <Icon name="md-briefcase" />
                  </Button>
                </Segment>
                <Text style={{ color: "#c1c4c0", padding: 5 }}>
                  {infoArray[category]}
                </Text>
                <Textarea
                  rowSpan={4}
                  rounded
                  bordered
                  placeholder="Description"
                  onChange={textChangeHandler}
                />
              </Form>
              <Button onPress={() => submitPost()}>
                <Text>Post!</Text>
              </Button>
            </Card>
          </Content>
        </LinearGradient>
      </Container>
    </Root>
  );
};

export default AddActivity;
