import React from "react";

// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBar from "./components/TabBar";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import commonColor from "./native-base-theme/variables/commonColor";

//YellowBox.ignoreWarnings();
console.disableYellowBox = true;

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Feed: { screen: TabBar },
});

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <AppContainer />
      </StyleProvider>
    );
  }
}

export default App;
