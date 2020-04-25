import React from "react";
import Feed from "../screens/Feed";
import AddActivity from "../screens/AddActivity";
import Statistics from "../screens/Statistics";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { TabNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const MainNavigator = createBottomTabNavigator({
  Feed: { screen: Feed },
  AddActivity: { screen: AddActivity },
  Statistics: { screen: Statistics },
});

/*const TabBar = TabNavigator(
  {
    Feed: { screen: Feed },
    AddActivity: { screen: AddActivity },
    Statistics: { screen: Statistics },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: (props) => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Feed")}
            >
              <Icon name="bowtie" />
              <Text>hp</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("AddActivity")}
            >
              <Icon name="briefcase" />
              <Text>a</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Statistics")}
            >
              <Icon name="headset" />
              <Text>s</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
);*/

export default MainNavigator;