import React from "react";
import { View, Text, Button, Image } from "react-native";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/logo(2019).png")}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class TitleSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Info"
          color="#fff"
        />
      ),
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          //   onPress={navigation.getParam("increaseCount")}
          title="Dope"
          color="#fff"
        />
      )
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>CocktailScreen</Text>
        <Text>Work In Progress</Text>
        <Button
          title="Go to AuthorSearch"
          onPress={() => {
            this.props.navigation.navigate("Search_A", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        />
      </View>
    );
  }
}
