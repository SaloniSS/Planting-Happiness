import React, { Component } from "react";
import * as Google from "expo-google-app-auth";
//import { IOS_ID, ANDROID_ID } from "./ClientID";
import { Thumbnail, Button, Text, View } from "native-base";
import { ImageBackground, Image } from "react-native";
import Swiper from "react-native-swiper";

//const IOS_CLIENT_ID = IOS_ID;
//const ANDROID_CLIENT_ID = ANDROID_ID;

import gradientBkgd from "../assets/homeBkgd.png";
import leaf from "../assets/greenLeafBoi.png";
import bottle from "../assets/waterBottle.png"; // bottleottle by khairizal from the Noun Project
import ppl from "../assets/people.png"; // Community by designer expert from the Noun Project
import prize from "../assets/prize.png"; // Present by Deemak Daksina from the Noun Project

import { config } from "../ClientID";

GLOBAL = require("../global");
const axios = require("axios").default;

var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    /*justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",*/
    //backgroundColor: '#b5ead7'
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  defaultDesc: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    padding: 8,
  },
  lwrDesc: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    paddingBottom: 15,
  },
  bkgdImg: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  leafImg: {
    width: 70,
    height: 85,
  },
  bottleImg: {
    width: 85,
    height: 166,
  },
  pplImg: {
    width: 202,
    height: 95,
  },
  prizeImg: {
    width: 143,
    height: 100,
  },
  GoogleStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderWidth: 1,
    borderColor: "#4285F4",
    // height: 40,
    //width: fit-content,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    backgroundColor: "#FFFFFF",
  },
  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
};

const LoginScreen = (props) => {
  GLOBAL.id = "";
  GLOBAL.username = "";
  GLOBAL.profilePic = "";
  GLOBAL.userID = "";

  const newProfile = () => {
    const newUser = {
      googleID: GLOBAL.id,
      userName: GLOBAL.username,
      profilePic: GLOBAL.userID,
      points: 0,
      goal: 0,
    };
  
    const userDBLink =
      "https://earthxhacks2020.wl.r.appspot.com/users/" + newUser.googleID;
  
    axios
      .get(userDBLink)
      .then(function (response) {
        //console.log(response.data.data[0]._id);
        if (response.data.data.length == 0) {
          //Add to db here
          axios
            .post("https://earthxhacks2020.wl.r.appspot.com/users", {
              googleID: newUser.googleID,
              userName: newUser.userName,
              profilePic: newUser.profilePic,
              points: newUser.points,
              goal: newUser.goal,
            })
            .then(function (response) {
              console.log(response);
              GLOBAL.userID = response.data.data._id;
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log("User Created");
        } else {
          console.log("User already exists");
          GLOBAL.userID = response.data.data[0]._id;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }

  const signInWithGoogle = async () => {
    try {
      // const result = await Google.logInAsync({
      //   iosClientId: IOS_CLIENT_ID,
      //   androidClientId: ANDROID_CLIENT_ID,
      //   scopes: ["profile", "email"],
      // });

      const { type, accessToken , user } = await Google.logInAsync(config);

      if (type === "success") {
        console.log("LoginScreen.js.js 21 | ", user.givenName);

        GLOBAL.id = user.id;
        GLOBAL.username = user.givenName;
        GLOBAL.profilePic = user.photoUrl;
        GLOBAL.accessToken = accessToken;

        newProfile();

        props.navigation.navigate("Profile", {
          username: user.givenName,
          photo_link: user.photoUrl,
        }); //after Google login redirect to Profile
        return accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
      return { error: true };
    }
  };

  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
      <View testID="slide0" style={styles.slide}>
        <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
          <Image source={leaf} style={styles.leafImg}></Image>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={styles.heading}>Planting Happiness ♥</Text>
        </ImageBackground>
      </View>
      <View testID="slide1" style={styles.slide}>
        <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
          <Image source={bottle} style={styles.bottleImg}></Image>
          <Text style={styles.defaultDesc}>
            Set goals for exercise, eating healthy, productivity, and so much
            more!
          </Text>
        </ImageBackground>
      </View>
      <View testID="slide2" style={styles.slide}>
        <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
          <Image source={ppl} style={styles.pplImg}></Image>
          <Text style={styles.defaultDesc}>
            Connect with peers and share your activities!
          </Text>
        </ImageBackground>
      </View>
      <View testID="slide3" style={styles.slide}>
        <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
          <Image source={prize} style={styles.prizeImg}></Image>
          <Text style={styles.lwrDesc}>
            Gain points to redeem for cool prizes!
          </Text>
          <Button style={styles.GoogleStyle} onPress={signInWithGoogle}>
            <Thumbnail
              small
              source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png",
              }}
              style={{ marginLeft: 9 }}
            />
            <Text style={styles.TextStyle}>Sign in with Google</Text>
          </Button>
        </ImageBackground>
      </View>
    </Swiper>
  );
};

export default LoginScreen;
