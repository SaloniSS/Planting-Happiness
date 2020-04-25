import React from "react";
import { View, Image, StyleSheet } from 'react-native';

import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Form,
  Item,
  Input,
  Label,
  Text,
} from "native-base";
import { ImageBackground } from "react-native";
import CircleSlider from "../components/CircleSlider";

import gradientBkgd from "../assets/mainBkgd.png";

var styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bkgdImg: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignContent: "space-around",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
  },
};

const ProfileScreen = (props) => {
  // don't use content because it is a ScrollView
  const photoURL = props.navigation.getParam("photo_link");
  return (
    <Container >
      <Header>
        <Body>
          <Title>Edit Your Profile</Title>
        </Body>
      </Header>
      <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
      <View style={styles.container}>
        <Text>
          Welcome, {props.navigation.getParam("username")}
        </Text>
        <Image style={styles.logo} source={{uri: photoURL,}}/>
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
        </View>
      </ImageBackground>
    </Container>
  );
};

export default ProfileScreen;
