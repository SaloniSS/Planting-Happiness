import React, { useState, useEffect } from "react";
import {
  Container,
  Body,
  Content,
  Header,
  ListItem,
  Title,
  Text,
  Card,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
var _ = require("lodash");

const axios = require("axios").default;
GLOBAL = require("../global");

const ViewActivity = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hdt-node-servers.herokuapp.com/PlantingHappiness/posts/${GLOBAL.userID}`
      );
      setPosts(result.data.data);
    };
    fetchData();
  }, []);

  const getCount = (category) => {
    if (posts.length === 0) return 0;
    const result = _.groupBy(posts, "category");
    if (result[category]) return result[category].length;
    return 0;
  };

  const renderToday = () => {
    if (posts.length == 0)
      return <Text>No activities logged. Get active!</Text>;
    return <Text>Nice job!</Text>;
  };

  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Activity</Title>
        </Body>
        <Right>
          <Button
            style={{ backgroundColor: "transparent" }}
            onPress={() => props.navigation.navigate("AddActivity")}
          >
            <Icon name="ios-add-circle-outline" />
          </Button>
        </Right>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Today</Text>
          {renderToday()}
          <Card style={styles.card}>
            <ListItem noBorder icon style={styles.listItem}>
              <Left>
                <Icon style={{ fontSize: 40, width: 40 }} name="md-happy" />
              </Left>
              <Body>
                <Text>{getCount("md-happy")} activities</Text>
              </Body>
              <Right>
                <Button style={{ backgroundColor: "transparent" }}>
                  <Icon name="md-arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem noBorder icon style={styles.listItem}>
              <Left>
                <Icon style={{ fontSize: 40, width: 40 }} name="md-contacts" />
              </Left>
              <Body>
                <Text>{getCount("md-contacts")} activities</Text>
              </Body>
              <Right>
                <Button style={{ backgroundColor: "transparent" }}>
                  <Icon name="md-arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem noBorder icon style={styles.listItem}>
              <Left>
                <Icon style={{ fontSize: 40, width: 40 }} name="md-bicycle" />
              </Left>
              <Body>
                <Text>{getCount("md-bicycle")} activities</Text>
              </Body>
              <Right>
                <Button style={{ backgroundColor: "transparent" }}>
                  <Icon name="md-arrow-forward" />
                </Button>
              </Right>
            </ListItem>
            <ListItem noBorder icon style={styles.listItem}>
              <Left>
                <Icon style={{ fontSize: 40, width: 40 }} name="md-briefcase" />
              </Left>
              <Body>
                <Text>{getCount("md-briefcase")} activities</Text>
              </Body>
              <Right>
                <Button style={{ backgroundColor: "transparent" }}>
                  <Icon name="md-arrow-forward" />
                </Button>
              </Right>
            </ListItem>
          </Card>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default ViewActivity;

var styles = {
  card: {
    backgroundColor: "#adb7e0",
  },
  listItem: {
    height: 80,
  },
};
