import { createStackNavigator } from "react-navigation-stack";

import Friends from "./Friends";
import MenuList from "./MenuList";
import Statistics from "./Statistics";
import Profile from "./ProfileScreen";
import Login from "./LoginScreen";
import Redeem from "./Redeem";

export default createStackNavigator(
  {
    MenuList,
    Friends,
    Statistics,
    Profile,
    Login,
    Redeem,
  },
  { headerMode: "none", initialRouteName: "MenuList" }
);
