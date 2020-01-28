import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import TitleSearch from "./components/TitleSearch";
import AuthorSearch from "./components/AuthorSearch";
import Cocktail from "./components/Poem";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Author: AuthorSearch,
    Title: TitleSearch
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Author") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Title") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(BottomTabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
