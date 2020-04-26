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
GLOBAL = require("../global");
const axios = require("axios").default;

const infoArray = [
  "Share your me time! Can include gardening, meditation, reading, movie recommendations and much more!",
  "Record your family/community experience! Can include board games, video calls, family projects, and much more!",
  "Log your workout routine! Activities include yoga, jogging, dancing, or things that get your heart pumping!",
  "Update your productivity! Activities include learning a new skill, finishing an assignment, or doing a chore!",
];

const categoryList = ["md-happy", "md-contacts", "md-bicycle", "md-briefcase"];

const AddActivity = (props) => {
  const [category, setCategory] = useState(0);
  const [enteredText, setEnteredText] = useState("");

  const submitPost = () => {
    axios
      .get(`https://earthxhacks2020.wl.r.appspot.com/users/${GLOBAL.id}`)
      .then((response) => {
        axios.post("https://earthxhacks2020.wl.r.appspot.com/posts", {
          user_id: GLOBAL.userID,
          image:
            "https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/main10TopTipsimage-x1080.jpg?itok=s8R6c7OO",
          description: enteredText,
          category: categoryList[category],
          profilePic: response.data.data[0].profilePic,
          userName: response.data.data[0].userName,
        });
      })
      .then(function (response) {
        Toast.show({
          text: "You've earned () points!",
          buttonText: "Okay",
          position: "bottom",
        });
        setTimeout(() => {
          props.navigation.goBack();
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        Toast.show({
          text: `There was an error: ${error}. Please try again later.`,
          buttonText: "Okay",
          position: "bottom",
        });
      });
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
                  onChangeText={(message) => setEnteredText(message)}
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
