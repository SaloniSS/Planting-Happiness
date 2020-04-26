import React, { useEffect, useState } from "react";
import * as Google from "expo-google-app-auth";
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
import { LinearGradient } from "expo-linear-gradient";

import { config } from "../ClientID";

GLOBAL = require("../global");
const axios = require("axios").default;

const MenuList = (props) => {
  const [points, setPoints] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://earthxhacks2020.wl.r.appspot.com/users/${GLOBAL.id}`
      );
      setPoints(result.data.data[0].points);
    };
    fetchData();
  }, []);

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
    <Container>
      <Header>
        <Body>
          <Title>Menu</Title>
        </Body>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          {points != -1 && (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              You have {points} points!
            </Text>
          )}
          <Content padder />
          <Button
            iconLeft
            rounded
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Icon name="md-person" />
            <Text>Edit Profile</Text>
          </Button>
          <Content padder />
          <Button
            iconLeft
            rounded
            onPress={() => props.navigation.navigate("Statistics")}
          >
            <Icon name="md-stats" />
            <Text>Statistics</Text>
          </Button>
          <Content padder />
          <Button
            iconLeft
            rounded
            onPress={() => props.navigation.navigate("Friends")}
          >
            <Icon name="people" />
            <Text>Friends</Text>
          </Button>
          <Content padder />
          <Button
            iconLeft
            rounded
            onPress={() => props.navigation.navigate("Redeem")}
          >
            <Icon name="md-card" />
            <Text>Redeem Points</Text>
          </Button>
          <Content padder />
          <Button rounded onPress={() => signOutWithGoogle()}>
            <Text>Log Out</Text>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default MenuList;
