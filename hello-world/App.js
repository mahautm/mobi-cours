import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  SelectionList,
  TextInput
} from "react-native";
import Constants from "expo-constants";
import PizzaTranslator from "./PizzaTranslator";

const DATA = [
  {
    id: "1",
    title: "First Item",
    name: "Guillaume"
  },
  {
    id: "2",
    title: "Second Item",
    name: "Maudeline"
  },
  {
    id: "3",
    title: "Third Item",
    name: "Constance"
  },
  {
    id: "4",
    title: "Third Item",
    name: "Benjamin"
  },
  {
    id: "5",
    title: "Third Item",
    name: "Caroline"
  },
  {
    id: "6",
    title: "Third Item",
    name: "Céline"
  },
  {
    id: "7",
    title: "Third Item",
    name: "Justin"
  }
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" }
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.stars}>
          The Angel{"\n"}
          William Blake - 1757-1827{"\n"}
          {"\n"}I dreamt a dream! What can it mean?{"\n"}
          And that I was a maiden Queen{"\n"}
          Guarded by an Angel mild:{"\n"}
          Witless woe was ne’er beguiled!{"\n"}
          {"\n"}
          And I wept both night and day,{"\n"}
          And he wiped my tears away;{"\n"}
          And I wept both day and night,{"\n"}
          And hid from him my heart’s delight.{"\n"}
          {"\n"}
          So he took his wings, and fled;{"\n"}
          Then the morn blushed rosy red.{"\n"}I dried my tears, and armed my
          fears{"\n"}
          With ten thousand shields and spears.{"\n"}
          {"\n"}
          Soon my Angel came again;{"\n"}I was armed, he came in vain;{"\n"}
          For the time of youth was fled,{"\n"}
          And grey hairs were on my head.{"\n"}
        </Text>
        <ScrollView horizontal style={{ height: 500 }}>
          <Image
            source={{
              uri:
                "https://66.media.tumblr.com/568dfa885314861e15dba1cb785ee807/tumblr_n2loeucBtA1rflbfyo1_1280.jpg"
            }}
            style={{ width: 278, height: 500 }}
          />
          <Image
            source={{
              uri:
                "https://66.media.tumblr.com/70a062c9c82732bb7f04d29dda9aee59/tumblr_inline_n55scnXTJw1qcbg4h.jpg"
            }}
            style={{ width: 278, height: 500 }}
          />
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.name}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
            />
          </SafeAreaView>
          <PizzaTranslator />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight
  },
  stars: {
    fontSize: 16,
    textAlign: "center"
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
  },
  item: {
    backgroundColor: "#f9c2ff",
    paddingVertical: 20,
    paddingHorizontal: 70,
    marginVertical: 8,
    marginHorizontal: 3
  },
  title: {
    fontSize: 32
  }
});
