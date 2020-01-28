import React from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import { getPoemByAuthor } from "./helpers/poetryAPI";
export default class AuthorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", poems: {}, isLoading: false };
  }
  _getPoemByAuthorWithFeedback = () => {
    this.setState({ isLoading: true });

    getRandomBrewdog(this.value).then(beer =>
      this.setState({
        poems: response,
        isLoading: false // la requête est terminée
      })
    );
  };

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
            onEndEditing={() => _getPoemByAuthorWithFeedback()}
            value={this.state.value}
          />
        </View>
        <FlatList
          //data={this._modules}
          data={this.state.poems}
          keyExtractor={item => item.idModule.toString()}
          renderItem={({ item }) => <ModuleItem module={item} />}
        />
      </View>
    );
  }
}
