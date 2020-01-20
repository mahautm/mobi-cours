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
    this.selected = true;
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => (this.selected = !!this.selected)}
          style={[
            styles.item,
            { backgroundColor: this.selected ? "#6e3b6e" : "#f9c2ff" }
          ]}
        >
          <Text style={styles.btn_text}>Connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn_text: {
    fontSize: 18,
    fontWeight: "bold"
  },
  item: {
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    margin: 10
  }
});
