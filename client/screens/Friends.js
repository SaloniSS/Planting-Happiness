import React, { useState, useEffect } from "react";
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
  Spinner,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
const axios = require("axios").default;
import User from "../components/User";
import Friend from "../components/Friend";

const Friends = (props) => {
  const [view, setView] = useState(0);
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://earthxhacks2020.wl.r.appspot.com/users`
      );
      setUsers(result.data.data);
      const friends_result = await axios(
        `https://earthxhacks2020.wl.r.appspot.com/users/${GLOBAL.id}`
      );
      console.log("Your Friends: ");
      console.log(friends_result.data.data[0].friends);
      setFriends(friends_result.data.data[0].friends);
    };
    trackPromise(fetchData());
  }, []);

  const renderComponent = () => {
    if (view === 2)
      return (
        <List>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://vignette.wikia.nocookie.net/tangled/images/e/e2/Eugene_Fitzherbert.png/revision/latest/scale-to-width-down/340?cb=20150727015045",
                }}
              />
            </Left>
            <Body>
              <Text>Eugene Fitzgerald</Text>
            </Body>
            <Right>
              <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri: "https://pbs.twimg.com/media/EDKsyxIW4BAxteD.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Claire Saffitz</Text>
            </Body>
            <Right>
              <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
        </List>
      );
    if (view === 3)
      return (
        <List>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://vignette.wikia.nocookie.net/disney/images/e/ef/Profile_-_Jane_Porter.png/revision/latest?cb=20190312070932",
                }}
              />
            </Left>
            <Body>
              <Text>Jane Porter</Text>
            </Body>
            <Right>
              <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://vignette.wikia.nocookie.net/disneyheroines/images/d/de/Mulan.jpg/revision/latest/scale-to-width-down/340?cb=20111027205824",
                }}
              />
            </Left>
            <Body>
              <Text>Mulan Fa</Text>
            </Body>
            <Right>
              <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "data:image/jpeg;base64,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",
                }}
              />
            </Left>
            <Body>
              <Text>Prince Charming</Text>
            </Body>
            <Right>
              <Icon name="md-arrow-forward" />
            </Right>
          </ListItem>
        </List>
      );
    if (view === 0) {
      return (
        <List>
          {promiseInProgress === true ? (
            <Spinner style={{ height: 200 }} />
          ) : friends.length == 0 ? (
            <Text>You don't have any friends</Text>
          ) : (
            friends.map((friend) => <Friend friend={friend} key={friend} />)
          )}
        </List>
      );
    }
    if (view === 1) {
      return (
        <List>
          {promiseInProgress === true ? (
            <Spinner style={{ height: 200 }} />
          ) : users.length == 0 ? (
            <Text>No one uses this app</Text>
          ) : (
            users.map((user) => <User user={user} key={user._id} />)
          )}
        </List>
      );
    }
  };

  return (
    <Container>
      <Header hasSegment>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-round-back" />
          </Button>
        </Left>
        <Body>
          <Title>Friends</Title>
        </Body>
        <Right>
          <Icon name="people" />
        </Right>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Segment style={{ backgroundColor: "transparent" }}>
          <Button first active={view === 0} onPress={() => setView(0)}>
            <Text>Following</Text>
          </Button>
          <Button last active={view === 1} onPress={() => setView(1)}>
            <Text>Follow Users</Text>
          </Button>
        </Segment>
        <Content padder>{renderComponent()}</Content>
      </LinearGradient>
    </Container>
  );
};

export default Friends;
