import React from "react";
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Body,
    Title,
    View,
} from "native-base";
import { ImageBackground } from "react-native";
import Post from "../components/Post";
import gradientBkgd from "../assets/mainBkgd.png";

const sampleData = [
    {
        user: {
            profilePic:
                "https://i.pinimg.com/736x/bf/64/3a/bf643a1d81489917e05e664bfa579595.jpg",
            username: "btslover7878",
        },
        post: {
            likeCount: 3,
            description: "I love BTS!!!!",
            date: "04/23/2020",
            image:
                "https://www.kindpng.com/picc/m/123-1236277_jimin-bts-derp-face-png-download-bts-meme.png",
            category: "md-happy",
        },
    },
    {
        user: {
            profilePic:
                "https://pbs.twimg.com/profile_images/1244659275248656385/um8V8hhy_400x400.jpg",
            username: "btslover7878",
        },
        post: {
            likeCount: 30,
            description: "I love BTS!!!!",
            date: "04/23/2020",
            image: "https://data.whicdn.com/images/332694473/original.jpg",
            category: "md-happy",
        },
    },
];

var styles = {
    bkgdImg: {
        resizeMode: "stretch",
        width: "100%",
        height: "100%",
    },
};

const Feed = () => {
    return (
        <View>
            <Header>
                <Body>
                    <Title>Feed</Title>
                </Body>
            </Header>
            <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
                <Content padder>
                    {sampleData.map((post) => (
                        <Post user={post.user} post={post.post} />
                    ))}
                </Content>
            </ImageBackground>
        </View>
    );
};

export default Feed;
