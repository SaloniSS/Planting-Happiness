import React from "react";
var moment = require('moment');
import { Image } from "react-native";
import {
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
          <Thumbnail
            source={{
              uri: props.post.profilePic,
            }}
          />
          <Body>
            <Text>{props.post.userName}</Text>
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
          <Text>{moment(props.post.date_added).format('lll')}</Text>
        </Left>
        <Right>
          <Button transparent>
            <Text>{props.post.likesCount}</Text>
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
