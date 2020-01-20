import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View>
      <View style={[styles.button, styles.steelblue]} />
      <View style={[styles.button, styles.yellow]} />
      <View style={[styles.button, styles.green]} />
      <Image
        source={require("C:/Users/mmahaut/dev_mobile/TP1/hello-world/assets/erika.png")}
      />

      <Text style={styles.stars}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  stars: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "purple"
  },
  button: {
    borderRadius: 10,
    height: 50,
    padding: 50,
    borderWidth: 3,
    borderColor: "white",
    margin: 10
  },
  steelblue: {
    backgroundColor: "blue"
  },
  yellow: {
    backgroundColor: "yellow"
  },
  green: {
    backgroundColor: "green"
  }
});
