import { createStackNavigator } from "react-navigation-stack";

import AddActivity from "./AddActivity";
import ViewActivity from "./ViewActivity";

export default createStackNavigator(
  {
    AddActivity,
    ViewActivity,
  },
  { headerMode: "none", initialRouteName: "ViewActivity" }
);
