import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.stars}>
        We're all in the gutter, but some of us are looking at the stars
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center"
  },
  stars: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  button: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  }
});
