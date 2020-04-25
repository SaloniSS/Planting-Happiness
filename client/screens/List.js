import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

const List = () => {
  return (
    <Container>
      <Header />
      <Content>
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
              <Button transparent>
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
              <Button transparent>
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
              <Button transparent>
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
              <Button transparent>
                <Text>100,000</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default List;
