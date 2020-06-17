import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Spinner,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
const axios = require("axios").default;

import Post from "../components/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hdt-node-servers.herokuapp.com/PlantingHappiness/posts`
      );
      setPosts(result.data.data);
    };
    trackPromise(fetchData());
  }, []);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Feed</Title>
        </Body>
      </Header>
      <LinearGradient
        colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          {promiseInProgress === true ? (
            <Spinner style={{ height: 200 }} />
          ) : posts.length == 0 ? (
            <Text>You don't follow anyone, get looking!</Text>
          ) : (
            posts.reverse().map((post) => <Post post={post} key={post._id} />)
          )}
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Feed;
