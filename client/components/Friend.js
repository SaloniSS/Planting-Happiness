import React, { useEffect, useState } from "react";
var moment = require('moment');
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
            `https://earthxhacks2020.wl.r.appspot.com/users/${props.friend}`
          );
          setUser(result.data.data[0]);
        };
        fetchData();
      }, []);
    

      console.log(props.friend);
    return (
        
        <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                  user.profilePic,
                }}
              />
            </Left>
            <Body>
              <Text>{user.userName}</Text>
            </Body>
            <Right>
                <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
      );
  };
  
  export default User;