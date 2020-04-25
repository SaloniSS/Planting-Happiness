import React from "react";
import Feed from "../screens/Feed";
import Activity from "../screens/Activity";
import AddActivity from "../screens/AddActivity";
import Statistics from "../screens/Statistics";
import Menu from "../screens/Menu";
import { Button, Icon, Footer, FooterTab } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabBar = createBottomTabNavigator(
  {
    Feed: { screen: Feed },
    Activity: { screen: Activity },
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
              onPress={() => props.navigation.navigate("Activity")}
            >
              <Icon name="md-clipboard" />
            </Button>
            <Button
              active={props.navigation.state.index === 2}
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
