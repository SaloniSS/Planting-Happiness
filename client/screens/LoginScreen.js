import React, { Component } from "react";
import * as Google from "expo-google-app-auth";
import { IOS_ID, ANDROID_ID } from "./ClientID";
import { Container, Content, Button, Text } from "native-base";

const IOS_CLIENT_ID = IOS_ID;
const ANDROID_CLIENT_ID = ANDROID_ID;

const LoginScreen = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        props.navigation.navigate("Profile", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
      return { error: true };
    }
  };

  return (
    <Container>
      <Content
        padder
        contentContainerStyle={{ justifyContent: "center", flex: 1 }}
      >
        <Button onPress={signInWithGoogle} style={{ alignSelf: "flex-start" }}>
          <Text>Login with Google</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default LoginScreen;
