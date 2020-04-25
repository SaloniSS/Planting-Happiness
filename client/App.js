// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBar from "./components/TabBar";
import { useFonts } from '@use-expo/font';

//React Navigation Setup
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Feed: { screen: TabBar },
});

const App = createAppContainer(MainNavigator);

export default App;
