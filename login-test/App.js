import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./Components/Login";
import Btn_connexion from "./Components/Btn_connexion";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("./assets/logo(2019).png")}
      />
      <Login />
      <Btn_connexion />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("./assets/angel_eyes.webp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center"
  }
});
