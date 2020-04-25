import React from "react";
import Feed from "../screens/Feed";
import AddActivity from "../screens/AddActivity";
import Statistics from "../screens/Statistics";
import Menu from "../screens/Menu";
import { Button, Icon, Footer, FooterTab } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabBar = createBottomTabNavigator(
  {
    Feed: { screen: Feed },
    AddActivity: { screen: AddActivity },
    Statistics: { screen: Statistics },
    Menu: { screen: Menu },
  },
  {
    tabBarComponent: (props) => {
      return (
        <Footer>
          <FooterTab>
            <Button
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("Feed")}
            >
              <Icon name="md-globe" />
            </Button>
            <Button
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("AddActivity")}
            >
              <Icon name="md-clipboard" />
            </Button>
            <Button
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("Statistics")}
            >
              <Icon name="md-stats" />
            </Button>
            <Button
              active={props.navigation.state.index === 3}
              onPress={() => props.navigation.navigate("Menu")}
            >
              <Icon name="md-menu" />
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
);

export default TabBar;
