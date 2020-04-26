import React, { Component } from "react";
import * as Google from "expo-google-app-auth";
import { IOS_ID, ANDROID_ID } from "./ClientID";
import { Container, Content, Button, Text, View } from "native-base";
import {
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";

const IOS_CLIENT_ID = IOS_ID;
const ANDROID_CLIENT_ID = ANDROID_ID;

import gradientBkgd from "../assets/homeBkgd.png";
import leaf from "../assets/greenLeafBoi.png";
import bottle from "../assets/waterBottle.png"; // bottleottle by khairizal from the Noun Project
import ppl from "../assets/people.png"; // Community by designer expert from the Noun Project
import prize from "../assets/prize.png"; // Present by Deemak Daksina from the Noun Project

GLOBAL = require("../global");

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

GLOBAL.id = "";
GLOBAL.username = "";
GLOBAL.profilePic = "";

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
                GLOBAL.id = result.user.id;
                GLOBAL.username = result.user.givenName;
                GLOBAL.profilePic = result.user.photoUrl;
                console.log("Login" + GLOBAL.id);
                props.navigation.navigate("Profile", {
                    username: result.user.givenName,
                    photo_link: result.user.photoUrl,
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
                        Set goals for exercise, eating healthy, productivity,
                        and so much more!
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
                    <TouchableOpacity
                        style={styles.GoogleStyle}
                        activeOpacity={0.5}
                        onPress={signInWithGoogle}
                    >
                        <Image
                            source={{
                                uri:
                                    "https://img.icons8.com/color/48/000000/google-logo.png",
                            }}
                            style={styles.ImageIconStyle}
                        />
                        <Text style={styles.TextStyle}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </Swiper>
    );
};

export default LoginScreen;
