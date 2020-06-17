import React, { useEffect, useState } from "react";
var moment = require("moment");
import { Image } from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Right,
  List,
  ListItem,
  Thumbnail,
  Text,
  Segment,
  Left,
} from "native-base";
const axios = require("axios").default;

const User = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hdt-node-servers.herokuapp.com/PlantingHappiness/users/${GLOBAL.id}`
      );
      setUser(result.data.data[0]);
    };
    fetchData();
  }, []);

  const addFriend = (friend) => {
    console.log(user.friends);
    const userFriends = user.friends;
    userFriends.push(friend);
    console.log(userFriends);
    const userDBLink =
      "https://hdt-node-servers.herokuapp.com/PlantingHappiness/users/" + GLOBAL.id;

    axios
      .patch(userDBLink, {
        friends: userFriends,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ListItem avatar noBorder>
      <Left>
        <Thumbnail
          source={{
            uri:
              props.user.profilePic != ""
                ? props.user.profilePic
                : "https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
          }}
        />
      </Left>
      <Body>
        <Text>{props.user.userName}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => addFriend(props.user.googleID)}>
          <Icon name="md-add" />
        </Button>
      </Right>
    </ListItem>
  );
};

export default User;
