import React, { useEffect, useState } from "react";
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
  Badge,
  Text,
  Left,
  Toast,
  Root,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
GLOBAL = require("../global");
const axios = require("axios").default;

const Redeem = (props) => {
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

  const insufficientPoints = (points) => {
    Toast.show({
      text:
        "Insufficient points! You have " +
        user.points +
        " points. You need " +
        (points - user.points) +
        " more points!",
      buttonText: "Okay",
      position: "bottom",
    });
    setTimeout(() => {}, 2000);
  };

  const showPoints = (points) => {
    Toast.show({
      text:
        "You've redeemed " +
        points +
        " points and have " +
        (user.points - points) +
        " left!",
      buttonText: "Okay",
      position: "bottom",
    });
    setTimeout(() => {}, 2000);
  };

  const updatePoints = async (newPoints) => {
    const userUrl =
      "https://hdt-node-servers.herokuapp.com/PlantingHappiness/users/" + GLOBAL.id;
    axios
      .patch(userUrl, {
        points: newPoints,
      })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const redeemPoints = (points) => {
    console.log("Redeemed" + points);
    console.log("User Points" + user.points);
    console.log("New Points before db" + (user.points - points));
    if (user.points - points > 0) {
      showPoints(points);
      updatePoints(user.points - points);
    } else {
      insufficientPoints(points);
    }
    console.log("New Points after db" + user.points);
  };

  return (
    <Root>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => props.navigation.goBack()}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>Redeem</Title>
          </Body>
          <Right>
            <Badge style={{ backgroundColor: "#8090d1" }}>
              <Text>{user.points}</Text>
            </Badge>
          </Right>
        </Header>
        <LinearGradient
          colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
          style={{ flex: 1 }}
        >
          <Content padder>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
                    }}
                  />
                </Left>
                <Body>
                  <Text>Plant Trees!</Text>
                  <Text note numberOfLines={1}>
                    You can name your very own tree
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => redeemPoints(5000)}>
                    <Text>5,000</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://www.bssnews.net/wp-content/uploads/2018/12/who-logo.jpg",
                    }}
                  />
                </Left>
                <Body>
                  <Text>A Generous Donation!</Text>
                  <Text note numberOfLines={1}>
                    The biggest gift is supporting others
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => redeemPoints(10000)}>
                    <Text>10,000</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/9df78eab33525d08d6e5fb8d27136e95/r/o/rogue-dumbbells_2.jpg",
                    }}
                  />
                </Left>
                <Body>
                  <Text>Free Workout classes!</Text>
                  <Text note numberOfLines={1}>
                    2 month subscription to the class of your choice!
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => redeemPoints(20000)}>
                    <Text>20,000</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1569858/910/607/m1/fpnw/wm0/1-.jpg?1471572641&s=55bf485b3d6d6ae028ad4a3954e62d1b",
                    }}
                  />
                </Left>
                <Body>
                  <Text>20% Discount</Text>
                  <Text note numberOfLines={1}>
                    ABC Restaurant (I know!)
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => redeemPoints(100000)}>
                    <Text>100,000</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://www.accuquote.com/wp-content/uploads/2019/08/hands-in-hands-protecting-paper-family.jpg",
                    }}
                  />
                </Left>
                <Body>
                  <Text>Insurance Discount</Text>
                  <Text note numberOfLines={1}>
                    Get a 5% discount on life insurance.
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => redeemPoints(500000)}>
                    <Text>500,000</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </LinearGradient>
      </Container>
    </Root>
  );
};

export default Redeem;
