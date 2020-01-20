import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";
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
        <View style={styles.text}>
          <Image
            style={styles.image}
            source={require("../assets/paper_plane.png")}
          />

          <TextInput
            placeholder="Enter Username"
            onChangeText={text => {
              this.setState({ mail: text });
            }}
            // value={this.mail.text}
          />
        </View>

        <View style={styles.text}>
          <Image style={styles.image} source={require("../assets/mask.png")} />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={text => {
              this.setState({ pwd: text });
            }}
            onSubmitEditing={text => {
              this.TestPassword();
            }} //   value={this.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    borderRadius: 20,
    margin: 10,
    paddingLeft: 15,
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: "white",
    justifyContent: "flex-start"
  },
  image: {
    // flex: 1,
    width: 20,
    height: 20,
    marginRight: 10
    // alignItems: "flex-start"
  }
});
