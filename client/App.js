import React from 'react';

// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBar from "./components/TabBar";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

//React Navigation Setup
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Feed: { screen: TabBar },
});

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return ( 
        <AppContainer/>
    );
  }
}

export default App;
