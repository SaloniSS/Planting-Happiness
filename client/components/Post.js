import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

const Post = (props) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: props.user.profilePic }} />
          <Body>
            <Text>{props.user.username}</Text>
          </Body>
        </Left>
        <Right>
          <Icon name={props.post.category} />
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: props.post.image }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Text>{props.post.date}</Text>
        </Left>
        <Right>
          <Button transparent>
            <Text>{props.post.likeCount}</Text>
            <Icon name="md-thumbs-up" />
          </Button>
        </Right>
      </CardItem>
      <CardItem>
        <Text>{props.post.description}</Text>
      </CardItem>
    </Card>
  );
};

export default Post;
