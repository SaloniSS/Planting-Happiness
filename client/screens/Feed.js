import React from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Body,
  Title,
} from "native-base";

import Post from "../components/Post";

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
];

const Feed = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Feed</Title>
        </Body>
      </Header>
      <Content>
        <List>
          {sampleData.map((post) => (
            <ListItem key={post.post_id}>
              <Post user={post.user} post={post.post} />
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Feed;
