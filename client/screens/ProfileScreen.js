import React from "react";
import { Image, StyleSheet } from "react-native";

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
    // don't use content because it is a ScrollView
    const photoURL = props.navigation.getParam("photo_link");

    const newUser = {
        googleID: GLOBAL.id,
        userName: props.navigation.getParam("username"),
        profilePic: props.navigation.getParam("photo_link"),
        points: 0,
        goal: 100,
    };

    const userDBLink = 'https://earthxhacks2020.wl.r.appspot.com/users/' + newUser.googleID ;

    axios.get(userDBLink)
      .then(function (response) {
        console.log(response.data.data.length);
        if (response.data.data.length == 0){
          //Add to db here
          axios.post("https://earthxhacks2020.wl.r.appspot.com/users", {
            googleID: newUser.googleID,
            userName: newUser.userName,
            profilePic: newUser.profilePic,
            points: newUser.points,
            goal: newUser.goal,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log("User Created");
        }
        else{
          console.log("User already exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {            
      }
    );

    return (
        <View style={styles.wrapper}>
            <Header>
                {!props.navigation.getParam("photo_link") && (
                    <Left>
                        <Button
                            transparent
                            onPress={() => props.navigation.goBack()}
                        >
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
                <Text>Welcome, {GLOBAL.username}</Text>
                <Thumbnail large source={{ uri: GLOBAL.profilePic }} />
                <Text style={styles.username}>Username</Text>
                <Text style={styles.goal}>Set your daily point goal!</Text>
                <Form style={styles.boi}>
                    <Item style={styles.circleBoi}>
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
            </ImageBackground>
        </View>
    );
};

export default ProfileScreen;
