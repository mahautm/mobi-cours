import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const DATA = [
  {
    id: 1,
    mail: "mmahaut@ensc.fr",
    pwd: "Bubbles"
  },
  {
    id: 2,
    mail: "bda@ensc.fr",
    pwd: "PulpaColada"
  },
  {
    id: 3,
    mail: "journal@ensc.fr",
    pwd: "MarsForever"
  }
];
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "Init", pwd: "Init" };
  }

  TestPassword() {
    alert(DATA.map(x => x.mail));
    if (DATA.map(x => x.mail).includes(this.state.mail)) {
      if (DATA.map(x => x.pwd).includes(this.state.pwd)) {
        alert("Well done, you are logged in !");
      } else {
        alert("Password is invalid !");
      }
    } else {
      alert("Uknown username : " + this.state.mail);
    }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={styles.text}
          placeholder="Enter Username"
          onChangeText={text => {
            this.setState({ mail: text });
          }}
          // value={this.mail.text}
        />

        <TextInput
          style={styles.text}
          placeholder="Enter Password"
          onChangeText={text => {
            this.setState({ pwd: text });
          }}
          onSubmitEditing={text => {
            this.TestPassword();
          }} //   value={this.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 0.1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
