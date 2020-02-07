import React from "react";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import { ModuleItem } from "./ModuleItem";
import { getPoemByAuthor } from "../helpers/poetryAPI";

export default class AuthorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", poems: {}, isLoading: false };
  }

  _getPoemByAuthorWithFeedback = () => {
    this.setState({ isLoading: true });

    getPoemByAuthor(this.state.value).then(input =>
      this.setState({
        poems: input,
        isLoading: false // la requête est terminée
      })
    );
  };

  // _test = () => {
  //   let text = "";
  //   Array.prototype.forEach.call(this.state.poems, element => {
  //     text += element.title + "1\n";
  //   });
  //   return this.text;
  // };

  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 0.2,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextInput
            style={{
              flexDirection: "row",
              flex: 0.5,
              backgroundColor: "lightgrey",
              borderRadius: 8,
              paddingHorizontal: 10,
              textAlign: "center"
            }}
            onChangeText={text => {
              this.setState({ value: text });
            }}
            onSubmitEditing={() => this._getPoemByAuthorWithFeedback()}
            value={this.state.value}
          />
        </View>
        {/* <FlatList
          data={this._modules}
          data={this.state.poems}
          keyExtractor={item => item.title.toString()}
          renderItem={({ item }) => <ModuleItem module={item}></ModuleItem>}
        /> */}
        <Text>{this.state.poems}</Text>
      </View>
    );
  }
}
