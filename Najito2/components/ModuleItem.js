import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class ModuleItem extends React.Component {
  render() {
    const module = this.props.module;
    return (
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{module.title}</Text>
            <Text style={styles.author_text}>{module.author}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={4}>
              {module.lines[1]}
            </Text>
          </View>
          <View style={styles.respo_container}>
            <Text style={styles.respo_text}>
              {" "}
              Nombre de lignes : {module.linecount}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    margin: 10
  },
  image: {
    width: 120,
    height: 150,
    margin: 5,
    borderRadius: 30,
    backgroundColor: "lightgray"
  },
  content_container: {
    flex: 1,

    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  author_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666"
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  respo_container: {
    flex: 1
  },
  respo_text: {
    textAlign: "right",
    fontSize: 14
  }
});
export default ModuleItem;
