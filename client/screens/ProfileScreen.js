import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Google from "expo-google-app-auth";

import {
  Header,
  Body,
  Title,
  Button,
  Form,
  Thumbnail,
  Item,
  Left,
  Right,
  Icon,
  Text,
  View,
} from "native-base";
import { ImageBackground } from "react-native";
import CircleSlider from "../components/CircleSlider";

import gradientBkgd from "../assets/mainBkgd.png";

import { config } from "../ClientID";

GLOBAL = require("../global");
const axios = require("axios").default;

var styles = {
  wrapper: {
    alignContent: "flex-start",
  },
  bkgdImg: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
  },
  username: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
  },
  goal: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingTop: 8,
    paddingBottom: 30,
  },
  circleBoi: {
    paddingBottom: 25,
    paddingLeft: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
  },
};

const ProfileScreen = (props) => {
  const [goal, setGoal] = useState(0);
  // don't use content because it is a ScrollView

  const updateGoal = () => {
    const userDBLink =
      "https://earthxhacks2020.wl.r.appspot.com/users/" + GLOBAL.id;

    //patch request here
    axios
      .patch(userDBLink, {
        goal: 360 - goal,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    props.navigation.navigate("Feed");
  };

  const signOutWithGoogle = async () => {
    accessToken = GLOBAL.accessToken;

    await Google.logOutAsync({ accessToken, ...config });
    console.log("Signed out");

    GLOBAL.id = "";
    GLOBAL.username = "";
    GLOBAL.profilePic = "";
    GLOBAL.userID = "";

    props.navigation.navigate("Login");
  };

  return (
    <View style={styles.wrapper}>
      <Header>
        {!props.navigation.getParam("photo_link") && (
          <Left>
            <Button transparent onPress={() => props.navigation.goBack()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
        )}
        <Body>
          <Title>Edit Profile</Title>
        </Body>
        {!props.navigation.getParam("photo_link") && (
          <Right>
            <Icon name="md-stats" />
          </Right>
        )}
      </Header>
      <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
        <Item>
          <Thumbnail large source={{ uri: GLOBAL.profilePic }} />
          <Text style={styles.username}>Welcome, {GLOBAL.username}</Text>
          {/*<Text style={styles.username}>Username</Text>*/}
        </Item>
        <Text style={styles.goal}>Set your daily point goal!</Text>
        <Form style={styles.boi}>
          <Item style={styles.circleBoi}>
            <CircleSlider
              value={100}
              onValueChange={(value) => setGoal(value)}
            />
          </Item>
          <Item style={styles.btn}>
            <Button
              //onPress={() => props.navigation.navigate("Feed")}
              onPress={() => updateGoal()}
              style={{ alignSelf: "flex-start" }}
            >
              <Text>Continue</Text>
            </Button>
            <Button
              //onPress={() => props.navigation.navigate("Login")}
              style={{ alignSelf: "flex-start" }}
              onPress={() => signOutWithGoogle()}
            >
              <Text>Sign Out</Text>
            </Button>
          </Item>
        </Form>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
