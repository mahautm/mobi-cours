import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class Btn_connexion extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "Init", pwd: "Init" };
  }
  render() {
    return (
      <View style={{ height: 10, width: 10, backgroundColor: "white" }}>
        <TouchableOpacity
          onPress={() => (selected = !!selected)}
          style={[
            styles.item,
            { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" }
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
