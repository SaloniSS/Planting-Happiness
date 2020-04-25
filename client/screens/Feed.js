import React from "react";
import HomePage from "./HomePage.js";
import TabBar from "../components/TabBar";
import { DrawerNavigator } from "react-navigation";
import { Text } from "native-base";

const Feed = DrawerNavigator(
  {
    Home: { screen: HomePage },
    Chat: { screen: TabBar },
  },
  {
    contentComponent: (props) => <Text>hi</Text>,
  }
);
export default Feed;
