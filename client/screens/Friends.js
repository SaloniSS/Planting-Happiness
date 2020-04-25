import React, { useState } from "react";
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
import { LinearGradient } from "expo-linear-gradient";

const Friends = (props) => {
  const [view, setView] = useState(0);

  const renderComponent = () => {
    if (view === 0)
      return (
        <List>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
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
                  uri:
                    "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
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
    else
      return (
        <List>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
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
                    "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
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
                    "https://style.anu.edu.au/_anu/4/images/placeholders/person.png",
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
            <Text>Followers</Text>
          </Button>
          <Button last active={view === 1} onPress={() => setView(1)}>
            <Text>Following</Text>
          </Button>
        </Segment>
        <Content padder>{renderComponent()}</Content>
      </LinearGradient>
    </Container>
  );
};

export default Friends;
